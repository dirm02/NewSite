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

/** Sidebar items expected in the provider dashboard. */
export const PROVIDER_MVP_SIDEBAR: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.providerDashboard },
  {
    id: "my-services",
    label: "My Services",
    to: r.providerService,
    relatedRoutes: [r.providerServiceList],
  },
  { id: "bookings", label: "Bookings", to: r.providerBooking },
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
  { id: "staffs", label: "Staffs", to: r.staffList },
  { id: "customers", label: "Customers", to: r.providerCustomerList },
  { id: "payout", label: "Payout", to: r.providerPayout },
  { id: "holidays", label: "Holidays & Leave", to: r.providerHoliday },
  { id: "coupons", label: "Coupons", to: r.providerCoupons },
  { id: "offers", label: "Offers", to: r.providerOffer },
  { id: "reviews", label: "Reviews", to: r.providerReview },
  { id: "enquiries", label: "Enquiries", to: r.providerEnquiry },
  { id: "earnings", label: "Earnings", to: r.providerEarnings },
  { id: "chat", label: "Chat", to: r.providerChat },
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
  provider: [],
} as const;
