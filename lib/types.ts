export interface Product {
  id: string
  slug: string
  name: string
  subtitle: string
  description: string
  price: number
  oldPrice?: number
  images: string[]
  category: CategorySlug
  sizes: string[]
  colors: string[]
  inStock: boolean
  stockCount?: number
  isNew?: boolean
  isBestseller?: boolean
  tags: string[]
}

export type CategorySlug =
  | 'hoodies'
  | 'tshirts'
  | 'longsleeves'
  | 'headwear'
  | 'accessories'

export interface Category {
  slug: CategorySlug
  name: string
  plural: string
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color?: string
}

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}
