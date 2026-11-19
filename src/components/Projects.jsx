
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Shield,
  Sun,
  Code,
  Film,
  Cloud
} from "lucide-react";

const projects = [
  {
    title: "DisasterGuard AI",
    category: "AI / MACHINE LEARNING",
    description: "An intelligent disaster monitoring platform designed to track six major hazards using public data sources and geospatial intelligence.",
    tags: ["Python", "Machine Learning", "Geospatial"],
    icon: Shield,
    color: "purple",
    image: "/images/disasterguard-ai.png",
    github: ""
  },
  {
    title: "SolarPredict AI",
    category: "PREDICTIVE ANALYTICS",
    description: "A solar power prediction application using an XGBoost machine learning model with a Flask-based web interface.",
    tags: ["Python", "XGBoost", "Flask"],
    icon: Sun,
    color: "orange",
    image: "/images/solarpredict-ai.png",
    github: ""
  },
  {
    title: "NEXUS CRM",
    category: "FULL STACK DEVELOPMENT",
    description: "A customer relationship management platform with ticket management, messaging and team workflows.",
    tags: ["React", "Flask", "Supabase"],
    icon: Code,
    color: "blue",
    image: "/images/nexus-crm.png",
    github: "https://github.com/akarshpv2005-ship-it/NEXUS-CRM"
  },
  {
    title: "Code Auto Reviewer",
    category: "GENERATIVE AI / RAG",
    description: "An AI-powered code review assistant using retrieval-augmented generation and local language models.",
    tags: ["Python", "RAG", "FAISS", "Qwen"],
    icon: Brain,
    color: "purple",
    image: "/images/code-auto-reviewer.png",
    github: "https://github.com/akarshpv2005-ship-it/DOCUMIND-AI"
  },
  {
    title: "Emotion-Based Movie Recommendation",
    category: "COMPUTER VISION",
    description: "A movie recommendation application that uses facial emotion recognition to suggest movies based on detected emotions.",
    tags: ["Django", "OpenCV", "TensorFlow"],
    icon: Film,
    color: "pink",
    image: "/images/emotion-movie.png",
    github: ""
  },
  {
    title: "WeatherFit",
    category: "WEB APPLICATION",
    description: "A weather-based outfit recommendation website that suggests suitable clothing based on weather conditions.",
    tags: ["Python", "Flask", "Weather API"],
    icon: Cloud,
    color: "blue",
    image: "/images/weatherfit.png",
    github: ""
  }
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span>MY RECENT WORK</span>
        <h2>Featured <span>Projects</span></h2>
        <p>Some of the applications and intelligent systems I have developed.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className={`project-icon ${project.color}`}>
                <Icon size={30} />
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <ArrowUpRight size={17} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
