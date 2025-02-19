import { UserLoginResponse } from 'types/users';

import jwt from 'jsonwebtoken';

import { ACCESS_EXP_IN, REFRESH_EXP_IN, SECRET } from 'constants/index';

type Props = UserLoginResponse;

export const generateTokens = (data: Props) => {
  const accessToken = jwt.sign(data, SECRET, {
    expiresIn: ACCESS_EXP_IN,
  });
  const refreshToken = jwt.sign(data, SECRET, { expiresIn: REFRESH_EXP_IN });

  console.log('\nGenerate new tokens request \n');
  console.log(`Access  ${accessToken}\n`);
  console.log(`Refresh  ${refreshToken}\n`);

  return { accessToken, refreshToken };
};
