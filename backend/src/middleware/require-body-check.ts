import { NextFunction, Request, Response } from 'express';

import { checkIsObjectEmpty } from 'utils/check-is-object-empty';

import { HTTP_NO_BODY_PROVIDED } from 'constants/http-codes';

export const requireBodyCheck = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (checkIsObjectEmpty(req.body)) {
    console.log('Пустое тело запроса, необходимо отправить данные');

    res
      .status(HTTP_NO_BODY_PROVIDED)
      .json({ error: 'Необходимо отправить данные' });

    return;
  }

  next();
};
