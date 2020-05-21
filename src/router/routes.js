import { ROUTES } from 'utils/macros/routes';
import PWelcome from 'pages/welcome';
import PAbout from 'pages/about';
import PError from 'pages/error';

export const routes = [
  {
    path: ROUTES.welcome.path,
    name: ROUTES.welcome.name,
    component: PWelcome,
  },
  {
    path: ROUTES.about.path,
    name: ROUTES.about.name,
    component: PAbout,
  },
  {
    path: '*',
    name: 'error',
    component: PError,
  },
];
