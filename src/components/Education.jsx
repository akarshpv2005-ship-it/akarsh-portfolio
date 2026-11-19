
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <span>MY LEARNING JOURNEY</span>
        <h2>Education & <span>Training</span></h2>
        <p>My academic background and professional learning journey.</p>
      </div>

      <div className="education-container">

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <GraduationCap size={30} />
          </div>

          <div className="education-info">
            <span className="education-year">2023 – 2026</span>
            <h3>B.Sc. Information Technology</h3>
            <h4>MG University</h4>
            <p>Bachelor's degree in Information Technology with an interest in software development and artificial intelligence.</p>
          </div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <Award size={30} />
          </div>

          <div className="education-info">
            <span className="education-year">Professional Training</span>
            <h3>AI/ML Engineering Program</h3>
            <h4>LINNK Academy India</h4>
            <p>Training focused on Artificial Intelligence, Machine Learning, Python and practical project development.</p>
          </div>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-icon">
            <BookOpen size={30} />
          </div>

          <div className="education-info">
            <span className="education-year">Higher Secondary</span>
            <h3>Plus Two</h3>
            <h4>Chinmaya Vidyalaya, Kannamaly</h4>
            <p>Completed higher secondary education.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;
