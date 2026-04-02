import "./Card.css";

function Card({ imagem, titulo, texto, accent = "blue" }) {
  return (
    <div className={`card card--${accent}`}>
      <div className="card-img-wrap">
        <img src={imagem} alt={titulo} className="card-img" />
        <div className="card-img-overlay" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-desc">{texto}</p>
      </div>
    </div>
  );
}

export default Card;
