import React, { FC, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './Basket.module.css';
import { Link, Navigate, useParams } from 'react-router-dom';

const Basket: FC = () => {
  const { basket, products } = useAppSelector(state => state.products);
  const [count, setCount] = useState(0);
  const { id } = useParams() as unknown as { id: number };
  const [isBasketOpen, setIsBasketOpen] = useState(false);


  function calculateTotalCost(): number {
    let totalCost = 0;
    basket.forEach(el => {
      totalCost += products[id].details[el].cost;
    });
    return totalCost;
  }

  return (
    <div className={styles.bigContainer}>
      <div className={styles.basket}>
      <p>Общая стоимость: {calculateTotalCost()} р</p>
        <p>Позиций в корзине: {basket.length}</p>
        <button onClick={() => setIsBasketOpen(!isBasketOpen)}>
          {isBasketOpen ? "Закрыть корзину" : "Открыть корзину"}
        </button>
        {isBasketOpen && (
          <>
            {basket.map(el => (
              <p key={el}>
                {products[id].details[el].name}, размер: {products[id].details[el].size}, стоимость: {products[id].details[el].cost}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;