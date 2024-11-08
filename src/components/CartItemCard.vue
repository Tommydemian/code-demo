<script setup lang="ts">
import type { CartItem } from '@/types'
defineProps<{
  cartItem: CartItem
  onRemoveFromCart: (cartItem: CartItem) => void
  onIncrementQuantity: (cartItem: CartItem) => void
  onDecrementQuantity: (cartItem: CartItem) => void
}>()
</script>

<template>
  <article class="cart-item">
    <h4 class="font-semibold text-white">{{ cartItem.name }}</h4>
    <div class="flex-container">
      <p>${{ cartItem.price }}</p>
    </div>
    <small>{{ cartItem.id }}</small>
    <div class="flex-container">
      <button @click="onDecrementQuantity(cartItem)">-</button>
      <p>Quantity: {{ cartItem.quantity }}</p>
      <button data-type="increment" @click="onIncrementQuantity(cartItem)">+</button>
    </div>
    <button @click="onRemoveFromCart(cartItem)">Remove Item</button>
  </article>
</template>

<style lang="css" scoped></style>
