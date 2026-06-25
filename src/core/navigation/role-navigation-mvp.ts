import { all_routes } from "../data/routes/all_routes";

const r = all_routes;

export interface RoleNavLink {
  id: string;
  label: string;
  to: string;
  relatedRoutes?: string[];
}

/** Sidebar items for customer dashboard — MVP only. */
export const CUSTOMER_MVP_SIDEBAR: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.customerDashboard, relatedRoutes: [] },
  { id: "create-job", label: "Create Job", to: r.customerCreateJob },
  {
    id: "jobs",
    label: "Jobs",
    to: r.userJob,
    relatedRoutes: [r.customerJobDetails, r.customerCreateJob, r.customerEditJob],
  },
  { id: "quote-comparison", label: "Quote Comparison", to: r.userQuoteComparison },
  { id: "reviews", label: "Reviews", to: r.customerReviews },
  {
    id: "profile-settings",
    label: "Profile & Settings",
    to: r.customerProfile,
    relatedRoutes: [
      r.customerSecurity,
      r.customerNotification,
      r.customerConnectedApps,
    ],
  },
  { id: "logout", label: "Logout", to: r.login },
];

/**
 * Sidebar items expected in the provider dashboard — MVP only.
 *
 * GHST-50: trimmed to surfaces wired to live PocketBase data. Demo-only/deferred
 * surfaces (Bookings, Staffs, Customers, Payout, Holidays, Coupons, Offers,
 * Reviews page, Enquiries, Earnings, Chat) were removed from the sidebar — their
 * routes are kept and they return in their respective future phases. Blog
 * (GHST-49) was added.
 */
export const PROVIDER_MVP_SIDEBAR: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.providerDashboard },
  {
    id: "my-services",
    label: "My Services",
    to: r.providerService,
    relatedRoutes: [r.providerServiceList],
  },
  { id: "job-feed", label: "Job Feed", to: r.providerJobFeed, relatedRoutes: [r.providerApplyJobs] },
  { id: "proposals", label: "Proposals", to: r.providerProposal },
  {
    id: "blog",
    label: "Blog",
    to: r.providerBlog,
    relatedRoutes: [
      r.providerAddBlog,
      r.providerEditBlog,
      r.providerSubmittedBlog,
    ],
  },
  {
    id: "my-jobs",
    label: "My Jobs",
    to: r.providerActiveJobs,
    relatedRoutes: [
      r.providerJobsDetails,
      r.providerJobsDetailsDelivered,
      r.providerJobsDetailsCompleted,
      r.providerJobsDetailsInprogress,
      r.providerJobsDetailsCancelled,
    ],
  },
  { id: "settings", label: "Settings", to: r.providerProfileSettings },
  { id: "logout", label: "Logout", to: r.login },
];

/** Template nav trimmed from MVP — documented as Later in role-navigation-contract.md */
export const DEFERRED_NAV_LABELS = {
  customer: [
    "Bookings",
    "Job Bookings",
    "Favorites",
    "Wallet",
    "Chat",
  ],
  provider: [
    "Bookings",
    "Staffs",
    "Customers",
    "Payout",
    "Holidays & Leave",
    "Coupons",
    "Offers",
    "Reviews",
    "Enquiries",
    "Earnings",
    "Chat",
  ],
} as const;
