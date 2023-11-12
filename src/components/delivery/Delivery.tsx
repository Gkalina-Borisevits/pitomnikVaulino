import { FC } from "react"
import Form from "../form/Form"
import { useAppSelector } from "../../app/hooks"
import Basket from "../basket/Basket"
import { Link } from "react-router-dom"
// import cn from 'classnames'
import styles from './Delivery.module.css'

const Delivery: FC = () => {
  const { images } = useAppSelector((state) => state.imageGallery)
  console.log("Lets go!")
  return (
    <>
    {/* <div>
        
  <Link to="/basket">
        <p>Корзина</p>
      </Link></div> */}
      <div className={styles.container}>
        {images &&
          images.map((element) => (
            <>
              <img className={styles.image}src={element.image} alt="" key={element.id} />
              
            </>
          ))}
      </div>
    </>
  )
}

export default Delivery
