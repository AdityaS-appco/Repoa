"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 bg-black ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
            // {title}
          </h2>
          <div className="h-1 w-20 bg-blue-500" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};
