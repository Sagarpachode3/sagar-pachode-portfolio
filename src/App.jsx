import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import DemoPage from "./pages/Demo";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
  </>
);

export default App;
