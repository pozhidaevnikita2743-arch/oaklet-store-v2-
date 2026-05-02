'use client'

import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { CartContextType, CartItem, Product } from '@/lib/types'

const CartContext = createContext<CartContextType | null>(null)

type CartAction =
  | { type: 'ADD'; product: Product; size: string; quantity: number }
  | { type: 'REMOVE'; productId: string; size: string }
  | { type: 'UPDATE'; productId: string; size: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; items: CartItem[] }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD': {
      const key = `${action.product.id}:${action.size}`
      const existing = state.find((i) => `${i.product.id}:${i.size}` === key)
      if (existing) {
        return state.map((i) =>
          `${i.product.id}:${i.size}` === key
            ? { ...i, quantity: i.quantity + action.quantity }
            : i
        )
      }
      return [...state, { product: action.product, size: action.size, quantity: action.quantity }]
    }
    case 'REMOVE':
      return state.filter((i) => !(i.product.id === action.productId && i.size === action.size))
    case 'UPDATE':
      return state.map((i) =>
        i.product.id === action.productId && i.size === action.size
          ? { ...i, quantity: action.quantity }
          : i
      )
    case 'CLEAR':
      return []
    case 'HYDRATE':
      return action.items
    default:
      return state
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('oaklet-cart')
      if (stored) dispatch({ type: 'HYDRATE', items: JSON.parse(stored) })
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) localStorage.setItem('oaklet-cart', JSON.stringify(items))
  }, [items, hydrated])

  const addItem = (product: Product, size: string, quantity = 1) => {
    dispatch({ type: 'ADD', product, size, quantity })
    setIsOpen(true)
  }

  const removeItem = (productId: string, size: string) =>
    dispatch({ type: 'REMOVE', productId, size })

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE', productId, size })
    } else {
      dispatch({ type: 'UPDATE', productId, size, quantity })
    }
  }

  const clearCart = () => dispatch({ type: 'CLEAR' })

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
