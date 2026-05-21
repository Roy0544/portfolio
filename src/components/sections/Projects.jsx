"use client";
import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Expense Tracker",
    description: "A professional financial tool to monitor spending, categorize transactions, and visualize budgets with real-time sync.",
    tech: ["React", "Appwrite", "Tailwind", "Chart.js"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    link: "#"
  },
  {
    title: "AI Recipe Finder",
    description: "A social culinary platform where users share and comment on recipes. Features AI-powered vision to instantly generate custom recipes from photos of your ingredients.",
    tech: ["Next.js", "OpenAI", "Javascript", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    link: "https://recipe-finder-new-ashy.vercel.app/"
  }
];

const getTagStyles = (tag) => {
  const t = tag.toLowerCase().replace(".", "");

  const styles = {
    tailwind: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    javascript: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    supabase: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    nextjs: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
    openai: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    appwrite: "bg-red-500/10 text-red-500 border-red-500/20",
    react: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    chartjs: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return styles[t] || "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20";
};

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      /* Changed aspect ratio on mobile to 4/5 to provide more vertical space for content */
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl cursor-pointer touch-manipulation"
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Phase 1: Background Image & Overlay */}
      <div className={cn(
        "absolute inset-0 z-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isActive ? "scale-105 blur-sm brightness-[0.4]" : "scale-100 blur-0 brightness-100"
      )}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Phase 1 Content (Default View) */}
      <div className={cn(
        "absolute inset-0 p-8 sm:p-10 flex flex-col justify-end z-10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      )}>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[#e2e8f0]/60 text-xs sm:text-sm font-medium flex items-center gap-1.5">
          View Details <ArrowUpRight size={14} className="sm:size-4" />
        </p>
      </div>

      {/* Phase 2: Bento Reveal (Hover View) */}
      <div className={cn(
        "absolute inset-0 z-20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-end p-3 sm:p-5",
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}>
        <div className="bg-neutral-950/90 backdrop-blur-md p-4 sm:p-6 rounded-[14px] border border-white/10 shadow-3xl h-full flex flex-col justify-between overflow-hidden">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{project.title}</h3>
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] mt-1.5"></div>
            </div>
            
            <p className="text-[0.75rem] sm:text-[0.9rem] text-[#e2e8f0]/90 leading-relaxed font-medium line-clamp-4 sm:line-clamp-none">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {project.tech.map((tag, i) => (
                <span 
                  key={i} 
                  className={cn(
                    "px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-full uppercase tracking-widest border transition-colors duration-300",
                    getTagStyles(tag)
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-auto">
            <button 
              className="w-full py-2.5 sm:py-3.5 bg-[#10b981] hover:bg-[#10b981]/90 text-black font-black uppercase tracking-widest text-[9px] sm:text-[11px] rounded-[10px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-[0.98] flex items-center justify-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                if (project.link && project.link !== "#") {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              Launch Project
              <ExternalLink size={12} className="sm:size-4" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-neutral-950 text-white overflow-visible font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
              <span className="text-[#f8fafc]">Latest</span> <span className="text-[#10b981]">Works</span>
            </h2>
            <p className="text-neutral-400 max-w-lg text-base md:text-lg font-medium leading-relaxed">
              Exploration of high-performance web applications and immersive digital experiences.
            </p>
          </div>
          <div className="px-5 py-2 rounded-full bg-neutral-900/50 border border-white/5 text-neutral-500 font-bold text-[10px] tracking-[0.2em] uppercase">
            {projects.length} PROJECTS TOTAL
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
