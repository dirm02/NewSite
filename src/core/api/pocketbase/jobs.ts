import { pbCreate, pbGetOneAuth, pbListAuth, pbUpdate } from "./client";
import type {
  PbProviderProfile,
  PbQuote,
  PbReview,
  PbService,
  PbServiceRequest,
  ServiceRequestStatus,
} from "./types";

const REQUEST_EXPAND = "customer,category,city";
const QUOTE_EXPAND = "provider,provider.user,request,request.city,request.category";
const REVIEW_EXPAND = "provider,provider.user,service,request";

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

/** Existing quote by this provider for a given request (duplicate guard). */
export async function fetchProviderQuoteForRequest(
  token: string,
  providerId: string,
  requestId: string,
): Promise<PbQuote | null> {
  const result = await pbListAuth<PbQuote>("quotes", token, {
    filter: `(provider='${providerId}') && (request='${requestId}')`,
    expand: QUOTE_EXPAND,
    perPage: "1",
  });
  return result.items[0] ?? null;
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

export interface CreateReviewInput {
  requestId: string;
  providerId?: string;
  serviceId?: string;
  rating: number;
  message?: string;
}

/**
 * Create a published review. The PocketBase create rule restricts authorship to
 * the signed-in customer; the GHST-12 review hook validates the linked request
 * is completed before allowing the review.
 */
export async function createReview(
  token: string,
  authorId: string,
  input: CreateReviewInput,
): Promise<PbReview> {
  return pbCreate<PbReview>("reviews", token, {
    author: authorId,
    request: input.requestId,
    provider: input.providerId || undefined,
    service: input.serviceId || undefined,
    rating: input.rating,
    comment: input.message ?? "",
    status: "published",
  });
}

/** Services owned by a provider profile (all statuses). */
export async function fetchProviderServices(
  token: string,
  providerId: string,
  options?: { perPage?: number },
) {
  return pbListAuth<PbService>("services", token, {
    filter: `(provider='${providerId}')`,
    sort: "-@rowid",
    expand: "category,city",
    perPage: String(options?.perPage ?? 100),
  });
}

export interface ServiceFormInput {
  title: string;
  description?: string;
  category?: string;
  city?: string;
  price_from?: number;
  price_to?: number;
  duration_minutes?: number;
  status?: string;
}

/**
 * Create a provider service. MVP decision: provider services are created
 * `active` (no admin approval flow yet) so they appear in public discovery
 * immediately; public discovery still filters to `status='active'`.
 */
export async function createService(
  token: string,
  providerId: string,
  input: ServiceFormInput,
): Promise<PbService> {
  return pbCreate<PbService>("services", token, {
    provider: providerId,
    title: input.title,
    description: input.description ?? "",
    category: input.category || undefined,
    city: input.city || undefined,
    price_from: input.price_from,
    price_to: input.price_to,
    duration_minutes: input.duration_minutes,
    status: input.status ?? "active",
  });
}

/** Update a provider-owned service (ownership enforced by PB update rule). */
export async function updateService(
  token: string,
  serviceId: string,
  input: ServiceFormInput,
): Promise<PbService> {
  return pbUpdate<PbService>("services", serviceId, token, {
    title: input.title,
    description: input.description ?? "",
    category: input.category || undefined,
    city: input.city || undefined,
    price_from: input.price_from,
    price_to: input.price_to,
    duration_minutes: input.duration_minutes,
    status: input.status,
  });
}

/** Fetch a single service (auth-scoped) for the owner edit screen. */
export async function fetchProviderService(
  token: string,
  id: string,
): Promise<PbService> {
  return pbGetOneAuth<PbService>("services", id, token, "category,city");
}

/** All quotes submitted by a provider profile (any status), with request expand. */
export async function fetchProviderQuotes(
  token: string,
  providerId: string,
  options?: { perPage?: number },
) {
  return pbListAuth<PbQuote>("quotes", token, {
    filter: `(provider='${providerId}')`,
    sort: "-@rowid",
    expand: QUOTE_EXPAND,
    perPage: String(options?.perPage ?? 100),
  });
}

/** Reviews received by a provider profile. */
export async function fetchProviderReviews(
  token: string,
  providerId: string,
  options?: { perPage?: number },
) {
  return pbListAuth<PbReview>("reviews", token, {
    filter: `(provider='${providerId}')`,
    sort: "-@rowid",
    expand: REVIEW_EXPAND,
    perPage: String(options?.perPage ?? 50),
  });
}

/** Reviews authored by the signed-in customer. */
export async function fetchCustomerReviews(
  token: string,
  authorId: string,
  options?: { perPage?: number },
) {
  return pbListAuth<PbReview>("reviews", token, {
    filter: `(author='${authorId}')`,
    sort: "-@rowid",
    expand: REVIEW_EXPAND,
    perPage: String(options?.perPage ?? 50),
  });
}
