export namespace Auth {
  export type Entity = {
    login: string;
    email: string;
    password: string;
  };

  export type UserInfo = Omit<Entity, 'password'>;

  export namespace Methods {
    export namespace RegisterUser {
      export type Request = Entity;
      export type Response = UserInfo;
    }

    export namespace LoginUser {
      export type Request = Omit<Entity, 'email'>;
      export type Response = UserInfo;
    }
  }
}
