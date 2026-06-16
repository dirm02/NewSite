import { all_routes } from '../../../../core/data/routes/all_routes';

export interface ProviderSidebarItem {
  id: string;
  label: string;
  to: string;
  icon: string;
  badge?: {
    text: string;
    className: string;
  };
  children?: ProviderSidebarItem[];
  isModal?: boolean;
  modalTarget?: string;
  relatedRoutes?: string[];
}

const r = all_routes;

export const providerSidebarData: ProviderSidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    to: r.providerDashboard,
    icon: 'ti ti-layout-grid',
  },
  {
    id: 'my-services',
    label: 'My Services',
    to: r.providerService,
    icon: 'ti ti-briefcase',
      relatedRoutes: [r.providerServiceList],
  },
  {
    id: 'bookings',
    label: 'Bookings',
    to: r.providerBooking,
    icon: 'ti ti-calendar-month',
    relatedRoutes:[r.providerBookDetails]
  },
  {
    id: 'job-feed',
    label: 'Job Feed',
    to: r.providerJobFeed,
    icon: 'ti ti-bookmark',
    relatedRoutes: [r.providerApplyJobs]
  },
  {
    id: 'proposals',
    label: 'Proposals',
    to: r.providerProposal,
    icon: 'ti ti-file',
    badge: {
      text: '4',
      className: 'bg-info',
    },
  },
  {
    id: 'my-jobs',
    label: 'My Jobs',
    to: r.providerActiveJobs,
    icon: 'ti ti-briefcase-2',
    badge: {
      text: '9',
      className: 'bg-success',
    },
    relatedRoutes: [r.providerJobsDetails,r.providerJobsDetailsDelivered,r.providerJobsDetailsCompleted,r.providerJobsDetailsInprogress,r.providerJobsDetailsCancelled]
  },
  {
    id: 'staffs',
    label: 'Staffs',
    to: r.staffList,
    icon: 'ti ti-users',
    relatedRoutes: [r.staffGrid, r.staffDetails],
  },
  {
    id: 'customers',
    label: 'Customers',
    to: r.providerCustomerList,
    icon: 'ti ti-user',
    relatedRoutes: [r.providerCustomerGrid, r.providerCustomerDetails],
  },
  {
    id: 'payout',
    label: 'Payout',
    to: r.providerPayout,
    icon: 'ti ti-wallet',
     relatedRoutes: [r.providerTransaction],
  },
  {
    id: 'holidays',
    label: 'Holidays & Leave',
    to: r.providerHoliday,
    icon: 'feather-calendar',
    relatedRoutes: [r.providerLeaveHistory],
  },
  {
    id: 'coupons',
    label: 'Coupons',
    to: r.providerCoupons,
    icon: 'ti ti-ticket',
  },
  {
    id: 'offers',
    label: 'Offers',
    to: r.providerOffer,
    icon: 'ti ti-square-percentage',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    to: r.providerReview,
    icon: 'ti ti-star',
  },
  {
    id: 'enquiries',
    label: 'Enquiries',
    to: r.providerEnquiry,
    icon: 'ti ti-mail',
  },
  {
    id: 'earnings',
    label: 'Earnings',
    to: r.providerEarnings,
    icon: 'ti ti-cash-banknote',
  },
  {
    id: 'chat',
    label: 'Chat',
    to: r.providerChat,
    icon: 'ti ti-messages',
  },
  {
    id: 'settings',
    label: 'Settings',
    to: '#',
    icon: 'ti ti-settings',
    children: [
      {
        id: 'appointment',
        label: 'Appointment',
        to: r.providerAppointmentSettings,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'account',
        label: 'Account',
        to: r.providerProfileSettings,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'social-profiles',
        label: 'Social Profiles',
        to: r.providerSocialProfile,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'security',
        label: 'Security',
        to: r.ProviderSecuritySettings,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'plan-billings',
        label: 'Plan & Billings',
        to: r.providerPlan,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'payment',
        label: 'Payment',
        to: r.paymentSetting,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'notifications',
        label: 'Notifications',
        to: r.providerNotification,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'connected-apps',
        label: 'Connected Apps',
        to: r.providerConnectedApps,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'verification',
        label: 'Profile Verification',
        to: r.verfication,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'delete-account',
        label: 'Delete Account',
        to: '#',
        icon: 'ti ti-chevrons-right me-2',
        isModal: true,
        modalTarget: '#del-account',
      },
    ],
  },
  {
    id: 'logout',
    label: 'Logout',
    to: r.login,
    icon: 'ti ti-logout-2',
  },
];
