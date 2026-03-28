"use client";

import Lottie from "lottie-react";
import turtleAnimation from "../../../public/Turtle.json";

interface TurtleMascotProps {
  className?: string;
  size?: number;
}

export default function TurtleMascot({
  className = "",
  size = 120,
}: TurtleMascotProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        animationData={turtleAnimation}
        loop
        autoplay
        className="w-full h-full drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]"
      />
    </div>
  );
}
