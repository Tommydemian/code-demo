export type Product = {
  id: number
  name: string
  price: number
  stock: number
}

export type CartItem = Product & {
  quantity: number
}

export type Cart = CartItem[]

export type StockOperations = 'increment' | 'decrement'

export type ProductItem = Product | CartItem
