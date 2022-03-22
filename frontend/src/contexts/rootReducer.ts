import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

import auth from './auth';

// root
const reducer = combineReducers({ auth });

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['auth'],
};

export type Reducer = ReturnType<typeof reducer>;
export default persistReducer(persistConfig, reducer);
