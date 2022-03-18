import { createSlice } from '@reduxjs/toolkit';

export interface AuthType {
  currentUser: string | null;
  email: string | null;
}

const initialState: AuthType = {
  currentUser: null,
  email: null,
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
