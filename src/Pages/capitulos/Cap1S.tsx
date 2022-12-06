import React from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import setal from "../../componentes/imagens/setal.png";
import setar from "../../componentes/imagens/setar.png";
import um from "../../componentes/imagens/sailorMoon/sailorMoon_1.jpg";
import dois from "../../componentes/imagens/sailorMoon/sailorMoon_2.jpg";
import tres from "../../componentes/imagens/sailorMoon/sailorMoon_3.jpg";
import quatro from "../../componentes/imagens/sailorMoon/sailorMoon_4.jpg";
import cinco from "../../componentes/imagens/sailorMoon/sailorMoon_5.jpg";
import seis from "../../componentes/imagens/sailorMoon/sailorMoon_6.jpg";
import sete from "../../componentes/imagens/sailorMoon/sailorMoon_7.jpg";
import oito from "../../componentes/imagens/sailorMoon/sailorMoon_8.jpg";
import nove from "../../componentes/imagens/sailorMoon/sailorMoon_9.jpg";
import dez from "../../componentes/imagens/sailorMoon/sailorMoon_10.jpg";
import './Caps.css';

function Cap1S() {
    return (
        <div>
            <Padrao />
            <nav className="navcaps">
                <ul>
                    <li className="setals"><img src={setal} alt='seta'></img></li><li className="textuus"><h5>Capítulo 1/244</h5></li><li className="setar"><img src={setar} alt='seta'></img></li>
                </ul>
            </nav>
            <div className="pagess">
                <ul>
                    <li><img src={um} alt='page'></img></li>
                    <li><img src={dois} alt='page'></img></li>
                </ul>
                <ul className="pupus">
                    <li><img src={tres} alt='page'></img></li>
                    <li><img src={quatro} alt='page'></img></li>
                    <li><img src={cinco} alt='page'></img></li>
                    <li><img src={seis} alt='page'></img></li>
                    <li><img src={sete} alt='page'></img></li>
                    <li><img src={oito} alt='page'></img></li>
                    <li><img src={nove} alt='page'></img></li>
                    <li><img src={dez} alt='page'></img></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Cap1S;