import "./App.css";
import UsIcon from './assets/Icons/us.svg';
import BrIcon from './assets/Icons/br.svg';
import Profile from './components/Profile/Profile.jsx'


function App() {

  //Fade in animation for the class .hidden
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


  return (
    <>
    <Profile/>
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
              <li>Ensino Superior:</li>
              <div className="devicon education">
                <div
                  className="icons education"
                  style={{ backgroundColor: "#323330" }}
                >
                  <img src="./Icons/images/bitmap.svg" />
                  UNIVERSIDADE UNINTER - BACHARELADO DE ENGENHARIA DE SOFTWARE
                </div>
              </div>
              <br />
              <li>Linguagens:</li>
              <div className="devicon">
                <div className="icons" style={{ backgroundColor: "#a51818" }}>
                  <img src={UsIcon} />
                  INGLÊS
                </div>
                <div className="icons" style={{ backgroundColor: "#018D3E" }}>
                  <img src={BrIcon} />
                  PORTUGUES
                </div>
              </div>
              <li>Tecnologias: </li>
            </ul>
            <div className="devicon">
              {/* Icons from: https://github.com/Ileriayo/markdown-badges and https://devicon.dev/*/}
              <div className="icons" style={{ backgroundColor: "#E34F26" }}>
                {" "}
                <img src="./Icons/images/HTML5.svg" />
                HTML 5
              </div>
              <div className="icons" style={{ backgroundColor: "#1572B6" }}>
                {" "}
                <img src="./Icons/images/CSS3.svg" />
                CSS 3
              </div>
              <div className="icons" style={{ backgroundColor: "#323330" }}>
                {" "}
                <img src="./Icons/images/Javascript.svg" />
                JAVASCRIPT
              </div>
              <div className="icons" style={{ backgroundColor: "#20232A" }}>
                {" "}
                <img src="./Icons/images/React.svg" />
                REACT
              </div>
              <div className="icons" style={{ backgroundColor: "#F05033" }}>
                {" "}
                <img src="./Icons/images/Git.svg" />
                GIT
              </div>
              <div className="icons" style={{ backgroundColor: "#121011" }}>
                {" "}
                <img src="./Icons/images/GitHub.svg" />
                GITHUB
              </div>
              <div
                className="icons"
                style={{ color: "#333333", backgroundColor: "#FCC624" }}
              >
                <img src="./Icons/images/Linux.svg" />
                LINUX
              </div>
              {/*<div class="icons" style="background-color: #0DB7ED"><img src="./Icons/images/Docker.svg"></img>DOCKER</div>*/}
              <div className="icons" style={{ backgroundColor: "#009639" }}>
                <img src="./Icons/images/Nginx.svg" />
                NGINX
              </div>
            </div>
            <br />
            <h2 id="projetos">Experiência</h2>
            <hr />
            <div className="hidden">
              <h3>Bankme - Estágio em infraestrutura de TI</h3>
              <img
                loading="lazy"
                src="./Images/bankme.webp"
                alt="Logo do banco Bankme "
              />
              <p>
                Manutenção corretiva e preventiva de sistemas, atendimento de
                ocorrências e gestão de redes e infraestrutura
              </p>
              <br />
            </div>
            <div className="hidden">
              <h3>Rokku Burguer - Gerenciamento de Pedidos</h3>
              <img
                loading="lazy"
                src="./Images/Rokku-1.webp"
                alt="Menu para realização do pedido"
              />
              <br />
            </div>
            <div className="hidden">
              <img
                loading="lazy"
                src="./Images/Rokku-2.webp"
                alt="Demonstração do pedido realizado"
              />
              <p>
                Sistema de gerenciamento de pedidos para restaurante Rokku
                Burguer. O programa facilita a coleta de pedidos, reduz erros de
                cobrança e aumenta a eficiência do atendimento.
              </p>
              <label htmlFor="id=rokkuTest">Testar Programa:</label>
              <a
                id='rokkuTest"'
                target="_blank"
                href="https://brunoserbai.github.io/Rokku-Burger/"
              >
                <button>Rokku Burger</button>
              </a>
              <br />
            </div>
            <div className="hidden">
              <h3>ItgoPoke - Automação de Mensagens</h3>
              <img
                loading="lazy"
                src="./Images/ItgoPokeLogo.webp"
                alt="Logo do restaurante Itgo Poke "
              />
              <p>
                Automação de mensagens por WhatsApp. O programa reduz trabalho
                pelos atendentes e providencia respostas rápidas ao cliente.
              </p>
              <br />
            </div>
            <div className="hidden">
              <h3>Hospedagem de Website</h3>
              <img loading="lazy" src="./Images/Server.webp" />
              <p>
                Este website é hospedado em servidor na nuvem, gerenciado com
                Nginx rodando sistema operacional Linux.{" "}
              </p>
            </div>
          </section>
        </main>
        <footer>
          <br />
          <h2 id="contato">Contato</h2>
          <hr />
          <div className="devicon contact">
            <a href="https://github.com/BrunoSerbai" target="_blank">
              <div className="icons" style={{ backgroundColor: "#121011" }}>
                <img src="./Icons/images/GitHub.svg" />
                GITHUB
              </div>
            </a>
            <a href="https://www.linkedin.com/in/bruno-serbai" target="_blank">
              <div className="icons" style={{ backgroundColor: "#0077B5" }}>
                <img src="./Icons/images/LinkedIn.svg" />
                LINKEDIN{" "}
              </div>
            </a>
            <a href="https://wa.me/5543991107327?text=Hello!" target="_blank">
              <div className="icons" style={{ backgroundColor: "#25D366" }}>
                <img src="./Icons/images/WhatsApp.svg" />
                WHATSAPP
              </div>
            </a>
            <a href="mailto:brunoserbai@outlook.com" target="_blank">
              <div className="icons" style={{ backgroundColor: "#0078D4" }}>
                <img src="./Icons/images/email-8-svgrepo-com.svg" />
                EMAIL
              </div>
            </a>
          </div>
        </footer>
      </div>
      </body>
    </>
  );
}

export default App;
