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
    id: 'job-feed',
    label: 'Job Feed',
    to: r.providerJobFeed,
    icon: 'ti ti-bookmark',
    relatedRoutes: [r.providerApplyJobs],
  },
  {
    id: 'proposals',
    label: 'Proposals',
    to: r.providerProposal,
    icon: 'ti ti-file',
  },
  {
    id: 'my-jobs',
    label: 'My Jobs',
    to: r.providerActiveJobs,
    icon: 'ti ti-briefcase-2',
    relatedRoutes: [
      r.providerJobsDetails,
      r.providerJobsDetailsDelivered,
      r.providerJobsDetailsCompleted,
      r.providerJobsDetailsInprogress,
      r.providerJobsDetailsCancelled,
    ],
  },
  {
    id: 'blog',
    label: 'Blog',
    to: '#',
    icon: 'ti ti-news',
    relatedRoutes: [
      r.providerBlog,
      r.providerAddBlog,
      r.providerEditBlog,
      r.providerSubmittedBlog,
    ],
    children: [
      {
        id: 'blog-all',
        label: 'All Blogs',
        to: r.providerBlog,
        icon: 'ti ti-chevrons-right me-2',
        relatedRoutes: [r.providerEditBlog],
      },
      {
        id: 'blog-add',
        label: 'Add Blog',
        to: r.providerAddBlog,
        icon: 'ti ti-chevrons-right me-2',
      },
      {
        id: 'blog-submitted',
        label: 'Submitted Blogs',
        to: r.providerSubmittedBlog,
        icon: 'ti ti-chevrons-right me-2',
      },
    ],
  },
  /*
    GHST-50: demo-only provider surfaces removed from the sidebar (routes kept,
    return in future phases): Bookings, Staffs, Customers, Payout, Holidays &
    Leave, Coupons, Offers, Reviews (static page), Enquiries, Earnings, Chat.
    See DEFERRED_NAV_LABELS.provider in core/navigation/role-navigation-mvp.ts.
  */
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
