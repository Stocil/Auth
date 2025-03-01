import { Nullable } from 'types';

export namespace User {
  export type Entity = {
    id: number;
    login: string;
    email: string;
    avatar: Nullable<string>;
  };

  export namespace Methods {
    export namespace EditUser {
      export type Request = Entity;
      export type Response = string;
    }
  }
}
