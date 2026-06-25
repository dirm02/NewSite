import { getPocketBaseUrl } from "./env";

const API = getPocketBaseUrl();

export interface PbList<T> {
  items: T[];
  totalItems: number;
}

/** PocketBase user auth tokens must be sent as `Bearer <token>`. */
export function pbBearerAuth(token: string): Record<string, string> {
  const value = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
  return { Authorization: value };
}

async function pbFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<{ status: number; body: T }> {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  let body: T;
  try {
    body = (await response.json()) as T;
  } catch {
    body = {} as T;
  }
  return { status: response.status, body };
}

export async function loginPb(email: string, password: string) {
  const { status, body } = await pbFetch<{
    token: string;
    record: { id: string; role: string; email: string };
  }>("/collections/users/auth-with-password", {
    method: "POST",
    body: JSON.stringify({ identity: email, password }),
  });
  if (status !== 200) {
    throw new Error(`PocketBase login failed (${status})`);
  }
  return body;
}

export async function listRecords<T>(
  collection: string,
  token: string,
  params: Record<string, string> = {},
) {
  const query = new URLSearchParams(params);
  const { status, body } = await pbFetch<PbList<T>>(
    `/collections/${collection}/records?${query}`,
    { headers: pbBearerAuth(token) },
  );
  if (status !== 200) throw new Error(`list ${collection} failed (${status})`);
  return body;
}

export async function getRecord<T>(
  collection: string,
  id: string,
  token: string,
  expand?: string,
) {
  const q = expand ? `?expand=${encodeURIComponent(expand)}` : "";
  const { status, body } = await pbFetch<T>(
    `/collections/${collection}/records/${id}${q}`,
    { headers: pbBearerAuth(token) },
  );
  if (status !== 200) throw new Error(`get ${collection}/${id} failed (${status})`);
  return body;
}

export async function patchRecordStatus(
  collection: string,
  id: string,
  token: string,
  status: string,
) {
  return pbFetch(`/collections/${collection}/records/${id}`, {
    method: "PATCH",
    headers: pbBearerAuth(token),
    body: JSON.stringify({ status }),
  });
}

export async function createRecord<T>(
  collection: string,
  token: string,
  data: Record<string, unknown>,
) {
  return pbFetch<T>(`/collections/${collection}/records`, {
    method: "POST",
    headers: pbBearerAuth(token),
    body: JSON.stringify(data),
  });
}

export async function acceptQuoteApi(token: string, quoteId: string) {
  const base = API.replace(/\/api\/?$/, "");
  const response = await fetch(`${base}/lif3line/accept-quote`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...pbBearerAuth(token),
    },
    body: JSON.stringify({ quoteId }),
  });
  return { status: response.status, body: await response.json().catch(() => ({})) };
}

export async function fetchFirstCityId(token?: string) {
  const headers = token ? pbBearerAuth(token) : {};
  const { status, body } = await pbFetch<PbList<{ id: string; name: string; country: string }>>(
    "/collections/cities/records?perPage=1&filter=(country='Canada')",
    { headers },
  );
  if (status !== 200 || !body.items[0]) {
    throw new Error("No Canadian city found in PocketBase");
  }
  return body.items[0];
}

export async function fetchFirstCategoryId() {
  const { status, body } = await pbFetch<PbList<{ id: string; name: string }>>(
    "/collections/service_categories/records?perPage=1",
  );
  if (status !== 200 || !body.items[0]) {
    throw new Error("No service category found");
  }
  return body.items[0];
}

export async function fetchFirstActiveService() {
  const { status, body } = await pbFetch<PbList<{ id: string; title: string }>>(
    "/collections/services/records?perPage=1&filter=(status='active')",
  );
  if (status !== 200 || !body.items[0]) {
    throw new Error("No active service found");
  }
  return body.items[0];
}

export async function fetchFirstActiveProvider() {
  const { status, body } = await pbFetch<PbList<{ id: string; business_name: string }>>(
    "/collections/provider_profiles/records?perPage=1&filter=(status='active')",
  );
  if (status !== 200 || !body.items[0]) {
    throw new Error("No active provider found");
  }
  return body.items[0];
}

/**
 * Probes whether the GHST-48 `blog_posts` collection is deployed on the target
 * PocketBase. Returns false when the collection is missing (404) so blog E2E
 * tests can skip cleanly before the schema migration is applied.
 */
export async function blogCollectionExists(): Promise<boolean> {
  const { status } = await pbFetch(
    "/collections/blog_posts/records?perPage=1&filter=(status='published')",
  );
  return status !== 404;
}

export async function fetchProviderProfileForUser(token: string, userId: string) {
  const result = await listRecords<{ id: string }>(
    "provider_profiles",
    token,
    { filter: `(user='${userId}')`, perPage: "1" },
  );
  return result.items[0] ?? null;
}
