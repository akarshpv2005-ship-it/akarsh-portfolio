import { motion } from "framer-motion";
import { Brain, Eye, Server, Database, ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    num: "01",
    title: "Applied AI",
    icon: Brain,
    desc: "LLM apps that search, read and answer from real documents.",
    skills: ["RAG", "LLMs", "NLP", "Vector Databases", "Semantic Search", "FAISS"],
  },
  {
    num: "02",
    title: "Machine Learning & Vision",
    icon: Eye,
    desc: "Models that learn from data and understand images.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
    ],
  },
  {
    num: "03",
    title: "Backend & Full-stack",
    icon: Server,
    desc: "APIs and interfaces that put models in front of users.",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Django",
      "REST API",
      "React",
      "JavaScript",
      "Socket.IO",
      "JWT",
    ],
  },
  {
    num: "04",
    title: "Data & Delivery",
    icon: Database,
    desc: "Clean data in, reliable systems out.",
    skills: [
      "SQL",
      "PostgreSQL",
      "Supabase",
      "SQLAlchemy",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Git & GitHub",
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <span>02 / EXPERTISE</span>
        <h2>
          Tools I build <span>AI systems with.</span>
        </h2>
        <p>The stack behind my projects, grouped by what it does.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-head">
                <div className="skill-icon">
                  <Icon size={28} />
                </div>
                <div className="skill-corner">
                  <span className="skill-num">{group.num}</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3>{group.title}</h3>
              <p className="skill-desc">{group.desc}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;