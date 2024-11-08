import type { Product, ProductItem, StockOperations, Cart } from '@/types'

export function getProductAndHandleStock(
  product: ProductItem,
  stockOperation: StockOperations,
  products: Product[],
) {
  const productEl = products.find((el) => el.id === product.id)
  if (productEl && productEl.stock > 0 && stockOperation === 'decrement') {
    productEl.stock--
  } else if (productEl && stockOperation === 'increment') {
    productEl.stock++
  } else {
    console.error('Product not found')
  }
}

export function getCartItem(cartItem: ProductItem, cart: Cart) {
  return cart.find((el) => el.id === cartItem.id)
}

export function getProduct(product: ProductItem, products: Product[]) {
  return products.find((el) => el.id === product?.id)
}
