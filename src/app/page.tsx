"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      <Section id="about" title="About Me">
        <div className="max-w-3xl">
          <p className="text-xl text-gray-400 leading-relaxed">
            {portfolioData.summary}
          </p>
        </div>
      </Section>

      <Section id="experience" title="Work Experience">
        <div className="max-w-4xl">
          {portfolioData.experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold text-gray-500 mb-6 uppercase tracking-widest">Languages & Backend</h3>
            <div className="flex flex-wrap gap-3">
              {[...portfolioData.skills.languages, ...portfolioData.skills.backend].map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-500 mb-6 uppercase tracking-widest">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {[...portfolioData.skills.frameworks, ...portfolioData.skills.tools].map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="education" title="Education & Awards">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{portfolioData.education.school}</h3>
            <p className="text-blue-400 font-mono mb-2">{portfolioData.education.degree}</p>
            <p className="text-gray-400">{portfolioData.education.period} | CGPA: {portfolioData.education.gpa}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-500 uppercase tracking-widest">Awards & Honors</h3>
            <ul className="space-y-4">
              {portfolioData.awards.map((award, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <span className="text-blue-500 mr-3">★</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get In Touch">
        <div className="bg-gray-900/30 border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to build something amazing?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={`mailto:${portfolioData.email}`} className="flex items-center space-x-3 text-xl hover:text-blue-500 transition-colors">
              <Mail className="w-6 h-6" />
              <span>{portfolioData.email}</span>
            </a>
            <a href={`tel:${portfolioData.phone}`} className="flex items-center space-x-3 text-xl hover:text-blue-500 transition-colors">
              <Phone className="w-6 h-6" />
              <span>{portfolioData.phone}</span>
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-white/10 flex justify-center space-x-8">
             <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">Github</a>
             <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">LinkedIn</a>
             <a href={portfolioData.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">Website</a>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="mt-2 font-mono">Designed & Built with Next.js + Tailwind + Framer Motion</p>
      </footer>
    </main>
  );
}
