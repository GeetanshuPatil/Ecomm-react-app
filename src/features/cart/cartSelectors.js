import { convertToINR } from "../../shared/utils/currency";

export const selectCartItems = (state) => state.cart?.items || [];

export const selectCartTotal = (state) => {
  const items = state.cart?.items || [];

  return items.reduce((total, item) => {
    return (
      total +
      convertToINR(item.price || 0) * (item.quantity || 1)
    );
  }, 0);
};