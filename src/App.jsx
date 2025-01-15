import "./App.css";
import usIcon from "./assets/Icons/us_black_and_white.svg";
import Profile from "./components/Profile/Profile.jsx";
import Card from "./components/Card/Card.jsx";
import Devicon from "./components/Devicon/Devicon.jsx"
import uninter from "./assets/Icons/uninter_b.svg";
import webmin from "./assets/Icons/webmin2.svg";
import nginx from "./assets/Icons/nginx.svg"
import bankmeImg from "./assets/Images/bankme.webp"
import rokkuImg from "./assets/Images/Rokku-1.webp"
import itgoImg from "./assets/Images/ItgoPoke.webp"
import serverImg from "./assets/Images/server.webp"
import whatsImg from "./assets/Icons/whatsapp.svg"
import emailImg from "./assets/Icons/email.svg"

function App() {
  
  return (
    <>
      <Profile />
      <body>
        <div className="back">
          <main>
            <section>
              <h3 id="sobre">Sobre mim</h3>
              <p id="sobre">
                Desenvolvedor com entusiasmo para aprender e paixão por resolver
                desafios. Ansioso para contribuir em projetos inovadores.
                Comprometido com o aprimoramento constante e em deixar uma marca
                positiva no mundo do desenvolvimento de software.
              </p>
              <h3 id="formação">Formação</h3>
              <ul>
                <div className="devicon">
                  <div className="icons">
                    <img src={uninter} />
                     UNINTER - BACHARELADO DE ENGENHARIA DE SOFTWARE
                  </div>
                  <div className="icons">
                    <img src={usIcon} />
                    INGLÊS - AVANÇADO
                  </div>
                </div>

                <br />
              </ul>
              <h3>Tecnologias </h3>
              <Devicon />
              <br />
              <h2 id="projetos">Experiência</h2>
              <div className="exp">
              <Card imagem={bankmeImg} titulo={"Bankme"} subtitulo={"Infraestrutura de TI"} texto={"Manutenção de equipamentos, configuração e monitoramento de servidores Linux e firewalls"}/>
              <Card imagem={rokkuImg} titulo={"Rokku Burguer"} subtitulo={"Gerenciador de Pedidos"} texto={"Sistema de gerenciamento de pedidos para restaurante Rokku Burguer reduz erros de cobrança"} />
              <Card imagem={itgoImg} titulo={"ItgoPoke"} subtitulo={"Automação de Mensagens"} texto={"Automação de mensagens por WhatsApp providencia respostas rápidas ao cliente."}/>
              <Card imagem={serverImg} titulo={"Hospedagem de Website"} subtitulo={""} texto={"Este website é hospedado pelo Vultr, gerenciado com Nginx rodando sistema operacional Linux."}/>
              </div>
              
           
            </section>
          </main>
          <footer>
            <br />
            <h2 id="contato">Contato</h2>
            <div className="devicon contact">
              <a href="https://github.com/BrunoSerbai" target="_blank">
                <button className="icons">
                  <i class="devicon-github-original" />
                  GITHUB
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-serbai"
                target="_blank"
              >
                <button className="icons">
                  <i class="devicon-linkedin-plain" />
                  LINKEDIN
                </button>
              </a>
              <a href="https://wa.me/5543991107327?text=Hello!" target="_blank">
                <button className="icons">
                  <img src={whatsImg} />
                  WHATSAPP
                </button>
              </a>
              <a href="mailto:brunoserbai@outlook.com" target="_blank">
                <button className="icons">
                  <img src={emailImg}/>
                  EMAIL
                </button>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </>
  );
}

export default App;
