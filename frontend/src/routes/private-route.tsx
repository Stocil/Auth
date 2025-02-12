import { FC, PropsWithChildren, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import { getUserIsLoggin } from 'store/user/selectors';

import { routesPaths } from './routes';

type Props = PropsWithChildren;

export const PrivateRoute: FC<Props> = ({ children }) => {
  const isLogin = useSelector(getUserIsLoggin);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLogin) {
      navigate(
        { pathname: routesPaths.signIn },
        { state: { prevPath: pathname } },
      );
    }
  }, [isLogin, pathname, navigate]);

  return children;
};
