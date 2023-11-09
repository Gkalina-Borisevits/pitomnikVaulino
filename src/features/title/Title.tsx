import { FC, useState } from 'react'
import ProductItem from '../productItem/ProductItem';
// import cn from 'classnames'
import styles from './Title.module.css'

const Title: FC = () => {
    <ProductItem/>
    const [basket, setBasket] = useState<string>('В Вашей корзине:');

    function handleAddPetuniaAmpel9(): void {
      setBasket(`${basket} Петуния ампельная в ассортименте, 9см`);
    }

    function handleAddPetuniaAmpel14(): void {
        setBasket(`${basket} Петуния ампельная в ассортименте, 14см`);
      }

      function handleAddPetuniaAmpel24(): void {
        setBasket(`${basket} Петуния ампельная в ассортименте, 24см`);
      }

      function handleAddPetunia5(): void {
        setBasket(`${basket} Петуния кустовая в ассортименте, 5см`);
      }

      function handleAddPetunia7(): void {
        setBasket(`${basket} Петуния кустовая в ассортименте, 7см`);
      }

      function handleAddPetunia12(): void {
        setBasket(`${basket} Петуния махровая в ассортименте, 12см`);
      }

      function handleAddPelargonia14(): void {
        setBasket(`${basket} Пеларгония кустовая в ассортименте, 14см`);
      }

      function handleAddPelargoniaAmpel14(): void {
        setBasket(`${basket} Пеларгония ампельная в ассортименте, 14см`);
      }

      function handleAddPelargoniaAmpel24(): void {
        setBasket(`${basket} Пеларгония ампельная в ассортименте, 24см`);
      }

      function handleAddKaliAmpe9(): void {
        setBasket(`${basket} Калибрахоа ампельная в ассортименте, 9см`);
      }

      function handleAddKaliAmpel14(): void {
        setBasket(`${basket} Калибрахоа ампельная в ассортименте, 14см`);
      }

      function handleAddKaliAmpel24(): void {
        setBasket(`${basket} Калибрахоа ампельная в ассортименте, 24см`);
      }
   
      function handleAddKali5(): void {
        setBasket(`${basket} Калибрахоа кустовая в ассортименте, 5см`);
      }

      function handleAddKali7(): void {
        setBasket(`${basket} Калибрахоа кустовая в ассортименте, 7см`);
      }

      function handleAddKali12(): void {
        setBasket(`${basket} Калибрахоа махровая в ассортименте, 12см`);
      }

      function handleAddViola24(): void {
        setBasket(`${basket} Виола ампельная в ассортименте, 24см`);
      }

      function handleAddViola7(): void {
        setBasket(`${basket} Виола ампельная в ассортименте, 7см`);
      }

      function handleAddBacopa24(): void {
        setBasket(`${basket} Бакопа ампельная в ассортименте, 24см`);
      }

      function handleAddBacopa10(): void {
        setBasket(`${basket} Бакопа ампельная в ассортименте, 7см`);
      }
      
      function handleAddRaspberries20(): void {
        setBasket(`${basket} Бакопа ампельная в ассортименте, 20см`);
      }

      function handleAddRaspberries35(): void {
        setBasket(`${basket} Бакопа ампельная в ассортименте, 35см`);
      }
  
      function handleAddStrawberriesRem12(): void {
        setBasket(`${basket} Земляника садовая ремонтантная, 12см`);
      }

      function handleAddStrawberries12(): void {
        setBasket(`${basket} Земляника садовая ремонтантная, 12см`);
      }

      function handleAddCurrantRed(): void {
        setBasket(`${basket} Смородина красная в ассортименте, 24см`);
      }

      function handleAddCurrentBlack(): void {
        setBasket(`${basket} Смородина черная в ассортименте, 24см`);
      }

      function handleAddCurrentWhite(): void {
        setBasket(`${basket} Смородина белая в ассортименте, 24см`);
      }
    return (
      <div className='App'>
        <h1>Sandwich</h1>
        <p className={styles.title}>{title}</p>
        
        <button className={styles.btn} type='button' onClick={handleAddPetuniaAmpel9}></button>
        <button className={styles.btn} type='button' onClick={handleAddPetuniaAmpel9}></button>
        <button className={styles.btn} type='button' onClick={handleAddPetuniaAmpel9}></button>
        <button className={styles.btn} type='button' onClick={handleAddPetuniaAmpel9}></button>
      </div>
    );
  };

export default Title