import ProductList from "../products/pages/ProductList";
import heroImg from "../../assets/hero_image.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../products/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = useSelector((state) => state.products.category);
  const sort = useSelector((state) => state.products.sort);

  const handleCategoryClick = (cat) => {
    dispatch(setCategory(cat));
    navigate(`/?category=${cat}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* 🔥 Hero Section */}
      <section
        className="bg-gray-100 rounded-2xl p-5 md:p-10 
                    flex flex-col-reverse md:flex-row 
                    items-center justify-between gap-6"
      >
        {/* TEXT */}
        <div className="w-full md:max-w-md text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Discover Amazing Products
          </h1>

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Shop the latest trends at the best prices.
          </p>

          <button
            className="mt-4 w-full sm:w-auto px-6 py-2.5 
                       bg-black text-white rounded-xl 
                       active:scale-95 transition"
          >
            Shop Now
          </button>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src={heroImg}
            alt="banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
          />
        </div>
      </section>

      {/* 🗂️ Categories (horizontal) */}
      <div className="flex flex-col gap-2 w-full">
        <span className="text-xs font-medium text-gray-500">Category</span>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {[
            { label: "All", value: "all" },
            { label: "Food", value: "groceries" },
            { label: "Furniture", value: "furniture" },
            { label: "Makeup", value: "beauty" },
            { label: "Fragrances", value: "fragrances" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => dispatch(setCategory(cat.value))}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition
          ${
            category === cat.value
              ? "bg-black text-white border-black"
              : "bg-white text-gray-600 border-gray-200 hover:bg-black hover:text-white"
          }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 Product Section */}
      <h2 className="text-xl font-semibold mb-4">Trending Products</h2>

      <ProductList />
    </div>
  );
};

export default HomePage;
