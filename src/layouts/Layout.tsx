import { FC } from 'react'
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
//import cn from 'classnames'
 import styles from './Layout.module.css'
import Footer from '../components/footer/Footer';
import PitomnikName from '../components/pitomnikName/PitomnikName';


const Layout: FC = () => {
console.log('Lets go!');
return (
<div className={styles.container}>
<PitomnikName/>
<Header/>
<main className={styles.main}>

<Outlet/>
</main>
<Footer />
</div>

);
};

export default Layout