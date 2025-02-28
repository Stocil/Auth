import { User } from 'types/users';

import { id, increaseId, usersBd } from 'data-base/data-base';

type Helper = (user: User.Methods.RegisterUser.Request) => User.TokenData;

export const addUserToDB: Helper = (user) => {
  const newUser: User.Entity = {
    ...user,
    avatar: null,
    id,
  };

  usersBd.set(id, newUser);
  increaseId();

  const { password, ...newUserJWTData } = newUser;
  return newUserJWTData;
};
