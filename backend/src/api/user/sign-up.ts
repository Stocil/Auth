import { NewUser, UserLoginResponse } from 'types/users';

import { addUserToDB } from 'data-base/helpers/add-user';
import { getUserByLogin } from 'data-base/helpers/get-user-by-login';
import { Request, Response } from 'express';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_CONFLICT, HTTP_NO_BODY_PROVIDED } from 'constants/http-codes';

export const signUp = (req: Request, res: Response) => {
  if (!req.body) {
    res
      .status(HTTP_NO_BODY_PROVIDED)
      .json({ error: 'Необходимо отправить данные' });

    return;
  }

  const user: NewUser = req.body;
  const userJWTData: UserLoginResponse = {
    login: user.login,
    email: user.email,
    avatar: null,
  };

  const isUserExist = !!getUserByLogin(user.login);

  if (isUserExist) {
    res
      .status(HTTP_CONFLICT)
      .json({ error: 'Пользователь с таким логином уже зарегистрирован' });

    return;
  }

  addUserToDB(user);
  const { accessToken, refreshToken } = generateTokens(userJWTData);

  console.log(`Register user\n`);
  res.cookie('cookieToken', refreshToken, { httpOnly: true }).json(accessToken);
};
