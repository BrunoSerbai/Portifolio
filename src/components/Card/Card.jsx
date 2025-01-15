import React from "react";
import "../Card/Card.css";

function Card({ imagem, titulo, subtitulo, texto, botaoTexto, botaoUrl }) {
  
    return (
      <>
        <div className="card">
          <img src={imagem} className="cardImg"/>
        
          
          <h3>{titulo}</h3>
          <div className="description">{texto}</div>
        </div>
      </>
    );
  

  
}

export default Card;
