<script setup lang="ts">
import MainContainer from './components/MainContainer.vue'
import ProductCard from './components/ProductCard.vue'
import CartItemCard from './components/CartItemCard.vue'

import { useShopStore } from './stores/useShopStore'

const shopStore = useShopStore()
</script>

<template>
  <MainContainer>
    <main class="flex justify-center items-center gap-8">
      <div class="grid gap-4">
        <h3 class="font-semibold text-3xl">Cart Total: ${{ shopStore.cartTotal }}</h3>
        <CartItemCard
          v-for="cartItem in shopStore.cartItems"
          role="listitem"
          :key="cartItem.id"
          :cartItem="cartItem"
          @removeFromCart="shopStore.removeFromCart"
          @decrementQuantity="shopStore.decrementQuantity"
          @incrementQuantity="shopStore.incrementQuantity"
        />
      </div>
      <ul class="product-list" role="list">
        <li>
          <ProductCard
            v-for="product in shopStore.products"
            @addToCart="shopStore.addToCart"
            :key="product.id"
            :product="product"
          />
        </li>
      </ul>
    </main>
  </MainContainer>
</template>

<style lang="css">
.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.layout {
  display: flex;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-self: center;
  column-gap: 1rem;
}

.font-semibold {
  font-weight: 600;
}

.text-white {
  color: #fff;
}

.cart-item {
  border: 1px solid lime;
  padding: 1rem;
}
</style>
