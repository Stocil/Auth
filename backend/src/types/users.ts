export type UserRaw = {
  login: string;
  email: string;
  password: string;
};

export type User = UserRaw & {
  id: number;
};
