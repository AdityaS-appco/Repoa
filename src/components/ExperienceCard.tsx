"use client";

import { motion } from "framer-motion";

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const ExperienceCard = ({ company, role, period, description }: ExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="border-l-2 border-blue-500/30 pl-8 pb-12 last:pb-0 relative"
    >
      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      <div className="mb-2 flex flex-wrap justify-between items-center gap-4">
        <h3 className="text-2xl font-bold text-white">{role}</h3>
        <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{period}</span>
      </div>
      <h4 className="text-lg text-gray-400 mb-4 font-semibold tracking-wide uppercase">{company}</h4>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="text-gray-400 flex items-start">
            <span className="text-blue-500 mr-2 mt-1">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
