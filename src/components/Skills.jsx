
import { motion } from "framer-motion";
import {
  Brain, Code2, Database, Globe, Wrench
} from "lucide-react";

const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "XGBoost", "Computer Vision", "RAG", "OpenCV"]
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    title: "Data Science",
    icon: Database,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"]
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React", "Flask", "REST API", "Socket.IO", "Tailwind CSS"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "FAISS", "Supabase"]
  }
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <span>MY TECHNICAL EXPERTISE</span>
        <h2>Skills & <span>Technologies</span></h2>
        <p>Technologies and tools I use to build intelligent applications.</p>
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
              <div className="skill-icon">
                <Icon size={28} />
              </div>

              <h3>{group.title}</h3>

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
