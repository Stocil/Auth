import { User } from 'types/users';

import { usersBd } from 'data-base/data-base';

import { getUserById } from './getUserById';

type Helper = (login: User['login']) => User | null;

export const getUserByLogin: Helper = (login) => {
  let userId: number | null = null;

  for (let user of usersBd.values()) {
    if (user.login === login) {
      userId = user.id;
      break;
    }
  }

  if (!userId) return null;

  return getUserById(userId) ?? null;
};
