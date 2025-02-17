import { FC } from 'react';

import { SxProps } from '@mui/material';

import { AuthFormEventType } from '../types';
import { LoginFooter } from './login-footer';
import { LoginHeader } from './login-header';
import { LoginInputs } from './login-inputs';
import { LoginForm, StyledPaper } from './login-styled';

type Props = {
  isLoginPage: boolean;
  onSubmit: (e: AuthFormEventType) => void;
  isLoading: boolean;
};

const sx: SxProps = {
  width: 350,
};

export const Login: FC<Props> = ({ isLoginPage, isLoading, onSubmit }) => {
  return (
    <StyledPaper>
      <LoginHeader isLoginPage={isLoginPage} />

      <LoginForm onSubmit={onSubmit}>
        <LoginInputs
          isLoginPage={isLoginPage}
          isLoading={isLoading}
          inputSx={sx}
        />
      </LoginForm>

      <LoginFooter isLoginPage={isLoginPage} dividerSx={sx} />
    </StyledPaper>
  );
};
