import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../productSlice";
import { useSearchParams } from "react-router-dom";

export const useProducts = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const { items, listLoading, error } = useSelector(
    (state) => state.products
  );

  // 🌐 URL state = source of truth for filters
  const search = params.get("search") || "";
  const category = params.get("category") || "all";
  const sort = params.get("sort") || "default";

  // 📦 fetch only once (or cached via your slice logic)
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  // 🔥 derived filtered products
  const products = useMemo(() => {
    let data = [...items];

    // search filter
    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (category !== "all") {
      data = data.filter((p) => p.category === category);
    }

    // sorting
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [items, search, category, sort]);

  return {
    products,
    loading: listLoading,
    error,
  };
};