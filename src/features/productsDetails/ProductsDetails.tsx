import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loadProductsDetails } from './productDetailsAction'
import MyButton from '../../../../../../../Documents/react/lessson_19/src/components/myButton/MyButton'
import { Link } from 'react-router-dom'
// import cn from 'classnames'
import styles from "./ProductsDetails.module.css";

const ProductsDetails: FC = () => {
    const { productsDetails, isLoading, error } = useAppSelector(
        (state) => state.products
      )
      const { value, status } = useAppSelector((state) => state.counter)
      const dispatch = useAppDispatch()
    
      useEffect(() => {
        dispatch(loadProductsDetails())
      }, [])
    
      console.log("Lets go!")
      return (
        <div>
          
          {isLoading && <p>Loading...</p>}
          {error && <p>Ошибка:{error}</p>}
          
          <ul className={styles.container}>
            {productsDetails?.map((el) => (
              <li className={styles.kleinContainer} key={el.id}>

    
                <span >{el.details.name}</span>
                <span >{el.details.size}</span>
                <span >{el.details.cost}</span>
                <div className={styles.imgContainer}>
                  <img className={styles.image} src={el.details.image} alt="" />
                </div>
                <MyButton  text="delete"/>
                <Link to={String(el.id)}> <MyButton text="To product" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }

export default ProductsDetails