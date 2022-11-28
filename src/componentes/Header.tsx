import React from "react";
import logo from './imagens/polvinhobranco.png';
import './Header.css';

function Header (){
    return (
        <header>
            <div className="logo">
            <div><img src={logo} alt='logo'></img></div>
            </div>
            
            <div className="menu">
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;