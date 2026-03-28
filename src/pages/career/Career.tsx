"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import {
  ExternalLink,
  Terminal,
  Briefcase,
  Calendar,
  Building2,
  ChevronRight,
  Globe,
  LayoutDashboard,
  QrCode,
  Armchair,
  Map,
  Shield,
} from "lucide-react";
import Aurora from "@/components/ui/Aurora";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectTask {
  text: string;
  details?: string[];
}

interface Project {
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: ProjectTask[];
  links?: ProjectLink[];
}

interface Experience {
  id: string;
  company: string;
  companyDescription: string;
  period: string;
  role: string;
  roleDescription: string;
  icon: string;
  skills: string[];
  projects: Project[];
}

const EXPERIENCES: Experience[] = [
  {
    id: "traverse",
    company: "주식회사 Traverse",
    companyDescription:
      "블록체인 기반 가상자산 추적 및 AML(자금세탁방지) 솔루션을 개발하는 핀테크 기업. 국내 수사기관 및 금융기관에 가상자산 분석 도구를 제공합니다.",
    period: "2025.08 ~ Present",
    role: "Frontend Engineer",
    roleDescription:
      "국내 특화 가상자산 지갑 검증 서비스 TranSight의 프론트엔드 개발을 담당하고 있습니다. 복잡한 블록체인 데이터를 직관적으로 시각화하고, 기관 간 협업 프로세스를 웹 기반으로 구현하는 업무를 수행하고 있습니다.",
    icon: "🪙",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    projects: [
      {
        title: "가상자산 거래 추적 Transaction Map 개발",
        icon: <Map size={20} />,
        description:
          "가상자산의 거래 흐름을 노드-엣지 기반 그래프로 시각화하여, 수사기관 및 컴플라이언스 담당자가 자금의 이동 경로를 한눈에 파악할 수 있도록 하는 핵심 기능입니다.",
        tasks: [
          {
            text: "블록체인 트랜잭션 데이터를 노드-엣지 구조의 인터랙티브 그래프로 시각화",
            details: [
              "지갑 주소 간 자금 흐름을 방향성 그래프로 표현",
              "줌/팬/드래그 등 대규모 데이터 탐색을 위한 인터랙션 구현",
              "거래 금액, 시간, 지갑 유형 등 다차원 정보를 시각적 요소에 매핑",
            ],
          },
          {
            text: "대량의 트랜잭션 데이터를 효율적으로 렌더링하기 위한 최적화 수행",
            details: [
              "가상화 및 지연 로딩을 통한 대규모 그래프 렌더링 성능 개선",
              "사용자 탐색 패턴에 따른 점진적 데이터 로딩 구현",
            ],
          },
        ],
      },
      {
        title:
          "기관 - 거래소 간 불법 거래 계좌 정보 요청 및 동결 프로세스(IAAN) 개발 총괄",
        icon: <Shield size={20} />,
        description:
          "IAAN(Institutional AML Alliance Network)은 수사기관과 거래소 간 불법 거래 계좌에 대한 정보 요청, 동결 처리, 이력 관리를 원스톱으로 처리하는 기관 간 협업 프로세스입니다. 해당 기능의 프론트엔드 개발을 총괄했습니다.",
        tasks: [
          {
            text: "기관에서 거래소로의 계좌 정보 요청 워크플로우 설계 및 구현",
            details: [
              "요청서 작성, 제출, 승인/반려 등 다단계 프로세스를 직관적인 UI로 구현",
              "요청 상태에 따른 실시간 진행 상황 추적 대시보드 개발",
            ],
          },
          {
            text: "불법 거래 계좌 동결 처리 및 이력 관리 시스템 구현",
            details: [
              "계좌 동결/해제 프로세스의 전 과정을 웹 기반으로 디지털화",
              "처리 이력 타임라인 및 감사 로그 UI 개발",
            ],
          },
          {
            text: "기관-거래소 간 보안 통신 및 권한 관리 인터페이스 개발",
            details: [
              "기관 유형별 차등 권한 체계에 따른 접근 제어 UI 구현",
              "민감 정보 마스킹 및 열람 권한 요청 플로우 개발",
            ],
          },
        ],
      },
      {
        title: "기업 홈페이지 및 서비스 홍보 페이지 개발",
        icon: <Globe size={20} />,
        description:
          "Traverse 기업 소개 홈페이지와 TranSight 서비스 랜딩 페이지를 기획 단계부터 참여하여 개발했습니다.",
        tasks: [
          {
            text: "반응형 기업 홈페이지 및 서비스 랜딩 페이지 개발",
            details: [
              "기업 브랜드 아이덴티티를 반영한 UI/UX 설계 및 구현",
              "스크롤 기반 애니메이션 및 인터랙티브 요소를 통한 서비스 소개",
              "SEO 최적화 및 퍼포먼스 튜닝을 통한 검색 노출 개선",
            ],
          },
        ],
        links: [
          { label: "Traverse Homepage", url: "https://traverse.kr/" },
          {
            label: "TranSight Landing Page",
            url: "https://www.transight.io/",
          },
        ],
      },
    ],
  },
  {
    id: "costa",
    company: "주식회사 코스타",
    companyDescription:
      "공연 기획 및 운영 관리 솔루션 '공기'를 개발하는 스타트업. 공연장 운영에 필요한 전반적인 디지털 솔루션을 제공합니다.",
    period: "2025.02 ~ 2025.07",
    role: "Frontend Engineer",
    roleDescription:
      "공연 관리 솔루션 '공기'의 프론트엔드 개발을 담당했습니다. 공연 데이터 시각화, 좌석 배치 시스템, QR 인증 시스템 등 공연 운영의 핵심 기능을 기획 단계부터 참여하여 개발했습니다.",
    icon: "🎭",
    skills: ["TypeScript", "React", "Next.js", "Zustand"],
    projects: [
      {
        title: "공연 리포트 대시보드 기획 및 구현",
        icon: <LayoutDashboard size={20} />,
        description:
          "기존에 Excel 파일로 수동 관리되던 공연 데이터를 웹 기반 대시보드로 전환하여, 운영진이 실시간으로 공연 현황을 파악하고 의사결정을 내릴 수 있도록 했습니다.",
        tasks: [
          {
            text: "Excel로 제공되던 공연 데이터를 인터랙티브 웹 대시보드로 구현",
            details: [
              "매출, 관객 수, 좌석 점유율 등 핵심 지표를 차트 및 그래프로 시각화",
              "기간별/공연별 필터링 및 비교 분석 기능 제공",
              "데이터 내보내기(CSV, PDF) 기능 구현",
            ],
          },
          {
            text: "UI/UX 설계 및 데이터 시각화를 통해 운영 효율 극대화",
            details: [
              "운영진의 실제 업무 플로우를 분석하여 최적의 정보 배치 설계",
              "복잡한 공연 데이터를 직관적으로 이해할 수 있는 시각화 컴포넌트 개발",
            ],
          },
        ],
      },
      {
        title: "공연장 좌석 배치도 생성 시스템 설계 및 개발",
        icon: <Armchair size={20} />,
        description:
          "공연장마다 상이한 좌석 구조를 유연하게 대응할 수 있도록, SVG 기반의 좌석 배치도 에디터를 설계하고 개발했습니다. 운영진이 직접 좌석을 배치하고 그룹핑할 수 있는 인터랙티브 도구입니다.",
        tasks: [
          {
            text: "SVG 기반 좌석 편집 기능 구현",
            details: [
              "드래그 앤 드롭으로 좌석을 자유롭게 배치할 수 있는 캔버스 에디터 개발",
              "좌석 번호 자동 생성, 행/열 일괄 배치 등 편의 기능 구현",
              "SVG 렌더링을 활용한 고해상도 좌석 배치도 출력 지원",
            ],
          },
          {
            text: "줌/드래그/좌석 그룹핑 등 복합 인터랙션 구현",
            details: [
              "핀치 줌, 마우스 휠 줌, 패닝 등 다양한 뷰포트 제어 구현",
              "다중 선택 및 구역별 좌석 그룹핑 기능 개발",
              "좌석 등급/가격별 색상 구분 및 범례 표시 구현",
            ],
          },
        ],
      },
      {
        title: "스마트 티켓 QR인증 시스템 개발",
        icon: <QrCode size={20} />,
        description:
          "공연 입장 시 종이 티켓 대신 QR코드를 활용한 디지털 인증 시스템을 개발하여, 입장 처리 속도를 개선하고 위조 티켓 문제를 해결했습니다.",
        tasks: [
          {
            text: "QR코드를 활용한 사용자 인증 및 입장 확인 시스템 구현",
            details: [
              "고유 QR코드 생성 및 모바일 티켓 발급 플로우 개발",
              "QR 스캔 기반 실시간 입장 처리 및 중복 사용 방지 로직 구현",
              "입장 현황 실시간 모니터링 대시보드 개발",
            ],
          },
        ],
      },
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-sky-900 py-32 px-4 md:px-12 lg:px-24 overflow-hidden z-20"
    >
      <Aurora colorStops={["#0284c7", "#0369a1", "#075985"]} speed={0.5} />

      <div className="relative max-w-5xl mx-auto z-10 text-white">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-sky-950/40 backdrop-blur-sm mb-6 shadow-sm">
            <Terminal size={16} className="text-sky-300" />
            <span className="text-sm font-medium tracking-wider text-sky-200 uppercase">
              Career Description
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            경력 <span className="text-sky-400">기술서</span>
          </h2>
          <p className="text-lg md:text-xl text-sky-200/80 font-light max-w-2xl leading-relaxed break-keep">
            각 회사에서 어떤 문제를 해결했고, 어떤 가치를 만들었는지를
            기록합니다.
          </p>
        </motion.div>

        {/* Experiences */}
        <div className="space-y-20">
          {EXPERIENCES.map((exp, expIndex) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: expIndex * 0.1,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Company Header Card */}
              <div className="relative p-8 md:p-10 rounded-[40px] rounded-br-[10px] bg-white/[0.07] border border-white/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] mb-8">
                {/* Company Icon Badge */}
                <div className="absolute -top-5 left-8 md:left-10 w-[42px] h-[42px] flex items-center justify-center bg-sky-950 border-2 border-sky-400/60 rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <span className="text-lg leading-none">{exp.icon}</span>
                </div>

                <div className="mt-2 flex flex-col gap-5">
                  {/* Company Name & Period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Building2
                        size={22}
                        className="text-sky-400 shrink-0 mt-1"
                      />
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm md:text-base text-sky-300 font-mono tracking-widest bg-sky-950/60 px-4 py-2 rounded-xl self-start border border-sky-500/30 shadow-sm">
                      <Calendar size={14} className="text-sky-400" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="text-sky-100/70 text-base md:text-lg leading-relaxed pl-0 md:pl-[35px] break-keep">
                    {exp.companyDescription}
                  </p>

                  {/* Role */}
                  <div className="flex items-start gap-3 pl-0 md:pl-[35px]">
                    <Briefcase
                      size={18}
                      className="text-sky-400 shrink-0 mt-1"
                    />
                    <div>
                      <p className="text-xl md:text-2xl font-semibold text-sky-100 mb-2">
                        {exp.role}
                      </p>
                      <p className="text-sky-200/70 text-base leading-relaxed break-keep">
                        {exp.roleDescription}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pl-0 md:pl-[35px] pt-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 text-xs md:text-sm font-semibold text-sky-100 bg-sky-500/20 border border-sky-400/30 rounded-full backdrop-blur-md shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6 pl-4 md:pl-8">
                {exp.projects.map((project, pIndex) => (
                  <motion.div
                    key={pIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: pIndex * 0.1,
                      ease: "easeOut",
                    }}
                    className="relative p-6 md:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group"
                  >
                    {/* Connector Line */}
                    <div className="absolute -left-4 md:-left-8 top-8 w-4 md:w-8 h-px bg-gradient-to-r from-transparent to-sky-400/40" />
                    <div className="absolute -left-4 md:-left-8 top-[31px] w-2 h-2 rounded-full bg-sky-400/60 border border-sky-300/40" />

                    {/* Project Title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-400/20 shrink-0 mt-0.5 group-hover:bg-sky-500/25 group-hover:text-sky-200 transition-colors">
                        {project.icon}
                      </div>
                      <h4 className="text-xl md:text-2xl font-semibold text-white leading-snug break-keep">
                        {project.title}
                      </h4>
                    </div>

                    {/* Project Description */}
                    <p className="text-sky-200/60 text-sm md:text-base leading-relaxed mb-6 pl-[52px] break-keep">
                      {project.description}
                    </p>

                    {/* Tasks */}
                    <div className="space-y-5 pl-[52px]">
                      {project.tasks.map((task, tIndex) => (
                        <div key={tIndex}>
                          <div className="flex items-start gap-3 mb-2">
                            <ChevronRight
                              size={16}
                              className="text-sky-400 shrink-0 mt-1"
                            />
                            <p className="text-sky-100 font-medium text-base md:text-lg leading-relaxed break-keep">
                              {task.text}
                            </p>
                          </div>
                          {task.details && (
                            <ul className="space-y-2 ml-7">
                              {task.details.map((detail, dIndex) => (
                                <li
                                  key={dIndex}
                                  className="flex items-start gap-3 text-sky-200/70 text-sm md:text-base leading-relaxed break-keep"
                                >
                                  <div className="mt-[9px] min-w-[5px] h-[5px] rounded-full bg-sky-400/50" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3 mt-8 pl-[52px]">
                        {project.links.map((link, lIndex) => (
                          <a
                            key={lIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-950/60 hover:bg-sky-800/80 text-sm md:text-base text-sky-200 hover:text-white transition-all duration-200 border border-sky-500/30 hover:border-sky-400/50 shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                          >
                            <Globe size={14} className="opacity-70" />
                            {link.label}
                            <ExternalLink size={12} className="opacity-50" />
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
