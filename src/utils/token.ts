export const LOCAL_STORAGE_TOKEN_NAME = 'token';

export const getTokenFromLocalStorage = () =>
  localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);

export const setLocalStorageToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
};

export const deleteLocalStorageToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
};
