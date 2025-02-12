import { FC } from 'react';

import { SxProps } from '@mui/material';

import { Button } from 'components/button';
import { Divider } from 'components/divider';
import { GoogleLoginButton } from 'components/google-login-button';
import { Input } from 'components/input';

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

        {
          // TODO: Добавить ссылку на "Нет аккаунта? Зарегистрироваться"
        }
        <GoogleLoginButton isLoginPage={isLoginPage} />
      </LoginFormFooter>
    </StyledPaper>
  );
};
