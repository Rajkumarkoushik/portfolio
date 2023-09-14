import React from "react";
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Rajkumar", "Koushik", "Reddi"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop:true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Home section starts. */}
      <section id="home" className="container-fluid home-banner py-5">
        <div className="row">
          <div className="col-lg-6 banner-image">
            <img src="\assets\banner-img.jpg" alt="Banner" />
            <img src="\assets\homebannershape.png" alt="Banner shape" />
          </div>
          <div className="col-lg-6">
            <h6>I'm glad you're here.</h6>
            <h1>
              Hello i’m <span className="home-span" ref={el}></span> <br /> A Web
              Developer
            </h1>
            <p className="py-3">
              Hello! My name is Rajkumar Koushik Reddi, and I'm a passionate front-end developer with a deep love for creating engaging and user-friendly web experiences. I specialize in bringing design concepts to life by writing clean, efficient, and responsive code. Web development is an ever-evolving field, and I thrive on staying at the forefront of emerging technologies and best practices. I'm enthusiastic about continuously expanding my knowledge and skillset to deliver the best possible results for each project. 
            </p>
            <h5 className="home-skills">My Skills :-</h5>
            <p>HTML5, CSS3, BOOTSTRAP, JAVA SCRIPT, JQUERY, REACT, REDUX, SASS, PHP, MYSQL, GIT, GITHUB, FIGMA, JSON.</p>
            <button className="home-button">
              <a href="\assets\Rajkumar koushik Reddi-resume.pdf" target="_blank">
                Download My CV &#160;{" "}
                <span className="button-span">
                  <i className="fa-solid fa-angles-down"></i>
                </span>
              </a>
            </button>
            <button className="home-button mx-2"><a href="tel: +91 6302034467">Contact Me</a></button>
          </div>
        </div>
      </section>
      {/* Home section ends. */}
    </>
  );
}

export default Home;
