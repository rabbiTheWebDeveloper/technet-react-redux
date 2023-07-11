import { IProduct } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}
const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action :PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    }
  },
});

export default cartSlice.reducer;
