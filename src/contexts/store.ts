import { configureStore } from '@reduxjs/toolkit';

import reducer from './rootReducer';

const store = configureStore({ reducer });

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
