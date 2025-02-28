import { User } from 'types/users';

import { getUserByLogin } from 'data-base/helpers/get-user-by-login';
import { Request, Response } from 'express';

import { HTTP_CONFLICT, HTTP_NO_BODY_PROVIDED } from 'constants/http-codes';

export const editUserData = (req: Request, res: Response) => {
  if (!req.body) {
    res
      .status(HTTP_NO_BODY_PROVIDED)
      .json({ error: 'Необходимо отправить корректные данные' });

    return;
  }

  const currentUserNewData: User.Methods.EditUser.Request = req.body;
  const isLoginExist = !!getUserByLogin(currentUserNewData.login);

  if (isLoginExist) {
    res
      .status(HTTP_CONFLICT)
      .json({ error: 'Пользователь с данным логином уже существует' });

    return;
  }

  // TODO Обновлять данные пользователя в БД, получать новые данные
  // TODO Создавать новый access токен с новыми данными внутри, отправлять токен на FE
  // TODO Обновлять токен в куках на FE
};
