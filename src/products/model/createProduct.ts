import type { Product } from './product'

export type CreateProduct = Omit<Product, 'id'>
