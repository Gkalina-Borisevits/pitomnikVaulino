import { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

//import cn from 'classnames'
import styles from "./ProductItem.module.css"
import MyButton from "../../components/myButton/MyButton"
import Product from "../products/types/Product"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Counter from "../counter/Counter"
import { addToBasket, toggleFavorites } from "../products/productSlice"
import { loadProducts } from "../products/productAction"
import Basket from "../../components/basket/Basket"
import Loader from "../../components/loader/Loader"

const ProductItem: FC = () => {
  const { id } = useParams() as unknown as { id: number };
  const dispatch = useAppDispatch();

const {products, basket, isLoading, error, favorites} = useAppSelector(state => state.products)
const [count, setCount] = useState(0);
const [totalCost, setTotalCost] = useState(0);
const [isInBasket, setIsInBasket] = useState(false);
const { user, isLoading: isUserLoading } = useAppSelector(state => state.user);


useEffect(() => {
  dispatch(loadProducts());
}, [dispatch]);


if (!user?.id && !isUserLoading) {
  return (
    <>
      <p>Необходимо <Link to="/login"> Войти </Link> в аккаунт или <Link to="/login">Зарегистрироваться</Link></p>
      
      
    </>
  )
}

if (isUserLoading === true) {
  return <Loader />
}
return (
  <div className={styles.bigContainer}>
    <div className={styles.basket}>
    <div>
    <ul className={styles.productList}>
          {products &&
            products[id]?.details.map(el => (
              <li className={styles.productCard} key={el.id}>
                <span className={styles.title}>{el.name}.</span>
                <span className={styles.title}> Размер горшка: {el.size}. </span>
                <span className={styles.title}> Стоимость: {el.cost} р.</span>
                <svg
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch(toggleFavorites(el.id))}
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  >
                  <g transform="translate(0 -1028.4)">
                    <path
                      d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                      fill={favorites.includes(el.id as number) ? 'green' : 'lime'}
                      />
                  </g>
                </svg>
                <div className={styles.imgContainer}>
                  <img className={styles.image} src={el.image} alt="" />
                </div>
                <MyButton
                  text="Добавить в корзину"
                  onClick={() => dispatch(addToBasket(el.id))}
                  />
                <Link to={String(el.id)}>
                  <MyButton text="Описание" />
                </Link>
            </li>
          ))}
      </ul>
          </div>
    </div>
  </div>
);
};
export default ProductItem
