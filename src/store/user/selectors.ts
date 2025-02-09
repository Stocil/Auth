import { RootState } from '../';

export const getUserInfo = (state: RootState) => state.user.info;

export const getUserState = (state: RootState) => state.user;
