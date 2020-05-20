import { ROUTES } from 'utils/macros/routes';
import PWelcome from 'pages/welcome';
import PError from 'pages/error';

export const routes = [
  {
    path: ROUTES.welcome.path,
    name: ROUTES.welcome.name,
    component: PWelcome,
  },
  {
    path: '*',
    name: 'error',
    component: PError,
  },
];
