import { jwtDecode } from 'jwt-decode';

import { UserInfo } from 'store/user/types';

export const LOCAL_STORAGE_TOKEN_NAME = 'token';

export const getTokenFromCookie = () =>
  document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('token'))
    ?.split('=')[1];

export const getUserDataFromToken = (token: string) => {
  const { email, login } = jwtDecode<UserInfo>(token);
  return { email, login };
};

export const setCookieToken = (token: string) => {
  document.cookie = `${LOCAL_STORAGE_TOKEN_NAME}=${token}`;
};

export const deleteCookieToken = () => {
  document.cookie = `${LOCAL_STORAGE_TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
