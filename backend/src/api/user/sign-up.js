import express from 'express';

import { usersBd } from '../../data-base/data-base.js';
import { addUserToDB } from '../../data-base/helpers/addUser.js';

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

export const signUp = (req, res) => {
  if (!req.body) res.status(400).send('Необходимо отправить данные');

  const user = req.body;
  addUserToDB(user);

  res.json({ users: usersBd });
};
