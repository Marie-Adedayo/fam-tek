import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/produts";

export default function Products() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} product={p} />  
      ))}
    </div>
  );
}
