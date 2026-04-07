
import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "../components/Section";
import myPicture from "../assets/myPicture.png";

export function Hero() {
  return (
    <Section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4A7B9]/10 dark:bg-[#F4A7B9]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-[52px] font-bold tracking-tight text-[#1A1A1A] dark:text-[#FDF0F3] leading-[1.2]">
              Hi, I'm <span className="text-[#F4A7B9]">B Abhinaya Reddy</span>.
            </h1>
            <h2 className="text-3xl md:text-[40px] font-semibold mt-4 text-[#C97B8A] dark:text-[#C97B8A]">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] dark:text-[#C4A0A8] leading-[1.6] max-w-lg">
              Full Stack Developer and AI Agent Builder based in Hyderabad, India. I build end-to-end products with clean architecture and a strong design eye — from scalable NestJS backends to polished ReactJS interfaces.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F4A7B9] text-white font-medium hover:bg-[#F4A7B9]/90 hover:shadow-[0_0_20px_rgba(244,167,185,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#F4A7B9] text-[#F4A7B9] font-medium hover:bg-[#F4A7B9]/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full group">
            <div className="absolute inset-0 rounded-full bg-[#F4A7B9] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FFF5F7] dark:border-[#1A0D0F] shadow-2xl z-10">
              <img src={myPicture} alt="Abhinaya Reddy" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
