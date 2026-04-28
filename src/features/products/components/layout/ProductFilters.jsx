// features/products/components/ProductFilters.jsx

import { useDispatch, useSelector } from "react-redux";
import { setSearch, setCategory, setSort } from "../../productSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();

  // URL values
  const urlSearch = params.get("search") || "";
  const urlCategory = params.get("category") || "all";
  const urlSort = params.get("sort") || "default";

  // Redux state
  const { category, sort } = useSelector((state) => state.products);

  // Local state (search only)
  const [searchInput, setSearchInput] = useState(urlSearch);

  // debounce search
  const debouncedSearch = useDebounce(searchInput, 500);

  // Initialize Redux from URL
  useEffect(() => {
    dispatch(setSearch(urlSearch));
    dispatch(setCategory(urlCategory));
    dispatch(setSort(urlSort));
  }, [dispatch, urlSearch, urlCategory, urlSort]);

  // Sync debounced search → Redux
  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  // Sync Redux + search → URL
  useEffect(() => {
    setParams({
      search: debouncedSearch || "",
      category,
      sort,
    });
  }, [debouncedSearch, category, sort, setParams]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

  {/* 🔍 Search */}
  <div className="flex flex-col gap-1 w-full md:max-w-xs">
    <label htmlFor="search" className="text-xs text-gray-500">
      Search
    </label>

    <input
      id="search"
      name="search"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      placeholder="Search products..."
      className="px-3 py-2 border border-gray-300 rounded-xl text-sm 
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black 
                 transition"
    />
  </div>

  {/* 🗂️ Category */}
  <div className="flex flex-col gap-1 w-full md:w-44">
    <label htmlFor="category" className="text-xs text-gray-500">
      Category
    </label>

    <select
      id="category"
      name="category"
      value={category}
      onChange={(e) => dispatch(setCategory(e.target.value))}
      className="px-3 py-2 border border-gray-300 rounded-xl text-sm 
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black 
                 transition"
    >
      <option value="all">All</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
    </select>
  </div>

  {/* 🔽 Sort */}
  <div className="flex flex-col gap-1 w-full md:w-44">
    <label htmlFor="sort" className="text-xs text-gray-500">
      Sort
    </label>

    <select
      id="sort"
      name="sort"
      value={sort}
      onChange={(e) => dispatch(setSort(e.target.value))}
      className="px-3 py-2 border border-gray-300 rounded-xl text-sm 
                 focus:outline-none focus:ring-2 focus:ring-black focus:border-black 
                 transition"
    >
      <option value="default">Default</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
    </select>
  </div>

</div>
  );
};

export default ProductFilters;