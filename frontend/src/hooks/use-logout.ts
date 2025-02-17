import { useDispatch, useSelector } from 'react-redux';

import { useLogoutUserMutation } from 'store/api/auth';
import { getUserInfo, getUserIsLoggin } from 'store/user/selectors';
import { setUserLogout } from 'store/user/slice';

import { deleteCookieToken } from 'utils/token';

export const useLogout = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector(getUserIsLoggin);
  const userLogin = useSelector(getUserInfo)?.login;

  const [logoutUser] = useLogoutUserMutation();

  const logout = () => {
    dispatch(setUserLogout());
    deleteCookieToken();
    logoutUser({ login: String(userLogin) });
  };

  return { isLogin, logout };
};
