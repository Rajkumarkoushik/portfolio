import React from 'react'

function About() {
  return (
      <>
          {/* About section starts. */}
          <section id='about'  className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-6 py-5">
          <div className="d-flex resume-head">
            <img src="\assets\orangeDot.png" alt="" />
            <p>About Me</p>
          </div>
            <h2>
              I Am An<span className="home-span"> Front-End</span> &#160; Web
              Developer
            </h2>
            <p className="">
            In my 1 year 6 months of experience as a front-end developer, I've had the privilege to work on a wide range of projects, from small business websites to complex web applications. I'm excited about the potential of web development to shape the digital world, and I'm committed to creating web experiences that not only meet but exceed expectations. If you're looking for a front-end developer who can turn your vision into reality, I'd love to connect and discuss how I can contribute to your projects.
                      </p>
                      <p>Let's build something amazing together!</p>
                  </div>
                  <div className="col-lg-6 banner-image">
            <img src="\assets\about-img.jpg" alt="Banner" />
            <img src="\assets\homebannershape.png" alt="Banner shape" />
          </div>
        </div>
      </section>
      {/* About section ends. */}
      </>
  )
}

export default About