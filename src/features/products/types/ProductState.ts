import Product from "./Product";

export default interface ProductState {
  products:Product[]
  basket: number [] 
  error?: null | string
  isLoading?: boolean
  favorites: number[]
}