// src/routes/AppRoutes.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/layout/Layout";

import ProtectedRoute from "../routes/ProtectedRoute";

import ProductList from "../features/products/pages/ProductList";
import ProductDetails from "../features/products/pages/ProductDetails";
import Cart from "../features/cart/pages/Cart";

import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";

import PaymentPortal from "../features/payments/pages/PaymentPortal";
import OrderSuccess from "../features/orders/pages/orderSuccessful";
import Wishlist from "../features/wishlist/pages/Wishlist";
import HomePage from "../features/home/HomePage";

const router = createBrowserRouter([
  {
    element: <Layout />, // 👈 parent layout
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      
      { path: "/product/:id", element: <ProductDetails /> },

      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },

      { path: "/cart", element: <Cart /> },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <PaymentPortal />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-success",
        element: <OrderSuccess />,
      },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  },

  // fallback route
  {
    path: "*",
    element: <h1 className="p-4">404 Not Found</h1>,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
