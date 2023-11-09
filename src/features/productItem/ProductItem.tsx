import { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//import cn from 'classnames'
import styles from "./ProductItem.module.css"
import MyButton from "../../components/myButton/MyButton"
import Product from "../products/types/Product"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Counter from "../counter/Counter"
import { addToBasket } from "../products/productSlice"

const ProductItem: FC = () => {
  const { id } = useParams() as unknown as { id: number };
  const dispatch = useAppDispatch();

const {products, basket} = useAppSelector(state => state.products)


  let cost = basket.reduce(
    (total, itemId) => (total + products[id-1].details[itemId].cost, 0)
  )
  return <>
 <h1>{basket.length}</h1>
 {basket.length >1 && <>
 <p>{cost}</p>
 
 {basket.map(el => <>
 <h1>{products[id-1].details[el].name}</h1>
 </>
 )}
 </>}
    <div>
      
      
      <ul className={styles.productList}>
        {products&&
        <>{products[id-1]?.details.map((el) => (
         
          <li className={styles.productCard} key={el.id}>
            <span className={styles.title}>{el.name}</span>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.image} alt="" />
            <MyButton text="Добавить в корзину" onClick={() => dispatch(addToBasket(el.id))} />
            </div>
            <Link to={String(el.id)}> <MyButton text="To product" />
            </Link>
          </li>
        ))}
        </>

        }
      </ul>
    </div>
    </>
  
}

export default ProductItem
