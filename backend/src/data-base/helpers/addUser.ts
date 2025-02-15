import { User, UserRaw } from 'types/users';

import { id, increaseId, usersBd } from 'data-base/data-base';

export const addUserToDB = (user: UserRaw) => {
  const newUser: User = {
    ...user,
    id: id,
  };

  usersBd.push(newUser);
  increaseId();
};
