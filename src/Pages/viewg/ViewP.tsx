import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";


import "./ViewG.css";

function ViewP() {
  const [, setMangaPrince] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=127}")
      .then((response) => response.json())
      .then((response) => setMangaPrince(response.data));
  });
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <div className="descrition">
          <h1>Prince of Tennis</h1>
          <ul>
            <h4>Tags:⠀⠀⠀⠀⠀⠀</h4><li>⠀esporte</li><h5>⠀⠀⠀</h5><li>⠀ação</li>
          </ul>
          <img src="https://media.kitsu.io/manga/128/poster_image/medium-494e4b2f4ad645d0e4267f7f9b0d0857.jpeg"></img>
          <p>Ryoma Echizen just joined the Seishun Academy's tennis team, which is known for being one of the most competitive teams in Japan.
            Its members are incredibly talented, gifted, and athletic. With rigorous and extremely intense practices, the upperclassmen of the team expect the very best from
            themselves and they expect even more from the new members of the team." </p>
        </div>
        <div className="captitulo"> <h1> Capítulos</h1></div>
        <div className="cap">
          <ul>
            <a href="/cap1p"><li>Capítulo 1 - Surge o Príncipe</li></a>
            <li>Capítulo 2 - O Samurai Júnior</li>
            <li>Capítulo 3 - Chegam os Veteranos</li>
            <li>Capítulo 4 - Um Homem Chamado Serpente</li>
            <li>Capítulo 5 - O Ataque da Serpente</li>
            <li>Capítulo 6 - Nanjiro Echizen, o Homem</li>
            <li>Capítulo 7 - Os Dois Ryomas</li>
            <li>Capítulo 8 - Split Steps</li>
            <li>Capítulo 9 - Um Dia Difícil</li>
            <li>Capítulo 10 - O Retorno de Sasabi</li>
            <li>Capítulo 11 - Ryoma Contra Momoshiro!</li>
            <li>Capítulo 12 - A Tática da Finita</li>
            <li>Capítulo 13 - Os Bons Também Jogam em Duplas!</li>
            <li>Capítulo 14 - Tsubame Gaeshi, o Golpe Mortal!</li>
            <li>Capítulo 15 - Kawamura, Quem é Você Realmente!</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewP;
