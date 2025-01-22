import type { CreateProduct } from './createProduct'
import type { Product } from './product'

export interface ProductsRepository {
  getProducts(): Promise<Product[]>
  createProduct(product: CreateProduct): Promise<Product>
}
