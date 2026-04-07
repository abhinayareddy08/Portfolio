import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import resumePDF from "../assets/AbhinayaResume(4.3).pdf";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled
            ? "bg-white/80 dark:bg-[#0F0709]/80 backdrop-blur-md border-[#F4A7B9]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#FDF0F3]">
            AR<span className="text-[#F4A7B9]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] dark:text-[#C4A0A8] dark:hover:text-[#FDF0F3] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-[#F4A7B9]/20 pl-6">
              <button
                onClick={toggleTheme}
                className="p-2 text-[#6B6B6B] hover:text-[#F4A7B9] dark:text-[#C4A0A8] dark:hover:text-[#F4A7B9] transition-colors rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-[#FFF5F7] dark:bg-[#1A0D0F] text-[#C97B8A] dark:text-[#F4A7B9] border border-[#F4A7B9]/30 text-sm font-medium hover:shadow-[0_0_12px_rgba(244,167,185,0.2)] hover:border-[#F4A7B9] transition-all"
              >
                Resume
              </a>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-[#6B6B6B] hover:text-[#F4A7B9] dark:text-[#C4A0A8] dark:hover:text-[#F4A7B9]"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1A1A1A] dark:text-[#FDF0F3]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#0F0709]/95 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-medium text-[#1A1A1A] dark:text-[#FDF0F3]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-[#F4A7B9]/20">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-6 py-3 rounded-full bg-[#FFF5F7] dark:bg-[#1A0D0F] text-[#C97B8A] dark:text-[#F4A7B9] border border-[#F4A7B9]/30 text-base font-medium"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
