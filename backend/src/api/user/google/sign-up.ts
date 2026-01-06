import { User } from 'types/users';

import { addGoogleUserToDB } from 'data-base/helpers/add-google-user';
import { getUserByLogin } from 'data-base/helpers/get-user-by-login';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_NO_BODY_PROVIDED } from 'constants/http-codes';

export const signUpByGoogle = (req: Request, res: Response) => {
  if (!req.body) {
    res
      .status(HTTP_NO_BODY_PROVIDED)
      .json({ error: 'Необходимо отправить данные' });

    return;
  }

  let user: User.Methods.RegisterUserByGoogle.Request = req.body;
  const isUserExist = !!getUserByLogin(user.login);

  if (isUserExist) {
    user = { ...user, login: `${user.login}-${uuidv4()}` };
  }

  const newUser = addGoogleUserToDB(user);
  const { accessToken, refreshToken } = generateTokens(newUser);

  console.log(`Register user with google\n`);
  res.cookie('cookieToken', refreshToken, { httpOnly: true }).json(accessToken);
};
