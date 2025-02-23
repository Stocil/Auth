import { NewUser, User } from 'types/users';

import { id, increaseId, usersBd } from 'data-base/data-base';

export const addUserToDB = (user: NewUser) => {
  const newUser: User = {
    ...user,
    avatar: null,
    id,
  };

  usersBd.set(id, newUser);
  increaseId();
};
