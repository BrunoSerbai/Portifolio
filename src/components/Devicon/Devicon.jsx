import React from "react";
import "./Devicon.css";

import webmin from "../../assets/Icons/webmin2.svg";
import nginx from "../../assets/Icons/nginx.svg";

function Devicon() {
  return (
    <div className="devicon">
      {/* Icons from: https://github.com/Ileriayo/markdown-badges and https://devicon.dev/ */}
      <div className="icons">
        <i class="devicon-html5-plain" />
        HTML 5
      </div>
      <div className="icons">
        <i class="devicon-css3-plain" />
        CSS 3
      </div>
      <div className="icons">
        <i class="devicon-javascript-plain" />
        JAVASCRIPT
      </div>
      <div className="icons">
        <i class="devicon-react-original" />
        REACT
      </div>
      <div className="icons">
        <i class="devicon-git-plain" />
        GIT
      </div>
      <div className="icons">
        <i class="devicon-github-original" />
        GITHUB
      </div>
      <div className="icons">
        <i class="devicon-linux-plain" />
        LINUX
      </div>
      <div class="icons">
        <i class="devicon-docker-plain" />
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
      <div class="icons">
        <i class="devicon-figma-plain"/>
        FIGMA
      </div>
    </div>
  );
}

export default Devicon;
