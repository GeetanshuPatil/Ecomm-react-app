// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// load initial cart
const initialState = {
  items: loadCartFromStorage(),
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
        state.items.push({
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          quantity: 1,
        });
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

      if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
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
