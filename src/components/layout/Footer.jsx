// src/components/Footer.jsx
const Footer = () => {
  return (
   <footer className="bg-white border-t border-gray-200 mt-10">
  <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
    
    {/* Left */}
    <p className="text-gray-500">
      © 2026 G-Mart. All rights reserved to Geetanshu.
    </p>

    {/* Links */}
    <div className="flex gap-6">
      <span className="cursor-pointer hover:text-black transition">
        Privacy
      </span>
      <span className="cursor-pointer hover:text-black transition">
        Terms
      </span>
      <span className="cursor-pointer hover:text-black transition">
        Contact
      </span>
    </div>

  </div>
</footer>
  );
};

export default Footer;