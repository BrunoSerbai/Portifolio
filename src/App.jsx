import "./App.css";
import usIcon from "./assets/Icons/us_black_and_white.svg";
import Profile from "./components/Profile/Profile.jsx";
import Card from "./components/Card/Card.jsx";
import Devicon from "./components/Devicon/Devicon.jsx";
import uninter from "./assets/Icons/uninter_b.svg";
import bankmeImg from "./assets/Images/bankme.webp";
import rokkuImg from "./assets/Images/Rokku-1.png";
import itgoImg from "./assets/Images/ItgoPoke.webp";
import serverImg from "./assets/Images/server.webp";

//TODO: Fix dark mode changing the website color
//TODO: Merge app.css and index.css
//TODO: Add new projects to the portifolio
//TODO: Update Readme
function App() {
  return (
    <>
      <body>
        <div className="back">
          <main>
            <section>
              <Profile />
            </section>
            <section>
              <h3 id="sobre">Sobre mim</h3>
              <p id="sobre">
                Desenvolvedor com entusiasmo para aprender e paixão por resolver
                desafios. Ansioso para contribuir em projetos inovadores.
                Comprometido com o aprimoramento constante e em deixar uma marca
                positiva no mundo do desenvolvimento de software.
              </p>
            </section>
            <section>
              <h3 id="formação">Formação</h3>
              <div className="devicon">
                <div className="icons">
                  <img src={uninter} />
                  UNINTER - ENGENHARIA DE SOFTWARE
                </div>
                <div className="icons">
                  <img src={usIcon} />
                  INGLÊS - AVANÇADO
                </div>
              </div>
            </section>
            <section>
              <h3>Tecnologias </h3>
              <Devicon />
              <br />
              <h3 id="projetos">Experiência</h3>
              <div className="exp">
                <Card
                  imagem={bankmeImg}
                  titulo={"Bankme"}
                  subtitulo={"Infraestrutura de TI"}
                  texto={
                    "Manutenção de equipamentos, configuração e monitoramento de servidores Linux e firewalls"
                  }
                />
                <Card
                  imagem={rokkuImg}
                  titulo={"Rokku Burguer"}
                  subtitulo={"Gerenciador de Pedidos"}
                  texto={
                    "Sistema de gerenciamento de pedidos para restaurante Rokku Burguer reduz erros de cobrança"
                  }
                />
                <Card
                  imagem={itgoImg}
                  titulo={"ItgoPoke"}
                  subtitulo={"Automação de Mensagens"}
                  texto={
                    "Automação de mensagens por WhatsApp providencia respostas rápidas ao cliente."
                  }
                />
                <Card
                  imagem={serverImg}
                  titulo={"Hospedagem de Website"}
                  subtitulo={""}
                  texto={
                    "Este website é hospedado pelo Vultr, gerenciado com Nginx rodando sistema operacional Linux."
                  }
                />
              </div>
            </section>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
