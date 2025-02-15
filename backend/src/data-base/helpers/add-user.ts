import { UserRaw } from 'types/users';

import { id, increaseId, usersBd } from 'data-base/data-base';

export const addUserToDB = (user: UserRaw) => {
  const newUser = {
    ...user,
    id,
  };

  usersBd.set(id, newUser);
  increaseId();
};
