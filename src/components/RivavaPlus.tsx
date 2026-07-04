"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Play } from "lucide-react";
import Image from "next/image";

export const RivavaPlus = () => {
  const app = portfolioData.rivavaPlus;

  return (
    <section className="relative py-40 overflow-hidden bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-12 md:p-24 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-12 text-xs font-black tracking-[1em] opacity-20 rotate-90 origin-right uppercase">
            Exclusive Release
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/10 p-2 border border-white/20">
                    <Image src="rivava-logo.png" alt="rivava-logo.png" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-black tracking-[0.2em] text-blue-400">OFFICIAL APP</span>
                </div>
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 italic text-blue-500">
                  {app.name}
                </h2>
                <p className="text-xl font-bold uppercase tracking-widest text-white/50 mb-8">
                  {app.tagline}
                </p>
                <p className="text-2xl text-gray-400 mb-12 font-medium leading-tight">
                  {app.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                   {app.tech.map(t => (
                     <span key={t} className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold font-mono text-gray-500 uppercase">{t}</span>
                   ))}
                </div>

                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 bg-white text-black rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                >
                  <Play className="w-6 h-6 fill-current" />
                  <span>PLAY STORE</span>
                </a>
              </motion.div>
            </div>

            <div className="relative group">
              <div className="w-full aspect-[9/19] bg-black rounded-[3rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden transform rotate-6 transition-transform group-hover:rotate-0 duration-700 flex items-center justify-center">
                 <div className="text-blue-500 text-3xl font-black animate-pulse tracking-tighter">RIVAVA+</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
