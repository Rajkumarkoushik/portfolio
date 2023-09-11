import React from "react";

function Home() {
  return (
    <>
      {/* Home section starts. */}
      <section id="home" className="container-fluid home-banner">
        <div className="row">
          <div className="col-lg-6 banner-image py-5">
            <img src="\assets\banner-img.jpg" alt="Banner" />
            <img src="\assets\homebannershape.png" alt="Banner shape" />
          </div>
          <div className="col-lg-6 py-5">
            <h6>I'm glad you're here.</h6>
            <h1>
              Hello i’m <span className="home-span">Koushik</span> &#160; A Web
              Developer
            </h1>
            <p className="py-3">
              I am Rajkumar Koushik Reddi, web Developer. I have rich experience
              in web site developing and building and customization, also I am
              good at developing mobile responsive. I love to talk with you
              about our unique.and building and customization, also I am good at
              developing mobile responsive. I love to talk with you about and
              building and customization, also I am good at developing mobile
              responsive. I love to talk with you about{" "}
            </p>
            <button className="home-button">
              <a href="\assets\RajkumarkoushikReddi-resume.pdf" target="_blank">
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
