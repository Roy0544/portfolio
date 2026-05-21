"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Menu, 
  X, 
  ExternalLink 
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#qualifications" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Roy0544", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/rony-roy-586ba0373/", icon: Linkedin },
  { name: "Email", href: "mailto:roycomp44@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500",
        scrolled
          ? "bg-[#0d0d11]/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LEFT: Brand Logo */}
        <a 
          href="#home" 
          className="text-white font-black text-2xl tracking-tighter flex items-center group transition-transform active:scale-95"
        >
          TUHIN<span className="text-emerald-500 group-hover:text-emerald-400 transition-colors ml-0.5">ROY</span>
        </a>

        {/* CENTER: Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-400 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT: Socials & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-5 border-r border-white/10 pr-6 mr-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-emerald-500 transition-all duration-300 transform hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95"
          >
            Hire Me
            <ExternalLink size={12} strokeWidth={3} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0d11] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-bold text-neutral-400 hover:text-emerald-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-neutral-400 hover:text-emerald-500 transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
                <a
                  href="#contact"
                  className="bg-emerald-600 text-black px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
