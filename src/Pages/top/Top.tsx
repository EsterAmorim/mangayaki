//import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import "./Top.css";

const Top = () => {
  const [mangaTrends, setMangaTrends] = useState([]);
  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/manga")
      .then((response) => response.json())
      .then((response) => setMangaTrends(response.data));
  });
  return (
    <div>
      <div>
        <Padrao />
      </div>
      <div className="trending">
        <div className="trend">
          <ul>
            {mangaTrends
              ? mangaTrends.map(
                ({
                  id,
                  attributes: {
                    posterImage: { original },
                  },
                }) => (
                  <li>
                    <a
                      href={
                        "https://kitsu.io/api/edge/manga/" + id + "/chapters"
                      }
                    >
                      <img
                        key={id}
                        src={original ?? "imagem nao encontrada"}
                        alt="manga"
                      ></img>
                    </a>
                  </li>
                )
              )
              : "Nenhuma manga encontrado"}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Top;
