"use client";

import { motion } from "framer-motion";

export const TechMarquee = () => {
  const techs = [
    "Flutter", "React", "Next.js", "Node.js", "Dart", "Java", "Python",
    "MongoDB", "PostgreSQL", "Supabase", "Firebase", "Docker", "Stripe API",
    "Zapier", "Riverpod", "Tailwind CSS", "Framer Motion", "Material Design 3"
  ];

  return (
    <div className="py-20 overflow-hidden bg-white/5 border-y border-white/5 whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex space-x-12"
      >
        {[...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
