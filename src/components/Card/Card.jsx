import "../Card/Card.css";
//TODO: Redesign card layout

function Card({ imagem, titulo, texto }) {
  return (
    <>
      <div className="card">
        <img src={imagem} className="cardImg" />
        <h3 className="tittle">{titulo}</h3>
        <div className="description">{texto}</div>
      </div>
    </>
  );
}

export default Card;
