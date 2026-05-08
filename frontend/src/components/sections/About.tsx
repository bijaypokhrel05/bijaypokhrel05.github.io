export function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mb-24 scroll-mt-32" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
          <div className="relative bg-surface-container border border-outline-variant rounded-2xl p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">person</span>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <h2 className="font-h2 text-4xl text-on-background leading-tight">
                Engineering with <br />
                <span className="text-primary">Purpose & Precision.</span>
              </h2>
              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                  <span className="text-secondary text-xs font-bold uppercase tracking-widest">Problem Solver</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest">Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-label-caps text-secondary text-sm tracking-widest uppercase">About Me</span>
            <p className="font-body-lg text-base text-on-surface leading-relaxed">
              I’m a Software Engineer passionate about building scalable and user-focused web and mobile applications. I work mainly with <strong>React, React Native, Node.js</strong>, and modern full-stack technologies to create clean, efficient, and maintainable software solutions.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-on-surface text-base leading-relaxed">
              I enjoy solving real-world problems through code and continuously improving my skills in software engineering, backend systems, and application architecture. Alongside development, I actively explore <strong>AI, Data, </strong>and <strong>Machine Learning</strong> with a strong interest in building intelligent and impactful products.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-primary font-bold text-3xl">1+</h4>
              <p className="text-outline text-xs uppercase tracking-widest mt-1">Years of Experience</p>
            </div>
            <div>
              <h4 className="text-secondary font-bold text-3xl">7+</h4>
              <p className="text-outline text-xs uppercase tracking-widest mt-1">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
