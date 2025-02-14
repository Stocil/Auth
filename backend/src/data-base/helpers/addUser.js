import { id, increaseId, usersBd } from '../data-base.js';

export const addUserToDB = (user) => {
  const newUser = {
    ...user,
    id: id,
  };

  usersBd.push(newUser);
  increaseId();
};
