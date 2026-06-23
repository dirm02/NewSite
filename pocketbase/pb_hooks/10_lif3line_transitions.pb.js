/// <reference path="../pb_data/types.d.ts" />

/**
 * GHST-12 — Block direct status manipulation on quotes and service_requests.
 * Sensitive transitions must use /lif3line/* custom routes (not under /api).
 */

onRecordUpdateRequest((e) => {
  try {
    const path = e.request.url.path || "";
    if (path.indexOf("/lif3line/") !== -1) {
      return e.next();
    }
  } catch (err) {
    // ignore
  }

  if (e.auth && e.auth.get("role") === "admin") {
    return e.next();
  }

  const existing = $app.findRecordById("quotes", e.record.id);
  const prevStatus = existing.get("status");
  const nextStatus = e.record.get("status");

  if (prevStatus === nextStatus) {
    return e.next();
  }

  if (
    nextStatus === "withdrawn" &&
    prevStatus === "pending" &&
    e.auth &&
    e.auth.get("role") === "provider"
  ) {
    const providerId = e.record.get("provider");
    if (providerId) {
      const provider = $app.findRecordById("provider_profiles", providerId);
      if (provider && provider.get("user") === e.auth.id) {
        return e.next();
      }
    }
  }

  throw new ForbiddenError(
    "Quote status changes must use Lif3line transition endpoints (accept-quote / cancel-request).",
  );
}, "quotes");

onRecordUpdateRequest((e) => {
  try {
    const path = e.request.url.path || "";
    if (path.indexOf("/lif3line/") !== -1) {
      return e.next();
    }
  } catch (err) {
    // ignore
  }

  if (e.auth && e.auth.get("role") === "admin") {
    return e.next();
  }

  const existing = $app.findRecordById("service_requests", e.record.id);
  const prevStatus = existing.get("status");
  const nextStatus = e.record.get("status");

  if (prevStatus !== nextStatus) {
    throw new ForbiddenError(
      "Job status changes must use Lif3line transition endpoints (accept-quote / complete-request / cancel-request).",
    );
  }

  e.next();
}, "service_requests");

onRecordCreateRequest((e) => {
  const requestId = e.record.get("request");
  if (!requestId) {
    throw new BadRequestError("Reviews must reference a completed service request.");
  }

  const request = $app.findRecordById("service_requests", requestId);

  if (request.get("customer") !== e.auth.id) {
    throw new ForbiddenError("You can only review your own completed jobs.");
  }

  if (request.get("status") !== "completed") {
    throw new BadRequestError("Reviews are allowed only after the job is completed.");
  }

  if (!e.record.get("status")) {
    e.record.set("status", "published");
  }

  e.next();
}, "reviews");

/**
 * POST /api/lif3line/accept-quote
 * Body: { "quoteId": "..." }
 */
routerAdd(
  "POST",
  "/lif3line/accept-quote",
  (e) => {
    const auth = e.auth;
    if (!auth || auth.get("role") !== "customer") {
      throw new ForbiddenError("Customer authentication required.");
    }

    const info = e.requestInfo();
    const body = info.body || {};
    const quoteId = body.quoteId || body.quote_id || "";
    if (!quoteId) {
      throw new BadRequestError("quoteId is required.");
    }

    const quote = $app.findRecordById("quotes", quoteId);
    const requestId = quote.get("request");
    const request = $app.findRecordById("service_requests", requestId);

    if (request.get("customer") !== auth.id) {
      throw new ForbiddenError("You do not own this service request.");
    }

    if (request.get("status") !== "open") {
      throw new BadRequestError("Only open requests can accept quotes.");
    }

    if (quote.get("status") !== "pending") {
      throw new BadRequestError("Only pending quotes can be accepted.");
    }

    try {
    const quoteRec = $app.findRecordById("quotes", quoteId);
    const requestRec = $app.findRecordById("service_requests", requestId);

    quoteRec.set("status", "accepted");
    $app.save(quoteRec);

    const filter =
      'request = "' +
      requestId +
      '" && id != "' +
      quoteId +
      '" && status = "pending"';
    const siblings = $app.findRecordsByFilter("quotes", filter, "", 100, 0);

    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];
      sibling.set("status", "rejected");
      $app.save(sibling);
    }

    requestRec.set("status", "in_progress");
    $app.save(requestRec);
    } catch (err) {
      throw new BadRequestError(err.message || String(err));
    }

    return e.json(200, {
      ok: true,
      requestId: requestId,
      quoteId: quoteId,
      requestStatus: "in_progress",
    });
  },
  $apis.requireAuth(),
);

/**
 * POST /api/lif3line/complete-request
 * Body: { "requestId": "..." }
 */
routerAdd(
  "POST",
  "/lif3line/complete-request",
  (e) => {
    const auth = e.auth;
    if (!auth) {
      throw new ForbiddenError("Authentication required.");
    }

    const body = e.requestInfo().body || {};
    const requestId = body.requestId || body.request_id;
    if (!requestId) {
      throw new BadRequestError("requestId is required.");
    }

    const request = $app.findRecordById("service_requests", requestId);
    const isCustomer =
      auth.get("role") === "customer" && request.get("customer") === auth.id;
    const isAdmin = auth.get("role") === "admin";

    if (!isCustomer && !isAdmin) {
      throw new ForbiddenError("Only the job owner or admin can complete this request.");
    }

    if (request.get("status") !== "in_progress") {
      throw new BadRequestError("Only in-progress requests can be completed.");
    }

    request.set("status", "completed");
    $app.save(request);

    return e.json(200, {
      ok: true,
      requestId: requestId,
      requestStatus: "completed",
    });
  },
  $apis.requireAuth(),
);

/**
 * POST /api/lif3line/cancel-request
 * Body: { "requestId": "..." }
 */
routerAdd(
  "POST",
  "/lif3line/cancel-request",
  (e) => {
    const auth = e.auth;
    if (!auth) {
      throw new ForbiddenError("Authentication required.");
    }

    const body = e.requestInfo().body || {};
    const requestId = body.requestId || body.request_id;
    if (!requestId) {
      throw new BadRequestError("requestId is required.");
    }

    const request = $app.findRecordById("service_requests", requestId);
    const isCustomer =
      auth.get("role") === "customer" && request.get("customer") === auth.id;
    const isAdmin = auth.get("role") === "admin";

    if (!isCustomer && !isAdmin) {
      throw new ForbiddenError("Only the job owner or admin can cancel this request.");
    }

    const status = request.get("status");
    if (status !== "open" && status !== "in_progress") {
      throw new BadRequestError("Only open or in-progress requests can be cancelled.");
    }

    $app.runInTransaction(function (txApp) {
      const requestRec = txApp.findRecordById("service_requests", requestId);
      requestRec.set("status", "cancelled");
      txApp.save(requestRec);

      const filter = 'request = "' + requestId + '" && status = "pending"';
      const pendingQuotes = txApp.findRecordsByFilter(
        "quotes",
        filter,
        "",
        100,
        0,
      );

      for (let i = 0; i < pendingQuotes.length; i++) {
        const q = pendingQuotes[i];
        q.set("status", "withdrawn");
        txApp.save(q);
      }
    });

    return e.json(200, {
      ok: true,
      requestId: requestId,
      requestStatus: "cancelled",
    });
  },
  $apis.requireAuth(),
);
