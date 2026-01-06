import { DefaultServerError } from 'types';

import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Location, useLocation } from 'react-router';

import { useRegisterUserByGoogleMutation } from 'store/api/auth';
import { getAuthorizationPasswordModalState } from 'store/authorization/modals/selectors';
import { setAuthorizationModalsState } from 'store/authorization/modals/slice';

import { useLogin } from 'hooks/use-login';
import { useSnackbar } from 'hooks/use-snackbar';

import { authorizationFormTexts } from 'pages/authorization/login/constants';
import { LocationStateType } from 'pages/authorization/types';

import { routesPaths } from 'routes/routes';

import { PasswordModalFormInputs } from '../../types';

const successMessage = 'Вы успешно зарегистрировались через Google';

export const useSubmitNewGoogleAccountPasswordForm = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { onLogin } = useLogin();

  const { info } = useSelector(getAuthorizationPasswordModalState);

  const { state }: Location<LocationStateType> = useLocation();
  const prevPath = state?.prevPath ?? routesPaths.main;

  const { getValues, setError } = useFormContext<PasswordModalFormInputs>();
  const [registerUserByGoogle, { isLoading }] =
    useRegisterUserByGoogleMutation();

  const onCloseModal = () => {
    dispatch(setAuthorizationModalsState());
  };

  const onSubmit = () => {
    if (!info) return;

    const { password, repeatPassword } = getValues();

    if (password !== repeatPassword) {
      setError('password', {
        type: 'custom',
        message: authorizationFormTexts.validationErrors.passwordDontMatch,
      });
      setError('repeatPassword', {
        type: 'custom',
        message: authorizationFormTexts.validationErrors.passwordDontMatch,
      });

      return;
    }

    const newUserData = {
      ...info,
      password,
    };

    registerUserByGoogle(newUserData)
      .unwrap()
      .then((token) => {
        onLogin({ token, successMessage, navigatePathname: prevPath });
      })
      .catch((e: DefaultServerError) => {
        const message = e.data?.error;
        enqueueSnackbar(message, { variant: 'error' });
      })
      .finally(onCloseModal);
  };

  return { onSubmit, isLoading };
};
