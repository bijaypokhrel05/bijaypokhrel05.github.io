import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    title: 'Maintainable',
    description: 'Code is read far more than it is written. I prioritize clarity, consistent naming, and structure that makes future changes predictable.',
    cardClass: 'card-terracotta',
    titleClass: 'text-[var(--color-accent)]',
  },
  {
    title: 'Scalable',
    description: 'From data structures to system design, I think about growth. Solutions should handle more load and complexity without rewrites.',
    cardClass: 'card-gold',
    titleClass: 'text-[var(--color-accent-secondary)]',
  },
  {
    title: 'Elegant',
    description: 'The best code does exactly what it needs to—no more, no less. I aim for simplicity and avoid unnecessary abstraction.',
    cardClass: 'card-sage',
    titleClass: 'text-[var(--color-sage)]',
  },
] as const;

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-20 px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-4 text-2xl md:text-3xl"
        >
          Engineering Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-[var(--color-text-muted)]"
        >
          How I approach building software.
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
              className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-sm ${principle.cardClass}`}
            >
              <h3 className={`mb-3 text-lg font-bold ${principle.titleClass}`}>
                {principle.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
