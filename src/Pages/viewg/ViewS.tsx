import { title } from "process";
import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { isConstructorDeclaration } from "typescript";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";


import "./ViewG.css";

function ViewS() {
  const [mangaNaruto, setMangaNaruto] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=240}")
      .then((response) => response.json())
      .then((response) => setMangaNaruto(response.data));
  });
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <div className="descrition">
          <h1>Sailor Moon</h1>
          <ul>
            <h4>Tags:⠀⠀⠀⠀⠀⠀</h4><li>⠀Shojo</li><h5>⠀⠀⠀</h5><li>⠀comédia</li>
          </ul>
          <img src="https://media.kitsu.io/manga/241/poster_image/medium-70647553c5862dd0483bd16f40787bf5.jpeg"></img>
          <p> Tsukino Usagi is 14 years old and in her second year of middle school. She's a bit of a crybaby and klutzy.
            However, she can transform into a warrior of justice, Sailormoon! An eternal classic that should be read by all. </p>
        </div>
        <h1> Capítulos</h1>
        <div className="cap">
          <ul>
            <a href="/cap1s"><li>Capítulo 1 - Usagi - Sailor Moon</li></a>
            <a href="###"><li>Capítulo 2 - Ami Sailor Mercury</li></a>
            <a href="###"><li>Capítulo 3 - Rei - Sailor Mars</li></a>
            <a href="###"><li>Capítulo 4 - Baile de Máscaras</li></a>
            <a href="###"><li>Capítulo 5 - Makoto - Sailor Jupiter</li></a>
            <a href="###"><li>Capítulo 6 - Tuxedo Mask</li></a>
            <a href="###"><li>Capítulo 7 - Chiba Mamoru - Tuxedo Mask</li></a>
            <a href="###"><li>Capítulo 8 - Minako - Sailor V</li></a>
            <a href="###"><li>Capítulo 9 - Serenity - Princesa</li></a>
            <a href="###"><li>Capítulo 10 - Lua</li></a>
            <a href="###"><li>Capítulo 11 - Reunião - Endymion</li></a>
            <a href="###"><li>Capítulo 12 - Batalha Decisiva - Reencarnação</li></a>
            <a href="###"><li>Capítulo 13 - Um Fim e um Recomeço - A Pequena Estrangeira</li></a>
            <a href="###"><li>Capítulo 14 - Black Moon Koan - Sailor Mars</li></a>
            <a href="###"><li>Capítulo 15 - Black Moon Beruche - Sailor Mercury</li></a>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewS;
