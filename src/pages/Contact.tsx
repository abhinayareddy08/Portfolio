import React, { useState } from "react";
import { Section } from "../components/Section";
import { Send } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_nk9f0oy";
const TEMPLATE_ID = "template_796ov3r";
const PUBLIC_KEY = "n63I71hbHqVr9zePn";

emailjs.init(PUBLIC_KEY);

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError("");
    setSent(false);
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          name: form.name,
          email: form.email,
          message: form.message,
          reply_to: form.email,
        }
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" className="w-full">
      <div className="flex flex-col items-center mb-16 space-y-4 text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#1A1A1A] dark:text-[#FDF0F3]">
          Let's Build Something Together
        </h2>
        <div className="w-12 h-1 bg-[#F4A7B9] rounded-full mt-4 mb-6" />
        <p className="text-[#6B6B6B] dark:text-[#C4A0A8] max-w-xl mx-auto text-lg">
          I'm currently available for full-time roles and open to freelance opportunities. If you have a project in mind or want to connect, let's chat.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#FFF5F7] dark:bg-[#1A0D0F] p-8 md:p-10 rounded-3xl border border-[#F4A7B9]/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(244,167,185,0.02)]"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#1A1A1A] dark:text-[#FDF0F3]">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="bg-white dark:bg-[#0F0709] border-[#F4A7B9]/30 text-[#1A1A1A] dark:text-[#FDF0F3] placeholder:text-[#6B6B6B]/50 dark:placeholder:text-[#C4A0A8]/50 focus-visible:ring-[#F4A7B9]/50 focus-visible:border-[#F4A7B9] rounded-xl px-5 py-3.5 h-auto"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#1A1A1A] dark:text-[#FDF0F3]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="bg-white dark:bg-[#0F0709] border-[#F4A7B9]/30 text-[#1A1A1A] dark:text-[#FDF0F3] placeholder:text-[#6B6B6B]/50 dark:placeholder:text-[#C4A0A8]/50 focus-visible:ring-[#F4A7B9]/50 focus-visible:border-[#F4A7B9] rounded-xl px-5 py-3.5 h-auto"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#1A1A1A] dark:text-[#FDF0F3]">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              className="bg-white dark:bg-[#0F0709] border-[#F4A7B9]/30 text-[#1A1A1A] dark:text-[#FDF0F3] placeholder:text-[#6B6B6B]/50 dark:placeholder:text-[#C4A0A8]/50 focus-visible:ring-[#F4A7B9]/50 focus-visible:border-[#F4A7B9] rounded-xl px-5 py-3.5 resize-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {sent && <p className="text-green-500 text-sm">Message sent! I'll get back to you soon.</p>}

          <button
            type="submit"
            disabled={!isValid || sending}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F4A7B9] text-white font-medium hover:shadow-[0_0_20px_rgba(244,167,185,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <Send className="w-5 h-5" />}
          </button>
        </motion.form>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/abhinayareddy08"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white dark:bg-[#1A0D0F] text-[#6B6B6B] dark:text-[#C4A0A8] rounded-full shadow-sm hover:text-[#F4A7B9] dark:hover:text-[#F4A7B9] hover:shadow-[0_0_15px_rgba(244,167,185,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/abhinayareddy"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white dark:bg-[#1A0D0F] text-[#6B6B6B] dark:text-[#C4A0A8] rounded-full shadow-sm hover:text-[#F4A7B9] dark:hover:text-[#F4A7B9] hover:shadow-[0_0_15px_rgba(244,167,185,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
}
