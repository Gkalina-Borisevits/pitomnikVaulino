import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loadProducts } from "./productAction"
import MyButton from "../../components/myButton/MyButton"
// import cn from 'classnames'
import styles from "./Products.module.css"
import { Link } from "react-router-dom"

const Products: FC = () => {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.products
  )
  const { value, status } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  console.log("Lets go!")
  return (
    <div>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Ошибка:{error}</p>}
      
      <ul className={styles.productList}>
        {products?.map((el) => (
          <li className={styles.productCard} key={el.id}>
            <span className={styles.title}>{el.name}</span>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.image} alt="" />
            </div>
            
            <Link to={String(el.id)}> <MyButton text="К продуктам" />
            </Link>
            
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
