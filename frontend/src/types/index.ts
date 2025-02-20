export type Nullable<T> = T | null;

export type DefaultServerError = {
  status: number;
  data?: {
    error?: string;
  };
};
