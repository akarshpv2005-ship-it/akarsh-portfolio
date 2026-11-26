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
    name: "NEXUS CRM",
    aliases: ["nexus", "crm"],
    description:
      "A customer relationship management platform with ticket management, messaging and team workflows.",
    tags: ["React", "Flask", "Supabase"],
    github: "https://github.com/akarshpv2005-ship-it/NEXUS-CRM",
  },
  {
    name: "Emotion-Based Movie Recommendation",
    aliases: ["emotion", "movie", "flick"],
    description:
      "A Django web app with real-time facial emotion detection that maps seven emotions to movie categories, with user authentication and an admin dashboard.",
    tags: ["Django", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/akarshpv2005-ship-it/FLICK-PICKS",
  },
  {
    name: "DisasterGuard AI",
    aliases: ["disaster", "hazard"],
    description:
      "A local-first dashboard monitoring six hazards (cyclone, earthquake, flood, wildfire, landslide and tsunami) using USGS, GDACS and Open-Meteo data, with a Leaflet map and a FastAPI backend.",
    tags: ["Python", "FastAPI", "Leaflet", "REST API"],
    github: "",
  },
  {
    name: "DocuMind AI",
    aliases: ["documind", "docu mind", "code review", "reviewer"],
    description:
      "An AI-powered code review assistant using retrieval-augmented generation and local language models.",
    tags: ["Python", "RAG", "FAISS", "Qwen"],
    github: "https://github.com/akarshpv2005-ship-it/DOCUMIND-AI",
  },
  {
    name: "SolarPredict AI",
    aliases: ["solar"],
    description:
      "A solar power prediction application using an XGBoost machine learning model with a Flask-based web interface.",
    tags: ["Python", "XGBoost", "Flask"],
    github: "https://github.com/akarshpv2005-ship-it/Solar-energy-Prediction",
  },
  {
    name: "WeatherFit",
    aliases: ["weather", "outfit"],
    description:
      "A weather-based outfit recommendation website that suggests suitable clothing based on current weather conditions.",
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
  "Akarsh works in four areas.\n\nApplied AI: RAG, LLMs, NLP, Vector Databases, Semantic Search, FAISS.\nML & Vision: Machine Learning, Deep Learning, Computer Vision, OpenCV, TensorFlow, Keras, Scikit-learn, XGBoost.\nBackend & Full-stack: Python, FastAPI, Flask, Django, REST APIs, React, JavaScript, Socket.IO, JWT.\nData: SQL, PostgreSQL, Supabase, SQLAlchemy, Pandas, NumPy, Matplotlib, Seaborn, Git & GitHub.";

function getAnswer(question) {
  const query = question.toLowerCase();
  const project = projects.find(
    (item) =>
      query.includes(item.name.toLowerCase()) ||
      item.aliases.some((alias) => query.includes(alias)),
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

  if (/resume|cv\b/.test(query)) {
    return "You can download Akarsh's resume using the Download Resume button at the top of this page.";
  }

  if (/hire|available|opportunit|job|work with|open to/.test(query)) {
    return `Yes, Akarsh is open to AI/ML opportunities. You can reach him at ${profile.email} or on LinkedIn at ${profile.linkedin}.`;
  }

  if (/contact|email|reach|connect/.test(query)) {
    return `You can email Akarsh at ${profile.email}, connect on LinkedIn at ${profile.linkedin}, or find his projects on GitHub at ${profile.github}.`;
  }

  if (/education|study|degree|college|university|training|linnk|course/.test(query)) {
    return "Akarsh holds a B.Sc. in Information Technology from MG University (2023 to 2026) and is currently pursuing the AI/ML Engineering Program at Linnk Academy India.";
  }

  if (/who|about akarsh|tell me about|background/.test(query)) {
    return "Akarsh P V is an AI/ML Engineer in the making from Kochi, Kerala. He is a B.Sc. Information Technology graduate from MG University, currently training in AI and Machine Learning Engineering at Linnk Academy India. He builds practical projects in Computer Vision, Retrieval-Augmented Generation and API-driven applications.";
  }

  if (/where|location|based|kochi|kerala/.test(query)) {
    return "Akarsh is based in Kochi, Kerala, India.";
  }

  if (/recommend|suggest|interested|which project/.test(query)) {
    return "For computer vision, see the Emotion-Based Movie Recommendation app; for AI monitoring, DisasterGuard AI; for generative AI and RAG, DocuMind AI; for full-stack work, NEXUS CRM; and for predictive analytics, SolarPredict AI. Tell me what you are interested in and I can narrow it down.";
  }

  if (/^(hi|hello|hey)\b/.test(query)) {
    return "Hey! I can tell you about Akarsh's background, skills, projects and how to get in touch. What would you like to know?";
  }

  return "I can help with Akarsh's background, education, technical skills, projects and contact links. Try asking about a project by name, or choose one of the suggested questions.";
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
      text: "Hey! I'm Akarsh's AI assistant. Ask me about his AI/ML skills, projects, education and how to reach him.",
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