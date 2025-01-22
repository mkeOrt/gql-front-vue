import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { reactive } from 'vue'

export function useProducts() {
  const getProductsQuery = gql`
    query GetProducts {
      products {
        id
        name
        price
        stock
      }
    }
  `
  const query = useQuery(getProductsQuery)
  return { query }
}

export function useCreateProduct() {
  const createProductInitialData = {
    name: '',
    price: 0,
    stock: 0,
  }

  const createProduct = reactive({ ...createProductInitialData })

  const crateProductMutation = gql`
    mutation CreateProduct($createProduct: CreateProduct) {
      createProduct(createProduct: $createProduct) {
        id
        name
        price
        stock
      }
    }
  `

  const mutation = useMutation(crateProductMutation, {
    refetchQueries: ['GetProducts'],
  })

  mutation.onDone(() => {
    Object.assign(createProduct, createProductInitialData)
  })

  return { createProduct, mutation }
}
