import { User } from 'types/users';

const testUsers: Array<[number, User]> = [
  [
    0,
    {
      login: 'test',
      email: 'test@mail.ru',
      password: '123456',
      avatar:
        'https://i.pinimg.com/736x/28/50/bc/2850bcda883b5c0aa511ea3b02a04391.jpg',
      id: 0,
    },
  ],
  [
    1,
    {
      login: 'test1',
      email: 'test1@mail.ru',
      password: '123456',
      avatar: null,
      id: 1,
    },
  ],
  [
    2,
    {
      login: 'test2',
      email: 'tes2@mail.ru',
      password: '123456',
      avatar: null,
      id: 2,
    },
  ],
];

export const usersBd: Map<number, User> = new Map([...testUsers]);

export let id = usersBd.size;
export const increaseId = () => id++;
