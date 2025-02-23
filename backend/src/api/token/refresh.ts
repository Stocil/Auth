import { UserLoginResponse } from 'types/users';

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_UNAUTHORIZE } from 'constants/http-codes';
import { SECRET } from 'constants/index';

type Token = string | undefined;

export const refresh = (req: Request, res: Response) => {
  const token: Token = req.cookies?.cookieToken;

  if (!token) {
    res
      .status(HTTP_UNAUTHORIZE)
      .json({ error: 'Не удалось обновить токен, войдите в аккаунт заново' });

    return;
  }

  console.log(`Рефреш токен из кук получен: ${token}\n`);

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res
        .clearCookie('cookieToken')
        .clearCookie('token')
        .status(HTTP_UNAUTHORIZE)
        .json({
          err: {
            ...err,
            message: 'Токен обновления истек, войдите в аккаунт заново',
          },
        });
      return;
    }

    const user = decoded as UserLoginResponse;
    const userData: UserLoginResponse = {
      login: user.login,
      email: user.email,
      avatar: user.avatar,
    };

    const { accessToken } = generateTokens(userData);

    res.cookie('token', accessToken).json(accessToken);
  });
};
