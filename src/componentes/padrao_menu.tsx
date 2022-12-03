import React, { useEffect, useState } from "react";

import "./padrao_menu.css";

function Padrao() {
  const [mangaTrends, setMangaTrends] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/trending/manga")
      .then((response) => response.json())
      .then((response) => setMangaTrends(response.data));
  });

  return (
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
                    href={"https://kitsu.io/api/edge/manga/" + id + "/chapters"}
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
  );
}
