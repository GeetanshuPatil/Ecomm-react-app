// src/components/Layout.jsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
