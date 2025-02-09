import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user';
import baseApi from './services/base';

const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
