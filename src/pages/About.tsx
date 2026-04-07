
import { Section } from "../components/Section";
import { Code2, Database, Layout, Server, Blocks, Bot } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function About() {
  const stack = [
    { name: "ReactJS", icon: <Layout className="w-4 h-4" /> },
    { name: "NestJS", icon: <Server className="w-4 h-4" /> },
    { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
    { name: "MySQL", icon: <Database className="w-4 h-4" /> },
    { name: "Tailwind CSS", icon: <Blocks className="w-4 h-4" /> },
    { name: "Claude / AI Agents", icon: <Bot className="w-4 h-4" /> },
  ];

  return (
    <Section id="about" className="bg-[#FFF5F7]/30 dark:bg-[#1A0D0F]/30 border-y border-[#F4A7B9]/10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#1A1A1A] dark:text-[#FDF0F3]">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#F4A7B9] rounded-full" />
          <p className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6] text-lg">
            I'm a Full Stack Developer and AI Agent Builder with a background that spans both engineering and design. I started as a UI/UX Intern at CampX, designing interfaces for student, faculty, and ATS modules — learning how great products feel before learning how they're built.
          </p>
          <p className="text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6] text-lg">
            I now engineer complete backend modules using NestJS, TypeORM, and MySQL, and build responsive ReactJS interfaces that translate seamlessly from Figma to code. What sets me apart is my initiative in building AI developer agents using Claude Code — tools I designed that save the team an estimated 60% of repetitive scaffolding work.
          </p>
        </div>

        {/* Right Column */}
        <Card className="border-[#F4A7B9]/20 bg-white dark:bg-[#0F0709] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(244,167,185,0.02)]">
          <CardHeader>
            <CardTitle className="text-[#1A1A1A] dark:text-[#FDF0F3]">Core Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <Badge
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 h-auto bg-[#FFF5F7] dark:bg-[#1A0D0F] text-[#C97B8A] dark:text-[#F4A7B9] rounded-full text-[13px] font-medium border border-[#F4A7B9]/30 hover:shadow-[0_0_12px_rgba(244,167,185,0.3)] transition-all cursor-default"
                >
                  {tech.icon}
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
