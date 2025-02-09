import { Auth } from '../../../types/entities/auth';
import baseApi from '../../services/base';

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
        url: 'login',
        method: 'POST',
        body,
      }),
    }),

    logoutUser: builder.mutation<
      Auth.Methods.LogoutUser.Response,
      Auth.Methods.LogoutUser.Request
    >({
      query: (body) => ({
        url: 'logout',
        method: 'POST',
        body,
      }),
    }),

    refreshUserToken: builder.mutation({
      query: () => 'refresh',
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserTokenMutation,
} = authApi;
