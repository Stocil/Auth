import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { InitialState, UserInfoWithToken } from './types';

const initialState: InitialState = {
  info: {
    id: null,
    avatar: null,
    email: null,
    login: null,
  },
  token: null,
  isLoggin: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUserLogin: (state, action: PayloadAction<UserInfoWithToken>) => {
      const { token, ...userInfo } = action.payload;

      state.info = userInfo;
      state.token = token;
      state.isLoggin = true;
    },
    setUserLogout: (state) => {
      state.info = initialState.info;
      state.token = null;
      state.isLoggin = false;
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const userReducer = userSlice.reducer;
