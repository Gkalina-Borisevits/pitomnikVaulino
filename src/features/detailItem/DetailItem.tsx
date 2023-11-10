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
        {products[id]&&
        <>
<div className={styles.container}>
  <ul className={styles.container}>
        <li>{products[id]?.details[detailId].name}</li>
        <li>Размер горшка: {products[id]?.details[detailId].size},</li>
        <li> Стоимость: {products[id]?.details[detailId].cost}р.</li>
        <img className={styles.image} src={products[id]?.details[detailId].image} alt="" />
        
            {/* <Link to={String (products[id-1]?.details)}> <MyButton text="Назад" /> */}
            {/* </Link> */}
            </ul>
        </div>
        </>

        }
      </ul> 
      
    
    </div>
  )
}

export default DetailItem
