"use client";

import { motion } from "framer-motion";

export const BentoGrid = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
          className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
        >
          <div className="group relative h-full min-h-[300px] rounded-3xl border border-white/5 bg-white/5 p-8 overflow-hidden hover:border-blue-500/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl font-black mb-4 tracking-tighter">{item.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
            {item.link && (
              <a href={item.link} className="absolute bottom-8 right-8 text-blue-500 font-black tracking-widest text-xs uppercase hover:underline">
                Explore ↗
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
