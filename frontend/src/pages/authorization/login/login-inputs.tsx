import { FC } from 'react';

import { SxProps } from '@mui/material';

import { Button } from 'components/button';
import { Input } from 'components/input';

type Props = {
  isLoginPage: boolean;
  isLoading: boolean;
  inputSx: SxProps;
};

export const LoginInputs: FC<Props> = ({ isLoginPage, isLoading, inputSx }) => {
  const buttonText = isLoginPage ? 'Войти' : 'Зарегистрироваться';

  return (
    <>
      <Input name='login' placeholder='Логин' required sx={inputSx} />

      {!isLoginPage && (
        <Input
          name='email'
          type='email'
          placeholder='Почта'
          required
          sx={inputSx}
        />
      )}

      <Input
        name='password'
        type='password'
        placeholder='Пароль'
        required
        sx={inputSx}
      />

      <Button type='submit' text={buttonText} disabled={isLoading} />
    </>
  );
};
