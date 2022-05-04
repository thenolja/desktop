import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './rootReducer';

export interface AuthType {
  id: string | null;
  nickname: string | null;
  email: string | null;
  reservations: number[] | null;
  myReviews: number[] | null;
}

const initialState: AuthType = {
  id: null,
  nickname: null,
  email: null,
  reservations: null,
  myReviews: null,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogIn(state, { payload }) {
      return { ...state, ...payload };
    },
    authLogOut() {
      return auth.getInitialState();
    },
    authUpdate(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { authLogIn, authLogOut, authUpdate } = auth.actions;
export const selectAuth = (state: RootState) => state.auth;

export default auth.reducer;
