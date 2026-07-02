import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrows from "./Arrows";
import "../styles/swapper.css";

const DOMAINS = [
  { key: "web", label: "Web Development" },
  { key: "app", label: "App Development" },
  { key: "blockchain", label: "Blockchain" },
];

/**
 * DomainSwap
 * Left / right arrows around the current domain title. Uses
 * Framer Motion to animate the title in/out on change.
 * Props:
 *   value:    current domain key
 *   onChange: function(newKey) called on left/right click
 */
const DomainSwap = ({ value, onChange }) => {
  const currentIndex = Math.max(
    0,
    DOMAINS.findIndex((d) => d.key === value)
  );
  const current = DOMAINS[currentIndex];

  const handle = (dir) => {
    const next =
      (currentIndex + dir + DOMAINS.length) % DOMAINS.length;
    onChange(DOMAINS[next].key);
  };

  return (
    <div className="swp-shell" data-testid="domain-swap">
      <Arrows direction="left" onClick={() => handle(-1)} />

      <div className="swp-title-slot" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.h3
            key={current.key}
            className="swp-title"
            data-testid="domain-swap-title"
            initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {current.label}
          </motion.h3>
        </AnimatePresence>
        <span className="swp-underline" aria-hidden="true" />
      </div>

      <Arrows direction="right" onClick={() => handle(1)} />
    </div>
  );
};

export default DomainSwap;
export { DOMAINS };