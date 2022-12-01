import React from 'react';
import logo from './../../componentes/imagens/mangayakiLogo.png';
import './../register/RegisterPage.css';
import './InteressePage.css';
import { useNavigate } from 'react-router-dom';




function InteressePage() {

    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/');
    }

    return (
        <main>
            <body>
                <img src={logo} alt='logo' className='Logoin' onClick={goToHomePage}></img>
                <section className='background'>

                </section>
            </body>
        </main>
    )
}

export default InteressePage;