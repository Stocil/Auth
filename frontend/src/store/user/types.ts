import { Nullable } from 'types';

export type UserInfo = {
  login: Nullable<string>;
  email: Nullable<string>;
  avatar: Nullable<string>;
};

export type UserInfoWithToken = UserInfo & {
  token: string;
};

export type InitialState = {
  info: UserInfo;
  token: Nullable<string>;
  isLoggin: boolean;
};
