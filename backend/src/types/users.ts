export namespace User {
  export type Entity = {
    id: number;
    login: string;
    email: string;
    password: string;
    avatar: string | null;
  };

  export type TokenData = Omit<Entity, 'password'>;

  export namespace Methods {
    export namespace RegisterUser {
      export type Request = Omit<Entity, 'avatar' | 'id'>;
      export type Response = TokenData;
    }

    export namespace LoginUser {
      export type Request = Omit<Entity, 'id' | 'email' | 'avatar'>;
      export type Response = TokenData;
    }

    export namespace EditUser {
      export type Request = TokenData;
      export type Response = TokenData;
    }

    export namespace GetUser {
      export type Request = void;
      export type Response = TokenData;
    }
  }
}
