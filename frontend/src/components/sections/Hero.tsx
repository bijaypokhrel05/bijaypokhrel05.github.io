import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroBackground } from './HeroBackground';

const roles = [
  'Software Engineer',
  'Fullstack Developer',
  'Mobile App Developer',
  'AI & Machine Learning Enthusiast'
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4800); // Increased time to allow for full letter animation
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-gutter py-20 overflow-hidden hero-mesh" id="hero">
      {/* Three.js Background Animation */}
      <HeroBackground />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
        {/* Branding & Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-white/10 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-code-sm text-primary text-[10px] tracking-widest uppercase opacity-80">v2.0.4 stable_release</span>
          </div>
          <h1 className="font-h1 text-5xl md:text-6xl lg:text-7xl text-on-surface leading-[1.1] tracking-tight font-bold">
            Bijay Pokhrel <br />Darji
          </h1>

          <div className="h-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                className="flex"
              >
                {roles[roleIndex].split('').map((char, index) => (
                  <motion.span
                    key={`${roleIndex}-${index}`}
                    initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                      ease: "easeOut"
                    }}
                    className="font-code-md text-secondary font-medium tracking-wide uppercase text-sm md:text-base inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="font-body-lg text-lg text-on-surface-variant max-w-md leading-relaxed opacity-90">
            Crafting high-performance <span className="text-secondary font-semibold">full-stack solutions</span> with a focus on technical excellence and elegant architecture.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="px-8 py-4 bg-secondary text-surface-container-lowest font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-secondary/20"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all backdrop-blur-sm"
              href="#contact"
            >
              Initialize Contact
            </a>
          </div>
        </motion.div>

        {/* Terminal Layout */}
        <div className="relative group lg:ml-auto">
          {/* Terminal Window 1: Introduction */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [3, 4, 3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="terminal-window w-full max-w-[500px] rounded-xl p-0 overflow-hidden shadow-2xl relative z-20"
          >
            <div className="bg-white/5 px-5 py-3 flex justify-between items-center border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full terminal-dot-red"></div>
                <div className="w-3 h-3 rounded-full terminal-dot-yellow"></div>
                <div className="w-3 h-3 rounded-full terminal-dot-green"></div>
              </div>
              <span className="font-code-sm text-[10px] text-white/30 uppercase tracking-[0.2em]">bash — whoami</span>
            </div>
            <div className="p-8 font-code-md text-sm space-y-4 leading-relaxed bg-[#0d131f]/80 backdrop-blur-xl">
              <div className="flex gap-3">
                <span className="text-secondary">$</span>
                <p className="text-white">cat intro.md</p>
              </div>
              <p className="text-primary font-bold"># Software Engineer</p>
              <p className="text-on-surface opacity-80">I build scalable web applications and explore the intersection of AI and user experience.</p>
              <p className="text-on-surface-variant opacity-70 italic">Located in Nepal. Passionate about TypeScript, React, and high-performance backend systems.</p>
              <div className="flex gap-2 items-center">
                <span className="text-secondary">$</span>
                <span className="animate-pulse bg-primary w-2.5 h-5"></span>
              </div>
            </div>
          </motion.div>

          {/* Floating Window 2: Small Status */}
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [-2, -3, -2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-10 -left-10 w-56 terminal-window rounded-xl p-0 hidden md:block shadow-2xl z-30"
          >
            <div className="bg-white/5 px-4 py-2 flex gap-1.5 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full terminal-dot-red opacity-50"></div>
              <div className="w-2.5 h-2.5 rounded-full terminal-dot-yellow opacity-50"></div>
            </div>
            <div className="p-5 font-code-sm text-xs space-y-1.5 bg-[#0d131f]/90 backdrop-blur-md">
              <p className="text-secondary flex justify-between"><span>Uptime:</span> <span>99.9%</span></p>
              <p className="text-primary flex justify-between"><span>Coffee:</span> <span>Active</span></p>
            </div>
          </motion.div>

          {/* Terminal Shadow */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
