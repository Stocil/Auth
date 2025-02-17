import { FC } from 'react';

import { SxProps, Typography } from '@mui/material';

import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Link } from 'components/link';

import { routesPaths } from 'routes/routes';

import { LoginFooterButtons, LoginFormFooter } from './login-styled';

type Props = {
  isLoginPage: boolean;
  dividerSx: SxProps;
};

export const LoginFooter: FC<Props> = ({ isLoginPage, dividerSx }) => {
  const tiptext = isLoginPage
    ? 'Нет аккаунта, зарегистрироваться?'
    : 'Есть аккаунт, войти?';
  const linkTo = isLoginPage ? routesPaths.signUp : routesPaths.signIn;

  return (
    <LoginFormFooter>
      <LoginFooterButtons>
        <Typography
          variant='body2'
          color='#8d8d8d'
        >{`Или же вы можете войти с помощью`}</Typography>

        <GoogleLoginButton isLoginPage={isLoginPage} />
      </LoginFooterButtons>

      <Divider sx={dividerSx} />

      <Typography variant='body1' color='primary'>
        <Link linkTo={linkTo}>{tiptext}</Link>
      </Typography>
    </LoginFormFooter>
  );
};
