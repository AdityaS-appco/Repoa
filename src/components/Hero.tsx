"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex-shrink-0 group">
            <div className="absolute inset-0 bg-blue-600 rounded-[4rem] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="relative h-full w-full rounded-[4rem] border border-white/10 p-3 bg-black/40 backdrop-blur-3xl overflow-hidden">
              <Image
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                fill
                className="object-cover rounded-[3rem] transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 glass-morphism rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl -rotate-12">
               <Image src="/rivava-logo.png" alt="Rivava" width={50} height={50} className="object-contain" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-6 leading-[0.75] text-white">
              {portfolioData.name.split(' ')[0]} <br />
              <span className="text-blue-600">{portfolioData.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-3xl font-mono text-gray-400 uppercase tracking-widest max-w-xl">
              {portfolioData.role}
            </p>

            <div className="mt-12 flex justify-center md:justify-start space-x-6">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl glass-morphism border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
                 <Github className="w-8 h-8 group-hover:text-blue-500" />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 rounded-2xl glass-morphism border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
                 <Linkedin className="w-8 h-8 group-hover:text-blue-500" />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="p-5 rounded-2xl glass-morphism border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
                 <Mail className="w-8 h-8 group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  );
};
