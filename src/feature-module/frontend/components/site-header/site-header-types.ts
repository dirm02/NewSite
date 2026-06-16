/** Resolved user surface for public site header menus. */
export type SiteHeaderRole = 'guest' | 'customer' | 'provider';

export type SiteHeaderProps = {
  /** Legacy visual variant (1–11) used across existing pages. */
  variantType: number;
  /** When set, skips localStorage and uses this role for menu filtering. */
  roleOverride?: SiteHeaderRole;
};

export type NavLinkItem = {
  label: string;
  to: string;
  children?: NavLinkItem[];
  badge?: string;
  /** If omitted, link is shown for every role. */
  roles?: SiteHeaderRole[];
};

export type HomeDemoItem = {
  label: string;
  to: string;
  img: string;
  badge?: string;
};

export type NavColumnSection = {
  id: string;
  label: string;
  type: 'mega-home' | 'dropdown';
  /** If set, entire column is hidden unless role matches. */
  roles?: SiteHeaderRole[];
  homeDemos?: HomeDemoItem[];
  items?: NavLinkItem[];
};
