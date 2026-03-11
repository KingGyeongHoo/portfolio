"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import DecryptedText from "@/components/ui/DecryptedText";
import Galaxy from "@/components/ui/Galaxy";
import BlurText from "@/components/ui/BlurText";

interface IntroProps {
  className?: string;
}

export const Intro = ({ className }: IntroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoothly scale from 1x to 3x as the user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <>
      <section
        ref={containerRef}
        className={`relative h-[300vh] w-full bg-black ${className || ""}`}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
          <motion.div
            style={{ scale, opacity }}
            className="absolute inset-0 w-full h-full origin-center"
          >
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
              <Galaxy
                transparent={true}
                starSpeed={0.8}
                speed={1.5}
                density={1.2}
                glowIntensity={0.5}
                twinkleIntensity={0.6}
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none text-center px-4">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-[0.1em] md:tracking-[0.2em] mb-6 drop-shadow-2xl">
                <DecryptedText
                  text="GYEONGHOO SONG"
                  speed={70}
                  animateOn="view"
                  revealDirection="center"
                  sequential={true}
                  maxIterations={15}
                  className="text-white"
                  encryptedClassName="text-slate-600"
                />
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wider uppercase">
                <DecryptedText
                  text="Frontend Developer"
                  speed={40}
                  animateOn="view"
                  revealDirection="end"
                />
              </p>
            </div>
          </motion.div>

          {/* Floating Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase"
            >
              Scroll Down
            </motion.span>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 40 }}
              transition={{
                delay: 1.5,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-[1px] bg-gradient-to-b from-zinc-400 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* Second Page / About Section */}
      <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 overflow-hidden z-10">
        <div className="w-full mx-auto flex flex-col items-center gap-12 text-center text-balance break-keep">
          <BlurText
            text="개발이란, 사용자가 만족하는 방향으로 계속 변화해야 한다고 생각합니다."
            animateBy="word"
            className="text-2xl md:text-4xl lg:text-5xl text-white font-medium leading-relaxed tracking-tight"
            delay={80}
            direction="bottom"
          />
          <BlurText
            text="그렇기에 저는 최고의 사용자 경험을 제공하기 위해 다방면으로 노력하고 있습니다."
            animateBy="word"
            className="text-xl md:text-3xl lg:text-4xl text-slate-400 font-light leading-relaxed tracking-tight"
            delay={120}
            direction="bottom"
          />
        </div>
      </section>
    </>
  );
};
