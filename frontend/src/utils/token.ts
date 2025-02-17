import { Auth } from 'types/entities/auth';

import { jwtDecode } from 'jwt-decode';

export const LOCAL_STORAGE_TOKEN_NAME = 'token';

export const getTokenFromCookie = () =>
  document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('token'))
    ?.split('=')[1];

export const getUserDataFromToken = () => {
  const token = getTokenFromCookie();

  if (token) {
    return jwtDecode(token) as Auth.UserInfo;
  }
};

export const setCookieToken = (token: string) => {
  document.cookie = `${LOCAL_STORAGE_TOKEN_NAME}=${token}`;
};

export const deleteCookieToken = () => {
  document.cookie = `${LOCAL_STORAGE_TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
