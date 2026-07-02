import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCards from "./ProjectCards";
import "../styles/orbital.css";

/**
 * Orbital
 * A premium GSAP-powered orbital carousel. Not a true 3D scene -
 * cards are placed on a horizontal arc using 2D transforms.
 * Rotation runs continuously and pauses on hover.
 */
const Orbital = ({ items = [], domainKey }) => {
  const [active, setActive] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const tweenRef = useRef(null);
  const progressRef = useRef(0);
  const stageRef = useRef(null);

  const count = items.length;

  // Auto-rotate using GSAP.
  useEffect(() => {
    if (count === 0) return undefined;

    tweenRef.current = gsap.to(progressRef, {
      current: count,
      duration: count * 3.2,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const p = progressRef.current % count;
        setActive(Math.round(p) % count);
      },
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
      progressRef.current = 0;
    };
  }, [count, domainKey]);

  // Reset active on domain change so the fade lines up.
  useEffect(() => {
    progressRef.current = 0;
    setActive(0);
  }, [domainKey]);

  const pause = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const resume = () => {
    if (tweenRef.current && !hoveredId) tweenRef.current.resume();
  };

  const step = (dir) => {
    const next = (active + dir + count) % count;
    setActive(next);
    progressRef.current = next;
  };

  const getSlotStyle = (index) => {
    // Position each card relative to the active card.
    let offset = index - active;
    // Wrap the shortest way around the ring.
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const abs = Math.abs(offset);
    const isCenter = abs === 0;

    // Layout math - horizontal fanned arc.
    const x = offset * 240;
    const z = -abs * 140;
    const rotY = offset * -14;
    const scale = isCenter ? 1.05 : Math.max(0.75, 1 - abs * 0.12);
    const opacity = abs > 2 ? 0 : Math.max(0.25, 1 - abs * 0.28);
    const blur = abs > 1 ? 3 : 0;
    const zIndex = 100 - abs;

    return {
      transform: `translate(-50%, -50%) translate3d(${x}px, 0px, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex,
      pointerEvents: abs > 2 ? "none" : "auto",
    };
  };

  return (
    <div
      className="orb-shell"
      data-testid="orbital-carousel"
      onMouseEnter={pause}
      onMouseLeave={() => {
        setHoveredId(null);
        resume();
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={domainKey}
          className="orb-stage"
          ref={stageRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {items.map((item, i) => {
  const style = getSlotStyle(i);
  const isDimmed = hoveredId && hoveredId !== item.id;
  const isHovered = hoveredId === item.id;

  return (
    <div
      key={item.id}
      className="orb-slot"
      style={style}
      onMouseEnter={() => {
        setHoveredId(item.id);
        setActive(i);
        progressRef.current = i;
      }}
      onClick={() => {
        setActive(i);
        progressRef.current = i;
      }}
    >
      <motion.div
        className="orb-slot-inner"
        animate={{
          opacity: isDimmed ? 0.4 : 1,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <ProjectCards
          title={item.title}
          description={item.description}
          image={item.image}
          stack={item.stack}
          github={item.github}
          demo={item.demo}
          domain={item.domain}
        />
      </motion.div>
    </div>
  );
})}
        </motion.div>
      </AnimatePresence>

      <div className="orb-dots" data-testid="orbital-dots">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            aria-label={`Go to project ${i + 1}`}
            className={`orb-dot ${i === active ? "orb-dot-on" : ""}`}
            data-testid={`orbital-dot-${i}`}
            onClick={() => {
              setActive(i);
              progressRef.current = i;
            }}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous project"
        className="orb-nudge orb-nudge-left"
        data-testid="orbital-prev"
        onClick={() => step(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next project"
        className="orb-nudge orb-nudge-right"
        data-testid="orbital-next"
        onClick={() => step(1)}
      >
        ›
      </button>
    </div>
  );
};

export default Orbital;