// stores/useShopStore.ts
import { defineStore } from 'pinia'
import type { Product, Cart, CartItem } from '@/types'
import { getCartItem, getProduct, getProductAndHandleStock } from '@/utils/cartUtils'
import { products } from '@/data/products'

// 'cart' is a unique id for this store
export const useShopStore = defineStore('shop', {
  // State is like ref/reactive
  state: () => ({
    products: products,
    cart: [] as Cart,
  }),
  // Getters are like computed
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((acc, curr) => curr.price * curr.quantity + acc, 0)
    },
    cartItems: (state) => {
      return state.cart.map((el) => el)
    },
  },
  // Actions are like methods
  actions: {
    addToCart(product: Product) {
      if (product.stock == 0) return
      // exist in the cart?
      const itemInCart = getCartItem(product, this.cart)
      // exists in the cart
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        })
      }

      getProductAndHandleStock(product, 'decrement', this.products)
    },
    removeFromCart(cartItem: CartItem) {
      const itemInCart = getCartItem(cartItem, this.cart)

      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          itemInCart.quantity--
        } else {
          this.cart = this.cart.filter((el) => el.id !== itemInCart.id)
        }
      }

      getProductAndHandleStock(cartItem, 'increment', this.products)
    },
    incrementQuantity(cartItem: CartItem) {
      const itemInCart = getCartItem(cartItem, this.cart)

      const productEl = getProduct(cartItem, this.products)

      if (itemInCart && productEl && productEl.stock > 0) {
        itemInCart.quantity++
        productEl.stock--
      } else {
        console.error('Product not found')
      }
    },
    decrementQuantity(cartItem: CartItem) {
      // cart item src
      const itemInCart = getCartItem(cartItem, this.cart)
      // product ref src
      const productEl = getProduct(cartItem, this.products)

      if (itemInCart && productEl && itemInCart.quantity > 0) {
        itemInCart.quantity--
        productEl.stock++
      } else {
        console.error('Product not found')
      }

      if (itemInCart && itemInCart.quantity === 0) {
        this.cart = this.cart.filter((el) => el.id !== itemInCart.id)
      }
    },
  },
})
