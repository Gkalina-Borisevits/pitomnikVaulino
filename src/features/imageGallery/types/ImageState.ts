import Image from "./Image";

export default interface ImageState {
  images: Image[]
  error?: null | string
  isLoading: boolean
}