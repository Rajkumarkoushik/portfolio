import React, {useState} from 'react';

function Navigation() {
    const [hamburger, setHamburger] = useState(false);
  return (
      <>
          {/* Navigation section starts. */}
          <nav className='container-fluid navigation'>
              <section className='container'>
                  <div className='d-flex justify-content-between align-items-center py-3'>
                  <div>
                      <img src="\assets\Logo.png" alt="Page Logo" />
                  </div>
                  <div className='nav-hamburger' onClick={() => setHamburger(!hamburger)}>
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
                  </div>
                  <div>
                  <ul className="navigation-links" style={{transform : hamburger ? "scale(1)" : "scale(0)"}}>
                <li className="home" >
                  <a href="#home">Home</a>
                </li>
                <li className="about">
                  <a href="#about">About</a>
                </li>
                <li className="resume">
                  <a href="#resume">Resume</a>
                </li>
                <li className="projects">
                  <a href="#projects">Projects</a>
                </li>
                <li className="contact">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
                  </div>
              </section>
          </nav>
       {/* Navigation section ends. */}
      </>
  )
}

export default Navigation