import { UserRaw } from 'types/users';

import { usersBd } from 'data-base/data-base';
import { addUserToDB } from 'data-base/helpers/addUser';
import { Request, Response } from 'express';

export const signUp = (req: Request, res: Response) => {
  if (!req.body) res.status(400).send('Необходимо отправить данные');

  const user: UserRaw = req.body;
  addUserToDB(user);

  res.json({ users: usersBd });
};
