export type UserRaw = {
  login: string;
  email: string;
  password: string;
  avatar: string | null;
};

export type NewUser = Omit<UserRaw, 'avatar'>;
export type UserLoginRequest = Omit<UserRaw, 'email' | 'avatar'>;
export type UserLoginResponse = Omit<UserRaw, 'password'>;

export type User = UserRaw & {
  id: number;
};
