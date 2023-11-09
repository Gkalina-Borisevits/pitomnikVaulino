import { FC } from 'react'
// import cn from 'classnames'
import styles from './YoutubeExample.module.css'

const YoutubeExample: FC = () => {
console.log('Lets go!');
return (
<>
<div className={styles.container}>

        <div className={styles.textLink}>
            <a href="https://www.bona-forte.ru/laboratories/article/241-petunii-vyrashchivanie-i-osobennosti-ukhoda/" target="_blank" >Статья по выращиванию летних цветов</a>
            <a href="https://www.bona-forte.ru/laboratories/nasekomye-i-vrediteli/" target="_blank" >Насекомые и вредители</a>
            <a href="https://www.bona-forte.ru/laboratories/udobreniya/" target="_blank" >Удобрения</a>
            <a href="https://www.bona-forte.ru/laboratories/article/241-petunii-vyrashchivanie-i-osobennosti-ukhoda/" target="_blank" >Статья по выращиванию петунии</a>
        </div>

  <div  className={styles.video}>
        <iframe className={styles.videoAmpel} width="560" height="315" src="https://www.youtube.com/embed/ONvVIFRGSDg?si=sazBUM7VVcWKng4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe className={styles.videoPetunia} width="560" height="315" src="https://www.youtube.com/embed/m41DK0b8bYs?si=bV7dH8xS8KkOasgZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe className={styles.videoSurfinia} width="560" height="315" src="https://www.youtube.com/embed/D8Vf1E8piQk?si=yg0xbX-BO_qy8wB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <iframe className={styles.videStrawberry} width="560" height="315" src="https://www.youtube.com/embed/-oV_bZjR7Eo?si=C_BdI9myLSqhN_-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/JUGnP_7avVo?si=dVTc8FUHJNuFb3Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
      </div >
      </div>

    </>
)}

export default YoutubeExample