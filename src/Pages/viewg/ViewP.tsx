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
        <h1>Prince of Tennis</h1>
          <img src="https://media.kitsu.io/manga/128/poster_image/medium-494e4b2f4ad645d0e4267f7f9b0d0857.jpeg"></img>
          <p>Ryoma Echizen just joined the Seishun Academy's tennis team, which is known for being one of the most competitive teams in Japan. 
            Its members are incredibly talented, gifted, and athletic. With rigorous and extremely intense practices, the upperclassmen of the team expect the very best from 
            themselves and they expect even more from the new members of the team. While most of the freshmen are on pins and needles hoping they won't get cut from the team, 
            Ryoma Echizen is confident, cool, and collected. Some might even say he's cocky, but at least he's got the skills to back up his attitude. With his virtually 
            unreturnable \"twist serve,\" Ryoma is sure to make the starting team. Join Ryoma and the other first years, as they train hard, make friends, and try to find a 
            place for themselves on the team. And meet Ryoma's cute but chronically shy classmate Sakuno Ryuzaki. She's got a big crush on Ryoma, but will he ever notice her? 
            Ryoma Echizen is the Prince of Tennis. He may be ready for the Seishun Academy tennis team, but are THEY ready for HIM? \n(Source: Viz)Note: The total chapter count
             includes 379 chapters for the original manga and 1 chapter entitled \"Chapter 0.\"  This totals 380.  Please do not change the chapter count." </p>
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
export default ViewP;
