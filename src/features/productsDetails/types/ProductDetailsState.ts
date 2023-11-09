import ProductDetails from "./ProductDetails"

export default interface ProductDetailsState {
    productsDetails:ProductDetails[]
    error?: null | string
    isLoading?: boolean
  
} 