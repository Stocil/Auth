import express from 'express';
import { authenticateToken } from 'middleware/authenticate-token';

import { access } from './token/access';
import { deleteToken } from './token/delete';
import { refresh } from './token/refresh';
import { signIn } from './user/sign-in';
import { signUp } from './user/sign-up';

export const apiRouter = express.Router();

// Роуты для users
apiRouter.route('/sign-up').put(signUp);
apiRouter.route('/sign-in').post(signIn);

// Роуты для токенов
apiRouter.route('/access').get(authenticateToken, access);
apiRouter.route('/refresh').get(refresh);
apiRouter.route('/logout').get(deleteToken);
