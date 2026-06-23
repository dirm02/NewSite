import { all_routes } from "../data/routes/all_routes";

const r = all_routes;

export interface RoleNavLink {
  id: string;
  label: string;
  to: string;
  relatedRoutes?: string[];
}

/** Flat top-nav links for logged-in customer header. */
export const CUSTOMER_MVP_TOP_NAV: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.customerDashboard },
  { id: "create-job", label: "Create Job", to: r.customerCreateJob },
  {
    id: "jobs",
    label: "Jobs",
    to: r.userJob,
    relatedRoutes: [r.customerJobDetails, r.customerEditJob],
  },
  { id: "quote-comparison", label: "Quote Comparison", to: r.userQuoteComparison },
  { id: "visit-website", label: "Visit Website", to: r.home },
];

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

/** Flat top-nav links for logged-in provider header. */
export const PROVIDER_MVP_TOP_NAV: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.providerDashboard },
  { id: "job-feed", label: "Job Feed", to: r.providerJobFeed, relatedRoutes: [r.providerApplyJobs] },
  { id: "proposals", label: "Proposals", to: r.providerProposal },
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
  { id: "visit-website", label: "Visit Website", to: r.home },
];

/** Sidebar items for provider dashboard — MVP only. */
export const PROVIDER_MVP_SIDEBAR: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.providerDashboard },
  { id: "job-feed", label: "Job Feed", to: r.providerJobFeed, relatedRoutes: [r.providerApplyJobs] },
  { id: "proposals", label: "Proposals", to: r.providerProposal },
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
  {
    id: "my-services",
    label: "My Services",
    to: r.providerService,
    relatedRoutes: [r.providerServiceList],
  },
  { id: "reviews", label: "Reviews", to: r.providerReview },
  {
    id: "profile-settings",
    label: "Profile & Settings",
    to: r.providerProfileSettings,
    relatedRoutes: [
      r.providerSocialProfile,
      r.ProviderSecuritySettings,
      r.providerNotification,
      r.providerConnectedApps,
    ],
  },
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
    "Enquiries",
    "Earnings",
    "Chat",
  ],
} as const;
