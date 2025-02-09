import { Nullable } from '../../types';

export type UserInfo = {
  login: string;
  email: string;
  password: string;
};

export type InitialState = {
  info: Nullable<UserInfo>;
  isLoggin: boolean;
};
