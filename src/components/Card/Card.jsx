import React from 'react'
import '../Card/Card.css'
import expImg from '../../assets/Images/bankme.webp'
function Card({titulo, subtitulo, texto}) {
  return (
    <div className="card">
      
        <img className="card-image" alt="Webmin imagem" src={expImg}></img>
         <h3 className="card-title">{titulo}
        <br />{subtitulo}</h3>
        <p className="card-text">{texto}</p>
    </div>
  )
}

export default Card