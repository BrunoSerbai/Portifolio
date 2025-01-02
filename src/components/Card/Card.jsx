import React from "react";
import "./Card.css";

function Card({ imagem, titulo, subtitulo, texto, botaoTexto, botaoUrl }) {
  if (!botaoTexto || botaoTexto.length === 0) {
    return (
      <div className="card">
        <img className="card-image" alt="Imagem" src={imagem} />
        <h3 className="card-title">
          {titulo}
          <br />
          {subtitulo}
        </h3>
        <p className="card-text">{texto}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <img className="card-image" alt="Imagem" src={imagem} />
      <h3 className="card-title">
        {titulo}
        <br />
        {subtitulo}
      </h3>
      <p className="card-text">{texto}</p>
      <button className="card-button" href={botaoUrl}>
        {botaoTexto}
      </button>
    </div>
  );
}

export default Card;
