import { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//import cn from 'classnames'
import styles from "./DetailItem.module.css"
import MyButton from "../../components/myButton/MyButton"
import Product from "../products/types/Product"
import axios from "axios"
import { useAppSelector } from "../../app/hooks"

const DetailItem: FC = () => {
  const { id, detailId } = useParams();

const {products} = useAppSelector(state => state.products)

  // const [product, setProduct] = useState<Product>(initialValue)

  
  return (
    <div>
      
      <p>{id}</p>
      <span>{detailId}</span>
     
      <ul className={styles.productList}>
        {products[id -1]&&
        <>

        <h1>{products[id-1]?.details[detailId - 1].name}</h1>
        <h1>{products[id-1]?.details[detailId - 1].size}</h1>
        </>

        }
      </ul> 
      
    
    </div>
  )
}

export default DetailItem
