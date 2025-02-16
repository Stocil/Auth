import express from 'express';

import { access } from './token/access';
import { refresh } from './token/refresh';
import { signIn } from './user/sign-in';
import { signUp } from './user/sign-up';

export const apiRouter = express.Router();

// Роуты для users
apiRouter.route('/sign-up').put(signUp);
apiRouter.route('/sign-in').post(signIn);

// Роуты для токенов
apiRouter.route('/access').get(access);
apiRouter.route('/refresh').get(refresh);
