import { User, UserRaw } from 'types/users.js';

import { id, increaseId, usersBd } from '../data-base.js';

export const addUserToDB = (user: UserRaw) => {
  const newUser: User = {
    ...user,
    id: id,
  };

  usersBd.push(newUser);
  increaseId();
};
