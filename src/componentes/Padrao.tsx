import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "./imagens/polvinhobranco.png";
import recenticon from './imagens/recenticon.png';
import genreicon from './imagens/genreicon.png';
import topicon from './imagens/topicon.png';
import homeicon from './imagens/homeicon.png';
import usericon from './imagens/usericon.png';
import "./Padrao.css";


const Padrao = () => {
    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate('/login');
    }
    const goToHomePage = () => {
        navigate('/');
    }
    // to change burger classes
    const [burgerpadrao_class, setBurgerPadraoClass] = useState("burgerpadrao-bar unclickedpadrao")
    const [menupadrao_class, setMenuPadraoClass] = useState("menupadrao hiddenpadrao")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerPadraoClass("burgerpadrao-bar clickedpadrao")
            setMenuPadraoClass("menupadrao visiblepadrao")
        }
        else {
            setBurgerPadraoClass("burgerpadrao-bar unclickedpadrao")
            setMenuPadraoClass("menupadrao hiddenpadrao")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <nav className="padraozao">
                <div className="burgerpadrao-menu" onClick={updateMenu}>
                    <div className={burgerpadrao_class} ></div>
                    <div className={burgerpadrao_class} ></div>
                    <div className={burgerpadrao_class} ></div>
                </div>
                <img src={logo} alt='logo' className='Logopadrao' onClick={goToHomePage}></img>
                <div className="userpadrao">
                    <img src={usericon} alt='usericon'></img>
                    <button type="button" onClick={goToLoginPage} className="buttonzinhopadrao">Fazer Login</button>
                </div>
            </nav>

            <div className={menupadrao_class}>
                <ul className="nav-stylepadrao">
                    <li><img src={homeicon} alt='homeicon' className="homeiconpadrao"></img><a href="/">Inicío</a></li>
                    <li><img src={recenticon} alt='recenticon' className="recenticonpadrao"></img><a href="/recentes">Recentes</a></li>
                    <li><img src={topicon} alt='topicon' className="topiconpadrao"></img><a href="/top">Top</a></li>
                    <li><img src={genreicon} alt='genreicon' className="genreiconpadrao"></img><a href="/generos">Genêros</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Padrao;

