import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="bg-white border rounded-2xl p-8 text-center max-w-md w-full shadow-sm">

        {/* Success Icon */}
        <div className="text-5xl mb-4">🎉</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Order Placed Successfully!
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be delivered soon.
        </p>

        {/* Order ID (fake or later from backend) */}
        <div className="bg-gray-50 border rounded-lg p-3 text-sm mb-6">
          Order ID: <span className="font-medium">#ORD{Date.now()}</span>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-block w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
};

export default OrderSuccess;