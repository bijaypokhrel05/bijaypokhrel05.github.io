
const projects = [
  {
    title: 'Okhati',
    description: 'Medication reminder app with advanced OCR capabilities for prescription scanning and Supabase backend integration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKGKLHAOUWzzax2WT_G2Czh4HTFUjyQwPbqkv8BCx7nw7vwXWWY8eJW-PTP4fq2S6l7cdoPychAp0dPP9KDjXaji9FCuwjp4IRb13pceo6PUAnQ7KjCrzsXwTydlVJsrILn4QnDDLonooVqLOOZYekVvqSOt_cS_-orzVo6RMM9C7B7Vxs_mJv-Mux5ETOmfthXt4Vyn8pZpf42S6uhjpoZBG1OtqU8iBhrKYS_rSygAfJvB1TzB_CSKLsR9YEDlMmoM85Z18pZk8',
    tags: ['React', 'Supabase', 'OCR'],
    githubUrl: '#'
  },
  {
    title: 'Mailchimp RAG Chatbot',
    description: 'Hybrid search bot leveraging LangChain and Node.js for specialized knowledge retrieval within Mailchimp datasets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB094YquC-HSSaWzmijNqUj_5c71h_kLfpZDqedNHBKvxuXRtHVMJJBWdGl3Dtm5PfyL8YP1aBMBACngFYDyijDtORH-0mYItVIHWzZE4zFhcEUNtaf6wFq1WcZMaRZwWp4OJmj_qR7j3UeLlpo5tqOGMlRxWA6fNkF9_n5sV-WdQDdWGa-qiUqszOCtDJ3SDg-D570Uam1fxuS7X5tx19cDDMBsecg9yjiElzZCXbx5abGf2zyqZ6TIC3o3O1sgPC2Uok7vHGcaw4',
    tags: ['Node.js', 'LangChain', 'Redis'],
    githubUrl: 'https://github.com/bijaypokhrel05/mailchimp-support-AI'
  },
  {
    title: 'Echo',
    description: 'Anonymous audio confession platform built with Socket.io for real-time interaction and low-latency streaming.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6KjBLwChKkCFguQK4ROxDdCDZtSkLzPWm_jEHOjHN8ZcsUd_rVJEUTuvL9VltGLoXL5F8YJhRBgsiiHA6cxAN2YEjVoUTo6wnYf6Egtdy3sQJ-micn24P5sEZS2Bdzzc1OrlneT76obrdNGXn6pmayL4tcRbEmnEi7kCQJEMji4vW816sA2z0KGGQprmfXkXFLgBDDulP5cGCgWl_K4wY1OIe5m0ZzeOTJGERHy_enKziXVOPI0-KL2n2F7rdji-_knAikv2ksFs',
    tags: ['Socket.io', 'Express', 'Node.js'],
    githubUrl: 'https://github.com/bijaypokhrel05/Echo--Anonymous-Audio-Confession-Web-App'
  }
];

export function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mb-24 mt-24 scroll-mt-32" id="projects">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="font-label-caps text-secondary mb-2 block uppercase">Portfolio</span>
          <h2 className="font-h2 text-4xl text-on-background">Featured Projects</h2>
        </div>
        <div className="h-[1px] flex-grow mx-8 bg-outline-variant/30 hidden md:block"></div>
        <span className="text-outline font-code-sm hidden md:block">03 / Projects</span>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-surface-container border border-outline-variant rounded-xl overflow-hidden hover:border-primary hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-lg hover:shadow-primary/10"
          >
            <div className="aspect-video bg-surface-container-highest relative overflow-hidden">
              <img 
                alt={project.title} 
                src={project.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-xs shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">VIEW ON GITHUB</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-h2 text-xl text-on-background mb-2">{project.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="font-code-sm text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
