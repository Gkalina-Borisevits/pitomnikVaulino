import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.icon} onClick={toggleMenu}>
        ☰
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.navbar}>
          <NavLink to="/">Каталог продукции</NavLink>
          <NavLink to="componentMy">Питомник</NavLink>
          <NavLink to="delivery">Доставка </NavLink>
          <NavLink to="designDecor">Дизайн и декор</NavLink>
          <NavLink to="gallery">Галерея</NavLink>
          <NavLink to="youtubeExample">Полезная информация</NavLink>
          <NavLink to="contacts">Контакты</NavLink>

          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
