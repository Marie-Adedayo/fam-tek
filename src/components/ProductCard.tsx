import { useCart } from "../context/CartContext";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart(); // ✅ use the correct function name

  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition-all bg-white overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-52 sm:h-60 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-semibold text-gray-800 text-lg truncate">{product.name}</h3>
        <p className="text-blue-600 font-bold mt-1">${product.price}</p>

        <button
          onClick={() => add(product)} // ✅ correct function
          className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg 
                     hover:bg-orange-600 transition-all font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
