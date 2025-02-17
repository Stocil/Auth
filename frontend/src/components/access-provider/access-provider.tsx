import { PropsWithChildren } from 'react';

import { useDispatch } from 'react-redux';

import { useCheckUserAccessQuery } from 'store/api/auth';
import { setUserLogin } from 'store/user/slice';

import { getUserDataFromToken } from 'utils/token';

export const AccessProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();
  const userData = getUserDataFromToken();

  // Скипаем запрос, если нет Access токена
  const { isSuccess } = useCheckUserAccessQuery(undefined, { skip: !userData });

  if (isSuccess && userData) {
    dispatch(setUserLogin(userData));
  }

  return <>{children}</>;
};
