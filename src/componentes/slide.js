import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import manga1 from "../componentes/imagens/manga/manga1.jpg";
import manga2 from "../componentes/imagens/manga/manga2.jpg";
import manga3 from "../componentes/imagens/manga/manga3.png";
import manga4 from "../componentes/imagens/manga/manga4.jpg";
import manga5 from "../componentes/imagens/manga/manga5.jpg";
import manga6 from "../componentes/imagens/manga/manga6.jpg";
import './slide.css'

const slide = () => {
    return (
        <Carousel infiniteLoop autoPlay>
            <div className="image">
                <img src={manga1} alt='manga' />
            </div>
            <div className="image">
                <img src={manga2} alt='manga' />
            </div>
            <div className="image">
                <img src={manga3} alt='manga' />
            </div>
            <div className="image">
                <img src={manga4} alt='manga' />
            </div>
            <div className="image">
                <img src={manga5} alt='manga' />
            </div>
            <div className="image">
                <img src={manga6} alt='manga' />
            </div>
        </Carousel>
    );
};

export default slide;