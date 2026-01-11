import express from 'express';
import { allowedCheck } from 'middleware/allowed-check';
import { authenticateToken } from 'middleware/authenticate-token';
import { requireBodyCheck } from 'middleware/require-body-check';

import { access } from './token/access';
import { deleteToken } from './token/delete';
import { refresh } from './token/refresh';
import { editUserData } from './user/edit';
import { getUser } from './user/get';
import { checkGoogleLink } from './user/google/check-link';
import { linkGoogleAccount } from './user/google/link-account';
import { signUpByGoogle } from './user/google/sign-up';
import { signIn } from './user/sign-in';
import { signUp } from './user/sign-up';

export const apiRouter = express.Router();

// Роуты для users
apiRouter.route('/sign-up').put(requireBodyCheck, signUp);
apiRouter.route('/sign-in').post(requireBodyCheck, signIn);
apiRouter
  .route('/user/:id')
  .get(getUser)
  .patch(authenticateToken, allowedCheck, requireBodyCheck, editUserData);

// Роуты для токенов
apiRouter.route('/access').get(authenticateToken, access);
apiRouter.route('/refresh').get(refresh);
apiRouter.route('/logout').get(deleteToken);

// Роуты для авторизации через google
apiRouter.route('/google/check-link').post(requireBodyCheck, checkGoogleLink);
apiRouter.route('/google/sign-up').put(requireBodyCheck, signUpByGoogle);
apiRouter
  .route('/google/link')
  .post(authenticateToken, requireBodyCheck, linkGoogleAccount);
