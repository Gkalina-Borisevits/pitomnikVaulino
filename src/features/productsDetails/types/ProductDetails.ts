export default interface ProductDetails {
    id: number;
    name: string;
    image: string;
    details: Detail[];
  }
  export interface Detail {
    id: number;
    name: string;
    size: string;
    cost: number;
    image: string;
  }
  