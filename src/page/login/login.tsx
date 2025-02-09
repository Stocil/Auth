import { SxProps } from '@mui/material';
import { Page } from 'features/page';
import { FC, FormEvent } from 'react';
import { useLocation } from 'react-router';
import { routesPaths } from 'routes/routes';

import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Input } from 'components/input';

import { LoginHeader } from './login-header';
import { LoginForm, StyledPaper } from './login-styled';

const sx: SxProps = {
  width: 350,
};

export const Login: FC = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === routesPaths.signIn;

  const buttonText = isLogin ? 'Войти' : 'Зарегистрироваться';

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Page>
      <StyledPaper>
        <LoginHeader isLogin={isLogin} />

        <LoginForm onSubmit={onSubmit}>
          <Input placeholder='Логин' sx={sx} />
          {!isLogin && <Input placeholder='Почта' sx={sx} />}
          <Input placeholder='Пароль' sx={sx} />

          <Button type='submit' text={buttonText} />
        </LoginForm>

        <Divider sx={sx} />

        <GoogleLoginButton isLogin={isLogin} />
      </StyledPaper>
    </Page>
  );
};
