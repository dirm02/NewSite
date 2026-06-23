import { all_routes } from '../../../../core/data/routes/all_routes';
import { CUSTOMER_MVP_SIDEBAR } from '../../../../core/navigation/role-navigation-mvp';

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
  jobs: 'isax isax-briefcase5',
  'quote-comparison': 'isax isax-dollar-circle4',
  reviews: 'isax isax-star5',
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

export const customerSidebarData: CustomerSidebarItem[] = CUSTOMER_MVP_SIDEBAR.map(
  (item) => {
    const base: CustomerSidebarItem = {
      id: item.id,
      label: item.label,
      to: item.to,
      icon: icons[item.id] ?? 'isax isax-arrow-right-3',
      relatedRoutes: item.relatedRoutes,
    };

    if (item.id === 'profile-settings') {
      return {
        ...base,
        to: 'javascript:void(0);',
        children: profileChildren,
      };
    }

    return base;
  },
);
