import { useCart } from '../context/CartContext'
import { ngn } from '../utlis/currency'
import { PaystackButton, FlutterwaveButton } from '../components/PaymentButttons'

export default function Checkout(){
  const { items, total, clear } = useCart()
  const email = 'customer@example.com' // replace with real form later

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 mt-20 gap-6">
      <div className="md:col-span-2 space-y-3">
        <h2 className="text-2xl font-bold mb-2">Checkout</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">No items in cart.</p>
        ) : (
          items.map(ci => (
            <div key={ci.product.id} className="flex items-center gap-3 border rounded-2xl p-3">
              <img src={ci.product.image} className="w-16 h-16 object-cover rounded-xl"/>
              <div className="flex-1">
                <div className="font-medium">{ci.product.name}</div>
                <div className="text-sm text-gray-500">Qty {ci.qty}</div>
              </div>
              <div className="font-semibold">{ngn(ci.product.price * ci.qty)}</div>
            </div>
          ))
        )}
      </div>
      <div className="space-y-3">
        <div className="border rounded-2xl p-4">
          <div className="flex items-center justify-between"><span>Subtotal</span><span className="font-medium">{ngn(total)}</span></div>
          <div className="flex items-center justify-between"><span>Delivery</span><span className="font-medium">{ngn(0)}</span></div>
          <div className="flex items-center justify-between font-semibold border-t mt-2 pt-2"><span>Total</span><span>{ngn(total)}</span></div>
        </div>
        <PaystackButton amount={total} email={email} metadata={{ cartCount: items.length }} />
        <FlutterwaveButton amount={total} email={email} metadata={{ cartCount: items.length }} />
        <button onClick={clear} className="w-full px-4 py-2 rounded-2xl bg-gray-100">Clear Cart</button>
        <p className="text-xs text-gray-500">Set env keys: <code>VITE_PAYSTACK_PUBLIC_KEY</code> and <code>VITE_FLUTTER_PUBLIC_KEY</code>.</p>
      </div>
    </div>
  )
}