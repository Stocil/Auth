import express from 'express';

import { signUp } from './user/sign-up.js';

export const apiRouter = express.Router();

// Роуты для users
apiRouter.route('/sign-up').put(signUp);
