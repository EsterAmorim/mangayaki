import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import "./ViewG.css";




function ViewG() {
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <h2>MANGA NAME</h2>

      </div>
      <Footer />
    </div>
  );
}
export default ViewG;
