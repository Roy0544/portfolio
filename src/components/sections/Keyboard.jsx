"use client";
import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

export default function KeyboardSection() {
  function onSplineMouseDown(e) {
    // Robust name extraction
    const targetName = e.target?.name || "";
    const clickedName = targetName.toLowerCase();
    
    console.log("Clicked Spline Object:", targetName);
    
    // MAP: Spline Object Name -> Website Section ID
    const navigationMap = {
      'key Esc': 'Qualifications',
      'key you': 'projects',
      'key Send': 'Contact',
      'home': 'home'
    };

    // Find the first key in our map that exists within the clicked object's name
    const triggerKey = Object.keys(navigationMap).find(key => clickedName.includes(key));

    if (triggerKey) {
      const sectionId = navigationMap[triggerKey];
      const targetSection = document.getElementById(sectionId);
      
      if (targetSection) {
        // Smooth scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <section id="keyboard" className="relative h-screen w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="text-center absolute top-12 z-10 px-6">
          <h2 className="text-4xl font-bold tracking-tighter text-white">
            Interactive <span className="text-emerald-500">Keyboard</span>
          </h2>
          <p className="text-neutral-400 mt-2">
            Interact with the keys. Click <span className="text-white font-bold">"WORKS"</span> to jump to my projects.
          </p>
        </div>

        {/* Keyboard Spline Component - 60% Width & Centered */}
        <div className="w-[80%] md:w-[60%] h-[70%] z-20">
          <Spline
            onSplineMouseDown={onSplineMouseDown}
            scene="https://prod.spline.design/9qTFvyL14yzsS4QG/scene.splinecode" 
          />
        </div>
      </motion.div>
    </section>
  );
}
