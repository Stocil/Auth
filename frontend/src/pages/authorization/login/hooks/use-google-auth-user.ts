import { DefaultServerError } from 'types';
import { GoogleTokenUserData } from 'types/google-token';

import { CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Location, useLocation } from 'react-router';

import { useCheckUserGoogleLinkMutation } from 'store/api/auth';
import { setAuthorizationModalsState } from 'store/authorization/modals/slice';

import { useLogin } from 'hooks/use-login';
import { useSnackbar } from 'hooks/use-snackbar';

import { routesPaths } from 'routes/routes';

import { HttpCodes } from 'utils/http-codes';

import { LocationStateType } from '../../types';

type Hook = () => {
  onSuccess: (props: CredentialResponse) => void;
  onError: VoidFunction;
};

const userLinkNotFoundError =
  'Для продолжения регистрации нужно придумать пароль';

const successMessage = 'Вы успешно авторизовались через Google';

export const useGoogleAuthUser: Hook = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { onLogin } = useLogin();

  const { state }: Location<LocationStateType> = useLocation();
  const prevPath = state?.prevPath ?? routesPaths.main;

  const [checkUserLink] = useCheckUserGoogleLinkMutation();

  const onSuccess = ({ credential }: CredentialResponse) => {
    if (!credential) {
      onError();
      return;
    }

    const userJWTData = jwtDecode<GoogleTokenUserData>(credential);

    checkUserLink({ gmail: userJWTData.email })
      .unwrap()
      .then((token) => {
        onLogin({ token, successMessage, navigatePathname: prevPath });
      })
      .catch((error: DefaultServerError) => {
        const info = {
          login: userJWTData.name,
          gmail: userJWTData.email,
          avatar: userJWTData.picture,
        };

        if (error.status === HttpCodes.NOT_FOUND) {
          dispatch(setAuthorizationModalsState({ isOpen: true, info }));
          enqueueSnackbar(userLinkNotFoundError, {
            variant: 'error',
          });

          return;
        }

        const errorMessage = error.data?.error;
        enqueueSnackbar(errorMessage, { variant: 'error' });
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
