

export function EducationCertifications() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-24">
      <div id="education" className="scroll-mt-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-h2 text-3xl text-on-background">Education</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-outline-variant">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
            <span className="font-code-sm text-secondary text-xs font-bold">CURRENT</span>
            <h3 className="font-h2 text-xl text-on-background mt-1">Bachelor of Electronics, Communication and Information Engineering</h3>
            <p className="text-on-surface-variant text-sm font-medium">IOE, Tribhuvan University</p>
          </div>
        </div>
      </div>
      
      <div id="certification" className="scroll-mt-32">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-h2 text-3xl text-on-background">Certifications</h2>
          <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
        </div>
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-outline-variant">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-secondary ring-4 ring-background"></div>
            <span className="font-code-sm text-primary text-xs font-bold">COMPLETED</span>
            <h3 className="font-h2 text-xl text-on-background mt-1">Full Stack Open</h3>
            <p className="text-on-surface-variant text-sm font-medium">University of Helsinki</p>
            <p className="text-outline text-xs mt-2 italic">Deep dive into modern web development: React, Redux, Node.js, MongoDB, GraphQL and TypeScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
