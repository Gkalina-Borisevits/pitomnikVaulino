import { FC } from 'react'
import { useAppSelector } from '../../app/hooks';
// import cn from 'classnames'
// import styles from './Basket.module.css'

const Basket: FC = () => {
  const { basket, products } = useAppSelector(state => state.products);

  return (
    <div>
      <h1>Корзина</h1>
      {basket.map((productId) => (
        <div key={productId}>
          <p>{products[productId - 1].name}</p>
          <p>{products[productId - 1].cost} р.</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;