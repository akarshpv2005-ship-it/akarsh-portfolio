
import { BriefcaseBusiness, CodeXml, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">AKARSH<span>.</span></a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="https://github.com/akarshpv2005-ship-it"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <CodeXml size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/akarsh-pv-216a203b2"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BriefcaseBusiness size={18} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
