import { FC } from 'react';

import { DefaultServerError } from 'types';
import { GoogleTokenUserData } from 'types/google-token';

import { Typography, TypographyProps } from '@mui/material';
import { CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { useLinkGoogleAccountMutation } from 'store/api/auth';

import { useSnackbar } from 'hooks/use-snackbar';
import { useUpdateUserData } from 'hooks/use-update-user-data';

import { GoogleLoginButton } from 'components/google-login-button';

type Props = {
  typographyProps: TypographyProps;
};

export const ProfileLinkGoogleAccount: FC<Props> = ({ typographyProps }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { onUpdateData } = useUpdateUserData();

  const [linkAccount] = useLinkGoogleAccountMutation();

  const onSuccess = ({ credential }: CredentialResponse) => {
    if (!credential) {
      onError();
      return;
    }

    const { email: gmail } = jwtDecode<GoogleTokenUserData>(credential);

    linkAccount({ gmail })
      .unwrap()
      .then((token) => {
        const successMessage = 'Google аккаунт успешно привязан';
        onUpdateData({ token, successMessage, updateDataFromToken: true });
      })
      .catch((error: DefaultServerError) => {
        const errorMessage = error.data?.error;
        enqueueSnackbar(errorMessage, { variant: 'error' });
      });
  };

  const onError = () => {
    enqueueSnackbar('Не удалось привязать Google аккаунт, повторите попытку', {
      variant: 'error',
    });
  };

  return (
    <>
      <GoogleLoginButton
        onSuccess={onSuccess}
        onError={onError}
        size='medium'
        shape='square'
      />

      <Typography {...typographyProps}>— Привязать Google аккаунт?</Typography>
    </>
  );
};
