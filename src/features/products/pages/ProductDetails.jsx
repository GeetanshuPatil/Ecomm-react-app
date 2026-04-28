// features/products/pages/ProductDetails.jsx
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {convertToINR, formatINR } from "../../../shared/utils/currency";
import BackButton from "../../../shared/components/BackButton";


import { fetchProductById, clearSelectedProduct } from "../productSlice";

import { addToCart } from "../../cart/cartSlice";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [activeImage, setActiveImage] = useState(null);

  const { selectedProduct, detailsLoading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));

    return () => {
      dispatch(clearSelectedProduct()); // 🧠 prevent stale data
    };
  }, [id, dispatch]);

  useEffect(() => {
  if (selectedProduct?.images?.length) {
    setActiveImage(selectedProduct.images[0]);
  }
}, [selectedProduct]);

  // 🔴 Error state
  if (error) {
    return <p className="text-red-500 p-4">{error}</p>;
  }

  // 🟡 Loading state
  if (detailsLoading || !selectedProduct) {
    return <ProductDetailsSkeleton />;
  }


    return (
  <div className="max-w-6xl mx-auto p-4 md:p-6">
    
    <BackButton />

    <div className="grid md:grid-cols-2 gap-10 mt-4">

      {/* 🖼️ Image Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center">
       
        <div className="flex flex-col gap-4">

  {/* 🖼️ Main Image */}
  <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-center">
    <img
      src={activeImage || selectedProduct.thumbnail}
      alt={selectedProduct.title}
      className="max-h-[350px] object-contain transition"
    />
  </div>

  {/* 🔽 Thumbnails */}
  <div className="flex gap-3 overflow-x-auto">

    {selectedProduct.images?.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="thumb"
        onClick={() => setActiveImage(img)}
        className={`h-16 w-16 object-contain border rounded-lg cursor-pointer p-1
          ${
            activeImage === img
              ? "border-black"
              : "border-gray-200 hover:border-gray-400"
          }`}
      />
    ))}

  </div>
</div>
      </div>

      {/* 📄 Info Section */}
      <div className="flex flex-col gap-4">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {selectedProduct.title}
        </h1>

        {/* Category */}
        <p className="text-sm text-gray-500 capitalize">
          {selectedProduct.category}
        </p>

        {/* ⭐ Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs">
            ⭐ {selectedProduct.rating}
          </span>
          <span className="text-gray-500">
            ({selectedProduct.stock} in stock)
          </span>
        </div>

        {/* 💰 Price + Discount */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-semibold text-black">
            {formatINR(convertToINR(selectedProduct.price))}
          </p>

          <span className="text-sm text-green-600 font-medium">
            {Math.round(selectedProduct.discountPercentage)}% OFF
          </span>
        </div>

        {/* 📝 Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {selectedProduct.description}
        </p>

        {/* 🛒 Actions */}
        <div className="flex gap-3 mt-4">
          
          <button
            onClick={() => {
              dispatch(addToCart(selectedProduct));
              toast.success("Added to cart 🛒");
            }}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-black text-white 
                       hover:bg-gray-800 transition active:scale-95"
          >
            Add to Cart
          </button>

          {/* Optional Buy Now */}
          <button
            onClick={() => toast("Coming soon 🚀")}
            className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-300 
                       hover:bg-gray-100 transition"
          >
            Buy Now
          </button>

        </div>

      </div>
    </div>
  </div>
);
};

export default ProductDetails;
