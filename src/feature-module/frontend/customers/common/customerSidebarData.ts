import { all_routes } from '../../../../core/data/routes/all_routes';

export interface CustomerSidebarItem {
  id: string;
  label: string;
  to: string;
  icon: string;
  badge?: {
    text: string;
    className: string;
  };
  children?: CustomerSidebarItem[];
  isModal?: boolean;
  modalTarget?: string;
  relatedRoutes?: string[];
}

const icons: Record<string, string> = {
  dashboard: 'isax isax-category-25',
  'create-job': 'isax isax-add-square5',
  bookings: 'isax isax-calendar-15',
  'job-bookings': 'isax isax-briefcase5',
  jobs: 'isax isax-briefcase5',
  'quote-comparison': 'isax isax-dollar-circle4',
  favorites: 'isax isax-heart5',
  wallet: 'isax isax-wallet-25',
  reviews: 'isax isax-star5',
  chat: 'isax isax-message5',
  'profile-settings': 'isax isax-setting-35',
  logout: 'isax isax-logout-15',
};

const profileChildren: CustomerSidebarItem[] = [
  {
    id: 'account-settings',
    label: 'Account Settings',
    to: all_routes.customerProfile,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'security-settings',
    label: 'Security Settings',
    to: all_routes.customerSecurity,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'notification-settings',
    label: 'Notifications',
    to: all_routes.customerNotification,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'connected-apps',
    label: 'Connected Apps',
    to: all_routes.customerConnectedApps,
    icon: 'ti ti-chevrons-right me-2',
  },
];

export const customerSidebarData: CustomerSidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    to: all_routes.customerDashboard,
    icon: icons.dashboard,
  },
  {
    id: 'create-job',
    label: 'Create Job',
    to: all_routes.customerCreateJob,
    icon: icons['create-job'],
  },
  {
    id: 'bookings',
    label: 'Bookings',
    to: all_routes.customerBooking,
    icon: icons.bookings,
    relatedRoutes: [all_routes.customerBookingCalendar],
  },
  {
    id: 'job-bookings',
    label: 'Job Bookings',
    to: all_routes.userJobBooking,
    icon: icons['job-bookings'],
    relatedRoutes: [
      all_routes.userJobBookingDetails,
      all_routes.userJobBookingCompleted,
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    to: all_routes.userJob,
    icon: icons.jobs,
    relatedRoutes: [
      all_routes.customerJobDetails,
      all_routes.customerCreateJob,
      all_routes.customerEditJob,
    ],
  },
  {
    id: 'quote-comparison',
    label: 'Quote Comparison',
    to: all_routes.userQuoteComparison,
    icon: icons['quote-comparison'],
  },
  {
    id: 'favorites',
    label: 'Favorites',
    to: all_routes.customerFavourite,
    icon: icons.favorites,
  },
  {
    id: 'wallet',
    label: 'Wallet',
    to: all_routes.customerWallet,
    icon: icons.wallet,
  },
  {
    id: 'reviews',
    label: 'Reviews',
    to: all_routes.customerReviews,
    icon: icons.reviews,
  },
  {
    id: 'chat',
    label: 'Chat',
    to: all_routes.customerChat,
    icon: icons.chat,
  },
  {
    id: 'profile-settings',
    label: 'Profile & Settings',
    to: 'javascript:void(0);',
    icon: icons['profile-settings'],
    relatedRoutes: [
      all_routes.customerProfile,
      all_routes.customerSecurity,
      all_routes.customerNotification,
      all_routes.customerConnectedApps,
    ],
    children: profileChildren,
  },
  {
    id: 'logout',
    label: 'Logout',
    to: all_routes.login,
    icon: icons.logout,
  },
];
