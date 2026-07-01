"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const FeaturedApp = () => {
  const app = portfolioData.featuredApp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 p-8 md:p-12 text-white shadow-2xl group"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles className="w-64 h-64" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            🚀 Exclusive New Release
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">{app.title}</h2>
          <p className="text-xl md:text-2xl font-medium text-blue-200 mb-6">{app.tagline}</p>
          <p className="text-lg text-blue-100/80 mb-8 max-w-md">{app.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {app.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-black/20 text-sm font-mono">{t}</span>
            ))}
          </div>

          <a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Available on Play Store
          </a>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative w-64 h-[500px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
             <div className="absolute top-0 w-full h-6 bg-gray-800" />
             <div className="flex items-center justify-center h-full text-blue-500 font-black text-2xl animate-pulse">
                RIVAVA+
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
