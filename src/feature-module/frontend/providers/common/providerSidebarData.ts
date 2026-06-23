import { all_routes } from '../../../../core/data/routes/all_routes';
import { PROVIDER_MVP_SIDEBAR } from '../../../../core/navigation/role-navigation-mvp';

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

const icons: Record<string, string> = {
  dashboard: 'ti ti-layout-grid',
  'job-feed': 'ti ti-bookmark',
  proposals: 'ti ti-file',
  'my-jobs': 'ti ti-briefcase-2',
  'my-services': 'ti ti-briefcase',
  reviews: 'ti ti-star',
  'profile-settings': 'ti ti-settings',
  logout: 'ti ti-logout-2',
};

const profileChildren: ProviderSidebarItem[] = [
  {
    id: 'account',
    label: 'Account',
    to: all_routes.providerProfileSettings,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'social-profiles',
    label: 'Social Profiles',
    to: all_routes.providerSocialProfile,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'security',
    label: 'Security',
    to: all_routes.ProviderSecuritySettings,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    to: all_routes.providerNotification,
    icon: 'ti ti-chevrons-right me-2',
  },
  {
    id: 'connected-apps',
    label: 'Connected Apps',
    to: all_routes.providerConnectedApps,
    icon: 'ti ti-chevrons-right me-2',
  },
];

export const providerSidebarData: ProviderSidebarItem[] = PROVIDER_MVP_SIDEBAR.map(
  (item) => {
    const base: ProviderSidebarItem = {
      id: item.id,
      label: item.label,
      to: item.to,
      icon: icons[item.id] ?? 'ti ti-arrow-right',
      relatedRoutes: item.relatedRoutes,
    };

    if (item.id === 'profile-settings') {
      return {
        ...base,
        to: '#',
        children: profileChildren,
      };
    }

    return base;
  },
);
