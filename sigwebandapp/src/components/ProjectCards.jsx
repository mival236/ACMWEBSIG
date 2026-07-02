import React from "react";
import { motion } from "framer-motion";
import "../styles/card.css";

/**
 * ProjectCards
 * A single reusable project card. All data is provided via props.
 * The hover overlay slides up from the bottom and reveals the
 * project meta, tech stack and action buttons.
 */
const ProjectCards = ({
  title,
  description,
  image,
  stack = [],
  github,
  demo,
  domain,
}) => {
  return (
    <motion.article
      className="pc-card"
      data-testid={`project-card-${title}`}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <div className="pc-image-wrap">
        <img
          src={image}
          alt={title}
          className="pc-image"
          loading="lazy"
          draggable={false}
        />
        <div className="pc-image-shade" />
        <span className="pc-domain-tag" data-testid="project-card-domain">
          {domain}
        </span>
      </div>

      <div className="pc-base">
        <h3 className="pc-title" data-testid="project-card-title">
          {title}
        </h3>
        <div className="pc-stack-row">
          {stack.slice(0, 3).map((tech) => (
            <span key={tech} className="pc-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pc-overlay" data-testid="project-card-overlay">
        <h3 className="pc-overlay-title">{title}</h3>
        <p className="pc-overlay-desc">{description}</p>

        <div className="pc-overlay-stack">
          {stack.map((tech) => (
            <span key={tech} className="pc-overlay-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="pc-actions">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-btn pc-btn-ghost"
            data-testid="project-card-github"
          >
            <span className="pc-btn-glyph" aria-hidden="true">
              {"</>"}
            </span>
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pc-btn pc-btn-solid"
            data-testid="project-card-demo"
          >
            <span className="pc-btn-glyph" aria-hidden="true">
              {"↗"}
            </span>
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCards;