"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>

              <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
                {portfolioData.name.split(' ')[0]} <br />
                <span className="text-blue-600 italic">{portfolioData.name.split(' ')[1]}</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-10 font-medium leading-tight">
                {portfolioData.bio}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <a href={`mailto:${portfolioData.email}`} className="px-8 py-4 bg-white text-black font-black rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                  LET'S TALK
                </a>
                <div className="flex items-center space-x-4">
                  <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-72 h-72 md:w-[500px] md:h-[600px] mx-auto"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-transparent rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
              <div className="relative h-full w-full rounded-[3rem] border border-white/10 bg-[#111] p-4 overflow-hidden group shadow-2xl">
                <Image
                  src="aditya.png"
                  alt="aditya.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8 glass-morphism p-6 rounded-2xl border border-white/10 flex items-center justify-between z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Position</p>
                    <p className="text-sm font-bold text-white uppercase">{portfolioData.role.split('&')[0]}</p>
                  </div>
                  <div className="relative w-10 h-10">
                    <Image src="rivava-logo.png" alt="rivava-logo.png" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-[10px] font-black tracking-[0.5em] text-gray-600 uppercase mb-4">Scroll</p>
        <div className="w-px h-16 bg-gradient-to-b from-blue-600 to-transparent" />
      </div>
    </section>
  );
};
