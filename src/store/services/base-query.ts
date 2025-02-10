import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

import { HttpCodes } from 'utils/http-codes';

import { baseUrl } from '../api/constants';

export const baseQueryConfig: FetchBaseQueryArgs = {
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    // TODO: Возможно исправить
    const token = window.localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
};

const baseQuery = fetchBaseQuery(baseQueryConfig);

type Args = string | FetchArgs;

const baseQueryWithReauth: BaseQueryFn<
  Args,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let preparedArgs: Args;

  // условие срабатывает, когда из колбэка в параметре query возвращаем строку вместо объекта ex: query: () => 'login'
  if (typeof args === 'string') {
    preparedArgs = `${args}`;
  } else {
    preparedArgs = args;
  }

  let result = await baseQuery(preparedArgs, api, extraOptions);

  if (result.error && result.error.status === HttpCodes.UNAUTHORIZED) {
    // await refreshToken(); TODO: Рефрешить токен тут
    result = await baseQuery(preparedArgs, api, extraOptions);
  }

  return result;
};

export default baseQueryWithReauth;
