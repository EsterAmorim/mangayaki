import { title } from "process";
import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { isConstructorDeclaration } from "typescript";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";


import "./ViewG.css";

function ViewP() {
  const [mangaNaruto, setMangaNaruto] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=127}")
      .then((response) => response.json())
      .then((response) => setMangaNaruto(response.data));
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
        <h1> Capítulos</h1>
        <div className="cap">
          <ul>
            <a href="###"><li>Capítulo 1 - Surge o Príncipe</li></a>
            <a href="###"><li>Capítulo 2 - O Samurai Júnior</li></a>
            <a href="###"><li>Capítulo 3 - Chegam os Veteranos</li></a>
            <a href="###"><li>Capítulo 4 - Um Homem Chamado Serpente</li></a>
            <a href="###"><li>Capítulo 5 - O Ataque da Serpente</li></a>
            <a href="###"><li>Capítulo 6 - Nanjiro Echizen, o Homem</li></a>
            <a href="###"><li>Capítulo 7 - Os Dois Ryomas</li></a>
            <a href="###"><li>Capítulo 8 - Split Steps</li></a>
            <a href="###"><li>Capítulo 9 - Um Dia Difícil</li></a>
            <a href="###"><li>Capítulo 10 - O Retorno de Sasabi</li></a>
            <a href="###"><li>Capítulo 11 - Ryoma Contra Momoshiro!</li></a>
            <a href="###"><li>Capítulo 12 - A Tática da Finita</li></a>
            <a href="###"><li>Capítulo 13 - Os Bons Também Jogam em Duplas!</li></a>
            <a href="###"><li>Capítulo 14 - Tsubame Gaeshi, o Golpe Mortal!</li></a>
            <a href="###"><li>Capítulo 15 - Kawamura, Quem é Você Realmente!</li></a>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewP;
