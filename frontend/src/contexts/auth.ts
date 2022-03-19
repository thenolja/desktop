import { createSlice } from '@reduxjs/toolkit';

export interface AuthType {
  id: string | null;
  nickname: string | null;
  email: string | null;
  phone: string | null;
}

const initialState: AuthType = {
  id: null,
  nickname: null,
  email: null,
  phone: null,
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
  },
});

interface RootState {
  auth: AuthType;
}

export const { authLogIn, authLogOut } = auth.actions;
export const selectAuth = (state: RootState) => state.auth;

export default auth.reducer;
