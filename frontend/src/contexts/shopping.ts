import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import auth from './auth';
import { RootState } from './rootReducer';
import { selectAuth } from 'src/contexts/auth';
import { useAppSelector } from './state.type';

export interface CartType {
  id?: string;
  userId?: string;
  hotelId?: string;
  hotelName?: string;
  hotelAddress?: string;
  imageUrl?: string;
  cost?: number;
  checkInDate?: string;
  checkOutDate?: string;
  checkInTimeInfo?: string;
}

interface MyKnownError {
  errorMessage: '알수없는 에러발견';
}

interface CartState {
  loading: boolean;
  error: null | string;
  carts: CartType[];
}

export const fetchCarts = createAsyncThunk('cart/getUserID', async userId => {
  const response = await axios.get(`/api/cart/${userId}`);
  return response.data;
});

export const deleteUserCart = createAsyncThunk('cart/deleteUserID', async userId => {
  const response = await axios.delete(`/api/cart/${userId}`);
  return response.data;
});

const initialState: CartState = {
  loading: false,
  error: null,
  carts: [],
};

export const shoppingCart = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCarts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.carts = payload;
      })
      .addCase(fetchCarts.rejected, (state, { payload }) => {
        state.error = '알수없는 에러 발견';
        state.loading = false;
      })
      .addCase(deleteUserCart.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteUserCart.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.carts = payload;
        console.log(state.carts);
      })
      .addCase(deleteUserCart.rejected, (state, { payload }) => {
        state.error = '알수없는 에러 발견';
        state.loading = false;
      });
  },
});

export const selectCart = (state: RootState) => state.shoppingCart;

export default shoppingCart.reducer;
