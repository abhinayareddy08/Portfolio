import React from "react";
import { Section } from "../components/Section";
import { Layers, Cpu, Wrench, Palette, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layers className="w-6 h-6 text-[#F4A7B9]" />,
      skills: ["ReactJS", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "HTML/CSS", "Responsive UI Design"],
    },
    {
      title: "Backend",
      icon: <Cpu className="w-6 h-6 text-[#F4A7B9]" />,
      skills: ["NestJS", "Node.js", "REST APIs", "Modular Architecture", "API Gateway", "MySQL", "MongoDB", "TypeORM"],
    },
    {
      title: "AI & Agents",
      icon: <Bot className="w-6 h-6 text-[#F4A7B9]" />,
      skills: ["Claude Code", "LLM Agent Design", "Markdown Prompting", "Prompt Engineering", "Workflow Automation", "ChatGPT", "GitHub Copilot"],
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6 text-[#F4A7B9]" />,
      skills: ["Figma", "Framer", "Wireframing", "Prototyping", "User Research", "UI/UX Design", "Adobe Photoshop", "Canva"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6 text-[#F4A7B9]" />,
      skills: ["Git", "GitHub", "VS Code", "Cursor", "Microfrontend Architecture", "Database Migrations", "Debugging"],
    },
  ];

  return (
    <Section id="skills" className="w-full">
      <div className="flex flex-col items-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] dark:text-[#FDF0F3]">
          Skills
        </h2>
        <div className="w-12 h-1 bg-[#F4A7B9] rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {categories.map((category, idx) => (
          <Card
            key={idx}
            className="group relative bg-[#FFF5F7] dark:bg-[#1A0D0F] border-transparent hover:border-[#F4A7B9]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(244,167,185,0.15)] hover:-translate-y-1 overflow-visible"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4A7B9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-[#0F0709] rounded-xl shadow-sm border border-[#F4A7B9]/10">
                  {category.icon}
                </div>
                <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3]">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-[#6B6B6B] dark:text-[#C4A0A8] text-base flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#C97B8A] before:rounded-full before:shrink-0"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
