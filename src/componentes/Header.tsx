import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from './imagens/polvinhobranco.png';
import recenticon from './imagens/recenticon.png';
import genreicon from './imagens/genreicon.png';
import topicon from './imagens/topicon.png';
import homeicon from './imagens/homeicon.png';
import usericon from './imagens/usericon.png';
import Slide from './slide';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate('/login');
    }
    const goToHomePage = () => {
        navigate('/');
    }
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
                <img src={logo} alt='logo' className='Logo' onClick={goToHomePage}></img>
                <div className="user">
                    <img src={usericon} alt='usericon'></img>
                    <button type="button" onClick={goToLoginPage} className="buttonzinho">Fazer Login</button>
                </div>
            </nav>

            <div className={menu_class}></div>
            <div>
                <Slide />
            </div>
            <div className={nav_class}>
                <ul className="nav-style">
                    <li><img src={homeicon} alt='homeicon' className="homeicon"></img><a href="/">Inicío</a></li>
                    <li><img src={recenticon} alt='recenticon' className="recenticon"></img><a href="#">Recentes</a></li>
                    <li><img src={topicon} alt='topicon' className="topicon"></img><a href="#">Top</a></li>
                    <li><img src={genreicon} alt='genreicon' className="genreicon"></img><a href="#">Genêros</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Header;

