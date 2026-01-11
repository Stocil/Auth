import { User } from 'types/users';

import { getUserByGmail } from 'data-base/helpers/get-user-by-gmail';
import { updateUser } from 'data-base/helpers/update-user';
import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { generateTokens } from 'utils/generate-tokens';
import { getUserDataFromToken } from 'utils/get-user-data-from-token';

import { HTTP_CONFLICT } from 'constants/http-codes';
import { SECRET } from 'constants/index';

export const linkGoogleAccount = (req: Request, res: Response) => {
  const { gmail }: User.Methods.LinkGoogleAccount.Request = req.body;

  const isGmailAlreadyLinkToAccount = Boolean(getUserByGmail(gmail));

  if (isGmailAlreadyLinkToAccount) {
    res
      .status(HTTP_CONFLICT)
      .json({
        error: 'Этот Google-аккаунт уже привязан к другому пользователю',
      });

    return;
  }

  // Указываем как строку, т.к до этого идет мидлвара на проверку токена
  const token = req.headers.authorization?.split(' ')[1] as string;

  jwt.verify(token, SECRET, (_, decoded) => {
    const tokenData = decoded as JwtPayload & User.TokenData;
    const userData = getUserDataFromToken(tokenData);

    if (userData.gmail === gmail) {
      res
        .status(HTTP_CONFLICT)
        .json({ error: 'Этот Google-аккаунт уже привязан к вашему аккаунту' });

      return;
    }

    const userDataWithGmail = { ...userData, gmail };

    const userNewData = updateUser(userDataWithGmail);
    const { accessToken } = generateTokens(userNewData);

    res.json(accessToken);
  });
};
