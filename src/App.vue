<script setup lang="ts">
import CreateProductForm from './products/components/CreateProductForm.vue'
import ProductsList from './products/components/ProductsList.vue'
</script>

<template>
  <div class="container">
    <CreateProductForm />
    <ProductsList />
  </div>
</template>

<style scoped>
.container {
  margin-top: 1rem;
}
</style>
