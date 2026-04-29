import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selectCartTotal } from "../../cart/cartSelectors";
import { selectIsAuthenticated } from "../../auth/authSelectors";
import BackButton from "../../../shared/components/BackButton";
import { formatINR, convertToINR } from "../../../shared/utils/currency";

const PaymentPortal = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const total = useSelector(selectCartTotal);
  let navigate = useNavigate()

  const [method, setMethod] = useState("cod"); // 🔥 FIX

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  let handlePlaced = ()=>{
    navigate("/order-success");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="p-6">
      <BackButton />

      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">
        Payment Portal
      </h1>

      {/* Order Summary */}
      <div className="bg-white border rounded-xl p-4 mb-6">
        <h2 className="font-medium mb-3">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>{formatINR(convertToINR(total))}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Total</span>
          <span className="font-semibold">{formatINR(convertToINR(total))}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white border rounded-xl p-4 mb-6">
        <h2 className="font-medium mb-4">Select Payment Method</h2>

        {/* COD */}
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          Cash on Delivery (Available)
        </label>

        {/* CARD */}
        <label className="flex items-center gap-2 mb-3 text-gray-400">
          <input type="radio" disabled />
          Card Payment (Coming Soon)
        </label>

        {/* UPI */}
        <label className="flex items-center gap-2 text-gray-400">
          <input type="radio" disabled />
          UPI Payment (Coming Soon)
        </label>
      </div>

      {/* Confirm Button */}
      <button 
      onClick={handlePlaced}
      className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
        Place Order (Cash on Delivery)
      </button>

    </div>
    </div>
  );
};

export default PaymentPortal;