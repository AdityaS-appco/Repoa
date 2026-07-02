"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 mix-blend-difference"
    >
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-tighter">
          {portfolioData.name.toUpperCase()}
        </Link>
        <div className="flex space-x-8 text-xs font-bold tracking-widest uppercase">
          <Link href="#work" className="hover:opacity-50 transition-opacity">Work</Link>
          <Link href="#about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};
