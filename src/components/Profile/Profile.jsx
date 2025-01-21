import profileImg from "../../assets/Images/b2.jpg";
import contactImg from "../../assets/Icons/tel1.svg"
import cvImg from "../../assets/Icons/document.svg"
import "./Profile.css";

function Profile() {
  return (
    <>
      <img id="profile" src={profileImg} />
      <h1 className="name">Bruno Serbai</h1>
      <div className="devicon">
        <a href="#contato">
          <button className="links"><img src={contactImg} /> Contato</button>
        </a>
        <a target="blank" href="src/assets/documents/Bruno_Serbai.doc">
          <button className="outline links"> <img src={cvImg}/>  Currículo</button>
        </a>
      </div>
    </>
  );
}

export default Profile;