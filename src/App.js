import './App.css';
import './Responsive.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-2">
        <SideBar/>
       </div>
                  <div className="col-lg-10">
                      <Home/>
              <Resume />
              <Projects/>
                      <Contact/>
                  </div>
        </div>
      </div>
        <Routes>

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
