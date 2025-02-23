import { FC } from 'react';

import { Typography } from '@mui/material';

import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Link } from 'components/link';

import { LoginFooterButtons, LoginFormFooter } from './login-styled';

type Props = {
  link: string;
  tipText: string;
};

export const LoginFooter: FC<Props> = ({ link, tipText }) => {
  return (
    <LoginFormFooter>
      <LoginFooterButtons>
        <Typography variant='body2' color='#8d8d8d'>
          Или же вы можете войти с помощью
        </Typography>

        <GoogleLoginButton />
      </LoginFooterButtons>

      <Divider />

      <Typography variant='body1' color='primary'>
        <Link linkTo={link}>{tipText}</Link>
      </Typography>
    </LoginFormFooter>
  );
};
