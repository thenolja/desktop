import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistReducer from './rootReducer';

export const store = configureStore({
  reducer: persistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
