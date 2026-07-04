"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/5"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-blue-500 transition-colors">
            <Image src="rivava-logo.png" alt="rivava-logo.png" fill className="object-contain p-1" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase group-hover:text-blue-500 transition-colors">
            {portfolioData.name.toUpperCase()}
          </span>
        </Link>
        <div className="flex items-center space-x-8 text-xs font-bold tracking-widest uppercase">
          <Link href="#work" className="hover:opacity-50 transition-opacity">Work</Link>
          <Link href="#about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">Resume</a>
        </div>
      </div>
    </motion.nav>
  );
};
