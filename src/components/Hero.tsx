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
      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-6">
        <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-12 group">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
          <div className="relative h-full w-full rounded-full border-2 border-white/10 p-4 bg-black overflow-hidden">
            <Image
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              fill
              className="object-cover rounded-full transition-transform duration-1000 group-hover:scale-110"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl rotate-12">
             <Image src="/rivava-logo.png" alt="Rivava" width={40} height={40} className="object-contain" />
          </div>
        </div>
        <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter mb-4 leading-[0.8] text-gradient">
          {portfolioData.name.split(' ')[0]} <br /> {portfolioData.name.split(' ')[1]}
        </h1>
        <p className="text-lg md:text-2xl font-mono text-gray-500 uppercase tracking-widest max-w-2xl mx-auto">
          {portfolioData.role}
        </p>

        <div className="mt-12 flex justify-center space-x-8">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all">
             <Github className="w-6 h-6" />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all">
             <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${portfolioData.email}`} className="p-4 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all">
             <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-px h-12 bg-white/20" />
      </div>
    </section>
  );
};
