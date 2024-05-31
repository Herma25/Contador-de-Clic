import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={
        esBotonDeClic
          ? "Boton-clic"
          : "Boton-reiniciar" /* usa booleano v o f para definir que clase usar*/
      }
      onClick={manejarClic} /* on significa cuando ocurra un clic*/
    >
      {texto}
    </button>
  );
}

export default Boton;
