import { ReactElement } from 'react';

import { PrivateRoute } from 'features/private-route/private-route';

import { Authorization } from 'pages/authorization';
import { HomePage } from 'pages/homepage';

type Route = {
  path: string;
  element: ReactElement;
};

export enum routesKeys {
  main = 'main',
  signIn = 'signIn',
  signUp = 'signUp',
  profile = 'profile',
}

export enum routesPaths {
  main = '/',
  signIn = '/sign-in',
  signUp = '/sign-up',
  profile = '/profile',
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
  profile: {
    path: routesPaths.profile,
    element: <PrivateRoute>Profile</PrivateRoute>,
  },
};

export const routesValues = Object.values({ ...routes });
