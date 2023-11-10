import { FC } from 'react'
// import cn from 'classnames'
import styles from './PitomnikName.module.css'
import { Link } from 'react-router-dom';

const PitomnikName: FC = () => {
console.log('Lets go!');
return (
<div className={styles.container}>
<img id="image" className={styles.logo} src={'https://ci4.googleusercontent.com/proxy/gwqaacJIpNjtbm_xexz1xuEjkLW4RjRgfrzp3ABmiJiy_wJRuq-woTBcxRfQmj_svSD1ezrFUguqpYgYFMBvZbODJAUTgiLGSmUmUS_B9LBP3Ike3b6ppfbchM5IZKnU1mTpxRTHEd_sxHGHmlbDsmgNc6JGI0W4MMLk1VsWHTAqlFa9PbuPVw1e1G2K3U6eeqtNMVgDZ9N2g89CyEazuXpU9g=s0-d-e1-ft#https://dynamic.brandcrowd.com/preview/logodraft/5384d0b5-b5d7-4e69-a6e2-d5a5f446873d/image/large.png?bust=b33bb0ba-dfb0-42aa-8258-fc6f65e87832'}></img>
<h1 className={styles.text}>Питомник Ваулино</h1>
<div className={styles.adresNord}><ul>Московская обл.,</ul>
<ul>Можайский р-н, </ul>
<ul>д.Ваулино</ul>
<ul>8 (968) 753 - 18 - 95</ul>
</div>
<div className={styles.adresSud}><ul>Краснодарский край,</ul>
<ul>Северский р - н, </ul>
<ul>ст. Новодмитриевская</ul>
<ul>8 (989) 142 - 69 - 65</ul>
<div><Link to="/basket">
        <p>Корзина</p>
      </Link></div>
</div>
</div>
)}

export default PitomnikName