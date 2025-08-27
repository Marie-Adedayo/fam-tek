import { useEffect } from 'react'
import { ngn } from '../utlis/currency'

// Helpers to inject scripts once
const useScript = (src: string) => {
  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) return
    const s = document.createElement('script')
    s.src = src
    s.async = true
    document.body.appendChild(s)
    return () => { /* keep for future pages; don’t remove */ }
  }, [src])
}

type PayProps = {
  amount: number // NGN
  email: string
  metadata?: Record<string, any>
}

export function PaystackButton({ amount, email, metadata }: PayProps){
  const key = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string
  useScript('https://js.paystack.co/v1/inline.js')

  const pay = () => {
    const PaystackPop = (window as any).PaystackPop
    if (!key) return alert('Missing VITE_PAYSTACK_PUBLIC_KEY')
    if (!PaystackPop) return alert('Paystack script not loaded yet. Try again in a moment.')
    const handler = PaystackPop.setup({
      key,
      email,
      amount: Math.round(amount) * 100, // kobo
      currency: 'NGN',
      ref: 'FAMTEK-' + Date.now(),
      metadata,
      callback: function(){ alert('Payment successful!') },
      onClose: function(){ /* user closed */ }
    })
    handler.openIframe()
  }

  return <button onClick={pay} className="w-full px-4 py-2 rounded-2xl bg-black text-white">Pay {ngn(amount)} with Paystack</button>
}

export function FlutterwaveButton({ amount, email, metadata }: PayProps){
  const key = import.meta.env.VITE_FLUTTER_PUBLIC_KEY as string
  useScript('https://js.flutterwave.com/v3.js')

  const pay = () => {
    const FlutterwaveCheckout = (window as any).FlutterwaveCheckout
    if (!key) return alert('Missing VITE_FLUTTER_PUBLIC_KEY')
    if (!FlutterwaveCheckout) return alert('Flutterwave script not loaded yet. Try again in a moment.')
    FlutterwaveCheckout({
      public_key: key,
      tx_ref: 'FAMTEK-' + Date.now(),
      amount: Math.round(amount),
      currency: 'NGN',
      payment_options: 'card, banktransfer, ussd',
      customer: { email },
      customizations: { title: 'FAM‑TEK', description: 'Order payment', logo: '' },
      meta: metadata
    })
  }

  return <button onClick={pay} className="w-full px-4 py-2 rounded-2xl border">Pay {ngn(amount)} with Flutterwave</button>
}