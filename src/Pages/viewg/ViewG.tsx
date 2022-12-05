import { title } from "process";
import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { isConstructorDeclaration } from "typescript";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import "./ViewG.css";

function ViewG() {
  const [mangaNaruto, setMangaNaruto] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=34")
      .then((response) => response.json())
      .then((response) => setMangaNaruto(response.data));
  });
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <div className="descrition">
          <h1>Naruto</h1>
          <ul>
          <h4>Tags:⠀⠀⠀⠀⠀⠀</h4><li>⠀shounen</li><h5>⠀⠀⠀</h5><li>⠀comédia</li>
          </ul>
          <img src="https://media.kitsu.io/manga/poster_images/35/original.png"></img>
          <p>Before Naruto's birth, a great demon fox had attacked the Hidden Leaf Village. A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers. Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village. Desiring the respect he never received, Naruto works towards his dream with fellow friends Sasuke and Sakura and mentor Kakashi as they go through many trials and battles that come with being a ninja. </p>
        </div>
        <h1> Capítulos</h1>
        <div className="cap">
          <ul>
            <a href="###"><li>Capítulo 1 - Uzumaki Naruto!!</li></a>
            <a href="###"><li>Capítulo 2 - Konohamaru!!</li></a>
            <a href="###"><li>Capítulo 3 - Uchiha Sasuke!!</li></a>
            <a href="###"><li>Capítulo 4 - Hatake Kakashi!!</li></a>
            <a href="###"><li>Capítulo 5 - O Descuido é Seu Maior Inimigo!!</li></a>
            <a href="###"><li>Capítulo 6 - Apenas o Sasuke-kun...!!</li></a>
            <a href="###"><li>Capítulo 7 - A Conclusão do Kakashi</li></a>
            <a href="###"><li>Capítulo 8 - Mesmo Assim Vocês Falharam!!</li></a>
            <a href="###"><li>Capítulo 9 - O Pior Cliente Possível</li></a>
            <a href="###"><li>Capítulo 10 - 2 Já Foram</li></a>
            <a href="###"><li>Capítulo 11 - Desembarque!!</li></a>
            <a href="###"><li>Capítulo 12 - Está Acabado!!</li></a>
            <a href="###"><li>Capítulo 13 - Eu Sou um Ninja!!</li></a>
            <a href="###"><li>Capítulo 14 - Plano Secreto...!!</li></a>
            <a href="###"><li>Capítulo 15 - Sharinga Ressuscitado!!</li></a>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewG;
