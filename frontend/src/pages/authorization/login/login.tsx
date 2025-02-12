import { FC } from 'react';

import { SxProps, Typography } from '@mui/material';

import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Input } from 'components/input';
import { Link } from 'components/link';

import { routesPaths } from 'routes/routes';

import { AuthFormEventType } from '../types';
import { LoginHeader } from './login-header';
import { LoginForm, LoginFormFooter, StyledPaper } from './login-styled';

type Props = {
  isLoginPage: boolean;
  onSubmit: (e: AuthFormEventType) => void;
  isLoading: boolean;
};

const sx: SxProps = {
  width: 350,
};

export const Login: FC<Props> = ({ isLoginPage, isLoading, onSubmit }) => {
  const buttonText = isLoginPage ? 'Войти' : 'Зарегистрироваться';
  const tiptext = isLoginPage
    ? 'Нет аккаунта, зарегистрироваться?'
    : 'Есть аккаунт, войти?';
  const linkTo = isLoginPage ? routesPaths.signUp : routesPaths.signIn;

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

      <LoginFormFooter>
        <Divider sx={sx} />

        <Typography variant='body2' color='primary'>
          <Link linkTo={linkTo}>{tiptext}</Link>
        </Typography>
        <GoogleLoginButton isLoginPage={isLoginPage} />
      </LoginFormFooter>
    </StyledPaper>
  );
};
