import { useEffect, useState } from 'react'
import MyButton from '../../components/myButton/MyButton';


function Counter(): JSX.Element {

    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState(0);

  function handlePlus(): void {
    setCounter(counter + 1)
  }

  

  useEffect(() => {
    console.log('4.');
  }, [title]);


  return (
    <div className='App'>
      <p>Counter</p>
      <div>
      
        
        <span>{counter}</span>
        <MyButton text="Добавить в корзину" onClick={handlePlus} />
        
        <span>{title}</span>
        <MyButton text="повзрослеть" onClick={() => setTitle(title+ 1)} />
      </div>
    </div>
  );
};

export default Counter
