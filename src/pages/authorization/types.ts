import { FormEvent } from 'react';

export type FormFields = {
  login: HTMLInputElement;
  email?: HTMLInputElement;
  password: HTMLInputElement;
};

export type AuthFormEventType = FormEvent<HTMLFormElement & FormFields>;
