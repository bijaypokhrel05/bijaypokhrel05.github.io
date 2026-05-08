

export function Experience() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mb-24 scroll-mt-32" id="experience">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-h2 text-3xl text-on-background">Professional Experience</h2>
        <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
      </div>
      
      <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-px before:bg-outline-variant/50">
        <div className="relative pl-12 group">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-secondary bg-background z-10 group-hover:bg-secondary transition-colors"></div>
          <div className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-secondary transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <h3 className="font-h2 text-xl text-primary">Junior Software Engineer</h3>
              <span className="font-code-sm text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 uppercase font-bold">Nov 2023 - Present</span>
            </div>
            <p className="font-body-md font-bold text-on-surface mb-2">T.E.J. Center Private Limited</p>
            <ul className="text-on-surface-variant text-sm space-y-2 list-disc list-inside">
              <li className="leading-relaxed">Leading the development of <span className="text-secondary">Okhati</span>, a healthcare management platform integrating OCR for prescription digitisation.</li>
              <li className="leading-relaxed">Collaborating within a large-scale monorepo architecture to ensure code modularity and shared component efficiency.</li>
              <li className="leading-relaxed">Implementing real-time features and robust backend services using Supabase and Node.js.</li>
            </ul>
          </div>
        </div>

        <div className="relative pl-12 group">
          <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background z-10 group-hover:bg-primary transition-colors"></div>
          <div className="bg-surface-container border border-outline-variant rounded-xl p-6 hover:border-primary transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <h3 className="font-h2 text-xl text-primary">Software Engineer Fellow</h3>
              <span className="font-code-sm text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 uppercase font-bold">June 2023 - Oct 2023</span>
            </div>
            <p className="font-body-md font-bold text-on-surface mb-2">T.E.J. Center Private Limited</p>
            <ul className="text-on-surface-variant text-sm space-y-2 list-disc list-inside">
              <li className="leading-relaxed">Engineered internal tools and contributed to full-stack feature development during an intensive fellowship.</li>
              <li className="leading-relaxed">Optimized database queries and improved frontend performance across multiple micro-apps.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-10 py-4 bg-surface-container border border-outline-variant text-on-surface font-bold rounded-xl hover:border-secondary hover:text-secondary transition-all shadow-xl group"
        >
          <span className="material-symbols-outlined transition-transform group-hover:scale-110">visibility</span>
          Preview Full Resume
        </a>
      </div>
    </section>
  );
}
