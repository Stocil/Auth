import { User } from 'types/users';

import { addUserToDB } from 'data-base/helpers/add-user';
import { getUserByLogin } from 'data-base/helpers/get-user-by-login';
import { Request, Response } from 'express';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_CONFLICT } from 'constants/http-codes';

export const signUp = (req: Request, res: Response) => {
  const user: User.Methods.RegisterUser.Request = req.body;
  const isUserExist = !!getUserByLogin(user.login);

  if (isUserExist) {
    res
      .status(HTTP_CONFLICT)
      .json({ error: 'Пользователь с таким логином уже зарегистрирован' });

    return;
  }

  const newUser = addUserToDB(user);
  const { accessToken, refreshToken } = generateTokens(newUser);

  console.log(`Register user\n`);
  res.cookie('cookieToken', refreshToken, { httpOnly: true }).json(accessToken);
};
