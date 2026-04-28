import { useSelector, useDispatch } from "react-redux";
import { selectWishlistItems } from "../wishlistSelectors";
import { removeFromWishlist } from "../wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../../cart/cartSlice";
import { convertToINR, formatINR } from "../../../shared/utils/currency";
import BackButton from "../../../shared/components/BackButton";
import toast from "react-hot-toast";



const Wishlist = () => {
  const items = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <p className="p-4 text-gray-500">Your wishlist is empty ❤️</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="p-6">
      <BackButton />
      <h1 className="text-xl font-semibold mb-6">My Wishlist</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border rounded-xl p-4 bg-white">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-40 object-contain mx-auto"
              />
              <h2 className="text-sm font-medium mt-2">{item.title}</h2>
            </Link>

            <p className="text-sm text-gray-600">
              {formatINR(convertToINR(item.price))}
            </p>

            <button
              onClick={() => {dispatch(removeFromWishlist(item.id))
                toast("Removed from wishlist");
              }}
              className="mt-3 text-sm text-red-500 hover:underline"

            >
              Remove
            </button>

            <button
              onClick={() => {dispatch(addToCart(item))
                toast.success("Added to cart ");
              }}
              className="mt-3 w-full py-2 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition"
            >
               Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Wishlist;
