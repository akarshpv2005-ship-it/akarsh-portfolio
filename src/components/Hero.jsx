import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CodeXml } from "lucide-react";
import NeuralGlobe from "./NeuralGlobe";

const TITLE = "AI / ML ENGINEER";

function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.length === TITLE.length) return;

    const timer = setTimeout(() => {
      setText(TITLE.substring(0, text.length + 1));
    }, 100);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-tag">AVAILABLE FOR OPPORTUNITIES</span>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          AKARSH <span>P V.</span>
        </h1>

        <h2>
          {text}
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          B.Sc. IT graduate from <strong>Kochi</strong>, training in{" "}
          <strong>AI & Machine Learning Engineering</strong>. I build{" "}
          <strong>Computer Vision</strong> and <strong>RAG</strong> projects
          like DocuLens and DisasterGuard AI,Emotion Based Movie recommender,and deploy them as <strong>API-driven</strong> web apps with{" "}
          working software.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>

          <a
            href="/resume/Akarsh_PV_Resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/akarshpv2005-ship-it"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <CodeXml />
          </a>
          <a
            href="https://www.linkedin.com/in/akarsh-pv-216a203b2"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness />
          </a>
        </div>
      </motion.div>

      <div className="hero-visual">
        <div className="glow-circle"></div>
        <NeuralGlobe />
      </div>
    </section>
  );
}

export default Hero;