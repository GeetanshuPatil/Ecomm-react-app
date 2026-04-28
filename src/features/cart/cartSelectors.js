import { convertToINR } from "../../shared/utils/currency";

export const selectCartItems = (state) => state.cart?.items || [];

export const selectCartTotal = (state) => {
  const items = state.cart?.items || [];

  return items.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 1);
  }, 0);
};

// ✅ Formatted total (for UI)
export const selectCartTotalFormatted = (state) => {
  const total = selectCartTotal(state);
  return convertToINR(total);
};

// ✅ Total quantity
export const selectCartCount = (state) => {
  const items = state.cart?.items || [];

  return items.reduce((count, item) => count + item.quantity, 0);
};