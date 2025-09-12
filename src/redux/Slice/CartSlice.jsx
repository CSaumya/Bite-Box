import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id)

      if (existingItem) {
        state.cart = state.cart.map((item) => item.id == action.payload.id ? {...item, qty : item +1} : item);
      } 
      else {
        state.cart.push(action.payload);
      }
    },

      removeFromCart: (state, action) => {
      const id = action.payload; 
      state.cart = state.cart.filter(item => String(item.id) !== String(id));
    },

    incrementQty: (state, action) => {
      const id = action.payload;
      const item = state.cart.find(item => String(item.id) === String(id));
      if (item) item.qty += 1;
    },

    decrementQty: (state, action) => {
      const id = action.payload; 
      const item = state.cart.find(item => String(item.id) === String(id));
      if (!item) return;
           if (item.qty > 1) {
        item.qty -= 1;
      } else {
        item.qty = 1;
      }
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions
export default CartSlice.reducer
