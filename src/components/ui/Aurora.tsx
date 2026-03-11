"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AuroraProps {
  colorStops?: string[];
  speed?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ["#3b82f6", "#8b5cf6", "#c084fc"],
  speed = 1,
  className = "",
}: AuroraProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Base Layer */}
      <div className="absolute inset-0 bg-black" />

      {/* Aurora Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1.1, 1],
          x: ["-10%", "5%", "-5%", "-10%"],
          y: ["-10%", "5%", "-15%", "-10%"],
        }}
        transition={{
          duration: 20 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[50vw] h-[50vh] rounded-full blur-[120px] mix-blend-screen opacity-50 md:opacity-30"
        style={{ backgroundColor: colorStops[0] }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 0.9, 1],
          x: ["0%", "-10%", "15%", "0%"],
          y: ["0%", "10%", "-5%", "0%"],
        }}
        transition={{
          duration: 25 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vh] rounded-full blur-[140px] mix-blend-screen opacity-50 md:opacity-30"
        style={{ backgroundColor: colorStops[1] }}
      />

      <motion.div
        animate={{
          scale: [1, 0.8, 1.2, 1],
          x: ["0%", "15%", "-10%", "0%"],
          y: ["0%", "-10%", "15%", "0%"],
        }}
        transition={{
          duration: 22 / speed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-[40vw] h-[40vh] -translate-y-1/2 rounded-full blur-[100px] mix-blend-screen opacity-40 md:opacity-20"
        style={{ backgroundColor: colorStops[2] }}
      />

      {/* Dot Grid overlay (similar to react-bits styles) */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
