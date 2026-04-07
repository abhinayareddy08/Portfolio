import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0F0709] text-[#1A1A1A] dark:text-[#FDF0F3] selection:bg-[#F4A7B9]/30 transition-colors duration-500 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        <main className="flex flex-col items-center">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
