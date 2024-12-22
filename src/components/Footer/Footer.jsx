import React from 'react'

function Footer() {
  return (
    <>
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
        </>
  )
}

export default Footer