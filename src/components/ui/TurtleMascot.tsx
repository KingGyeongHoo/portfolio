"use client";

import { motion } from "motion/react";

interface TurtleMascotProps {
  className?: string;
  size?: number;
}

export default function TurtleMascot({
  className = "",
  size = 120,
}: TurtleMascotProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]"
      >
        {/* Flipper Back Left */}
        <motion.path
          d="M20 50 C10 60, 5 45, 15 35 Z"
          fill="#0d9488"
          animate={{ rotate: [-10, 10, -10], transformOrigin: "20px 50px" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Flipper Back Right */}
        <motion.path
          d="M80 50 C90 60, 95 45, 85 35 Z"
          fill="#0d9488"
          animate={{ rotate: [10, -10, 10], transformOrigin: "80px 50px" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Flipper Front Left */}
        <motion.path
          d="M25 65 C5 75, 10 90, 35 75 Z"
          fill="#14b8a6"
          animate={{ rotate: [-15, 5, -15], transformOrigin: "35px 70px" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Flipper Front Right */}
        <motion.path
          d="M75 65 C95 75, 90 90, 65 75 Z"
          fill="#14b8a6"
          animate={{ rotate: [15, -5, 15], transformOrigin: "65px 70px" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />

        {/* Head */}
        <motion.path
          d="M40 25 C40 5, 60 5, 60 25 C60 30, 40 30, 40 25 Z"
          fill="#0f766e"
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Eyes */}
        <circle cx="45" cy="18" r="2" fill="#042f2e" />
        <circle cx="55" cy="18" r="2" fill="#042f2e" />

        {/* Shell */}
        <path
          d="M25 45 C15 25, 85 25, 75 45 C85 70, 15 70, 25 45 Z"
          fill="#065f46"
        />
        {/* Shell Pattern */}
        <path
          d="M40 35 L60 35 L70 50 L60 65 L40 65 L30 50 Z"
          fill="#047857"
          stroke="#34d399"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
