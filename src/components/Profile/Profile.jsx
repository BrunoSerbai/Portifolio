import profileImg from "../../assets/Images/b2.webp";
import "./Profile.css";

function Profile() {
  return (
    <>
      <img id="profile" src={profileImg} />
      <h1 className="name">Bruno Serbai</h1>
      <div className="devicon">
        <a href="https://github.com/BrunoSerbai" target="_blank">
          <button className="links">
            <i class="devicon-github-original" /> GITHUB
          </button>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/bruno-serbai/">
          <button className="outline links">
            {" "}
            <i class="devicon-linkedin-plain" /> LINKEDIN
          </button>
        </a>
      </div>
    </>
  );
}

export default Profile;
