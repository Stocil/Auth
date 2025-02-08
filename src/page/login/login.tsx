import { FC } from 'react';

import { Page } from '../../features/page';
import { GoogleLoginButton } from '../../components/google-login-button';
import { Input } from '../../components/input';
import { LoginForm, StyledPaper } from './login-styled';
import { SxProps } from '@mui/material';
import { Divider } from '../../components/divider';
import { useLocation } from 'react-router';
import { routesPaths } from '../../routes/routes';
import { Button as SubmitButton } from '../../components/button';
import { LoginHeader } from './login-header';

const sx: SxProps = {
  width: 350,
};

export const Login: FC = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === routesPaths.signIn;

  const buttonText = isLogin ? 'Войти' : 'Зарегистрироваться';

  return (
    <Page>
      <StyledPaper>
        <LoginHeader isLogin={isLogin} />

        <LoginForm>
          <Input placeholder='Логин' sx={sx} />
          {!isLogin && <Input placeholder='Почта' sx={sx} />}
          <Input placeholder='Пароль' sx={sx} />

          <SubmitButton text={buttonText} />
        </LoginForm>

        <Divider sx={sx} />

        <GoogleLoginButton isLogin={isLogin} />
      </StyledPaper>
    </Page>
  );
};
