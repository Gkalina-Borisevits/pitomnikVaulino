import { FC } from "react";
//import cn from 'classnames'
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return <div className={styles.footer}>
    <div className={styles.container}>Все данные, представленные на сайте, носят сугубо информационный характер и не являются исчерпывающими. Для более подробной информации следует обращаться к менеджерам компании по указанным на сайте телефонам. Вся представленная на сайте информация, касающаяся комплектации, технических характеристик, цветовых сочетаний, а также стоимости продукции, носит информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями пункта 2 статьи 437 Гражданского Кодекса Российской Федерации. Указанные цены являются рекомендованными и могут отличаться от действительных цен.
Иллюстративный материал заимствован из общедоступных ресурсов интернета. Если вы являетесь автором изображений и видеоматериала, используемых на нашем сайте - напишите нам на email.</div>

<h1 className={styles.text}>Политика возврата</h1>

   
<div className={styles.socialLinks}>
    <p> Мы в соцсетях:
        <a target="_blank" href="https://instagram.com/rassadavaulino?igshid=NzZlODBkYWE4Ng=="><i className="fab fa-instagram"></i></a>
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100034533141647 "><i className="fa-brands fa-facebook"></i></a>
        <a target="_blank" href="https://web.telegram.org/a/#-4072667025"><i className="fa-brands fa-telegram"></i></a>
        <a target="_blank" href="https://chat.whatsapp.com/Cxs7csF5ssVLjlGGwzE7uH "><i className="fa-brands fa-whatsapp"></i></a>
    <a href=" mailto:pitomnikvaulino@gmail.com "> <i className="fa-solid fa-envelope"></i></a>
    </p>
    <a href="#image" className={styles.textStart}>В начало страницы</a>
  </div>
  <div className={styles.kleinContainer}>2023г  Питомник Ваулино</div>
  </div>;
};

export default Footer;
