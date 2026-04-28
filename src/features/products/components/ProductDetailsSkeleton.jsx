
const ProductDetailsSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 animate-pulse">
  
  {/* Image */}
  <div className="bg-white border border-gray-200 rounded-2xl p-4">
    <div className="w-full h-[360px] bg-gray-200 rounded-xl"></div>
  </div>

  {/* Content */}
  <div className="flex flex-col gap-5">
    
    {/* Title */}
    <div className="h-7 bg-gray-200 rounded w-3/4"></div>

    {/* Description */}
    <div className="flex flex-col gap-2">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>

    {/* Price */}
    <div className="h-6 bg-gray-200 rounded w-1/4"></div>

    {/* Button */}
    <div className="h-10 bg-gray-200 rounded-xl w-40"></div>

  </div>
</div>
  );
};

export default ProductDetailsSkeleton;