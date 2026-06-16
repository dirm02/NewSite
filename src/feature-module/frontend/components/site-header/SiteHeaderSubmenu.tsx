import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavLinkItem } from './site-header-types';
import { pathMatchesLocation, subtreeHasActive } from './site-header-nav-utils';

type Props = {
  items: NavLinkItem[];
  idPrefix: string;
  openBranches: Record<string, boolean>;
  onToggleBranch: (key: string) => void;
};

const NavSubmenuList: React.FC<Props> = ({
  items,
  idPrefix,
  openBranches,
  onToggleBranch,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {items.map((item, index) => {
        const key = `${idPrefix}-${index}`;
        const children = item.children?.length ? item.children : undefined;

        if (!children) {
          return (
            <li
              className={pathMatchesLocation(item.to, pathname) ? 'active' : ''}
              key={key}
            >
              <Link to={item.to}>
                {item.label}
                {item.badge ? (
                  <span className="new-home">{item.badge}</span>
                ) : null}
              </Link>
            </li>
          );
        }

        const routeActive = subtreeHasActive(item, pathname);
        const expanded = !!openBranches[key] || routeActive;

        return (
          <li
            className={`has-submenu ${expanded ? 'show-sub-menu' : ''}`}
            key={key}
          >
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                onToggleBranch(key);
              }}
            >
              {item.label}
            </Link>
            <ul className={`submenu ${expanded ? 'show-sub-menu' : ''}`}>
              <NavSubmenuList
                items={children}
                idPrefix={key}
                openBranches={openBranches}
                onToggleBranch={onToggleBranch}
              />
            </ul>
          </li>
        );
      })}
    </>
  );
};

type RootProps = {
  items: NavLinkItem[];
  idPrefix: string;
  openBranches: Record<string, boolean>;
  onToggleBranch: (key: string) => void;
  className?: string;
};

export const SiteHeaderSubmenuRoot: React.FC<RootProps> = ({
  items,
  idPrefix,
  openBranches,
  onToggleBranch,
  className = 'submenu',
}) => (
  <ul className={className}>
    <NavSubmenuList
      items={items}
      idPrefix={idPrefix}
      openBranches={openBranches}
      onToggleBranch={onToggleBranch}
    />
  </ul>
);

export type { NavLinkItem };
