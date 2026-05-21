"use client";
import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              About <span className="text-purple-500">Me</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              I'm a passionate FrontEnd Developer based in India, specialized in building high-end, 
              interactive digital experiences. With a strong foundation in modern web technologies, 
              I focus on creating interfaces that are not only visually stunning but also 
              highly performant and user-centric.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              My approach combines technical precision with creative flair. I believe that 
              every interaction should be meaningful, and every pixel should serve a purpose. 
              Whether it's integrating 3D models or optimizing complex state management, 
              I strive for excellence in every project.
            </p>
            <div className="pt-4 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">Projects Completed</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">2+</span>
                <span className="text-sm text-neutral-500 uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] md:h-[500px] relative">
             {/* New Spline Component for the About Section */}
             <div className="absolute inset-0 w-full h-full">
                <Spline
                  scene="https://prod.spline.design/9qTFvyL14yzsS4QG/scene.splinecode" 
                />
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
