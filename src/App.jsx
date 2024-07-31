import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BackgroundImage from "./components/BackgroundImage"
function App() {
  return (
    <>
      <BrowserRouter className="bebas-neue-regular">
        <BackgroundImage/>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<About />} />
          <Route path={"/skills"} element={<Skills />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
