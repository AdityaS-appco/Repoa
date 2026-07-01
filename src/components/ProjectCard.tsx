"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const ProjectCard = ({ title, description, tech, link }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-900/50 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          <ExternalLink className="w-6 h-6 text-blue-500" />
        </div>
        {link !== "#" && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/5 px-2 py-1 rounded border border-blue-500/20">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
