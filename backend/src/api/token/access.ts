import { UserLoginResponse } from 'types/users';

import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { HTTP_UNAUTHORIZE } from 'constants/http-codes';
import { SECRET } from 'constants/index';

export const access = (req: Request, res: Response) => {
  const { headers } = req;

  const token = headers.authorization?.split(' ')[1];

  // TODO Переделать в мидлвару, а в запросе будет просто 200 или 401
  if (!token) {
    res.status(HTTP_UNAUTHORIZE).json({ error: 'Токен доступа не найден' });
    return;
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.status(HTTP_UNAUTHORIZE).json({ err });
      return;
    }

    const user = decoded as UserLoginResponse;

    res.json({
      user: {
        login: user.login,
        email: user.email,
      },
    });
  });
};
