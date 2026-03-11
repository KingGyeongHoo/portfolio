"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "word" | "character";
  direction?: "top" | "bottom";
}

export default function BlurText({
  text,
  delay = 200,
  className = "",
  animateBy = "word",
  direction = "top",
}: BlurTextProps) {
  const elements = animateBy === "word" ? text.split(" ") : text.split("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay / 1000, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
      y: direction === "top" ? -20 : 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {elements.map((element, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block" }}
          key={index}
          className="mr-[0.25em] mb-[0.2em]"
        >
          {element}
        </motion.span>
      ))}
    </motion.p>
  );
}
