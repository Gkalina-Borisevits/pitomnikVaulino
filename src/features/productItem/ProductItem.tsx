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
const [count, setCount] = useState(0);


const calculateTotalCost = () => {
  let totalCost = 0;
  basket.forEach((el) => {
    totalCost += products[id - 1].details[el - 1].cost;
  });
  setCount(totalCost);
};

useEffect(() => {
  calculateTotalCost();
}, [basket, products, id]);

  
  return <>
 {basket.length > 0 && <>
      <p>{count}</p>
      <h1>{basket.length}</h1>
  
      {basket.map(el => <>
        <p>{products[id - 1].details[el].name} {products[id - 1].details[el - 1].cost}</p>
      </>
      )}
    </>}
    <div>
      
      
      <ul className={styles.productList}>
        {products&&
        <>{products[id-1]?.details.map((el) => (
          
          <li className={styles.productCard} key={el.id}>
            <span className={styles.title}>{el.name}.</span>
            <span className={styles.title}>  Размер горшка: {el.size}. </span>
            <span className={styles.title}> Стоимость: {el.cost} р.</span>
            <MyButton text="Добавить в корзину" onClick={() => dispatch(addToBasket(el.id))} />
            <Link to={String(el.id)}> <MyButton text="To product" />
            </Link>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.image} alt="" />
            </div>
          </li>
        ))}
        </>

        }
      </ul>
    </div>
    </>
  
}

export default ProductItem
