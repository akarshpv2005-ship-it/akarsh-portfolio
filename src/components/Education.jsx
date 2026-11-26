import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const items = [
  {
    icon: Award,
    year: "CURRENTLY PURSUING",
    title: "AI/ML Engineering Program",
    place: "Linnk Academy India",
    text: "Specialized training in AI and Machine Learning Engineering: Python, machine learning, Computer Vision and RAG, with hands-on project building.",
  },
  {
    icon: GraduationCap,
    year: "2023 – 2026",
    title: "B.Sc. Information Technology",
    place: "MG University",
    text: "Degree in Information Technology, with a focus on programming, databases and software development.",
  },
  {
    icon: BookOpen,
    year: "HIGHER SECONDARY",
    title: "Plus Two",
    place: "Chinmaya Vidyalaya, Kannamaly, Kochi",
    text: "Completed higher secondary education.",
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-heading">
        <span>05 / EDUCATION</span>
        <h2>
          Learning that <span>shaped my work.</span>
        </h2>
        <p>My degree, my AI/ML training and where it all started.</p>
      </div>

      <div className="education-container">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className="education-card"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="education-icon">
                <Icon size={30} />
              </div>

              <div className="education-info">
                <span className="education-year">{item.year}</span>
                <h3>{item.title}</h3>
                <h4>{item.place}</h4>
                <p>{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;