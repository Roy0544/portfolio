"use client";

import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

/**
 * Technical HUD Widget
 * Sci-Fi Frame with absolute corner brackets and frosted backdrop
 */
const TechnicalHUD = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      /* 
         Set to pointer-events-none so mouse movements can reach the Spline canvas 
         behind this element. This ensures the robot tracks the mouse even when 
         the cursor is over the HUD area.
      */
      className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-6 pointer-events-none"
    >
      <div className="relative p-6 backdrop-blur-md bg-neutral-950/40 border border-emerald-500/10 rounded-sm">
        {/* Corner Brackets */}
        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-emerald-500" />
        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-emerald-500" />
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-emerald-500" />
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-emerald-500" />

        <div className="font-mono text-[10px] leading-relaxed text-neutral-400 space-y-4">
          <div className="space-y-1">
            <p className="text-emerald-500 font-bold tracking-tighter">// SYSTEM_INFO</p>
            <p>STATUS: <span className="text-emerald-400 animate-pulse">AVAILABLE FOR HIRE</span></p>
            <p>LOC: INDIA // UTC+5:30</p>
          </div>

          <div className="space-y-1">
            <p className="text-emerald-500 font-bold tracking-tighter">// TECH_STACK</p>
            <p>[01] NEXT.JS / REACT</p>
            <p>[02] TYPESCRIPT</p>
            <p>[03] THREE.JS / SPLINE</p>
            <p>[04] TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Content Overlay - Primary Left Block */}
      <div className="container mx-auto px-6 md:px-20 h-full flex flex-col justify-center relative z-30 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="space-y-1 mb-8">
            <p className="text-emerald-500 font-mono text-xs font-bold tracking-[0.3em] uppercase">
              // TERMINAL_INITIATED
            </p>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] flex flex-col">
              <span>TUHIN</span>
              <span className="text-emerald-500">ROY</span>
            </h1>
          </div>

          <div className="space-y-6 border-l-2 border-emerald-500/20 pl-6 py-2">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase">
              Frontend Developer
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-[450px] leading-relaxed font-medium">
              Specializing in high-fidelity frontend architecture with seamless backend integration through Supabase and Appwrite. Merging modern development workflows with immersive 3D environments powered by Spline.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Spline Model Container - Dominates right side */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] z-10">
        <div className="w-full h-full">
          <Spline
           scene="https://prod.spline.design/WuCDOBWCJGbB3bob/scene.splinecode" 
          />
        </div>
      </div>



      {/* Technical HUD Widget */}
      <TechnicalHUD />

      {/* Scrolling Decorative Element */}
      <div className="absolute bottom-10 left-10 z-30 hidden md:block pointer-events-none">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-t from-emerald-500 to-transparent" />
          <p className="font-mono text-[8px] text-emerald-500/60 uppercase tracking-widest [writing-mode:vertical-rl]">
            Scroll_To_Explore
          </p>
        </div>
      </div>
    </motion.section>
  );
}
