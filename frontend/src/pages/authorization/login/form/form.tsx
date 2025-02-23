import { FC, useEffect } from 'react';

import { SxProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { useAuthUser } from 'pages/authorization/hooks';
import { AuthFormInputs } from 'pages/authorization/types';

import { Button } from 'components/button';

import { authorizationFormDefaultValues } from '../constants';
import { LoginForm } from '../login-styled';
import { AuthorizationEmailField } from './email-field';
import { AuthorizationLoginField } from './login-field';
import { AuthorizationPasswordField } from './password-field';
import { AuthorizationRepeatPasswordField } from './repeat-password-field';

const buttonSx: SxProps = { marginTop: 2 };

export const AuthorizationForm: FC = () => {
  const { handleSubmit, reset } = useFormContext<AuthFormInputs>();
  const { onSubmit, isLoading, isLoginPage } = useAuthUser();

  const buttonText = isLoginPage ? 'Войти' : 'Зарегистрироваться';

  useEffect(() => {
    reset({ ...authorizationFormDefaultValues });
  }, [isLoginPage]);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <AuthorizationLoginField />

      {!isLoginPage && <AuthorizationEmailField />}

      <AuthorizationPasswordField />

      {!isLoginPage && <AuthorizationRepeatPasswordField />}

      <Button
        type='submit'
        text={buttonText}
        disabled={isLoading}
        sx={buttonSx}
        fullWidth
      />
    </LoginForm>
  );
};
