"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Section = ({ title, children, id }: { title: string, children: ReactNode, id?: string }) => {
  return (
    <section id={id} className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-500 mb-4">// {title}</h2>
          <div className="h-px w-full bg-white/10" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};
