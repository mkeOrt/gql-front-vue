<script setup lang="ts">
import { useProducts } from '@/products/composables/products'

const { query } = useProducts()
const { loading, result } = query
</script>

<template>
  <div class="products-list">
    <span v-if="loading">Loading...</span>
    <ul v-else>
      <li v-for="product in result.products" :key="product.id">
        <div>{{ product.name }} [{{ product.stock }}]</div>
        <span>${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.products-list {
  max-width: 38rem;
  margin: auto;
  margin-top: 2rem;

  ul {
    list-style: none;
    padding: 0;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;

      &:not(:last-child) {
        border-bottom: 1px solid #eee;
        width: 100%;
      }
    }
  }
}
</style>
