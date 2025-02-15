import express from 'express';

import { signIn } from './user/sign-in';
import { signUp } from './user/sign-up';

export const apiRouter = express.Router();

// Роуты для users
apiRouter.route('/sign-up').put(signUp);
apiRouter.route('/sign-in').post(signIn);
