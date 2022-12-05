import { title } from "process";
import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { isConstructorDeclaration } from "typescript";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
//import BuscaID from " ../../componentes/BuscaID";

import "./ViewG.css";

function ViewG() {
  const [mangaNaruto, setMangaNaruto] = useState([]);
  //const id = 35;
  /// const title = (data, id, title,en);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=34}")
      .then((response) => response.json())
      .then((response) => setMangaNaruto(response.data));
  });
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <h1>Naruto</h1>
          <img src="https://media.kitsu.io/manga/poster_images/35/original.png"></img>
          <p>Before Naruto's birth, a great demon fox had attacked the Hidden Leaf Village. A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers. Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village. Desiring the respect he never received, Naruto works towards his dream with fellow friends Sasuke and Sakura and mentor Kakashi as they go through many trials and battles that come with being a ninja. </p>
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
export default ViewG;
