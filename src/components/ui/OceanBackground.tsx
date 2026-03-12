"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function OceanBackground() {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Generate static random values on client mount to avoid hydration mismatch
    const newBubbles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5, // 5 to 15px
      left: Math.random() * 100, // 0 to 100%
      duration: Math.random() * 10 + 10, // 10 to 20s
      delay: Math.random() * 10, // 0 to 10s
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#0ea5e9] via-[#0369a1] to-[#075985] pointer-events-none">
      {/* Light Rays */}
      <div
        className="absolute top-0 left-0 w-full h-[60%] opacity-40 mix-blend-overlay"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)",
          maskImage:
            "repeating-linear-gradient(90deg, transparent 0%, black 10%, transparent 20%)",
          WebkitMaskImage:
            "repeating-linear-gradient(90deg, transparent 0%, black 10%, transparent 20%)",
        }}
      />

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-20px] rounded-full bg-white/20 border border-white/50 backdrop-blur-md shadow-[inset_0_0_15px_rgba(255,255,255,0.6)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: ["0px", "20px", "-20px", "10px", "-10px", "0px"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
            },
            x: {
              duration: bubble.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            },
            opacity: {
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              times: [0, 0.2, 1],
            },
          }}
        />
      ))}

      {/* Deep Sea Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
