"use client";

import { motion } from "framer-motion";

export const SkillBadge = ({ name }: { name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
      className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 font-medium cursor-default"
    >
      {name}
    </motion.div>
  );
};
