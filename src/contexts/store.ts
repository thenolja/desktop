import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';

const store = configureStore({ reducer });

export type Dispatch = typeof store.dispatch;
export default store;
