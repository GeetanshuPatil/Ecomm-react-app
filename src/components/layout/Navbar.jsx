import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);

  const cartItems = useSelector((state) => state.cart?.items || []);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast("Logged out");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold text-gray-900">
          G-Mart
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">

  {/* Home */}
  <NavLink to="/">Home</NavLink>

  {/* Wishlist */}
  <Link to="/wishlist" className="relative">
    <Heart className="w-5 h-5" />

    {wishlistItems.length > 0 && (
      <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
        {wishlistItems.length}
      </span>
    )}
  </Link>

  {/* Cart */}
  <Link to="/cart" className="relative">
    <ShoppingCart className="w-5 h-5" />

    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
        {cartItems.length}
      </span>
    )}
  </Link>

</div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-4">
          {/* ❤️ Wishlist */}
          <Link to="/wishlist" className="relative">
            <Heart className="w-5 h-5" />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-sm">
          {token ? (
            <>
              <span className="text-gray-600 hidden sm:block">
                Hi, {user?.username || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black transition"
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-xl text-white transition ${
                    isActive ? "bg-gray-800" : "bg-black hover:bg-gray-800"
                  }`
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
