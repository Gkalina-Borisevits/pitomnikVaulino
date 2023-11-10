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
      
      <ul className={styles.productList}>
        {products[id -1]&&
        <>
<div className={styles.container}>
        <h1>{products[id-1]?.details[detailId - 1].name}</h1>
        <h1>Размер горшка: {products[id-1]?.details[detailId - 1].size},</h1>
        <h1> Стоимость: {products[id-1]?.details[detailId].cost - 1}р.</h1>
        <img className={styles.image} src={products[id-1]?.details[detailId - 1].image} alt="" />
        
            <Link to={String(products[id - 1])}> <MyButton text="Назад" />
            </Link>
        </div>
        </>

        }
      </ul> 
      
    
    </div>
  )
}

export default DetailItem
