export namespace Auth {
  export type Entity = {
    login: string;
    email: string;
    password: string;
  };

  export namespace Methods {
    export namespace RegisterUser {
      export type Request = Entity;
      export type Response = string;
    }

    export namespace LoginUser {
      export type Request = Omit<Entity, 'email'>;
      export type Response = string;
    }
  }
}
