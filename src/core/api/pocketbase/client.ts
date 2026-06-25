import { POCKETBASE_API_URL } from "./config";
import { pbAuthHeaders } from "./auth-headers";
import type { PbListResult } from "./types";

export class PocketBaseError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "PocketBaseError";
    this.status = status;
  }
}

/** Low-level PocketBase REST list helper. */
export async function pbList<T>(
  collection: string,
  params: Record<string, string> = {},
): Promise<PbListResult<T>> {
  const query = new URLSearchParams(params);
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records?${query.toString()}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new PocketBaseError(
      `PocketBase list ${collection} failed (${response.status})`,
      response.status,
    );
  }

  const body = await response.json();
  return {
    items: body.items ?? [],
    totalItems: body.totalItems ?? 0,
  };
}

/** Fetch a single record by id with optional expand. */
export async function pbGetOne<T>(
  collection: string,
  id: string,
  expand?: string,
): Promise<T> {
  const query = expand ? `?expand=${encodeURIComponent(expand)}` : "";
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records/${id}${query}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new PocketBaseError(
      `PocketBase get ${collection}/${id} failed (${response.status})`,
      response.status,
    );
  }

  return response.json();
}

/** Authenticated list helper — GHST-6 */
export async function pbListAuth<T>(
  collection: string,
  token: string,
  params: Record<string, string> = {},
): Promise<PbListResult<T>> {
  const query = new URLSearchParams(params);
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records?${query.toString()}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      ...pbAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new PocketBaseError(
      `PocketBase list ${collection} failed (${response.status})`,
      response.status,
    );
  }

  const body = await response.json();
  return {
    items: body.items ?? [],
    totalItems: body.totalItems ?? 0,
  };
}

/** Authenticated single-record fetch — GHST-6 */
export async function pbGetOneAuth<T>(
  collection: string,
  id: string,
  token: string,
  expand?: string,
): Promise<T> {
  const query = expand ? `?expand=${encodeURIComponent(expand)}` : "";
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records/${id}${query}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      ...pbAuthHeaders(token),
    },
  });

  if (!response.ok) {
    throw new PocketBaseError(
      `PocketBase get ${collection}/${id} failed (${response.status})`,
      response.status,
    );
  }

  return response.json();
}

/** Authenticated record create — GHST-6 */
export async function pbCreate<T>(
  collection: string,
  token: string,
  body: Record<string, unknown>,
): Promise<T> {
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...pbAuthHeaders(token),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let message = `PocketBase create ${collection} failed (${response.status})`;
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

/**
 * Authenticated record update (PATCH). Used for owner-editable collections such
 * as `services`; ownership is enforced by PocketBase update rules. Not used for
 * `service_requests`/`quotes` status, which go through the GHST-12 hook routes.
 */
export async function pbUpdate<T>(
  collection: string,
  id: string,
  token: string,
  body: Record<string, unknown>,
): Promise<T> {
  const url = `${POCKETBASE_API_URL}/collections/${collection}/records/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...pbAuthHeaders(token),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    let message = `PocketBase update ${collection}/${id} failed (${response.status})`;
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
