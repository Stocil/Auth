import { User } from 'types/users';

import { JwtPayload } from 'jsonwebtoken';

export const getUserDataFromToken = (
  tokenData: JwtPayload & User.TokenData,
) => {
  const userData: User.TokenData = {
    id: tokenData.id,
    login: tokenData.login,
    email: tokenData.email,
    gmail: tokenData.gmail,
    avatar: tokenData.avatar,
  };

  return userData;
};
