import { Nullable } from 'types';

export type UserInfo = {
  login: string;
  email: string;
};

export type InitialState = {
  info: Nullable<UserInfo>;
  isLoggin: boolean;
};
