import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Projects() {
  return (
    <>
      <section className="p-5 projects-main">
        <div className="text-center">
          <div className="d-flex justify-content-center resume-head">
            <img src="\assets\orangeDot.png" alt="" />
            <p>Portfolio</p>
          </div>
          <div>
            <h2>SOME RECENT WORK</h2>
          </div>
        </div>
        <div>
          <Tabs>
            <div className="tabs-buttons">
              <TabList>
                <Tab>
                  <button className="home-button">Completed</button>
                </Tab>
                <Tab>
                  <button className="home-button">Ongoing</button>
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              <div>
                <div className="form-flex">
                  <p>
                    <a
                      href="https://makersmind.co.in/"
                      title="makersmind.co.in"
                      target="_blank"
                    >
                      <img src="\assets\completed-1.png" alt="Project 1" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://atapcloud.com/"
                      title="atapcloud.com"
                      target="_blank"
                    >
                      <img src="\assets\completed-2.png" alt="Project 2" />
                    </a>
                  </p>
                </div>
                <div className="form-flex">
                  <p>
                    <a
                      href="https://sgservicecenter.com/"
                      title="sgservicecenter.com"
                      target="_blank"
                    >
                      <img src="\assets\completed-3.png" alt="Project 3" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://pastorvpaul.com/"
                      title="pastorvpaul.com"
                      target="_blank"
                    >
                      <img src="\assets\completed-4.png" alt="Project 4" />
                    </a>
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="form-flex">
                <p>
                  <a
                    href="https://bazaare-commerce.netlify.app/"
                    title="bazaare-commerce.netlify.app"
                  >
                    <img src="\assets\ongoing-1.png" alt="Ongoing 1" />
                  </a>
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Projects;
