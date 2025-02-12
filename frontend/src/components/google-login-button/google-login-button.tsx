import { FC } from 'react';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import { setLocalStorageToken } from 'utils/token';

type Props = {
  isLoginPage: boolean;
};

export const GoogleLoginButton: FC<Props> = ({ isLoginPage }) => {
  const onSuccess = ({ credential }: CredentialResponse) => {
    setLocalStorageToken(String(credential));
  };

  const onError = () => {
    console.log('fail');
  };

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      size='large'
      shape='circle'
      theme='filled_blue'
      text={isLoginPage ? 'signin_with' : 'signup_with'}
      width={350}
    />
  );
};
