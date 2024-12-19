import React from 'react'
import '../Card/Card.css'
import expImg from '../../assets/Images/Webmin.svg'
function Card() {
  return (
    <div className="card">
        <img className="card-image" alt="Webmin imagem" src={expImg}></img>
        <h2>Webmin</h2>
        <p>Experiencia ultilizando Webmin para gerenciamento de servidores</p>
    </div>
  )
}

export default Card