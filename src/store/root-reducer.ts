import { combineReducers } from '@reduxjs/toolkit';

import baseApi from './services/base';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
