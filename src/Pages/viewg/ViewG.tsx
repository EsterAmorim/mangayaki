import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import "./ViewG.css";

const [mangaView, setMangaView] = useState([]);
const urlParams = newUrl = 

useEffect(() => {
    fetch('https://kitsu.io/api/edge/manga/'+id+'/')
    .then((response) => response.json())
    .then((response) => setMangaView(response.data));
});
function ViewG() {
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        {mangaView
          ? mangaView.map(
              ({
                id,
                attributes: {
                  posterImage: { original },
                },
              }) => (
                    <img
                      key={id}
                      src={original ?? "imagem nao encontrada"}
                      alt="manga"
                    ></img>
              )
            )
          : "Nenhuma manga encontrado"}
        <h2> </h2>
      </div>
      <Footer />
    </div>
  );
}



export default ViewG;
