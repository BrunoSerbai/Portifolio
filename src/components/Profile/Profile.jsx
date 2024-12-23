import React from "react";
import ProfileImg from "../../assets/Images/b2.jpg";
import "./Profile.css";

function Profile() {
  return (
    <>
      <img id="profile" src={ProfileImg} />
      <h1 className="name">Bruno Serbai</h1>
      <div className="header-links">
        <a href="#contato">
          <button>☎ Contato</button>
        </a>
        <a target="blank" href="../../assets/documents/Bruno_Serbai.doc">
          <button className="outline fix"> 🖹 Currículo</button>
        </a>
      </div>
    </>
  );
}

export default Profile;
