"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          ADITYA<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300 uppercase tracking-widest">
          <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="#experience" className="hover:text-blue-500 transition-colors">Experience</Link>
          <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};
