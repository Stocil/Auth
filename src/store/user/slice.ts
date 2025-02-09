import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, UserInfo } from './types';

const initialState: InitialState = {
  info: null,
  isLoggin: false,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUserLogin: (state, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
      state.isLoggin = true;
    },
    setUserLogout: (state) => {
      state.info = initialState.info;
      state.isLoggin = false;
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const userReducer = userSlice.reducer;
