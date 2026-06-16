import type { NavLinkItem, NavColumnSection, SiteHeaderRole } from './site-header-types';

export function linkVisibleForRole(
  roles: SiteHeaderRole[] | undefined,
  role: SiteHeaderRole,
): boolean {
  if (!roles || roles.length === 0) return true;
  return roles.includes(role);
}

export function filterNavLinkTree(
  items: NavLinkItem[] | undefined,
  role: SiteHeaderRole,
): NavLinkItem[] | undefined {
  if (!items) return undefined;
  return items
    .filter((i) => linkVisibleForRole(i.roles, role))
    .map((i) => ({
      ...i,
      children: i.children
        ? filterNavLinkTree(i.children, role)
        : undefined,
    }));
}

export function filterNavSections(
  sections: NavColumnSection[],
  role: SiteHeaderRole,
): NavColumnSection[] {
  return sections
    .filter((s) => linkVisibleForRole(s.roles, role))
    .map((s) => ({
      ...s,
      items: filterNavLinkTree(s.items, role),
    }));
}

function collectPathsFromLink(
  item: NavLinkItem,
  acc: string[],
) {
  if (item.to && item.to !== '#') acc.push(item.to);
  item.children?.forEach((c) => collectPathsFromLink(c, acc));
}

export function collectPathsFromSection(section: NavColumnSection): string[] {
  const acc: string[] = [];
  section.homeDemos?.forEach((d) => {
    if (d.to !== '#') acc.push(d.to);
  });
  section.items?.forEach((i) => collectPathsFromLink(i, acc));
  return acc;
}

export function pathMatchesLocation(path: string, pathname: string): boolean {
  if (!path || path === '#') return false;
  if (path === pathname) return true;
  if (path.endsWith('/*')) {
    const base = path.slice(0, -2);
    return pathname === base || pathname.startsWith(`${base}/`);
  }
  return pathname.startsWith(`${path}/`);
}

export function subtreeHasActive(
  item: NavLinkItem,
  pathname: string,
): boolean {
  if (pathMatchesLocation(item.to, pathname)) return true;
  return !!item.children?.some((c) => subtreeHasActive(c, pathname));
}

export function sectionHasActiveRoute(
  section: NavColumnSection,
  pathname: string,
): boolean {
  if (
    section.homeDemos?.some((d) => pathMatchesLocation(d.to, pathname))
  ) {
    return true;
  }
  return !!section.items?.some((i) => subtreeHasActive(i, pathname));
}
