import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

type Props = {
  isLogin: boolean;
};

export const GoogleLoginButton: FC<Props> = ({ isLogin }) => {
  const onSuccess = ({ credential }: CredentialResponse) => {
    localStorage.setItem('token', String(credential));
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
      text={isLogin ? 'signin_with' : 'signup_with'}
      width={350}
    />
  );
};
