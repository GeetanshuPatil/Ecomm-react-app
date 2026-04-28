// features/cart/components/CartSummary.jsx

import { useSelector } from "react-redux";
import { selectCartTotal } from "../cartSelectors";
import { useNavigate } from "react-router-dom";
import { formatINR } from "../../../shared/utils/currency";

const CartSummary = () => {
  const total = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-5 lg:sticky lg:top-20">

      {/* Title */}
      <h2 className="text-base font-semibold text-gray-900">
        Order Summary
      </h2>

      {/* Details */}
      <div className="flex flex-col gap-3 text-sm text-gray-600">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-gray-900">
            {formatINR(total)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-gray-400">Free</span>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Total */}
      <div className="flex justify-between text-sm font-semibold text-gray-900">
        <span>Total</span>
        <span>
          {formatINR(total)}
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={handleCheckout}
        className="mt-1 w-full py-3 rounded-xl bg-black text-white text-sm 
                   hover:bg-gray-800 transition active:scale-[0.98]"
      >
        Proceed to Checkout
      </button>

      {/* Note */}
      <p className="text-xs text-gray-400 text-center">
        Taxes included • Secure checkout
      </p>

    </div>
  );
};

export default CartSummary;