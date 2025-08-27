import React, { createContext, useContext, useMemo } from 'react'
import type { Product } from "../types";
import { useLocalStorage } from '../utlis/useLocalStorage'

export type CartItem = { product: Product; qty: number }

const CartCtx = createContext<{
  items: CartItem[]
  add: (p: Product, qty?: number) => void
  remove: (id: string) => void
  inc: (id: string) => void
  dec: (id: string) => void
  clear: () => void
  total: number
}>({ items: [], add: () => {}, remove: () => {}, inc: () => {}, dec: () => {}, clear: () => {}, total: 0 })

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useLocalStorage<CartItem[]>('cart', [])

  const add = (p: Product, qty = 1) => {
    setItems(prev => {
      const found = prev.find(ci => ci.product.id === p.id)
      if (found) return prev.map(ci => (ci.product.id === p.id ? { ...ci, qty: ci.qty + qty } : ci))
      return [...prev, { product: p, qty }]
    })
  }
  const remove = (id: string) => setItems(prev => prev.filter(ci => ci.product.id !== id))
  const inc = (id: string) => setItems(prev => prev.map(ci => (ci.product.id === id ? { ...ci, qty: ci.qty + 1 } : ci)))
  const dec = (id: string) => setItems(prev => prev.map(ci => (ci.product.id === id ? { ...ci, qty: Math.max(1, ci.qty - 1) } : ci)))
  const clear = () => setItems([])
  const total = useMemo(() => items.reduce((sum, ci) => sum + ci.product.price * ci.qty, 0), [items])

  return <CartCtx.Provider value={{ items, add, remove, inc, dec, clear, total }}>{children}</CartCtx.Provider>
}

export const useCart = () => useContext(CartCtx)
