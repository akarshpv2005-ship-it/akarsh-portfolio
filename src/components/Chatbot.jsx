import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ExternalLink,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import "./Chatbot.css";

const profile = {
  github: "https://github.com/akarshpv2005-ship-it",
  linkedin: "https://www.linkedin.com/in/akarsh-pv-216a203b2",
  email: "akarshpv2005@gmail.com",
};

const projects = [
  {
    name: "DisasterGuard AI",
    description:
      "An intelligent disaster monitoring platform designed to track six major hazards using public data sources and geospatial intelligence.",
    tags: ["Python", "Machine Learning", "Geospatial"],
    github: "",
  },
  {
    name: "SolarPredict AI",
    description:
      "A solar power prediction application using an XGBoost machine learning model with a Flask-based web interface.",
    tags: ["Python", "XGBoost", "Flask"],
    github: "",
  },
  {
    name: "NEXUS CRM",
    description:
      "A customer relationship management platform with ticket management, messaging and team workflows.",
    tags: ["React", "Flask", "Supabase"],
    github: "https://github.com/akarshpv2005-ship-it/NEXUS-CRM",
  },
  {
    name: "Code Auto Reviewer",
    description:
      "An AI-powered code review assistant using retrieval-augmented generation and local language models.",
    tags: ["Python", "RAG", "FAISS", "Qwen"],
    github: "https://github.com/akarshpv2005-ship-it/DOCUMIND-AI",
  },
  {
    name: "Emotion-Based Movie Recommendation System",
    description:
      "A movie recommendation application that uses facial emotion recognition to suggest movies based on detected emotions.",
    tags: ["Django", "OpenCV", "TensorFlow"],
    github: "",
  },
  {
    name: "WeatherFit",
    description:
      "A weather-based outfit recommendation website that suggests suitable clothing based on weather conditions.",
    tags: ["Python", "Flask", "Weather API"],
    github: "",
  },
];

const suggestions = [
  "Tell me about Akarsh",
  "What projects has he built?",
  "What are his technical skills?",
  "Tell me about DisasterGuard AI",
  "How can I contact him?",
];

const skillSummary =
  "Akarsh's skills include Python, JavaScript, SQL, React, Flask, REST APIs, Machine Learning, Deep Learning, XGBoost, Computer Vision, OpenCV, RAG, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, FAISS, Supabase, Git and GitHub.";

function getAnswer(question) {
  const query = question.toLowerCase();
  const project = projects.find((item) =>
    query.includes(item.name.toLowerCase()),
  );

  if (project) {
    const repository = project.github
      ? `\nGitHub: ${project.github}`
      : "\nA GitHub link isn't listed for this project on the portfolio.";
    return `${project.name}: ${project.description}\nTechnologies: ${project.tags.join(", ")}.${repository}`;
  }

  if (/project|built|portfolio work|what has he made/.test(query)) {
    return `Akarsh's featured projects are ${projects.map((item) => item.name).join(", ")}. Ask me about any one of them to learn more.`;
  }

  if (/skill|technology|tech stack|know how/.test(query)) {
    return skillSummary;
  }

  if (/github/.test(query)) {
    return `Akarsh's GitHub: ${profile.github}`;
  }

  if (/linkedin/.test(query)) {
    return `Akarsh's LinkedIn: ${profile.linkedin}`;
  }

  if (/contact|email|reach|connect/.test(query)) {
    return `You can email Akarsh at ${profile.email}, connect on LinkedIn at ${profile.linkedin}, or find his projects on GitHub at ${profile.github}.`;
  }

  if (/where|location|from/.test(query)) {
    return "Akarsh is based in Kerala, India.";
  }

  if (/who|about akarsh|tell me about|background|education/.test(query)) {
    return "Akarsh P V is an AI/ML Engineering student from Kerala, India, and an aspiring AI/ML Engineer. He enjoys building intelligent applications and solving real-world problems. His interests include Machine Learning, Computer Vision, Generative AI, RAG and Full-Stack Development. He is pursuing a B.Sc. in Information Technology at MG University.";
  }

  if (/recommend|suggest|interested|which project/.test(query)) {
    if (/disaster|hazard|climate|geospatial/.test(query)) {
      return "DisasterGuard AI sounds like the closest match: it monitors six major hazards using public data sources and geospatial intelligence.";
    }
    if (/solar|energy|prediction|analytics/.test(query)) {
      return "Take a look at SolarPredict AI, a solar power prediction app built with an XGBoost model and Flask.";
    }
    if (/code|review|developer|rag|retrieval|language model/.test(query)) {
      return "Code Auto Reviewer may be a good fit. It uses retrieval-augmented generation and local language models to assist with code reviews.";
    }
    if (/movie|film|emotion|face|vision/.test(query)) {
      return "Emotion-Based Movie Recommendation System combines facial emotion recognition with movie recommendations.";
    }
    if (/weather|outfit|clothing/.test(query)) {
      return "WeatherFit recommends suitable clothing based on current weather conditions.";
    }
    if (/crm|customer|workflow|team/.test(query)) {
      return "NEXUS CRM is a customer relationship management platform featuring ticket management, messaging and team workflows.";
    }
    return "For AI and geospatial monitoring, explore DisasterGuard AI; for predictive analytics, SolarPredict AI; for generative AI, Code Auto Reviewer; and for full-stack workflows, NEXUS CRM. Tell me what you are interested in and I can narrow it down.";
  }

  if (/^(hi|hello|hey)\b/.test(query)) {
    return "Hey! I can tell you about Akarsh's background, skills, projects and how to get in touch. What would you like to know?";
  }

  return "I can help with Akarsh's background, technical skills, projects and contact links. Try asking about a project by name, or choose one of the suggested questions.";
}

function renderMessage(text) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, index) =>
    /^https?:\/\//.test(part) ? (
      <a href={part} key={`${part}-${index}`} target="_blank" rel="noreferrer">
        {part} <ExternalLink size={12} aria-hidden="true" />
      </a>
    ) : (
      part
    ),
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hey! I'm Akarsh's AI assistant. Ask me anything about his skills, projects, and background!",
    },
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, isTyping, messages]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sendMessage = (event, suggestedQuestion) => {
    event?.preventDefault();
    const question = (suggestedQuestion || input).trim();
    if (!question || isTyping) return;

    const userMessage = {
      id: `user-${++messageIdRef.current}`,
      sender: "user",
      text: question,
    };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${++messageIdRef.current}`,
          sender: "assistant",
          text: getAnswer(question),
        },
      ]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <div className="akarsh-chatbot">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="chat-window"
            role="dialog"
            aria-modal="false"
            aria-labelledby="chat-title"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <header className="chat-header">
              <div className="chat-avatar"><Bot size={21} /></div>
              <div className="chat-header-copy">
                <h2 id="chat-title">Akarsh AI Assistant</h2>
                <span className="chat-status"><i /> Online</span>
              </div>
              <button
                type="button"
                className="chat-close"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
              >
                <X size={19} />
              </button>
            </header>

            <div className="chat-mode">LOCAL KNOWLEDGE MODE</div>

            <div className="chat-messages" aria-live="polite">
              {messages.map((message) => (
                <div
                  className={`chat-message ${message.sender}`}
                  key={message.id}
                >
                  {message.sender === "assistant" && (
                    <span className="message-avatar"><Bot size={15} /></span>
                  )}
                  <p>{renderMessage(message.text)}</p>
                </div>
              ))}
              {isTyping && (
                <div className="chat-message assistant" aria-label="Assistant is typing">
                  <span className="message-avatar"><Bot size={15} /></span>
                  <div className="typing-indicator"><i /><i /><i /></div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="chat-suggestions">
                  {suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion}
                      disabled={isTyping}
                      onClick={(event) => sendMessage(event, suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-composer" onSubmit={sendMessage}>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything..."
                aria-label="Message Akarsh AI Assistant"
                maxLength={500}
                disabled={isTyping}
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || isTyping}
              >
                <Send size={17} />
              </button>
            </form>
            <div className="chat-disclaimer">Answers use portfolio information. No live AI API is connected.</div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className={`chat-launcher ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Close Akarsh AI Assistant" : "Open Akarsh AI Assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        {isOpen ? <X size={23} /> : <><Bot size={24} /><MessageCircle className="launcher-bubble" size={15} /></>}
      </motion.button>
    </div>
  );
}

export default Chatbot;
