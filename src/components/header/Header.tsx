import React, { FC } from "react";
import { IoCallOutline } from "react-icons/io5";
import "./header.scss";
import { IoExitOutline } from "react-icons/io5";
import logo from "../../assets/header/PORTEN.svg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__top">
            <div className="header__top__left">
              <IoCallOutline />
              <p>
                8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00{" "}
              </p>
            </div>
            <div className="header__top__right">
              <IoExitOutline />
              <p>Войти / Регистрация</p>
            </div>
          </div>
          <nav className="header__nav">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="header__list">
              <li className="hader__item">
                <a className="header__link" href="">
                  Понравилось
                </a>
              </li>
              <li className="hader__item">
                <a className="header__link" href="">
                  личный кабинет
                </a>
              </li>{" "}
              <li className="hader__item">
                <a className="header__link" href="">
                  настройки
                </a>
              </li>{" "}
              <li className="hader__item">
                <a className="header__link" href="">
                  <CiShoppingCart />
                </a>
              </li>{" "}
              <li className="hader__item">
                <a className="header__link" href="">
                  <CiSearch />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
