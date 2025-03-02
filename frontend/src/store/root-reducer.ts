import { combineReducers } from '@reduxjs/toolkit';

import { profileReducer } from './profile/slice';
import baseApi from './services/base';
import { userReducer } from './user/slice';

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
