import { UserRaw } from 'types/users';

import { addUserToDB } from 'data-base/helpers/addUser';
import { Request, Response } from 'express';

import { generateTokens } from 'utils/generate-tokens';

export const signUp = (req: Request, res: Response) => {
  if (!req.body) res.status(400).send('Необходимо отправить данные');

  const user: UserRaw = req.body;
  const userJWTData = {
    login: user.login,
    email: user.email,
  };

  addUserToDB(user);
  const { accessToken, refreshToken } = generateTokens(userJWTData);

  res.cookie('token', refreshToken, { httpOnly: true });
  res.json(accessToken);
};
