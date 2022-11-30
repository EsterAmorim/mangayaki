import React from 'react';
import manga1 from './imagens/capa/manga1.jpg';
import manga2 from './imagens/capa/manga2.jpg';
import manga3 from './imagens/capa/manga3.jpg';
import manga4 from './imagens/capa/manga4.jpg';
import manga5 from './imagens/capa/manga5.png';
import manga6 from './imagens/capa/manga6.jpg';
import manga7 from './imagens/capa/manga7.jpg';
import manga8 from './imagens/capa/manga8.jpg';
import manga9 from './imagens/capa/manga9.jpg';
import manga10 from './imagens/capa/manga10.jpg';
import './Section.css';

function Section() {
    return (
        <div className='homeC'>
            <div className='popular'>
                <h2>Popular Agora</h2>
                <ul>
                    <li><img src={manga1} alt='manga'></img></li>
                    <li><img src={manga2} alt='manga'></img></li>
                    <li><img src={manga3} alt='manga'></img></li>
                    <li><img src={manga4} alt='manga'></img></li>
                    <li><img src={manga5} alt='manga'></img></li>
                </ul>
                <ul>
                    <li><img src={manga6} alt='manga'></img></li>
                    <li><img src={manga7} alt='manga'></img></li>
                    <li><img src={manga8} alt='manga'></img></li>
                    <li><img src={manga9} alt='manga'></img></li>
                    <li><img src={manga10} alt='manga'></img></li>
                </ul>
            </div>
            <div className='bestM'>
                <h2>Melhores do Mês</h2>
                <ul>
                    <li><img src={manga1} alt='manga'></img></li>
                    <li><img src={manga2} alt='manga'></img></li>
                    <li><img src={manga3} alt='manga'></img></li>
                    <li><img src={manga4} alt='manga'></img></li>
                    <li><img src={manga5} alt='manga'></img></li>
                </ul>
                <ul>
                    <li><img src={manga6} alt='manga'></img></li>
                    <li><img src={manga7} alt='manga'></img></li>
                    <li><img src={manga8} alt='manga'></img></li>
                    <li><img src={manga9} alt='manga'></img></li>
                    <li><img src={manga10} alt='manga'></img></li>
                </ul>
            </div>
            <div className='bestY'>
                <h2>Melhores do Ano</h2>
                <ul>
                    <li><img src={manga1} alt='manga'></img></li>
                    <li><img src={manga2} alt='manga'></img></li>
                    <li><img src={manga3} alt='manga'></img></li>
                    <li><img src={manga4} alt='manga'></img></li>
                    <li><img src={manga5} alt='manga'></img></li>
                </ul>
                <ul>
                    <li><img src={manga6} alt='manga'></img></li>
                    <li><img src={manga7} alt='manga'></img></li>
                    <li><img src={manga8} alt='manga'></img></li>
                    <li><img src={manga9} alt='manga'></img></li>
                    <li><img src={manga10} alt='manga'></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Section;