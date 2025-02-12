import { useDispatch } from 'react-redux';
import { Location, useLocation, useNavigate } from 'react-router';

import { useLoginUserMutation, useRegisterUserMutation } from 'store/api/auth';
import { setUserLogin } from 'store/user/slice';

import { routesPaths } from 'routes/routes';

import { AuthFormEventType, FormFields } from '../types';

type Hook = () => {
  isLoginPage: boolean;
  onSubmit: (e: AuthFormEventType) => void;
  isLoading: boolean;
};

type LocationStateType = {
  prevPath: string | undefined;
};

export const useAuthUser: Hook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state }: Location<LocationStateType> = useLocation();
  const prevPath = state?.prevPath;

  const { pathname } = useLocation();
  const isLoginPage = pathname === routesPaths.signIn;

  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterUserMutation();

  const onSuccess = (fields: FormFields) => {
    fields.login.value = '';
    fields.password.value = '';

    if (fields.email) {
      fields.email.value = '';
    }

    navigate({ pathname: prevPath });
  };

  const onLoginUser = (e: AuthFormEventType) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { login, password } = form;

    const loginData = {
      login: login.value,
      password: password.value,
    };

    loginUser(loginData)
      .unwrap()
      .then((data) => {
        dispatch(setUserLogin(data));
        onSuccess({ login, password });
      });
  };

  const onRegisterUser = (e: AuthFormEventType) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { login, email, password } = form;

    const registerData = {
      login: login.value,
      email: String(email?.value),
      password: password.value,
    };

    registerUser(registerData)
      .unwrap()
      .then((data) => {
        dispatch(setUserLogin(data));
        onSuccess({ login, password, email });
      });
  };

  // TODO: В then добавить редирект на callBack страницу
  const onSubmit = isLoginPage ? onLoginUser : onRegisterUser;
  const isLoading = isLoginLoading || isRegisterLoading;

  return { isLoginPage, onSubmit, isLoading };
};
