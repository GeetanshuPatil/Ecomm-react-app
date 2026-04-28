// features/products/pages/ProductDetails.jsx
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {convertToINR, formatINR } from "../../../shared/utils/currency";


import { fetchProductById, clearSelectedProduct } from "../productSlice";

import { addToCart } from "../../cart/cartSlice";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, detailsLoading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(clearSelectedProduct()); // 🧠 prevent stale data
    };
  }, [id, dispatch]);

  // 🔴 Error state
  if (error) {
    return <p className="text-red-500 p-4">{error}</p>;
  }

  // 🟡 Loading state
  if (detailsLoading || !selectedProduct) {
    return <ProductDetailsSkeleton />;
  }

    return (
  <div className="grid md:grid-cols-2 gap-10">
    
    {/* Image */}
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
      <img
        src={selectedProduct.thumbnail}
        alt={selectedProduct.title}
        className="w-full h-[380px] object-cover rounded-xl"
      />
    </div>

    {/* Info */}
    <div className="flex flex-col gap-5">
      
      <h1 className="text-2xl font-semibold text-gray-900">
        {selectedProduct.title}
      </h1>

      <p className="text-gray-600 text-sm leading-relaxed">
        {selectedProduct.description}
      </p>

      <p className="text-lg font-semibold text-gray-900">
        {formatINR(convertToINR(selectedProduct.price))}
      </p>

      <button
        onClick={() => {
          dispatch(addToCart(selectedProduct));
          toast.success("Added to cart 🛒");
        }}
        className="mt-2 w-full md:w-fit px-6 py-2.5 rounded-xl bg-black text-white 
                   hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>

    </div>
  </div>
);
};

export default ProductDetails;
