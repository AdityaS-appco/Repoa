"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-follower hidden md:block"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
      <motion.div
        className="cursor-dot hidden md:block"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
      />
    </>
  );
};
