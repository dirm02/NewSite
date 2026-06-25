import { all_routes } from "../data/routes/all_routes";

const r = all_routes;

export interface RoleNavLink {
  id: string;
  label: string;
  to: string;
  relatedRoutes?: string[];
}

/** Sidebar items expected in the customer dashboard feature map. */
export const CUSTOMER_MVP_SIDEBAR: RoleNavLink[] = [
  { id: "dashboard", label: "Dashboard", to: r.customerDashboard, relatedRoutes: [] },
  { id: "create-job", label: "Create Job", to: r.customerCreateJob },
  { id: "bookings", label: "Bookings", to: r.customerBooking },
  {
    id: "job-bookings",
    label: "Job Bookings",
    to: r.userJobBooking,
    relatedRoutes: [r.userJobBookingDetails, r.userJobBookingCompleted],
  },
  {
    id: "jobs",
    label: "Jobs",
    to: r.userJob,
    relatedRoutes: [r.customerJobDetails, r.customerCreateJob, r.customerEditJob],
  },
  { id: "quote-comparison", label: "Quote Comparison", to: r.userQuoteComparison },
  { id: "favorites", label: "Favorites", to: r.customerFavourite },
  { id: "wallet", label: "Wallet", to: r.customerWallet },
  { id: "reviews", label: "Reviews", to: r.customerReviews },
  { id: "chat", label: "Chat", to: r.customerChat },
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
 * Sidebar items expected in the provider dashboard feature map.
 * Full visibility is intentional: each route is audited separately as live-data,
 * demo, or future, instead of hiding the original product surface from providers.
 */
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
  { id: "settings", label: "Settings", to: r.providerProfileSettings },
  { id: "logout", label: "Logout", to: r.login },
];

/** Links that must stay hidden from role sidebars. */
export const DEFERRED_NAV_LABELS = {
  customer: [],
  provider: [],
} as const;
