import React from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import setal from "../../componentes/imagens/setal.png";
import setar from "../../componentes/imagens/setar.png";
import um from "../../componentes/imagens/naruto/naruto_1.jpg";
import dois from "../../componentes/imagens/naruto/naruto_2.jpg";
import tres from "../../componentes/imagens/naruto/naruto_3.jpg";
import quatro from "../../componentes/imagens/naruto/naruto_4.jpg";
import cinco from "../../componentes/imagens/naruto/naruto_5.jpg";
import seis from "../../componentes/imagens/naruto/naruto_6.jpg";
import sete from "../../componentes/imagens/naruto/naruto_7.jpg";
import oito from "../../componentes/imagens/naruto/naruto_8.jpg";
import nove from "../../componentes/imagens/naruto/naruto_9.jpg";
import dez from "../../componentes/imagens/naruto/naruto_10.jpg";
import './Cap.css';

function Cap1N() {
    return (
        <div>
            <Padrao />
            <div className="navcap">
                <ul>
                <li className="setal"><img src={setal} alt='seta'></img></li><li className="textuu"><h5>Capítulo 1/244</h5></li><li className="setar"><img src={setar} alt='seta'></img></li>
                </ul>
            </div>
            <div className="pages">
                <ul>
                    <li><img src={um} alt='page'></img></li>
                    <li><img src={dois} alt='page'></img></li>
                </ul>
                <ul className="pupu">
                    <li><img src={tres} alt='page'></img></li>
                </ul>
                <ul>
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
        </div >
    )
}

export default Cap1N;