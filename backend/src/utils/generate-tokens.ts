import { UserRaw } from 'types/users';

import jwt from 'jsonwebtoken';

import { ACCESS_EXP_IN, REFRESH_EXP_IN, SECRET } from 'constants/index';

type Props = Omit<UserRaw, 'password'>;

export const generateTokens = (data: Props) => {
  const accessToken = jwt.sign(data, SECRET, { expiresIn: ACCESS_EXP_IN });
  const refreshToken = jwt.sign(data, SECRET, { expiresIn: REFRESH_EXP_IN });

  return { accessToken, refreshToken };
};
