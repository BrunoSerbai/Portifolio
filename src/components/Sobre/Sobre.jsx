import React from 'react'

function Sobre({
  texto="Desenvolvedor com entusiasmo para aprender e paixão por resolver desafios. Ansioso para contribuir em projetos inovadores. Comprometido com o aprimoramento constante e em deixar uma marca positiva no mundo do desenvolvimento de software.",
}) {

  return (
    <>
    <h3 id="sobre">Sobre mim</h3>
    <p id="sobre">{texto}</p>
    </>
  )
}

export default Sobre