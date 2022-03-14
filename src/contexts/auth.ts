import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    currentUser: null,
  },
  reducers: {
    authLogin(state, { payload }) {
      return { ...state, ...payload };
    },
    authLogOut() {
      return auth.getInitialState();
    },
  },
});

export const { authLogin, authLogOut } = auth.actions;
export default auth.reducer;
