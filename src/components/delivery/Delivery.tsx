import { FC } from 'react'
import Form from '../form/Form';
import { useAppSelector } from '../../app/hooks';
// import cn from 'classnames'
// import styles from './Delivery.module.css'

const Delivery: FC = () => {
    const {images} = useAppSelector(state => state.imageGallery)
console.log('Lets go!');
return (
    <>
<div>
{images&& images.map(element => 
    <>
    <img src={element.image} alt="" key={element.id}/>

    </>)}

</div>
</>
)}

export default Delivery