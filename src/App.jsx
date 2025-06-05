import "./App.css";
import usIcon from "./assets/Icons/us_black_and_white.svg";
import Profile from "./components/Profile/Profile.jsx";
import Card from "./components/Card/Card.jsx";
import Devicon from "./components/Devicon/Devicon.jsx";
import uninter from "./assets/Icons/uninter_b.svg";
import bankmeImg from "./assets/Images/bankme.webp";
import rokkuImg from "./assets/Images/Rokku-1.webp";
import itgoImg from "./assets/Images/ItgoPoke.webp";
import serverImg from "./assets/Images/server.webp";
import aa1 from "./assets/Images/aa1.webp";
import aa7 from "./assets/Images/aa7.webp";
import aa9 from "./assets/Images/aa9.webp";
import aa10 from "./assets/Images/aa10.webp";
import aa11 from "./assets/Images/aa11.webp";
import b1 from "./assets/Images/b1.webp";

import redes from "./assets/Images/redes.webp"
import b8 from "./assets/Images/b8.webp";
import b9 from "./assets/Images/b9.webp";
import b10 from "./assets/Images/b10.webp";
import b11 from "./assets/Images/b11.webp";

//TODO: Merge app.css and index.css
//TODO: Add new projects to the portifolio
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
                <h3>Tecnologias</h3>
                <Devicon />
              </section>
              
              <section>
                <div className="projects-container">
                  <div className="project-row">
                    <h4>Desenvolvimento Web</h4>
                    <div className="card-group">
                      <Card
                        imagem={bankmeImg}
                        titulo={"Bankme"}
                        texto={
                          "Manutenção de equipamentos, configuração e monitoramento de servidores Linux e firewalls"
                        }
                      />
                      <Card
                        imagem={rokkuImg}
                        titulo={"Rokku Burguer"}
                        texto={
                          "Sistema de gerenciamento de pedidos para restaurante Rokku Burguer reduz erros de cobrança"
                        }
                      />
                      <Card
                        imagem={itgoImg}
                        titulo={"ItgoPoke"}
                        texto={
                          "Automação de mensagens por WhatsApp providencia respostas rápidas ao cliente."
                        }
                      />
                    </div>
                  </div>

                  <div className="project-row">
                    <h4>Infraestrutura</h4>
                    <div className="card-group">
                      <Card
                        imagem={aa7}
                        titulo={"Gerenciamento de Máquinas Virtuais"}
                        texto={
                          "Gerenciamento de máquinas virtuais com Proxmox e Windows Admin Center"
                        }
                      />
                      <Card
                        imagem={b1}
                        titulo={"Gerenciamento de Firewall PfSense"}
                        texto={
                          "Configuração e gerenciamento de firewall PfSense para proteção de rede"
                        }
                      />
                      <Card
                        imagem={redes}
                        titulo={"Servidor Samba"}
                        texto={
                          "Configuração e gerenciamento de servidor Samba para compartilhamento de arquivos"
                        }
                      />
                      <Card
                        imagem={serverImg}
                        titulo={"Monitoramento de redes e servidores"}
                        texto={
                          "Monitoramento de redes e servidores com Zabbix"
                        }
                      />
                    </div>
                  </div>

                  <div className="project-row">
                    <h4>Desenvolvimento de Software</h4>
                    <div className="card-group">
                      <Card
                        imagem={aa11}
                        titulo={"Deploy de sites"}
                        texto={
                          "Deploy de sites usando Nginx em servidor Linux"
                        }
                      />
                      <Card
                        imagem={aa10}
                        titulo={"Desenvolvimento Web"}
                        texto={
                          "Criação de sites e sistemas usando React, Node.js e Express."
                        }
                      />
                      <Card
                        imagem={aa1}
                        titulo={"Criação de APIs"}
                        texto={
                          "Criação de APIs REST"
                        }
                      />
                      <Card
                        imagem={aa9}
                        titulo={"Banco de Dados"}
                        texto={
                          "Consultas e alterações em banco de dados PostgreSQL"
                        }
                      />
                    </div>
                  </div>

                  <div className="project-row">
                    <h4>Suporte Técnico</h4>
                    <div className="card-group">
                      <Card
                        imagem={b8}
                        titulo={"Suporte Técnico"}
                        texto={
                          "Suporte técnico especializado para equipamentos e clientes internos"
                        }
                      />
                      <Card
                        imagem={b10}
                        titulo={"Gerenciamento de Tickets"}
                        texto={
                          "Organização e acompanhamento de chamados técnicos"
                        }
                      />
                      <Card
                        imagem={b9}
                        titulo={"Implantação de Sistemas"}
                        texto={
                        "Instalação e configuração de sistemas internos."}
                      />
                      <Card
                        imagem={b11}
                        titulo={"Configuração de E-mails Corporativos"}
                        texto={
                        "Suporte na criação e configuração de contas."}
                      />
                    </div>
                  </div>
                </div>
              </section>
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
