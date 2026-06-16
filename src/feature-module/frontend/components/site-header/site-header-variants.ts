import { all_routes } from '../../../../core/data/routes/all_routes';

const routes = all_routes;

export function siteHeaderRouterPath(pathType: number): {
  path: string;
  className: string;
} {
  switch (pathType) {
    case 1:
      return { path: routes.home, className: 'header-new' };
    case 2:
      return { path: routes.home2, className: 'header-one' };
    case 3:
      return { path: routes.home3, className: 'header-two' };
    case 4:
      return { path: routes.home4, className: 'header-three' };
    case 5:
      return { path: routes.home5, className: 'header-four' };
    case 6:
      return { path: routes.home6, className: 'header-five' };
    case 7:
      return { path: routes.home7, className: 'header-six' };
    case 8:
      return { path: routes.home8, className: 'header-seven' };
    case 9:
      return { path: routes.home9, className: 'header-eight' };
    case 10:
      return { path: routes.home10, className: 'header-nine' };
    case 11:
      return { path: routes.home, className: 'header-one' };
    case 12:
      return { path: routes.home11, className: 'header-eleven' };
    case 13:
      return { path: routes.home11, className: 'header-twelve' };
    default:
      return { path: routes.home, className: 'header-one' };
  }
}
