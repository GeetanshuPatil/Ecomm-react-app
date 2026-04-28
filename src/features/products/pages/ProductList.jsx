import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ui/ProductCard";
import ProductSkeleton from "../components/ui/ProductSkeleton";
import ProductFilters from "../components/layout/ProductFilters";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (error) {
    return <p className="text-red-500 p-4">{error}</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* <h1 className="text-xl font-semibold text-gray-900">Products</h1> */}

      <ProductFilters />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {loading && products.length === 0 ? (
          Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
        ) : products.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
