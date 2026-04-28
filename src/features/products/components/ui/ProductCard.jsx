// features/products/components/ProductCard.jsx
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../wishlist/wishlistSlice";
import {convertToINR, formatINR } from "../../../../shared/utils/currency";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-sm transition">
      {/* HEART BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();

          if (isWishlisted) {
            dispatch(removeFromWishlist(product.id));
          } else {
            dispatch(addToWishlist(product));
          }
        }}
        className="absolute top-2 right-2 text-xl"
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      {/* CLICKABLE AREA ONLY FOR NAVIGATION */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer pb-2"
      >
        <img src={product.thumbnail} className="h-40 w-full object-cover" />
        <h2 className="text-sm font-medium mt-2">{product.title}</h2>
        <p className="text-sm font-semibold">
          {formatINR(convertToINR(product.price))}
        </p>{" "}
      </div>

      {/* Add to cart button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ✅ keep your logic
          dispatch(addToCart(product));
        }}
        className="mt-2 w-full py-2 rounded-xl bg-black text-white text-sm 
                 hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
