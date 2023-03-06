import NavBar from "./nav-bar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./home";
import Photos from "./photos";
import AboutMe from "./about-me";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <Routes>
            <Route index element={<NavBar current="Home" />} />
            <Route path="/home" element={<NavBar current="Home" />} />
            <Route path="/photos" element={<NavBar current="Photos" />} />
            <Route path="/about-me" element={<NavBar current="About Me" />} />
          </Routes>

        </div>
        <div className="row">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
