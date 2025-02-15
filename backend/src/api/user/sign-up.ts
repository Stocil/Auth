import { UserRaw } from 'types/users.js';

import { Request, Response } from 'express';

import { usersBd } from '../../data-base/data-base.js';
import { addUserToDB } from '../../data-base/helpers/addUser.js';

export const signUp = (req: Request, res: Response) => {
  if (!req.body) res.status(400).send('Необходимо отправить данные');

  const user: UserRaw = req.body;
  addUserToDB(user);

  res.json({ users: usersBd });
};
