import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const hideLoaderTimeout = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => {
      clearTimeout(hideLoaderTimeout);
    };
  }, []);

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
                        <ul className="sidebar-navigation">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="Contact">Contact</Link></li>
                        </ul>
                    </nav>
                  </div>
            </section>
        </aside>
      {/* Side bar section ends. */}

      {/* Preloader Start */}
      {loader && (<section class="preloader">
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
