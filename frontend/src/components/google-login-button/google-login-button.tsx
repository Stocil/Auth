import { FC } from 'react';

import {
  CredentialResponse,
  GoogleLogin,
  GoogleLoginProps,
} from '@react-oauth/google';

type Props = GoogleLoginProps & {
  onSuccess: (props: CredentialResponse) => void;
  onError: VoidFunction;
};

export const GoogleLoginButton: FC<Props> = ({
  onSuccess,
  onError,
  ...props
}) => {
  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={onError}
      size='large'
      shape='pill'
      theme='filled_black'
      type='icon'
      {...props}
    />
  );
};
