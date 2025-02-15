export type UserRaw = {
  login: string;
  email: string;
  password: string;
};

export type UserLoginRequest = Omit<UserRaw, 'email'>;

export type User = UserRaw & {
  id: number;
};
