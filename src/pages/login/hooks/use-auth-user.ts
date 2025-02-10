import { FormEvent } from 'react';

import { useLocation } from 'react-router';

import { useLoginUserMutation, useRegisterUserMutation } from 'store/api/auth';

import { routesPaths } from 'routes/routes';

import { FormFields, FormFieldsTypes } from '../types';

type EventType = FormEvent<HTMLFormElement & FormFields>;

type Hook = () => {
  onSubmit: (e: EventType) => void;
  isLoading: boolean;
};

export const useAuthUser: Hook = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === routesPaths.signIn;

  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterUserMutation();

  // TODO: В then добавить редирект на callBack страницу
  // TODO: Добавить очистку полей
  // TODO: После реализации ручки на BE, в then добавлять user в стор
  const onSubmit = (e: EventType) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { login, email, password } = form;

    const loginData: FormFieldsTypes = {
      login: login.value,
      password: password.value,
    };

    if (isLogin) {
      loginUser(loginData);

      return;
    }

    const registerData = {
      ...loginData,
      email: String(email?.value),
    };

    registerUser(registerData);
  };

  const isLoading = isLoginLoading || isRegisterLoading;

  return { onSubmit, isLoading };
};
