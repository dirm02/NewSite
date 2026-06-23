import { POCKETBASE_API_URL } from "./config";
import { PocketBaseError } from "./client";
import { pbAuthHeaders } from "./auth-headers";
import type { PbAuthResponse, PbProviderProfile, PbUser } from "./types";

interface PbErrorBody {
  message?: string;
  data?: Record<string, { message?: string }>;
}

async function parsePbError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as PbErrorBody;
    if (body.data) {
      const fieldMsg = Object.values(body.data)
        .map((v) => v?.message)
        .filter(Boolean)
        .join("; ");
      if (fieldMsg) return fieldMsg;
    }
    return body.message ?? `Request failed (${response.status})`;
  } catch {
    return `Request failed (${response.status})`;
  }
}

async function pbJson<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${POCKETBASE_API_URL}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new PocketBaseError(await parsePbError(response), response.status);
  }

  if (response.status === 204) {
    return {} as T;
  }

  const text = await response.text();
  if (!text) {
    return {} as T;
  }

  return JSON.parse(text) as T;
}

export async function loginWithPassword(
  email: string,
  password: string,
): Promise<PbAuthResponse> {
  return pbJson<PbAuthResponse>("/collections/users/auth-with-password", {
    method: "POST",
    body: JSON.stringify({ identity: email, password }),
  });
}

export interface SignupInput {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  role: "customer" | "provider";
}

export async function signupUser(input: SignupInput): Promise<PbUser> {
  return pbJson<PbUser>("/collections/users/records", {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
      password: input.password,
      passwordConfirm: input.password,
      name: input.name ?? "",
      phone: input.phone ?? "",
      role: input.role,
    }),
  });
}

export async function refreshAuth(token: string): Promise<PbAuthResponse> {
  return pbJson<PbAuthResponse>("/collections/users/auth-refresh", {
    method: "POST",
    headers: pbAuthHeaders(token),
  });
}

export async function requestPasswordReset(email: string): Promise<void> {
  await pbJson<unknown>("/collections/users/request-password-reset", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function requestEmailVerification(email: string): Promise<void> {
  await pbJson<unknown>("/collections/users/request-verification", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function confirmEmailVerification(token: string): Promise<void> {
  await pbJson<unknown>("/collections/users/confirm-verification", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
}

export async function confirmPasswordReset(
  token: string,
  password: string,
): Promise<void> {
  await pbJson<unknown>("/collections/users/confirm-password-reset", {
    method: "POST",
    body: JSON.stringify({
      token,
      password,
      passwordConfirm: password,
    }),
  });
}

export async function createProviderProfile(
  token: string,
  userId: string,
  businessName: string,
): Promise<PbProviderProfile> {
  return pbJson<PbProviderProfile>("/collections/provider_profiles/records", {
    method: "POST",
    headers: pbAuthHeaders(token),
    body: JSON.stringify({
      user: userId,
      business_name: businessName,
      status: "pending",
    }),
  });
}

export async function fetchCurrentUser(
  token: string,
  userId: string,
): Promise<PbUser> {
  return pbJson<PbUser>(`/collections/users/records/${userId}`, {
    headers: pbAuthHeaders(token),
  });
}
