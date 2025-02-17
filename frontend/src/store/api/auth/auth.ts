import { Auth } from 'types/entities/auth';

import baseApi from 'store/services/base';

export const authApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      Auth.Methods.RegisterUser.Response,
      Auth.Methods.RegisterUser.Request
    >({
      query: (body) => ({
        url: 'sign-up',
        method: 'PUT',
        body,
      }),
    }),

    loginUser: builder.mutation<
      Auth.Methods.LoginUser.Response,
      Auth.Methods.LoginUser.Request
    >({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),

    logoutUser: builder.mutation<void, void>({
      query: () => 'logout',
    }),

    refreshUserToken: builder.mutation({
      query: () => 'refresh',
    }),

    checkUserAccess: builder.query<void, void>({
      query: () => 'access',
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserTokenMutation,
  useCheckUserAccessQuery,
} = authApi;
