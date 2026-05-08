import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        if (!res.ok) throw new Error('Failed to load projects');
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : data.projects ?? []);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Could not load projects');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="work" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-12 text-2xl md:text-3xl">Featured Projects</h2>
          <p className="text-[var(--color-text-muted)]">Loading projects…</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="work" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-12 text-2xl md:text-3xl">Featured Projects</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-12 text-2xl md:text-3xl"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-terracotta rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:shadow-md"
    >
      <h3 className="mb-4 text-xl font-bold text-[var(--color-text)]">{project.title}</h3>
      <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
        <p><strong className="text-[var(--color-accent)]">Problem:</strong> {project.problem}</p>
        <p><strong className="text-[var(--color-accent)]">Approach:</strong> {project.approach}</p>
        <p><strong className="text-[var(--color-accent)]">Result:</strong> {project.result}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="pill-sage rounded-lg px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-on-accent)] transition hover:bg-[var(--color-accent-hover)]"
          >
            GitHub
          </a>
        )}
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-[var(--color-sage)] bg-[var(--color-sage-bg)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-sage)] hover:text-[var(--color-on-accent)]"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
