import Product from "./Product";

export default interface ProductState {
  products:Product[]
  basket: Number [] 
  error?: null | string
  isLoading?: boolean
}