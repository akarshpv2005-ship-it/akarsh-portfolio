import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Scene3D from "./components/Scene3D";
import "./styles/style.css";

function App() {
  return (
    <>
      <Scene3D />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}

export default App;