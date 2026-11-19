
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, CodeXml } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-tag">
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <p className="hero-intro">HELLO, I'M</p>

        <h1>
          AKARSH <span>P V.</span>
        </h1>

        <h2>
          AI / ML ENGINEER
        </h2>

        <p className="hero-description">
          Building intelligent applications through
          Machine Learning, Computer Vision and
          Generative AI. Turning innovative ideas
          into real-world solutions.
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
        <div className="hero-orbit">
          <span>AI</span>
          <span>ML</span>
          <span>CV</span>
        </div>
        <div className="hero-center">
          <span>AK</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
