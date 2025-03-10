import { CredentialResponse } from '@react-oauth/google';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Location, useLocation, useNavigate } from 'react-router';

import { useCheckUserGoogleLinkMutation } from 'store/api/auth';

import { useSnackbar } from 'hooks/use-snackbar';

import { routesPaths } from 'routes/routes';

import { setCookieToken } from 'utils/token';

import { LocationStateType } from '../../types';

type UserGoogleData = JwtPayload & {
  name: string;
  email: string;
  picture: string;
};

type Hook = () => {
  onSuccess: (props: CredentialResponse) => void;
  onError: VoidFunction;
};

export const useGoogleAuthUser: Hook = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { state }: Location<LocationStateType> = useLocation();
  const prevPath = state?.prevPath ?? routesPaths.main;

  const [checkUserLink] = useCheckUserGoogleLinkMutation();

  const onSuccess = ({ credential }: CredentialResponse) => {
    if (!credential) {
      onError();
      return;
    }

    const userJWTData = jwtDecode<UserGoogleData>(credential);

    checkUserLink({ gmail: userJWTData.email })
      .unwrap()
      .then((token) => {
        setCookieToken(token);
        navigate({ pathname: prevPath });
      });
  };

  const onError = () => {
    enqueueSnackbar(
      'Не удалось войти в аккаунт через Google, повторите попытку',
      { variant: 'error' },
    );
  };

  return { onSuccess, onError };
};
