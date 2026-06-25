import { all_routes as r } from "../data/routes/all_routes";

/**
 * GHST-58 — Demo surface treatment policy.
 *
 * The full Customer/Provider feature map stays visible (we are NOT shrinking the
 * template). Surfaces that are not yet backed by PocketBase are kept reachable
 * but labelled honestly with a "sample data / coming soon" banner so users are
 * never misled into thinking demo content is live. As a surface gets wired to
 * real data, remove its path from this map (single source of truth) and the
 * banner disappears automatically.
 *
 * Live surfaces are intentionally absent here (no banner). Chat is handled
 * separately by FeatureComingSoon (GHST-57), so it's excluded too.
 */
export interface DemoSurface {
  /** Honest one-line explanation shown in the banner. */
  message: string;
}

const SAMPLE_DATA =
  "This section shows sample data and isn't connected to live data yet. Coming soon.";
const FUTURE_FEATURE =
  "This feature isn't available yet. The screen is a preview — it isn't connected to live data. Coming soon.";
const SETTINGS_PREVIEW =
  "These settings aren't saved to your account yet — this screen is a preview. Coming soon.";

export const DEMO_SURFACES: Record<string, DemoSurface> = {
  // --- Customer (demo / future) ---
  [r.customerBooking]: { message: FUTURE_FEATURE },
  [r.customerBookingCalendar]: { message: FUTURE_FEATURE },
  [r.userJobBooking]: { message: FUTURE_FEATURE },
  [r.userJobBookingDetails]: { message: FUTURE_FEATURE },
  [r.userJobBookingCompleted]: { message: FUTURE_FEATURE },
  [r.customerFavourite]: { message: FUTURE_FEATURE },
  [r.customerWallet]: { message: FUTURE_FEATURE },
  [r.customerEditJob]: { message: SAMPLE_DATA },
  [r.customerProfile]: { message: SETTINGS_PREVIEW },
  [r.customerSecurity]: { message: SETTINGS_PREVIEW },
  [r.customerNotification]: { message: SETTINGS_PREVIEW },
  [r.customerConnectedApps]: { message: SETTINGS_PREVIEW },

  // --- Provider (demo / mock JSON) ---
  [r.providerBooking]: { message: SAMPLE_DATA },
  [r.providerBookDetails]: { message: SAMPLE_DATA },
  [r.staffList]: { message: SAMPLE_DATA },
  [r.staffGrid]: { message: SAMPLE_DATA },
  [r.staffDetails]: { message: SAMPLE_DATA },
  [r.providerCustomerList]: { message: SAMPLE_DATA },
  [r.providerCustomerGrid]: { message: SAMPLE_DATA },
  [r.providerCustomerDetails]: { message: SAMPLE_DATA },
  [r.providerPayout]: { message: FUTURE_FEATURE },
  [r.providerTransaction]: { message: FUTURE_FEATURE },
  [r.providerHoliday]: { message: SAMPLE_DATA },
  [r.providerLeaveHistory]: { message: SAMPLE_DATA },
  [r.providerCoupons]: { message: SAMPLE_DATA },
  [r.providerOffer]: { message: SAMPLE_DATA },
  [r.providerReview]: { message: SAMPLE_DATA },
  [r.providerEnquiry]: { message: SAMPLE_DATA },
  [r.providerEarnings]: { message: FUTURE_FEATURE },
  [r.providerSubscription]: { message: FUTURE_FEATURE },
  // Provider job-detail variants are demo; the base /providers/job-details is live.
  [r.providerJobsDetailsDelivered]: { message: SAMPLE_DATA },
  [r.providerJobsDetailsCompleted]: { message: SAMPLE_DATA },
  [r.providerJobsDetailsInprogress]: { message: SAMPLE_DATA },
  [r.providerJobsDetailsCancelled]: { message: SAMPLE_DATA },
  // Provider settings (preview forms; Account/profile to be wired next)
  [r.providerProfileSettings]: { message: SETTINGS_PREVIEW },
  [r.providerAppointmentSettings]: { message: SETTINGS_PREVIEW },
  [r.providerSocialProfile]: { message: SETTINGS_PREVIEW },
  [r.ProviderSecuritySettings]: { message: SETTINGS_PREVIEW },
  [r.providerPlan]: { message: FUTURE_FEATURE },
  [r.paymentSetting]: { message: FUTURE_FEATURE },
  [r.providerNotification]: { message: SETTINGS_PREVIEW },
  [r.providerConnectedApps]: { message: SETTINGS_PREVIEW },
  [r.providerDeviceManagement]: { message: SETTINGS_PREVIEW },
  [r.providerLoginActivity]: { message: SETTINGS_PREVIEW },
  [r.verfication]: { message: SAMPLE_DATA },
};

/** Returns the demo-surface policy for a pathname, or null for live surfaces. */
export function getDemoSurface(pathname: string): DemoSurface | null {
  return DEMO_SURFACES[pathname] ?? null;
}
