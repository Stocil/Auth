import { FC } from 'react';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import { setCookieToken } from 'utils/token';

type Props = {
  isLoginPage: boolean;
};

export const GoogleLoginButton: FC<Props> = ({ isLoginPage }) => {
  const onSuccess = ({ credential }: CredentialResponse) => {
    setCookieToken(String(credential));
  };

  const onError = () => {
    console.log('fail');
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      size='large'
      shape='pill'
      theme='filled_black'
      text={isLoginPage ? 'signin_with' : 'signup_with'}
      type='icon'
    />
  );
};
