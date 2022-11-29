import React, { useState } from "react";
import logo from './imagens/polvinhobranco.png';
import './Header.css';

const Header = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [nav_class, setNavClass] = useState("nav hidden")

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setNavClass("nav visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setNavClass("nav hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}></div>
                <div className={nav_class}>
                    <ul className="nav-style">
                        <li>Inicío</li>
                        <li>Recentes</li>
                        <li>Top</li>
                        <li>Genêro</li>
                    </ul>
                </div>
        </div>
    )
}

export default Header;