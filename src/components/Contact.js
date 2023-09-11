import React from "react";

function Contact() {
  return (
    <>
      {/* Contact section starts.  */}
      <section className="py-5">
        <div className="text-center">
          <div className="d-flex justify-content-center resume-head">
            <img src="\assets\orangeDot.png" alt="" />
            <p>My Contact</p>
          </div>
          <div>
            <h2>I WANT TO HEAR FROM YOU</h2>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div>
                <form action="">
                  <div className="form-flex">
                    <input type="text" placeholder="Your Name" /> <br />
                    <input type="email" placeholder="Your Email" /> <br />
                  </div>
                  <div className="form-flex py-3">
                    <input type="text" placeholder="Your Number" /> <br />
                    <input type="text" placeholder="Subject" /> <br />
                  </div>
                  <textarea name="" id="" placeholder="Message"></textarea>{" "}
                  <br />
                  <button className="home-button contact-button" type="submit">
                    Send Me Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-address">
                <p>
                  <a href="https://goo.gl/maps/E2JBro3p6RotmHq69" target="_blank">
                    {" "}
                    <i className="fa-solid fa-location-dot" ></i>
                  </a>
                </p>
                <div>
                  <h6>Address</h6>
                  <p>
                    {" "}
                    <a href="https://goo.gl/maps/E2JBro3p6RotmHq69" target="_blank">
                      {" "}
                      Jalluru Village, Pithapuram Mandal, Kakinada District
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-address">
                <p>
                  <a href="tel: +91 6302034467">
                    <i class="fa-solid fa-phone-volume"></i>
                  </a>
                </p>
                <div>
                  <h6>Phone</h6>
                  <p>
                    {" "}
                    <a href="tel: +91 6302034467">+91 6302034467</a>
                  </p>
                </div>
              </div>
              <div className="contact-address">
                <p>
                  <a href="mailto: kumarkoushikreddi@gmail.com">
                    {" "}
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </p>
                <div>
                  <h6>Email</h6>
                  <p>
                    {" "}
                    <a href="mailto: kumarkoushikreddi@gmail.com">
                      kumarkoushikreddi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section ends.  */}
    </>
  );
}

export default Contact;
