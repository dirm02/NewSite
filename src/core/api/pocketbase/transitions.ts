import { POCKETBASE_BASE_URL } from "./config";
import { PocketBaseError } from "./client";
import { pbAuthHeaders } from "./auth-headers";

async function transitionPost<T>(
  path: string,
  token: string,
  body: Record<string, string>,
): Promise<T> {
  const response = await fetch(`${POCKETBASE_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...pbAuthHeaders(token),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let message = `Transition failed (${response.status})`;
    try {
      const err = await response.json();
      message = err.message ?? message;
    } catch {
      // ignore
    }
    throw new PocketBaseError(message, response.status);
  }

  return response.json();
}

/** Accept a provider quote — GHST-12 custom route */
export function acceptQuote(token: string, quoteId: string) {
  return transitionPost<{ ok: boolean; requestId: string; quoteId: string }>(
    "/lif3line/accept-quote",
    token,
    { quoteId },
  );
}

/** Mark job completed — GHST-12 custom route */
export function completeRequest(token: string, requestId: string) {
  return transitionPost<{ ok: boolean; requestId: string }>(
    "/lif3line/complete-request",
    token,
    { requestId },
  );
}

/** Cancel open/in-progress job — GHST-12 custom route */
export function cancelRequest(token: string, requestId: string) {
  return transitionPost<{ ok: boolean; requestId: string }>(
    "/lif3line/cancel-request",
    token,
    { requestId },
  );
}
