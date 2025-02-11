import { FC } from 'react';

import { SxProps } from '@mui/material';
import { useLocation } from 'react-router';

import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Input } from 'components/input';

import { routesPaths } from 'routes/routes';

import { useAuthUser } from './hooks';
import { LoginHeader } from './login-header';
import { LoginForm, StyledPaper } from './login-styled';

const sx: SxProps = {
  width: 350,
};

export const Login: FC = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === routesPaths.signIn;

  const { onSubmit, isLoading } = useAuthUser();

  const buttonText = isLoginPage ? 'Войти' : 'Зарегистрироваться';

  return (
    <StyledPaper>
      <LoginHeader isLoginPage={isLoginPage} />

      <LoginForm onSubmit={onSubmit}>
        <Input name='login' placeholder='Логин' required sx={sx} />

        {!isLoginPage && (
          <Input
            name='email'
            type='email'
            placeholder='Почта'
            required
            sx={sx}
          />
        )}

        <Input
          name='password'
          type='password'
          placeholder='Пароль'
          required
          sx={sx}
        />

        <Button type='submit' text={buttonText} disabled={isLoading} />
      </LoginForm>

      <Divider sx={sx} />

      {
        // TODO: Добавить ссылку на "Нет аккаунта? Зарегистрироваться"
      }
      <GoogleLoginButton isLoginPage={isLoginPage} />
    </StyledPaper>
  );
};
