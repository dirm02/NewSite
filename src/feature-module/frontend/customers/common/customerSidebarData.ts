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

export const customerSidebarData: CustomerSidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    to: all_routes.customerDashboard,
    icon: 'isax isax-category-25',
  },
  {
    id: 'bookings',
    label: 'Bookings',
    to: all_routes.customerBooking,
    icon: 'isax isax-calendar-25',
    relatedRoutes: [all_routes.customerBookingCalendar],
  },
  {
    id: 'job-bookings',
    label: 'Job Bookings',
    to: all_routes.userJobBooking,
    icon: 'isax isax-message-search5',
    badge: {
      text: '4',
      className: 'bg-danger',
    },
    relatedRoutes: [all_routes.userJobBookingDetails,all_routes.userJobBookingCompleted],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    to: all_routes.userJob,
    icon: 'isax isax-briefcase5',
    badge: {
      text: '3',
      className: 'bg-secondary',
    },
    relatedRoutes: [all_routes.customerJobDetails,all_routes.customerCreateJob,all_routes.customerEditJob],
  },
  {
    id: 'quote-comparison',
    label: 'Quote Comparison',
    to: all_routes.userQuoteComparison,
    icon: 'isax isax-dollar-circle4',
  },
  {
    id: 'favorites',
    label: 'Favorites',
    to: all_routes.customerFavourite,
    icon: 'isax isax-heart5',
  },
  {
    id: 'wallet',
    label: 'Wallet',
    to: all_routes.customerWallet,
    icon: 'isax isax-wallet5',
  },
  {
    id: 'reviews',
    label: 'Reviews',
    to: all_routes.customerReviews,
    icon: 'isax isax-star5',
  },
  {
    id: 'chat',
    label: 'Chat',
    to: all_routes.customerChat,
    icon: 'isax isax-messages-15',
  },
  {
    id: 'settings',
    label: 'Settings',
    to: 'javascript:void(0);',
    icon: 'isax isax-setting-35',
    children: [
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
    to: all_routes.login,
    icon: 'isax isax-logout-15',
  },
];
