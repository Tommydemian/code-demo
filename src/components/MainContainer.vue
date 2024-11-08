<script setup lang="ts">
type Props = {
  wide?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="container" :class="{ 'container--wide': wide }">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.container {
  width: min(100% - 1.5rem, 65rem);
  margin-inline: auto;
}
.container--wide {
  width: min(100% - 1.5rem, 80rem);
  margin-inline: auto;
}
</style>
