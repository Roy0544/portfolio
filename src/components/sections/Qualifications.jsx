"use client";
import React from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-12 md:py-24 bg-neutral-950 text-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center min-h-[400px] md:min-h-[700px]"
      >
        {/* Header Title */}
        <div className="text-center mb-8 md:mb-16 z-30">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">
            Technical <span className="text-emerald-500">Skills</span>
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto text-sm md:text-base">
            A dynamic view of my core tech stack and development tools.
          </p>
        </div>
        
        {/* Centered Orbiting Circles */}
        <div className="relative flex h-[450px] md:h-[900px] w-full flex-col items-center justify-center overflow-visible scale-[0.45] sm:scale-75 md:scale-100 origin-center transition-transform duration-500">
          <div className="relative z-20 flex flex-col items-center">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-center text-8xl font-black leading-none text-transparent">
              Skills
            </span>
            <p className="text-neutral-500 text-sm uppercase tracking-widest mt-4 font-bold">Tech Stack</p>
          </div>

          {/* Inner Orbit - Foundations */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={15}
            radius={100}
            iconSize={50}
          >
            {skills.slice(0, 2).map((skill) => (
              <div key={skill.name} className="p-2 bg-neutral-900/50 rounded-full backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl shadow-black/50 w-full h-full flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain"
                  title={skill.name}
                />
              </div>
            ))}
          </OrbitingCircles>

          {/* Middle Orbit - Frameworks */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={25}
            radius={180}
            iconSize={60}
            reverse
          >
            {skills.slice(2, 4).map((skill) => (
              <div key={skill.name} className="p-3 bg-neutral-900/50 rounded-full backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl shadow-black/50 w-full h-full flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain"
                  title={skill.name}
                />
              </div>
            ))}
          </OrbitingCircles>

          {/* Outer Orbit - Tools/State */}
          <OrbitingCircles
            className="border-none bg-transparent"
            duration={35}
            radius={300}
            iconSize={80}
          >
            {skills.slice(4).map((skill) => (
              <div key={skill.name} className="p-4 bg-neutral-900/50 rounded-full backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl shadow-black/50 w-full h-full flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 object-contain"
                  title={skill.name}
                />
              </div>
            ))}
          </OrbitingCircles>
        </div>
      </motion.div>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
