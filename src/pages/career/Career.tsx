"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Terminal } from "lucide-react";
import Aurora from "@/components/ui/Aurora";

const EXPERIENCES = [
  {
    id: "traverse",
    company: "Traverse",
    period: "2025.08 ~ Present",
    role: "Frontend Engineer",
    icon: "🪙",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    projects: [
      {
        title: "국내 특화 가상자산 지갑 검증 서비스 TranSight 개발",
        tasks: [
          "가상자산 거래 추적/분석 트랜잭션 맵 개발 및 고도화",
          "불법 지갑주소 탐색 및 동결 처리 서비스 개발",
          "기관별 로그인 프로세스 개발",
        ],
      },
      {
        title: "기업 홈페이지 및 서비스 홍보 페이지 개발",
        links: [
          { label: "Traverse Homepage", url: "#" },
          { label: "TranSight Landing Page", url: "#" },
        ],
      },
    ],
  },
  {
    id: "costa",
    company: "코스타 (Costa)",
    period: "2025.02 ~ 2025.07",
    role: "공연 관리 솔루션 '공기' Frontend Engineer",
    icon: "🎭",
    skills: ["TypeScript", "React", "Next.js", "Zustand"],
    projects: [
      {
        title: "공연 리포트 대시보드 기획 및 구현",
        tasks: [
          "Excel로 제공되던 공연 데이터를 웹 페이지로 구현",
          "UI/UX 설계 및 데이터 시각화를 통해 운영 효율 극대화",
        ],
      },
      {
        title: "공연장 좌석 배치도 생성 시스템 설계 및 개발",
        tasks: [
          "SVG 기반 좌석 편집 기능 구현",
          "줌/드래그/좌석 그룹핑 등 인터랙션 구현",
        ],
      },
      {
        title: "스마트 티켓 QR인증 시스템 개발",
        tasks: ["QR코드를 활용한 사용자 인증 및 입장 확인 시스템 구현"],
      },
    ],
  },
];

export const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-black py-32 px-4 md:px-12 lg:px-24 overflow-hidden z-20"
    >
      {/* React-bits styled Aurora Background */}
      <Aurora colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]} speed={0.5} />

      <div className="relative max-w-5xl mx-auto z-10 text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Terminal size={16} className="text-zinc-400" />
            <span className="text-sm font-medium tracking-wider text-zinc-300 uppercase">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Career <span className="text-zinc-600">Path</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-8 pl-8 md:pl-16 space-y-24">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] md:-left-[81px] top-1 w-[26px] h-[26px] md:w-[34px] md:h-[34px] flex items-center justify-center bg-zinc-950 border border-zinc-700/80 rounded-full group-hover:border-zinc-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:bg-zinc-900 transition-all duration-300 z-10">
                <span className="text-sm md:text-base leading-none translate-y-[-1px]">
                  {exp.icon}
                </span>
              </div>

              {/* Experience Card */}
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Header */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg md:text-xl text-zinc-400 font-light">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-sm md:text-base text-zinc-500 font-mono tracking-widest bg-zinc-900/50 px-3 py-1 rounded-md self-start md:self-auto border border-zinc-800/50 mb-auto">
                      {exp.period}
                    </div>
                  </div>

                  {/* Skills/Tech Stack */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs md:text-sm font-medium text-blue-200 bg-blue-900/20 border border-blue-800/30 rounded-full backdrop-blur-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Projects */}
                <div className="grid gap-6 text-zinc-300">
                  {exp.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-colors"
                    >
                      <h4 className="text-xl md:text-2xl font-medium text-white mb-6">
                        {project.title}
                      </h4>

                      {project.tasks && (
                        <ul className="space-y-4">
                          {project.tasks.map((task, tIndex) => (
                            <li
                              key={tIndex}
                              className="flex items-start gap-4 text-zinc-400 font-light text-base md:text-lg leading-relaxed break-keep"
                            >
                              <div className="mt-[8px] min-w-[6px] h-[6px] rounded-full bg-zinc-600" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.links && (
                        <div className="flex flex-wrap gap-4 mt-8">
                          {project.links.map((link, lIndex) => (
                            <a
                              key={lIndex}
                              href={link.url}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-sm md:text-base text-zinc-300 hover:text-white transition-colors border border-zinc-700/50"
                            >
                              {link.label}
                              <ExternalLink size={14} className="opacity-70" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
