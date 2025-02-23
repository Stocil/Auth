import { Nullable } from 'types';

export type UserInfo = {
  login: string;
  email: string;
};

export type UserInfoWithToken = UserInfo & {
  token: string;
};

export type InitialState = {
  info: Nullable<UserInfo>;
  token: Nullable<string>;
  isLoggin: boolean;
};
