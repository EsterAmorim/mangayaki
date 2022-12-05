import React from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import setal from "../../componentes/imagens/setal.png";
import setar from "../../componentes/imagens/setar.png";
import um from "../../componentes/imagens/princeTenis/prince1.jpg";
import dois from "../../componentes/imagens/princeTenis/prince2.jpg";
import tres from "../../componentes/imagens/princeTenis/prince3.jpg";
import quatro from "../../componentes/imagens/princeTenis/prince4.jpg";
import cinco from "../../componentes/imagens/princeTenis/prince5.jpg";
import seis from "../../componentes/imagens/princeTenis/prince6.jpg";
import sete from "../../componentes/imagens/princeTenis/prince7.jpg";
import oito from "../../componentes/imagens/princeTenis/prince8.jpg";
import nove from "../../componentes/imagens/princeTenis/prince9.jpg";
import dez from "../../componentes/imagens/princeTenis/prince10.jpg";
import './Capp.css';

function Cap1P() {
    return (
        <div>
            <Padrao />
            <nav className="navcapp">
            <ul>
                <li className="setalp"><img src={setal} alt='seta'></img></li><li className="textuup"><h5>Capítulo 1/244</h5></li><li><img src={setar} alt='seta'></img></li>
                </ul>
            </nav>
            <div className="pagesp">
                    <ul className="pupup">
                        <li><img src={um} alt='page'></img></li>
                        <li><img src={dois} alt='page'></img></li>
                    </ul>
                    <ul>
                        <li><img src={tres} alt='page'></img></li>
                        <li><img src={quatro} alt='page'></img></li>
                        <li><img src={cinco} alt='page'></img></li>
                    </ul>
                    <ul className="pupup">
                        <li><img src={seis} alt='page'></img></li>
                    </ul>
                    <ul>
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

export default Cap1P;