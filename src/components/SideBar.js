import React, { useState, useEffect, useRef } from "react";

function SideBar() {
  const [loader, setLoader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const hideLoaderTimeout = setTimeout(() => {
      setLoader(false);
    }, 1000);

    // Function to handle scroll and update active section
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0 && !found) {
          setActiveSection(section.id);
          found = true;
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(hideLoaderTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add a class to the active link based on the activeSection state
  const isActiveLink = (sectionId) => {
    return sectionId === activeSection ? "active-link" : "";
  };


  return (
    <>
      {/* Side bar section starts. */}
      <aside className="container-fluid aside-bar">
        <section className="row">
          <div className="sticky-sidebar p-5">
            <div>
              <img src="\assets\Logo.png" alt="Logo" />
            </div>
            <nav>
              <ul className="sidebar-navigation px-4">
                <li className={isActiveLink("home")} >
                  <a href="#home">Home</a>
                </li>
                <li className={isActiveLink("about")}>
                  <a href="#about">About</a>
                </li>
                <li className={isActiveLink("resume")}>
                  <a href="#resume">Resume</a>
                </li>
                <li className={isActiveLink("projects")}>
                  <a href="#projects">Projects</a>
                </li>
                <li className={isActiveLink("contact")}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="aside-links py-5">
              <p>
                <a href="https://www.linkedin.com/in/rajkumar-koushik-reddi-044254245">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <p>
                <a href="https://github.com/Rajkumarkoushik">
                  <i className="fa-brands fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </section>
      </aside>
      {/* Side bar section ends. */}

      {/* Preloader Start */}
      {loader && (
        <section class="preloader">
          <div class="loader">
            <h4>Rajkumar Koushik Reddi</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      )}
      {/* Preloader End */}
    </>
  );
}

export default SideBar;
