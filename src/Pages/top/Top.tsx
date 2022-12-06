//import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
//import Padrao from "../../componentes/Padrao";
import './Topison.css';

function Top() {
  const [mangaTrends, setMangaTrends] = useState([]);
  const [mangaTrends2, setMangaTrends2] = useState([]);
  const [mangaTrends3, setMangaTrends3] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/manga")
      .then((response) => response.json())
      .then((response) => setMangaTrends(response.data));
    fetch("https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=23")
      .then((response) => response.json())
      .then((response) => setMangaTrends2(response.data));
    fetch("https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=33")
      .then((response) => response.json())
      .then((response) => setMangaTrends3(response.data));
  });
  return (
    <div>
      <Header />

      <div className="trend">
        <h2>Top Trend Manga</h2>
        <ul>
          {mangaTrends
            ? mangaTrends.map(
              ({
                id, attributes: {
                  posterImage: { original },
                },
              }) => (
                <li>
                  <a href={"##"}>
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
          {mangaTrends2
            ? mangaTrends2.map(
              ({
                id, attributes: {
                  posterImage: { original },
                },
              }) => (
                <li>
                  <a href={"##"}>
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
          {mangaTrends3
            ? mangaTrends3.map(
              ({
                id, attributes: {
                  posterImage: { original },
                },
              }) => (
                <li>
                  <a href={"##"}>
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
      <Footer />
    </div>
  );
}

export default Top;
