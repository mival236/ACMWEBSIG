import React from "react";
import "../styles/arrow.css";

/**
 * Arrows
 * A reusable accessible arrow button used by the DomainSwap.
 * Props:
 *   direction: \"left\" | \"right\"
 *   onClick:   handler
 *   label:     accessible label (optional)
 */
const Arrows = ({ direction = "left", onClick, label }) => {
  const isLeft = direction === "left";
  const accessibleLabel =
    label || (isLeft ? "Previous domain" : "Next domain");

  return (
    <button
      type="button"
      className={`arw-btn arw-${direction}`}
      onClick={onClick}
      aria-label={accessibleLabel}
      data-testid={`arrow-${direction}`}
    >
      <span className="arw-glyph" aria-hidden="true">
        {isLeft ? "‹" : "›"}
      </span>
      <span className="arw-ring" aria-hidden="true" />
    </button>
  );
};

export default Arrows;