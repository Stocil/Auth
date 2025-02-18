import { FC, PropsWithChildren, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import { authApi } from 'store/api/auth';
import { getUserIsLoggin } from 'store/user/selectors';

import { routesPaths } from '../../routes/routes';

type Props = PropsWithChildren;

export const PrivateRoute: FC<Props> = ({ children }) => {
  const { isSuccess, isError } =
    authApi.endpoints.checkUserAccess.useQueryState();

  const isAccessFetched = isSuccess || isError;
  const isLogin = useSelector(getUserIsLoggin);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLogin && isAccessFetched && isError) {
      navigate(
        { pathname: routesPaths.signIn },
        { state: { prevPath: pathname } },
      );
    }
  }, [isLogin, pathname, navigate, isAccessFetched]);

  return children;
};
