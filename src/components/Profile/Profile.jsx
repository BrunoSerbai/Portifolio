import { useEffect, useRef } from "react";
import profileImg from "../../assets/Images/b2.webp";
import "./Profile.css";

const TYPING_STRINGS = [
  "Estudante de Engenharia de Software",
  "Suporte de TI e Infraestrutura",
  "Entusiasta de Linux",
  "Desenvolvedor Full-Stack",
];

function Profile() {
  const typingRef = useRef(null);

  useEffect(() => {
    let strIndex = 0, charIndex = 0, deleting = false, timeout;
    function type() {
      const current = TYPING_STRINGS[strIndex];
      if (!deleting) {
        charIndex++;
        typingRef.current.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) { deleting = true; timeout = setTimeout(type, 2200); return; }
      } else {
        charIndex--;
        typingRef.current.textContent = current.slice(0, charIndex);
        if (charIndex === 0) { deleting = false; strIndex = (strIndex + 1) % TYPING_STRINGS.length; }
      }
      timeout = setTimeout(type, deleting ? 45 : 80);
    }
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid reveal">
          <div className="hero-photo-wrap">
            <img src={profileImg} alt="Bruno Serbai" className="hero-photo" />
          </div>
          <div className="hero-content">
            <div className="hero-status">
              <span className="status-dot" />
              disponível para oportunidades
            </div>
            <h1 className="hero-name">Bruno Serbai</h1>
            <p className="hero-title">
              <span className="prompt">~/dev $</span>
              <span ref={typingRef} />
              <span className="typing-cursor">▋</span>
            </p>
            <p className="hero-desc">
              Desenvolvedor com entusiasmo para aprender e paixão por resolver
              desafios. Estudante de Engenharia de Software com foco em
              full-stack, infraestrutura e soluções open source.
            </p>
            <div className="hero-actions">
              <a href="https://github.com/BrunoSerbai" target="_blank" rel="noreferrer">
                <button className="btn btn-primary">
                  <i className="devicon-github-original" /> GitHub
                </button>
              </a>
              <a href="https://www.linkedin.com/in/bruno-serbai/" target="_blank" rel="noreferrer">
                <button className="btn btn-ghost">
                  <i className="devicon-linkedin-plain" /> LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
