import { Route, Routes } from 'react-router';

import { routesValues } from './routes';

export const RoutesList = () => {
  return (
    <Routes>
      {routesValues.map(({ element, path }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
