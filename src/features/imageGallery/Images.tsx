import { FC, useEffect } from "react"
import MyButton from "../../components/myButton/MyButton"
import { Link } from "react-router-dom"
// import cn from 'classnames'
import styles from "./Images.module.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loadImages } from "./imageAction"

const Images: FC = () => {
  const { images, isLoading, error } = useAppSelector((state) => state.images)
  const { value, status } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadImages())
  }, [])

  console.log("Lets go!")
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Ошибка:{error}</p>}

      <ul className={styles.productList}>
        {images?.map((el) => (
          <li className={styles.productCard} key={el.id}>
            <span className={styles.title}>{el.name}</span>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.image} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Images
