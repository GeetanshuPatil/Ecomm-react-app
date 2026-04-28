import { createSelector } from "@reduxjs/toolkit";

export const selectProductsState = (state) => state.products;

export const selectFilteredProducts = createSelector(
  [
    (state) => state.products.items,
    (state) => state.products.search,
    (state) => state.products.category,
    (state) => state.products.sort,
  ],
  (items, search, category, sort) => {
    let filtered = [...items];

    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
);
