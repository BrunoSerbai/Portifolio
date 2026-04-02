import { useEffect } from "react";
import "./App.css";
import Navbar  from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Card    from "./components/Card/Card.jsx";

import nginx    from "./assets/Icons/nginx.svg";
import webmin   from "./assets/Icons/webmin2.svg";
import indrelImg  from "./assets/Images/indrel.png";
import bankmeImg  from "./assets/Images/bankme.webp";
import rokkuImg   from "./assets/Images/Rokku-1.webp";
import itgoImg    from "./assets/Images/ItgoPoke.jpg";
import serverImg  from "./assets/Images/server.webp";
import aa1  from "./assets/Images/aa1.webp";
import aa7  from "./assets/Images/aa7.webp";
import aa9  from "./assets/Images/aa9.webp";
import aa10 from "./assets/Images/aa10.webp";
import aa11 from "./assets/Images/aa11.webp";
import b1   from "./assets/Images/b1.webp";
import redes from "./assets/Images/redes.webp";
import b8   from "./assets/Images/b8.webp";
import b9   from "./assets/Images/b9.webp";
import b10  from "./assets/Images/b10.webp";
import b11  from "./assets/Images/b11.webp";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Uptime() {
  const diff = Date.now() - new Date("2023-01-01");
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return <span>uptime {d}d {h}h {m}m</span>;
}

const stackGroups = [
  { label: "// frontend", items: [
    { icon: <i className="devicon-html5-plain" />,        name: "HTML5" },
    { icon: <i className="devicon-css3-plain" />,         name: "CSS3" },
    { icon: <i className="devicon-javascript-plain" />,   name: "JavaScript" },
    { icon: <i className="devicon-react-original" />,     name: "React" },
    { icon: <i className="devicon-tailwindcss-original"/>, name: "Tailwind" },
  ]},
  { label: "// backend & dados", items: [
    { icon: <i className="devicon-nodejs-plain" />,       name: "Node.js" },
    { icon: <i className="devicon-express-original" />,   name: "Express" },
    { icon: <i className="devicon-postgresql-plain" />,   name: "PostgreSQL" },
  ]},
  { label: "// infra & ferramentas", items: [
    { icon: <i className="devicon-linux-plain" />,        name: "Linux" },
    { icon: <i className="devicon-docker-plain" />,       name: "Docker" },
    { icon: <img src={nginx}  alt="nginx"  />,            name: "Nginx" },
    { icon: <img src={webmin} alt="webmin" />,            name: "Webmin" },
    { icon: <i className="devicon-git-plain" />,          name: "Git" },
    { icon: <i className="devicon-github-original" />,    name: "GitHub" },
    { icon: <i className="devicon-googlecloud-plain" />,  name: "GCloud" },
    { icon: <i className="devicon-figma-plain" />,        name: "Figma" },
    { icon: <i className="devicon-neovim-plain" />,       name: "Neovim" },
    { icon: <i className="devicon-jira-plain" />,         name: "Jira" },
  ]},
];

const projectCategories = [
  { icon: "💼", label: "Experiência Profissional", accent: "blue", cards: [
    { img: indrelImg, title: "Indrel",       desc: "Monitoramento e suporte do Indrel Cloud, manutenção de sistemas, gestão de chamados e testes de software" },
    { img: bankmeImg, title: "Bankme",        desc: "Manutenção de equipamentos, configuração e monitoramento de servidores Linux e firewalls" },
    { img: rokkuImg,  title: "Rokku Burguer", desc: "Sistema de gerenciamento de pedidos para restaurante Rokku Burguer, reduz erros de cobrança" },
    { img: itgoImg,   title: "ItgoPoke",      desc: "Automação de mensagens por WhatsApp com respostas rápidas ao cliente" },
  ]},
  { icon: "🖥️", label: "Infraestrutura", accent: "green", cards: [
    { img: aa7,       title: "Gerenciamento de VMs",  desc: "Gerenciamento de máquinas virtuais com Proxmox e Windows Admin Center" },
    { img: b1,        title: "Firewall PfSense",       desc: "Configuração e gerenciamento de firewall PfSense para proteção de rede" },
    { img: redes,     title: "Servidor Samba",         desc: "Configuração e gerenciamento de servidor Samba para compartilhamento de arquivos" },
    { img: serverImg, title: "Monitoramento de Redes", desc: "Monitoramento de redes e servidores com Zabbix" },
  ]},
  { icon: "⚙️", label: "Desenvolvimento de Software", accent: "mauve", cards: [
    { img: aa11, title: "Deploy de Sites",     desc: "Deploy de sites usando Nginx em servidor Linux" },
    { img: aa10, title: "Desenvolvimento Web", desc: "Criação de sites e sistemas usando React, Node.js e Express" },
    { img: aa1,  title: "Criação de APIs",     desc: "Criação de APIs REST" },
    { img: aa9,  title: "Banco de Dados",      desc: "Consultas e alterações em banco de dados PostgreSQL" },
  ]},
  { icon: "🔧", label: "Suporte Técnico", accent: "peach", cards: [
    { img: b8,  title: "Suporte Técnico",          desc: "Suporte técnico especializado para equipamentos e clientes internos" },
    { img: b10, title: "Gerenciamento de Tickets", desc: "Organização e acompanhamento de chamados técnicos" },
    { img: b9,  title: "Implantação de Sistemas",  desc: "Instalação e configuração de sistemas internos" },
    { img: b11, title: "E-mails Corporativos",     desc: "Suporte na criação e configuração de contas corporativas" },
  ]},
];

function App() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main>
          <Profile />

          <section id="sobre">
            <div className="container">
              <div className="section-label reveal" data-prefix="// 01"><h2>Sobre mim</h2></div>
              <p className="sobre-text reveal reveal-delay-1">
                Desenvolvedor com entusiasmo para aprender e paixão por resolver desafios técnicos.
                Ansioso para contribuir em projetos inovadores e comprometido com o aprimoramento constante.
                Estudante de Engenharia de Software na UNINTER, com experiência prática em suporte de TI,
                infraestrutura Linux e desenvolvimento web.
              </p>
              <div className="formacao-grid reveal reveal-delay-2" style={{ marginTop: "var(--sp-lg)" }}>
                <div className="formacao-item">
                  <span className="formacao-flag">🇧🇷</span>
                  <div className="formacao-info">
                    <span className="formacao-title">UNINTER</span>
                    <span className="formacao-sub">Engenharia de Software</span>
                  </div>
                </div>
                <div className="formacao-item">
                  <span className="formacao-flag">🇺🇸</span>
                  <div className="formacao-info">
                    <span className="formacao-title">Inglês</span>
                    <span className="formacao-sub">Nível Avançado</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="stack">
            <div className="container">
              <div className="section-label reveal" data-prefix="// 02"><h2>Stack & Ferramentas</h2></div>
              <div className="stack-groups">
                {stackGroups.map((group, gi) => (
                  <div key={gi} className={`reveal reveal-delay-${gi + 1}`}>
                    <p className="stack-group-label">{group.label}</p>
                    <div className="stack-icons">
                      {group.items.map((item, ii) => (
                        <span className="tech-badge" key={ii}>{item.icon}{item.name}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projetos">
            <div className="container">
              <div className="section-label reveal" data-prefix="// 03"><h2>Projetos & Experiência</h2></div>
              <div className="projects-section">
                {projectCategories.map((cat, ci) => (
                  <div className={`project-category reveal reveal-delay-${(ci % 4) + 1}`} key={ci}>
                    <div className="category-header">
                      <span>{cat.icon}</span>
                      <h3>{cat.label}</h3>
                    </div>
                    <div className="cards-grid">
                      {cat.cards.map((card, i) => (
                        <Card key={i} imagem={card.img} titulo={card.title} texto={card.desc} accent={cat.accent} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="footer-inner">
              <span className="footer-mono">© {new Date().getFullYear()} Bruno Serbai — brunoserbai.com.br</span>
              <div className="footer-uptime"><span className="status-dot" /><Uptime /></div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
