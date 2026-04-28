// features/cart/components/CartItem.jsx

import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../cartSlice";
import { convertToINR, formatINR } from "../../../shared/utils/currency";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-200 rounded-2xl p-4 gap-4 hover:shadow-sm transition">
      {/* LEFT */}
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
            {item.title}
          </h3>

           {/* UNIT PRICE */}
          <p className="text-xs text-gray-500">
            {formatINR(convertToINR(item.price))}
          </p>

        </div>
      </div>

      {/* RIGHT SIDE (merged center + right for better layout) */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
          <button
            onClick={() => dispatch(decreaseQty(item.id))}
            className="px-3 py-1.5 hover:bg-gray-100 transition"
          >
            −
          </button>

          <span className="px-3 text-sm">{item.quantity}</span>

          <button
            onClick={() => dispatch(increaseQty(item.id))}
            className="px-3 py-1.5 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>

        {/* Price */}
        <span className="text-sm font-semibold text-gray-900 min-w-[70px] text-right">
          {formatINR(convertToINR(item.price * item.quantity))}
        </span>

        {/* Remove */}
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-gray-400 hover:text-red-500 transition text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
