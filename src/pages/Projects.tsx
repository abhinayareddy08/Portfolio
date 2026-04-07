import React from "react";
import { Section } from "../components/Section";
import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import dayquestImg from "../assets/dayQuest.png";
import expenseImg from "../assets/expense-tracker.png";
import moodImg from "../assets/mood-garden.png";

export function Projects() {
  const liveProjects = [
    {
      title: "DayQuest — Habits Tracker",
      description: "A gamified full-stack habit tracking app that transforms daily routines into a quest-like experience. Users build habits, maintain streaks, earn XP, level up, and unlock achievement badges.",
      tags: ["React", "TypeScript", "NestJS", "MySQL", "TanStack Query"],
      link: "https://habits-tracker-weld.vercel.app",
      github: "https://github.com/abhinayareddy08/Habits-tracker",
      preview: dayquestImg,
    },
    {
      title: "Expense Tracker",
      description: "A personal finance management web app for tracking income and expenses — with a dashboard, transaction management, and spending analytics. All data stored in the browser.",
      tags: ["React 19", "TypeScript", "Tailwind CSS 4", "Recharts", "shadcn/ui"],
      link: "https://expense-tracker-all.vercel.app/",
      github: "https://github.com/abhinayareddy08/Expense-tracker",
      preview: expenseImg,
    },
    {
      title: "Mood Garden",
      description: "A beautiful mood tracking app where you plant flowers in a virtual garden. Each mood is represented by a unique emoji that blooms in your personal 7x7 garden grid.",
      tags: ["React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "Rsbuild"],
      link: "https://mood-garden-aw4mefvli-abhinaya1.vercel.app/",
      github: "https://github.com/abhinayareddy08/Mood-Garden",
      preview: moodImg,
    },
  ];

  const designProjects = [
    {
      title: "Nayadha Makeovers",
      description: "Advertising website for a beauty salon featuring a modern vibrant layout, clean typography, social media integration, and high-quality imagery to showcase salon services.",
      tags: ["Framer", "UI/UX Design"],
      link: "https://nayadhamakeovers.framer.website/",
    },
    {
      title: "PawMatch",
      description: "A pet adoption platform that connects adopters with animals from local shelters. Designed with a warm, user-friendly interface featuring easy navigation and pet filtering.",
      tags: ["Framer", "UI/UX Design"],
      link: "https://pawmatch.framer.website/",
    },
    {
      title: "Medicare",
      description: "An e-commerce platform for medical equipment featuring clear, user-friendly design with straightforward navigation and detailed descriptions to help users make informed decisions.",
      tags: ["Framer", "UI/UX Design"],
      link: "https://medicarepro.framer.website/",
    },
  ];

  const workProjects = [
    {
      title: "AI Developer Agents",
      description: "Designed and deployed 4 internal AI developer agents to automate repetitive engineering tasks. Reduced backend scaffolding effort by an estimated 60% for the team.",
      tags: ["Claude Code", "NestJS", "ReactJS", "TypeScript"],
    },
    {
      title: "Cohort Management Module",
      description: "Delivered the full Cohort Management Module from scratch — REST APIs, services, repositories, TypeORM migrations, and ReactJS frontend for managing student batches and groups.",
      tags: ["NestJS", "ReactJS", "MySQL", "TypeORM"],
    },
    {
      title: "Assignment Module",
      description: "Built the full Assignment Module covering faculty-side creation, student group management, random question distribution, and grading workflows with a clean ReactJS interface.",
      tags: ["NestJS", "ReactJS", "MySQL", "TypeScript"],
    },
  ];

  const otherProjects = [
    {
      title: "AgriDrone",
      description: "An Uber-like platform for agricultural drone services — farmers can book drones to spray pesticides or fertilizers. Features three user roles with geospatial matching.",
      tags: ["React", "Flask", "SQLAlchemy", "Leaflet", "JWT"],
    },
    {
      title: "Applicant Tracking System",
      description: "Designed the ATS pipeline, dashboard screens, and applicant tracking flow for CampX during the UI/UX internship. Focused on information architecture and clean navigation.",
      tags: ["Figma", "UI/UX Design"],
    },
  ];

  return (
    <Section id="projects" className="bg-[#FFF5F7]/30 dark:bg-[#1A0D0F]/30 border-y border-[#F4A7B9]/10">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] dark:text-[#FDF0F3]">
          Projects
        </h2>
        <div className="w-12 h-1 bg-[#F4A7B9] rounded-full" />
      </div>

      <div className="space-y-24">
        {/* Live Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#FDF0F3] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F4A7B9]" />
            Live Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {liveProjects.map((project, idx) => (
              <Card
                key={idx}
                className="group flex flex-col bg-white dark:bg-[#1A0D0F] border-transparent hover:border-[#F4A7B9]/30 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(244,167,185,0.15)] hover:-translate-y-1 overflow-hidden"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative w-full h-44 overflow-hidden border-b border-[#F4A7B9]/10 bg-[#FFF5F7] dark:bg-[#0F0709]"
                >
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
                <CardHeader>
                  <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3] group-hover:text-[#F4A7B9] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <Badge
                      key={tIdx}
                      className="px-3 py-1 h-auto bg-[#FFF5F7] dark:bg-[#0F0709] text-[#C97B8A] dark:text-[#F4A7B9] rounded-full text-[12px] font-medium border border-[#F4A7B9]/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto flex items-center gap-4">
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F4A7B9] hover:text-[#C97B8A] transition-colors">
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#6B6B6B] dark:text-[#C4A0A8] hover:text-[#F4A7B9] transition-colors">
                    <FaGithub size={16} /> GitHub
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#FDF0F3] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F4A7B9]" />
            UI/UX Design Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {designProjects.map((project, idx) => (
              <Card
                key={idx}
                className="group flex flex-col bg-white dark:bg-[#1A0D0F] border-transparent hover:border-[#F4A7B9]/30 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(244,167,185,0.15)] hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3] group-hover:text-[#F4A7B9] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <Badge
                      key={tIdx}
                      className="px-3 py-1 h-auto bg-[#FFF5F7] dark:bg-[#0F0709] text-[#C97B8A] dark:text-[#F4A7B9] rounded-full text-[12px] font-medium border border-[#F4A7B9]/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto">
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F4A7B9] hover:text-[#C97B8A] transition-colors">
                    View Design <ExternalLink className="w-4 h-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#FDF0F3] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C97B8A]" />
            Work Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workProjects.map((project, idx) => (
              <Card
                key={idx}
                className="group flex flex-col bg-[#FFF5F7] dark:bg-[#1A0D0F] border-transparent hover:border-[#C97B8A]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,123,138,0.1)] hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3]">{project.title}</CardTitle>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/5 dark:bg-white/5 text-[#6B6B6B] dark:text-[#C4A0A8] rounded-full text-[11px] font-medium tracking-wide uppercase shrink-0">
                      <Lock className="w-3 h-3" />
                      Confidential
                    </span>
                  </div>
                  <CardDescription className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[#C97B8A] dark:text-[#F4A7B9] text-[13px] font-medium">
                      #{tag}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] dark:text-[#FDF0F3] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6B6B6B]" />
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, idx) => (
              <Card
                key={idx}
                className="group flex flex-col bg-white dark:bg-[#1A0D0F] border-transparent hover:border-[#6B6B6B]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(107,107,107,0.1)] hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3]">{project.title}</CardTitle>
                  <CardDescription className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[#6B6B6B] dark:text-[#C4A0A8] text-[13px] font-medium">
                      {tag}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
