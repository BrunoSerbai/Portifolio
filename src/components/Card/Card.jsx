import "../Card/Card.css";

function Card({ imagem, titulo, texto}) {
  
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
