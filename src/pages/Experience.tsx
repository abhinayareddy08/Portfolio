import React from "react";
import { Section } from "../components/Section";
import { motion } from "motion/react";

export function Experience() {
  const experiences = [
    {
      company: "CampX — Academic Management Platform",
      role: "Full Stack Developer",
      duration: "Jan 2025 — Present",
      bullets: [
        "Engineered and shipped backend modules end-to-end using NestJS — covering controllers, services, DTOs, repositories, and entities from scratch.",
        "Carried out TypeORM database migrations and schema updates for evolving product requirements while maintaining backward compatibility.",
        "Strengthened API reliability through structured validation, error handling, and systematic debugging across multiple modules.",
        "Designed and deployed 4 AI developer agents (self-initiated) using Markdown-based prompting via Claude Code, reducing repetitive scaffolding effort by an estimated 60% for the team.",
      ],
    },
    {
      company: "CampX — Academic Management Platform",
      role: "UI/UX Intern",
      duration: "Jun 2024 — Dec 2024",
      bullets: [
        "Designed web and mobile interfaces for Student Profile, Faculty Profile, and Applicant Tracking System (ATS) modules.",
        "Restructured layout hierarchy and information architecture across 10+ screens, resulting in cleaner navigation patterns.",
        "Collaborated directly with developers to translate Figma designs into functional ReactJS implementations.",
      ],
    },
  ];

  return (
    <Section id="experience" className="w-full">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] dark:text-[#FDF0F3]">
          Experience
        </h2>
        <div className="w-12 h-1 bg-[#F4A7B9] rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-[24px] md:left-[50px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-[#F4A7B9]/50 via-[#F4A7B9]/20 to-transparent" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[19px] md:left-[45px] top-[6px] w-3 h-3 bg-[#FFF5F7] dark:bg-[#1A0D0F] border-2 border-[#F4A7B9] rounded-full ring-4 ring-white dark:ring-[#0F0709] z-10" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#FDF0F3]">
                  {exp.company}
                </h3>
                <span className="text-sm font-medium text-[#6B6B6B] dark:text-[#C4A0A8] bg-[#FFF5F7] dark:bg-[#1A0D0F] px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              <h4 className="text-lg font-medium text-[#F4A7B9] mb-4">
                {exp.role}
              </h4>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-[#6B6B6B] dark:text-[#C4A0A8] text-base flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C97B8A]/50 rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-[1.6]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 pl-12 md:pl-24 relative">
          <div className="absolute left-[19px] md:left-[45px] top-[6px] w-3 h-3 bg-[#FFF5F7] dark:bg-[#1A0D0F] border-2 border-[#F4A7B9] rounded-full ring-4 ring-white dark:ring-[#0F0709] z-10" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
            <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#FDF0F3]">
              Geethanjali College of Engineering and Technology
            </h3>
            <span className="text-sm font-medium text-[#6B6B6B] dark:text-[#C4A0A8] bg-[#FFF5F7] dark:bg-[#1A0D0F] px-3 py-1 rounded-full whitespace-nowrap">
              2021 — 2025
            </span>
          </div>
          <h4 className="text-lg font-medium text-[#F4A7B9] mb-2">
            B.Tech — Computer Science & Engineering
          </h4>
          <p className="text-[#6B6B6B] dark:text-[#C4A0A8] text-base leading-[1.6]">
            Hyderabad, India
          </p>
        </div>
      </div>
    </Section>
  );
}
