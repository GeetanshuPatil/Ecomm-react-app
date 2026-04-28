// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

// load initial cart
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
        saveCart(state.items);
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
        saveCart(state.items);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;

        saveCart(state.items);
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;

      }
      saveCart(state.items);
    },

    clearCart: (state) => {
      state.items = [];
        saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
