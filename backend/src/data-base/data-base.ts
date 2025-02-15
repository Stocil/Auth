import { User } from 'types/users';

const testUsers: User[] = [
  {
    login: 'test',
    email: 'test@mail.ru',
    password: 'test',
    id: 0,
  },
  {
    login: 'test1',
    email: 'test1@mail.ru',
    password: 'test1',
    id: 1,
  },
  {
    login: 'test2',
    email: 'tes2@mail.ru',
    password: 'test2',
    id: 2,
  },
];

export const usersBd = [...testUsers];

export let id = usersBd.length;
export const increaseId = () => id++;
