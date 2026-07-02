import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import project from "../data/project";
import DomainSwap from "./DomainSwap";
import Orbital from "./Orbital";
import "../styles/projects.css";

/**
 * Projects
 * Parent section component. Owns the current domain state and
 * feeds items into the orbital carousel. Renders the heading,
 * subtitle, the domain switcher and the carousel.
 */
const Projects = () => {
  const [domain, setDomain] = useState("web");

  const items = useMemo(() => project[domain] || [], [domain]);

  return (
    <section className="prj-section" data-testid="projects-section">
      {/* Background layers */}
      <div className="prj-bg\" aria-hidden="true\">
        <span className="prj-glow prj-glow-a" />
        <span className="prj-glow prj-glow-b" />
        <div className="prj-particles">
          {Array.from({ length: 26 }).map((_, i) => (
            <span
              key={i}
              className="prj-particle"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${(i * 0.35) % 6}s`,
                animationDuration: `${8 + (i % 6)}s`,
              }}
            />
          ))}
        </div>
        <div className="prj-grid" />
      </div>

      <motion.header
        className="prj-header"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="prj-kicker" data-testid="projects-kicker">
          <span className="prj-kicker-dot" /> Selected Work
        </span>
        <h2 className="prj-heading" data-testid="projects-heading">
          Projects that
          <span className="prj-heading-accent"> ship</span>.
        </h2>
        <p className="prj-subtitle" data-testid="projects-subtitle">
          A curated slice of work across the web, native apps and on-chain
          systems. Hover a card to peek at the stack and jump straight to
          the code or the live demo.
        </p>
      </motion.header>

      <motion.div
        className="prj-controls"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <DomainSwap value={domain} onChange={setDomain} />
      </motion.div>

      <Orbital items={items} domainKey={domain} />

      <div className="prj-footnote" data-testid="projects-footnote">
        <span>{items.length} projects</span>
        <span className="prj-footnote-sep">/</span>
        <span>Auto-rotating &middot; hover to pause</span>
      </div>
    </section>
  );
};

export default Projects;