import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './rootReducer';
import { AuthType, selectAuth } from 'src/contexts/auth';
import { useAppSelector } from 'src/contexts/state.type';

export interface CartType {
  id?: string;
  userId?: string;
  hotelId?: string;
  hotelName?: string;
  roomName?: string;
  hotelAddress?: string;
  imageUrl?: string;
  cost?: number;
  checkInDate?: string;
  checkOutDate?: string;
  chekInTimeInfo?: string;
}

interface CartState {
  loading: boolean;
  error: null | string;
  carts: CartType[];
}
export const allCarts = async () => {
  return await axios
    .get('/carts')
    .then(({ data }) => data)
    .catch(e => console.error(e));
};

export const fetchCarts = createAsyncThunk('cart/getUserID', async userId => {
  const response = await axios.get(`/api/cart/${userId}`);
  return response.data;
});

export const deleteUserCart = createAsyncThunk('cart/deleteUserID', async userId => {
  const response = await axios.delete(`/api/cart/${userId}`);
  return response.data;
});

export const registerUserCart = createAsyncThunk('cart/registerCart', async (useCartInfo: CartType) => {
  console.log(useCartInfo);
  const response = await axios.post('/api/cart/register', useCartInfo);
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
  reducers: {
    setUserCart(state, action) {
      state.carts = action.payload;
    },
  },
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
      .addCase(fetchCarts.rejected, state => {
        state.error = 'Error loading shopping cart information';
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
      })
      .addCase(deleteUserCart.rejected, state => {
        state.error = 'Shopping cart deletion error';
        state.loading = false;
      })
      .addCase(registerUserCart.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUserCart.fulfilled, (state, { payload }) => {
        state.carts = payload;
        console.log(state.carts);
      })
      .addCase(registerUserCart.rejected, state => {
        state.error = 'Add to cart error';
        state.loading = false;
      });
  },
});

export const selectCart = (state: RootState) => state.shoppingCart.carts;

export const { setUserCart } = shoppingCart.actions;
export default shoppingCart.reducer;
