<script setup lang="ts">
import type { Product } from '@/types'
defineProps<{ product: Product; onAddToCart: (product: Product) => void }>()
</script>

<template>
  <article class="border border-red-600 rounded-md mb-4 p-4 mt-8">
    <h2 class="font-semibold text-xl">{{ product.name }}</h2>
    <div class="product-details mt-4">
      <p class="text-base">${{ product.price }}</p>
      <p class="text-base">Stock: {{ product.stock }}</p>
    </div>
    <button
      class="cursor-pointer bg-red-500 py-2 px-4 rounded-md text-white mt-4"
      @click="onAddToCart(product)"
    >
      {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
    </button>
  </article>
</template>

<style lang="css" scoped>
.product-card {
  border: 1px solid #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}

.product-details {
  display: flex;
  justify-content: space-between;
}
</style>
