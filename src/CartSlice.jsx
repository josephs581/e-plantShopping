import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // each item will be { name, image, description, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const existingItem = state.items.find(i => i.name === name);
      if (existingItem) {
        existingItem.quantity = amount;
      }
    },
  },
});

// export actions for use in ProductList and CartItem
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
