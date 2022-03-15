import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    authLogIn(state, { payload }) {
      return { ...state, ...payload };
    },
    authLogOut() {
      return auth.getInitialState();
    },
  },
});

export const { authLogIn, authLogOut } = auth.actions;
export default auth.reducer;
