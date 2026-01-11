import { JwtPayload } from 'jwt-decode';

export type GoogleTokenUserData = JwtPayload & {
  name: string;
  email: string;
  picture: string;
};
