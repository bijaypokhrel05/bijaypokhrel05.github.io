export function Skills() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mb-24 scroll-mt-32" id="skills">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-h2 text-3xl text-on-background">Technical Stack</h2>
        <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-md border border-primary/20 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02] hover:border-primary/50 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-primary/5">
          <div className="mb-8">
            <span className="font-label-caps text-primary text-xs tracking-widest block mb-4 uppercase group-hover:scale-105 transition-transform origin-left">Frontend Development</span>
            <h3 className="font-h2 text-2xl text-on-background">User Interfaces & Experience</h3>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-secondary text-3xl">data_object</span>
              <span className="font-code-sm text-[10px] text-outline">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '50ms' }}>
              <span className="material-symbols-outlined text-primary text-3xl">smartphone</span>
              <span className="font-code-sm text-[10px] text-outline">React Native</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '100ms' }}>
              <span className="material-symbols-outlined text-secondary text-3xl">javascript</span>
              <span className="font-code-sm text-[10px] text-outline">JS</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '150ms' }}>
              <span className="material-symbols-outlined text-primary text-3xl">code</span>
              <span className="font-code-sm text-[10px] text-outline">TS</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-md border border-secondary/20 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.02] hover:border-secondary/50 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-secondary/5">
          <div className="mb-8">
            <span className="font-label-caps text-secondary text-xs tracking-widest block mb-4 uppercase group-hover:scale-105 transition-transform origin-left">Backend & Infrastructure</span>
            <h3 className="font-h2 text-2xl text-on-background">Scalable Systems</h3>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-3xl">settings_ethernet</span>
              <span className="font-code-sm text-[10px] text-outline">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '50ms' }}>
              <span className="material-symbols-outlined text-secondary text-3xl">database</span>
              <span className="font-code-sm text-[10px] text-outline">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '100ms' }}>
              <span className="material-symbols-outlined text-primary text-3xl">cloud</span>
              <span className="font-code-sm text-[10px] text-outline">Supabase</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '150ms' }}>
              <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
              <span className="font-code-sm text-[10px] text-outline">Python</span>
            </div>
            <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: '200ms' }}>
              <span className="material-symbols-outlined text-primary text-3xl">hub</span>
              <span className="font-code-sm text-[10px] text-outline">Kafka</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 lg:col-span-6 bg-white/5 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-8 hover:bg-white/10 hover:scale-[1.01] hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-xl">
          <div className="max-w-xs">
            <span className="font-label-caps text-outline text-xs tracking-widest block mb-4 uppercase">Tools & Workflow</span>
            <h3 className="font-h2 text-xl text-on-background">DevOps & Version Control</h3>
          </div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl">box</span>
              <span className="font-code-sm text-[10px] text-outline">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">memory</span>
              <span className="font-code-sm text-[10px] text-outline">Redis</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl">gite</span>
              <span className="font-code-sm text-[10px] text-outline">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
