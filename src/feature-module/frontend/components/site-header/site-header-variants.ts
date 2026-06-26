import { all_routes } from '../../../../core/data/routes/all_routes';

const routes = all_routes;

/**
 * Maps legacy header style numbers to logo link targets and CSS classes.
 * GHST-65: all variants removed; every style links home to `/index`.
 */
export function siteHeaderRouterPath(pathType: number): {
  path: string;
  className: string;
} {
  switch (pathType) {
    case 1:
      return { path: routes.home, className: 'header-new' };
    case 2:
      return { path: routes.home, className: 'header-one' };
    case 3:
      return { path: routes.home, className: 'header-two' };
    case 4:
      return { path: routes.home, className: 'header-three' };
    case 5:
      return { path: routes.home, className: 'header-four' };
    case 6:
      return { path: routes.home, className: 'header-five' };
    case 7:
      return { path: routes.home, className: 'header-six' };
    case 8:
      return { path: routes.home, className: 'header-seven' };
    case 9:
      return { path: routes.home, className: 'header-eight' };
    case 10:
      return { path: routes.home, className: 'header-nine' };
    case 11:
      return { path: routes.home, className: 'header-one' };
    case 12:
      return { path: routes.home, className: 'header-eleven' };
    case 13:
      return { path: routes.home, className: 'header-twelve' };
    default:
      return { path: routes.home, className: 'header-one' };
  }
}
