/** PocketBase collection record types — GHST-5 MVP discovery */

export interface PbListResult<T> {
  items: T[];
  totalItems: number;
}

export interface PbRecordBase {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}

export interface PbCity extends PbRecordBase {
  name: string;
  slug: string;
  region: string;
  country: string;
}

export interface PbServiceCategory extends PbRecordBase {
  name: string;
  slug: string;
  featured?: boolean;
  sort_order?: number;
  listing_count?: number;
}

export interface PbUserExpand {
  id: string;
  name?: string;
  email?: string;
}

export interface PbProviderProfile extends PbRecordBase {
  user: string;
  business_name: string;
  bio?: string;
  hourly_rate_min?: number;
  rating_avg?: number;
  rating_count?: number;
  services_count?: number;
  city?: string;
  verified?: boolean;
  status: string;
  expand?: {
    city?: PbCity;
    user?: PbUserExpand;
  };
}

export interface PbService extends PbRecordBase {
  title: string;
  slug: string;
  description?: string;
  category: string;
  provider: string;
  city?: string;
  price_from?: number;
  price_to?: number;
  duration_minutes?: number;
  featured?: boolean;
  status: string;
  rating_avg?: number;
  expand?: {
    category?: PbServiceCategory;
    provider?: PbProviderProfile;
    city?: PbCity;
  };
}

export interface PbReview extends PbRecordBase {
  author: string;
  provider?: string;
  service?: string;
  request?: string;
  rating: number;
  comment?: string;
  status: string;
  expand?: {
    author?: PbUserExpand;
    provider?: PbProviderProfile;
    service?: PbService;
  };
}

export interface PbBlogCategory extends PbRecordBase {
  name: string;
  slug: string;
  sort_order?: number;
  status: string;
}

export interface PbBlogPost extends PbRecordBase {
  provider: string;
  author: string;
  service?: string;
  category?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  cover_image?: string;
  status: string;
  rejection_reason?: string;
  published_at?: string;
  seo_title?: string;
  seo_description?: string;
  expand?: {
    provider?: PbProviderProfile;
    author?: PbUserExpand;
    service?: PbService;
    category?: PbBlogCategory;
  };
}

export type PbUserRole = "customer" | "provider" | "admin";

export interface PbUser extends PbRecordBase {
  email: string;
  name?: string;
  phone?: string;
  role: PbUserRole;
  city?: string;
  verified?: boolean;
  avatar?: string;
}

export interface PbAuthResponse {
  token: string;
  record: PbUser;
}

export type ServiceRequestStatus =
  | "open"
  | "in_progress"
  | "completed"
  | "cancelled";

export type QuoteStatus = "pending" | "accepted" | "rejected" | "withdrawn";

export interface PbServiceRequest extends PbRecordBase {
  customer: string;
  title: string;
  description?: string;
  category?: string;
  budget_type?: string;
  budget_min?: number;
  budget_max?: number;
  experience_level?: string;
  location?: string;
  city?: string;
  tags?: string[];
  status: ServiceRequestStatus;
  preferred_date?: string;
  expand?: {
    customer?: PbUserExpand;
    category?: PbServiceCategory;
    city?: PbCity;
  };
}

export interface PbQuote extends PbRecordBase {
  request: string;
  provider: string;
  amount: number;
  message?: string;
  estimated_days?: number;
  status: QuoteStatus;
  expand?: {
    request?: PbServiceRequest;
    provider?: PbProviderProfile;
  };
}
