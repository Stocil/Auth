import { ReactElement } from 'react';

import { Authorization } from 'pages/authorization';
import { HomePage } from 'pages/homepage';

type Route = {
  path: string;
  element: ReactElement;
};

enum routesKeys {
  main = 'main',
  signIn = 'signIn',
  signUp = 'signUp',
}

export enum routesPaths {
  main = '/',
  signIn = '/sign-in',
  signUp = '/sign-up',
}

export const routes: Record<routesKeys, Route> = {
  main: {
    path: routesPaths.main,
    element: <HomePage />,
  },
  signIn: {
    path: routesPaths.signIn,
    element: <Authorization />,
  },
  signUp: {
    path: routesPaths.signUp,
    element: <Authorization />,
  },
};

export const routesValues = Object.values({ ...routes });
