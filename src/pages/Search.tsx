import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/produts'
import ProductCard from '../components/ProductCard'

export default function Search(){
  const { q } = useParams()
  const query = decodeURIComponent(q || '')
  const list = PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-3">Search: {query}</h2>
      {list.length === 0 ? (
        <p className="text-gray-600">No results.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}