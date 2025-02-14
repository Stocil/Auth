import express from 'express';

import { signUp } from './user/sign-up.js';

export const userRouter = express.Router();

// Роуты для users
userRouter.route('/sign-up').put(signUp);
