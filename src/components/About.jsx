
import { motion } from "framer-motion";
import { Code2, Brain, Laptop, GraduationCap } from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">

      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h2>About <span>Me</span></h2>
        <p>A little introduction about my journey in technology.</p>
      </div>

      <div className="about-container">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-icon">
            <Brain size={38} />
          </div>

          <h3>AI & ML Enthusiast</h3>

          <p>
            I am an aspiring AI/ML Engineer passionate about
            building intelligent applications and solving
            real-world problems using technology.
          </p>

          <p>
            My interests include Machine Learning, Computer
            Vision, Generative AI, Retrieval-Augmented Generation
            and Full-Stack Development.
          </p>

          <p>
            I enjoy transforming innovative ideas into
            practical applications through continuous learning,
            experimentation and development.
          </p>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="detail-card">
            <Code2 />
            <div>
              <h4>Development</h4>
              <p>Python, React, Flask and JavaScript</p>
            </div>
          </div>

          <div className="detail-card">
            <Brain />
            <div>
              <h4>Artificial Intelligence</h4>
              <p>Machine Learning, Computer Vision and RAG</p>
            </div>
          </div>

          <div className="detail-card">
            <Laptop />
            <div>
              <h4>Interests</h4>
              <p>AI Applications and Intelligent Systems</p>
            </div>
          </div>

          <div className="detail-card">
            <GraduationCap />
            <div>
              <h4>Education</h4>
              <p>B.Sc. Information Technology – MG University</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;
