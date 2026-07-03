import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { BentoGrid } from "@/components/BentoGrid";
import { RivavaPlus } from "@/components/RivavaPlus";
import { TechMarquee } from "@/components/TechMarquee";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />

      <Section title="The Professional" id="about">
        <div className="max-w-4xl">
          <p className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-12">
            {portfolioData.bio}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(portfolioData.skills).map(([key, skills]) => (
              <div key={key}>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-4">{key}</h4>
                <ul className="space-y-2">
                  {(skills as string[]).map(skill => (
                    <li key={skill} className="text-sm font-bold text-gray-400">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <RivavaPlus />

      <TechMarquee />

      <Section title="Crafted Works" id="work">
        <BentoGrid items={portfolioData.projects} />
      </Section>

      <Section title="Timeline">
        <div className="space-y-20">
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-5xl font-black tracking-tighter mb-2">{exp.company}</h3>
                <p className="text-blue-500 font-black tracking-widest text-xs uppercase">{exp.role} / {exp.period}</p>
              </div>
              <ul className="space-y-4">
                {exp.tasks.map((task, j) => (
                  <li key={j} className="text-xl text-gray-500 font-medium leading-snug">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Get In Touch" id="contact">
        <div className="text-center py-20">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 hover:text-blue-500 transition-colors">
            LET'S <br /> BUILD.
          </h2>
          <div className="flex justify-center space-x-12">
            <a href={`mailto:${portfolioData.email}`} className="text-xl font-black uppercase tracking-widest hover:underline decoration-blue-500 decoration-4 underline-offset-8">Email</a>
            <a href={portfolioData.linkedin} className="text-xl font-black uppercase tracking-widest hover:underline decoration-blue-500 decoration-4 underline-offset-8">LinkedIn</a>
            <a href={portfolioData.github} className="text-xl font-black uppercase tracking-widest hover:underline decoration-blue-500 decoration-4 underline-offset-8">Github</a>
          </div>
        </div>
      </Section>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black tracking-[1em] text-gray-700 uppercase">
          © {new Date().getFullYear()} ADITYA SINGH — ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
