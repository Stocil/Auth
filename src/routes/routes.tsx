import { ReactElement } from 'react';

import { HomePage } from 'page/homepage';
import { Login } from 'page/login';

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
    element: <Login />,
  },
  signUp: {
    path: routesPaths.signUp,
    element: <Login />,
  },
};

export const routesValues = Object.values({ ...routes });
