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
        <h1>Sailor Moon</h1>
          <img src="https://media.kitsu.io/manga/241/poster_image/medium-70647553c5862dd0483bd16f40787bf5.jpeg"></img>
          <p> Tsukino Usagi is 14 years old and in her second year of middle school. She's a bit of a crybaby and klutzy. 
            However, she can transform into a warrior of justice, Sailormoon! An eternal classic that should be read by all. </p>
          <ul>
          <a href="###"><li>Capitulo 1</li></a>
          <a href="###"><li>Capitulo 2</li></a>
          <a href="###"><li>Capitulo 3</li></a>
          <a href="###"><li>Capitulo 4</li></a>
          <a href="###"><li>Capitulo 5</li></a>
          <a href="###"><li>Capitulo 6</li></a>
          <a href="###"><li>Capitulo 7</li></a>
          <a href="###"><li>Capitulo 8</li></a>
          <a href="###"><li>Capitulo 9</li></a>
          <a href="###"><li>Capitulo 10</li></a>
          <a href="###"><li>Capitulo 11</li></a>
          <a href="###"><li>Capitulo 12</li></a>

          </ul>
      </div>
      <Footer />
    </div>
  );
}
export default ViewS;
