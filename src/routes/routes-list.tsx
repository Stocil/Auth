import { Route, Routes } from 'react-router';

import { Page } from 'pages/page';

import { routesValues } from './routes';

export const RoutesList = () => {
  return (
    <Routes>
      <Route path='/' element={<Page />}>
        {routesValues.map(({ element, path }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
};
