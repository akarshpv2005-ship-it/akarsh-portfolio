import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Shield,
  Sun,
  Code,
  Film,
  Cloud,
} from "lucide-react";

const projects = [
  {
    title: "NEXUS CRM",
    category: "FULL-STACK APPLICATION",
    description:
      "A customer relationship management platform with ticket management, messaging and team workflows.",
    tags: ["React", "Flask", "Supabase"],
    icon: Code,
    color: "blue",
    image: "/images/nexus-crm.png",
    github: "https://github.com/akarshpv2005-ship-it/NEXUS-CRM",
  },
  {
    title: "Emotion-Based Movie Recommendation",
    category: "COMPUTER VISION / DEEP LEARNING",
    description:
      "Django web app with real-time facial emotion detection that maps seven emotions to movie categories, with user authentication and an admin dashboard.",
    tags: ["Django", "OpenCV", "TensorFlow", "Keras"],
    icon: Film,
    color: "pink",
    image: "/images/emotion-movie.png",
    github: "https://github.com/akarshpv2005-ship-it/FLICK-PICKS",
  },
  {
    title: "DisasterGuard AI",
    category: "AI / GEOSPATIAL MONITORING",
    description:
      "Local-first dashboard monitoring six hazards (cyclone, earthquake, flood, wildfire, landslide and tsunami) using USGS, GDACS and Open-Meteo data, with a Leaflet map and a FastAPI backend.",
    tags: ["Python", "FastAPI", "Leaflet", "REST API"],
    icon: Shield,
    color: "purple",
    image: "/images/disasterguard-ai.png",
    github: "",
  },
  {
    title: "DocuMind AI",
    category: "GENERATIVE AI / RAG",
    description:
      "An AI-powered code review assistant using retrieval-augmented generation and local language models.",
    tags: ["Python", "RAG", "FAISS", "Qwen"],
    icon: Brain,
    color: "purple",
    image: "/images/code-auto-reviewer.png",
    github: "https://github.com/akarshpv2005-ship-it/DOCUMIND-AI",
  },
  {
    title: "SolarPredict AI",
    category: "PREDICTIVE ANALYTICS",
    description:
      "A solar power prediction application using an XGBoost machine learning model with a Flask-based web interface.",
    tags: ["Python", "XGBoost", "Flask"],
    icon: Sun,
    color: "orange",
    image: "/images/solarpredict-ai.png",
    github: "https://github.com/akarshpv2005-ship-it/Solar-energy-Prediction",
  },
  {
    title: "WeatherFit",
    category: "API-DRIVEN APPLICATION",
    description:
      "A weather-based outfit recommendation website that suggests suitable clothing based on current weather conditions.",
    tags: ["Python", "Flask", "Weather API"],
    icon: Cloud,
    color: "blue",
    image: "/images/weatherfit.png",
    github: "",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span>03 / PROJECTS</span>
        <h2>
          AI projects that <span>solve real problems.</span>
        </h2>
        <p>Selected applications and intelligent systems I have built.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const number = String(index + 1).padStart(2, "0");

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

              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-num">{number}</span>
              </div>

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
                  View on GitHub <ArrowUpRight size={17} />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 45 }}>
        <a
          href="https://github.com/akarshpv2005-ship-it"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          Browse all on GitHub <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default Projects;