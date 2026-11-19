
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      "service_t5ctbeq",
      "template_gd22fus",
      form.current,
      { publicKey: "Kibr84KMjBi5KVcFN" }
    ).then(() => {
      setStatus("Message sent successfully!");
      form.current.reset();
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send. Please try again.");
    });
  };

  return (
    <section className="contact section" id="contact">

      <div className="section-heading">
        <span>GET IN TOUCH</span>
        <h2>Let's Talk <span>Together</span></h2>
        <p>Have an idea or opportunity? Let's create something meaningful.</p>
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="contact-left">
          <span className="contact-label">CONTACT INFORMATION</span>

          <h3>Let's create something <span>great.</span></h3>

          <p className="contact-description">
            I'm interested in AI/ML opportunities, innovative projects
            and collaborations. Have something in mind? Feel free to connect.
          </p>

          <div className="contact-detail">
            <div className="contact-detail-icon"><Mail /></div>
            <div>
              <span>Email me</span>
              <a href="mailto:akarshpv2005@gmail.com">
                akarshpv2005@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon"><MapPin /></div>
            <div>
              <span>Location</span>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/akarshpv2005-ship-it"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.1.73 2.1.1 3.44 1.5.1-.72.4-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/akarsh-pv-216a203b2"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
              </svg>
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <h3>Send me a message</h3>
          <p>I'll get back to you as soon as possible.</p>

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="What is this about?"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message here..."
            rows="5"
            required
          />

          <button type="submit">
            Send Message <Send size={17} />
          </button>

          <p className="contact-status" aria-live="polite">
            {status}
          </p>
        </form>

      </motion.div>

      <footer className="portfolio-footer">
        <p>© 2026 Akarsh P V. Crafted with care.</p>
      </footer>

    </section>
  );
}

export default Contact;
