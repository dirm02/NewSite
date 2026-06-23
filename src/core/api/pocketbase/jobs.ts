import { pbCreate, pbGetOneAuth, pbListAuth } from "./client";
import type {
  PbProviderProfile,
  PbQuote,
  PbServiceRequest,
  ServiceRequestStatus,
} from "./types";

const REQUEST_EXPAND = "customer,category,city";
const QUOTE_EXPAND = "provider,provider.user,request,request.city,request.category";

export interface CreateServiceRequestInput {
  title: string;
  description?: string;
  category?: string;
  city?: string;
  budget_min?: number;
  budget_max?: number;
  budget_type?: string;
  experience_level?: string;
  location?: string;
  tags?: string[];
  preferred_date?: string;
}

export interface CreateQuoteInput {
  requestId: string;
  providerId: string;
  amount: number;
  message?: string;
  estimated_days?: number;
}

export async function fetchProviderProfileForUser(
  token: string,
  userId: string,
): Promise<PbProviderProfile | null> {
  const result = await pbListAuth<PbProviderProfile>(
    "provider_profiles",
    token,
    {
      filter: `(user='${userId}')`,
      perPage: "1",
    },
  );
  return result.items[0] ?? null;
}

export async function createServiceRequest(
  token: string,
  customerId: string,
  input: CreateServiceRequestInput,
): Promise<PbServiceRequest> {
  return pbCreate<PbServiceRequest>("service_requests", token, {
    customer: customerId,
    title: input.title,
    description: input.description ?? "",
    category: input.category || undefined,
    city: input.city || undefined,
    budget_min: input.budget_min,
    budget_max: input.budget_max,
    budget_type: input.budget_type,
    experience_level: input.experience_level,
    location: input.location,
    tags: input.tags,
    preferred_date: input.preferred_date,
    status: "open",
  });
}

export async function fetchCustomerRequests(
  token: string,
  customerId: string,
  options?: { status?: ServiceRequestStatus; perPage?: number },
) {
  const parts = [`(customer='${customerId}')`];
  if (options?.status) parts.push(`(status='${options.status}')`);
  return pbListAuth<PbServiceRequest>("service_requests", token, {
    filter: parts.join("&&"),
    sort: "-@rowid",
    expand: REQUEST_EXPAND,
    perPage: String(options?.perPage ?? 50),
  });
}

export async function fetchOpenJobFeed(
  token: string,
  options?: { perPage?: number; search?: string },
) {
  const parts = ['(status="open")'];
  if (options?.search?.trim()) {
    const q = options.search.trim().replace(/'/g, "\\'");
    parts.push(`(title ~ '${q}' || description ~ '${q}')`);
  }
  return pbListAuth<PbServiceRequest>("service_requests", token, {
    filter: parts.join("&&"),
    sort: "-@rowid",
    expand: REQUEST_EXPAND,
    perPage: String(options?.perPage ?? 50),
  });
}

export async function fetchServiceRequest(
  token: string,
  id: string,
): Promise<PbServiceRequest> {
  return pbGetOneAuth<PbServiceRequest>(
    "service_requests",
    id,
    token,
    REQUEST_EXPAND,
  );
}

export async function fetchQuotesForRequest(
  token: string,
  requestId: string,
) {
  return pbListAuth<PbQuote>("quotes", token, {
    filter: `(request='${requestId}')`,
    sort: "-@rowid",
    expand: QUOTE_EXPAND,
    perPage: "50",
  });
}

export async function createQuote(
  token: string,
  input: CreateQuoteInput,
): Promise<PbQuote> {
  return pbCreate<PbQuote>("quotes", token, {
    request: input.requestId,
    provider: input.providerId,
    amount: input.amount,
    message: input.message ?? "",
    estimated_days: input.estimated_days,
    status: "pending",
  });
}

/** Provider active/completed jobs via accepted quotes (providers cannot list in_progress requests directly). */
export async function fetchProviderAcceptedQuotes(
  token: string,
  providerId: string,
  options?: { status?: "accepted"; perPage?: number },
) {
  const parts = [`(provider='${providerId}')`, `(status='accepted')`];
  return pbListAuth<PbQuote>("quotes", token, {
    filter: parts.join("&&"),
    sort: "-@rowid",
    expand: QUOTE_EXPAND,
    perPage: String(options?.perPage ?? 50),
  });
}

export async function fetchProviderPendingQuotes(
  token: string,
  providerId: string,
) {
  return pbListAuth<PbQuote>("quotes", token, {
    filter: `(provider='${providerId}') && (status='pending')`,
    sort: "-@rowid",
    expand: QUOTE_EXPAND,
    perPage: "50",
  });
}
