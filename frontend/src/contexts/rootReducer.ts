import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

import auth from './auth';
import shoppingCart from './shopping';
// root
const reducer = combineReducers({ auth, shoppingCart });

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['auth', 'shoppingCart'],
};

export default persistReducer(persistConfig, reducer);
export type RootState = ReturnType<typeof reducer>;
