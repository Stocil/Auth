import { UserRaw } from 'types/users';

import { addUserToDB } from 'data-base/helpers/add-user';
import { Request, Response } from 'express';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_NO_BODY_PROVIDED } from 'constants/http-codes';

export const signUp = (req: Request, res: Response) => {
  if (!req.body) {
    res
      .status(HTTP_NO_BODY_PROVIDED)
      .json({ error: 'Необходимо отправить данные' });

    return;
  }

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
