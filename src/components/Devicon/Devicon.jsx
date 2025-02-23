import "./Devicon.css";
import webmin from "../../assets/Icons/webmin2.svg";
import nginx from "../../assets/Icons/nginx.svg";

function Devicon() {
  return (
    <div className="devicon">
      {/* Icons from: https://github.com/Ileriayo/markdown-badges and https://devicon.dev/ */}
      <div className="icons">
        <i className="devicon-html5-plain" />
        HTML 5
      </div>
      <div className="icons">
        <i className="devicon-css3-plain" />
        CSS 3
      </div>
      <div className="icons">
        <i className="devicon-javascript-plain" />
        JAVASCRIPT
      </div>
      <div className="icons">
        <i className="devicon-react-original" />
        REACT
      </div>
      <div className="icons">
        <i className="devicon-git-plain" />
        GIT
      </div>
      <div className="icons">
        <i className="devicon-github-original" />
        GITHUB
      </div>
      <div className="icons">
        <i className="devicon-linux-plain" />
        LINUX
      </div>
      <div className="icons">
        <i className="devicon-neovim-plain" />
        NEOVIM
      </div>
      <div className="icons">
        <i className="devicon-docker-plain" />
        DOCKER
      </div>
      <div className="icons">
        <img src={nginx} />
        NGINX
      </div>
      <div className="icons">
        <img src={webmin} />
        WEBMIN
      </div>
      <div className="icons">
        <i className="devicon-figma-plain" />
        FIGMA
      </div>
      <div className="icons">
        <i className="devicon-tailwindcss-original" />
        TAILWIND
      </div>
      <div className="icons">
        <i className="devicon-postgresql-plain" />
        POSTGRESQL
      </div>
      <div className="icons">
        <i className="devicon-express-original" />
        EXPRESS.JS
      </div>
    </div>
  );
}

export default Devicon;
