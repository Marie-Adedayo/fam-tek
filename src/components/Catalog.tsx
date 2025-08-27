import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/produts";

const categories = ["Phones", "Laptops", "Tablets", "Gadgets", "Accessories"];

export default function Catalog() {
  const [page, setPage] = useState(1);
  const perPage = 8; // show more per page like a real shop

  const startIndex = (page - 1) * perPage;
  const displayedProducts = PRODUCTS.slice(startIndex, startIndex + perPage);
  const totalPages = Math.ceil(PRODUCTS.length / perPage);

  return (
    <section className="p-6 max-w-7xl mx-auto">
      {/* Categories Section */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Shop by Category
      </h1>
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <div
            key={cat}
            className="px-5 py-2 rounded-full border bg-gradient-to-r from-orange-100 to-amber-100 
                       hover:from-orange-200 hover:to-amber-200 cursor-pointer text-gray-700 font-medium"
          >
            {cat}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded-lg transition-all ${
              page === i + 1
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white hover:bg-blue-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
