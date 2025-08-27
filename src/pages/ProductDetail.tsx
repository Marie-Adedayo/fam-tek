import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/produts'
import { ngn } from '../utlis/currency'
import { useCart } from '../store/CartContext'

export default function ProductDetail(){
  const { id } = useParams()
  const { add } = useCart()
  const product = PRODUCTS.find(p => p.id === id)
  if (!product) return <div className="max-w-6xl mx-auto px-4 py-8">Product not found.</div>
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
      <img src={product.image} className="w-full h-96 object-cover rounded-xl"/>
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-orange-600 text-xl font-semibold mt-2">{ngn(product.price)}</div>
        <p className="mt-3 text-gray-700">{product.description}</p>
        {product.specs && (
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-600">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
        )}
        <button onClick={() => add(product)} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl">Add to Cart</button>
      </div>
    </div>
  )
}