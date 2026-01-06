import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { setUserLogin } from 'store/user/slice';

import { getUserDataFromToken, setCookieToken } from 'utils/token';

import { useSnackbar } from './use-snackbar';

type onLoginParams = {
  token: string;
  successMessage: string;
  navigatePathname?: string;
};

type Hook = () => {
  onLogin: (params: onLoginParams) => void;
};

export const useLogin: Hook = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onLogin = ({
    token,
    successMessage,
    navigatePathname,
  }: onLoginParams) => {
    const userData = getUserDataFromToken(token);

    setCookieToken(token);
    dispatch(setUserLogin({ ...userData, token }));
    enqueueSnackbar(successMessage);

    if (navigatePathname) {
      navigate({ pathname: navigatePathname });
    }
  };

  return { onLogin };
};
