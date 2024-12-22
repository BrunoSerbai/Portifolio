import React from 'react'
import html from '/home/bruno/Documents/Portifolio/src/assets/Icons/HTML5.svg'


function Devicon() {
  return (
    <>
    <div className="devicon">
              {/* Icons from: https://github.com/Ileriayo/markdown-badges and https://devicon.dev/*/}
              <div className="icons" style={{ backgroundColor: "#E34F26" }}>
                
                <img src={html} />
                HTML 5
              </div>
              
            </div>
    </>
  )
}

export default Devicon