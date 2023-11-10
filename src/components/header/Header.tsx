import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
//import cn from 'classnames'
import styles from './Header.module.css'
import { useAppDispatch } from "../../app/hooks";
import { loadProducts } from "../../features/products/productAction";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import { loadImages } from "../../features/imageGallery/imageAction";

const Header: FC = () => {
  console.log("Lets go!");
  const dispatch = useAppDispatch()

  useEffect(() => {
dispatch(loadProducts())
dispatch(loadImages())
  }, []);
  return (
    <div className={styles.navbar}>
      <BurgerMenu/>
    <NavLink to="/">Каталог продукции</NavLink>
    <NavLink to="componentMy">Питомник</NavLink>
    <NavLink to="delivery">Доставка </NavLink>
    <NavLink to="designDecor">Дизайн и декор</NavLink>
    <NavLink to="gallery">Галерея</NavLink>
    <NavLink to="youtubeExample">Полезная информация</NavLink>
    <NavLink to="contacts">Контакты</NavLink>

    </div>
  );
};

export default Header;
