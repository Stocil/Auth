import { UserLoginResponse } from 'types/users';

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { generateTokens } from 'utils/generate-tokens';

import { HTTP_UNAUTHORIZE } from 'constants/http-codes';
import { SECRET } from 'constants/index';

type Token = string | undefined;

export const refresh = (req: Request, res: Response) => {
  const token: Token = req.cookies?.token;

  if (!token) {
    res
      .status(HTTP_UNAUTHORIZE)
      .json({ error: 'Не удалось обновить токен, войдите в аккаунт заново' });

    return;
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res
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
    const userData = {
      login: user.login,
      email: user.email,
    };

    const { accessToken } = generateTokens(userData);

    res.json(accessToken);
  });
};
