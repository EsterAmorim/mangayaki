import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../componentes/Footer";
import logo from './../../componentes/imagens/polvinhobranco.png';
import recenticon from './../../componentes/imagens/recenticon.png';
import genreicon from './../../componentes/imagens/genreicon.png';
import topicon from './../../componentes/imagens/topicon.png';
import homeicon from './../../componentes/imagens/homeicon.png';
import usericon from './../../componentes/imagens/usericon.png';
import './../../componentes/Header.css';






const ViewG = () => {
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

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
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

            <div className={menu_class}>
                <ul className="nav-style">
                    <li><img src={homeicon} alt='homeicon' className="homeicon"></img><a href="/">Inicío</a></li>
                    <li><img src={recenticon} alt='recenticon' className="recenticon"></img><a href="/recentes">Recentes</a></li>
                    <li><img src={topicon} alt='topicon' className="topicon"></img><a href="/top">Top</a></li>
                    <li><img src={genreicon} alt='genreicon' className="genreicon"></img><a href="generos">Genêros</a></li>
                </ul>
            </div>

            <Footer/>
        </div>
        
    )
}

export default ViewG;
