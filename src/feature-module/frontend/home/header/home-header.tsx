import React from 'react';
import SiteHeader from '../../components/site-header/SiteHeader';
import type { SiteHeaderRole } from '../../components/site-header';

type Props = {
  type: number;
  /** Optional: force header menu visibility (defaults to localStorage-backed role). */
  role?: SiteHeaderRole;
};

/**
 * Public / customer-shell header. Delegates to {@link SiteHeader} so the same
 * implementation can be imported as `SiteHeader` elsewhere.
 */
const HomeHeader: React.FC<Props> = ({ type, role }) => (
  <SiteHeader variantType={type} roleOverride={role} />
);

export default HomeHeader;
