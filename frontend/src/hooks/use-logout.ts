import { useDispatch, useSelector } from 'react-redux';

import { useLogoutUserMutation } from 'store/api/auth';
import { getUserIsLoggin } from 'store/user/selectors';
import { setUserLogout } from 'store/user/slice';

import { deleteCookieToken } from 'utils/token';

export const useLogout = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(getUserIsLoggin);
  const [logoutUser] = useLogoutUserMutation();

  const logout = () => {
    dispatch(setUserLogout());
    deleteCookieToken();
    logoutUser();
  };

  return { isLogin, logout };
};
