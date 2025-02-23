import { FC } from 'react';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

import { setCookieToken } from 'utils/token';

export const GoogleLoginButton: FC = () => {
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
      type='icon'
    />
  );
};
