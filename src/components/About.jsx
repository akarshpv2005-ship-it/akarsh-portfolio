import { motion } from "framer-motion";
import { Brain, Code2, Eye, GraduationCap } from "lucide-react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>
          Practical AI, <span>built with purpose.</span>
        </h2>
        <p>Who I am, what I build and what I'm working on right now.</p>
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

          <h3>AI / ML Engineer in the making</h3>

          <p>
            I'm a B.Sc. Information Technology graduate currently training in
            AI and Machine Learning Engineering. I build practical projects
            around Computer Vision, Retrieval-Augmented Generation and
            API-driven applications.
          </p>

          <p>
            My work usually starts with a real problem: monitoring natural
            hazards, searching across documents, or recommending movies based
            on how someone feels. I turn these into working systems using
            Python, FastAPI and modern ML tooling.
          </p>

          <p>
            I'm looking for an opportunity where I can keep learning while
            contributing to AI products that people actually use.
          </p>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            style={{
              color: "#c8b8ec",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            RIGHT NOW
          </span>

          <div className="detail-card">
            <GraduationCap />
            <div>
              <h4>Training</h4>
              <p>AI/ML Engineering Program at Linnk Academy India</p>
            </div>
          </div>

          <div className="detail-card">
            <Brain />
            <div>
              <h4>Building</h4>
              <p>RAG chatbots and multi-hazard monitoring systems</p>
            </div>
          </div>

          <div className="detail-card">
            <Eye />
            <div>
              <h4>Exploring</h4>
              <p>Computer Vision, Deep Learning and semantic search</p>
            </div>
          </div>

          <div className="detail-card">
            <Code2 />
            <div>
              <h4>Tools</h4>
              <p>Python, FastAPI, Flask, OpenCV, TensorFlow and React</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;