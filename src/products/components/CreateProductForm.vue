<script setup lang="ts">
import { useCreateProduct } from '@/products/composables/products'

const { mutation, createProduct } = useCreateProduct()

const onSubmit = () => {
  mutation.mutate({ createProduct })
}
</script>

<template>
  <div>
    <h2>Crear Producto</h2>
    <form @submit.prevent="onSubmit">
      <label>
        Nombre del producto
        <input v-model.trim="createProduct.name" type="text" placeholder="Nombre del producto" />
      </label>
      <label>
        Precio del producto
        <input
          v-model.trim="createProduct.price"
          type="number"
          placeholder="Precio del producto"
          step="0.01"
        />
      </label>
      <label>
        Existencias del producto
        <input
          v-model.trim="createProduct.stock"
          type="number"
          placeholder="Existencias del producto"
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<style scoped>
div {
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 1rem;
  max-width: 40rem;
  margin: auto;

  input[type='text'],
  input[type='number'] {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;
  }
}
</style>
