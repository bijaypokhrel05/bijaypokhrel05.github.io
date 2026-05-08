import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-10 text-2xl md:text-3xl"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-[var(--color-text-muted)] leading-relaxed"
        >
          <p>
            I'm a software engineer who thinks in systems and numbers. I believe the best software
            comes from understanding both the problem domain and the underlying structure—whether
            that's data flow, algorithms, or user behavior.
          </p>
          <p>
            My approach blends <strong className="text-[var(--color-accent)]">systems thinking</strong>—
            seeing how parts connect and scale—with a strong foundation in <strong className="text-[var(--color-accent)]">mathematics</strong>.
            I enjoy turning messy requirements into clear models and turning those models into
            maintainable, elegant code.
          </p>
          <p>
            When I'm not coding, I'm often exploring data, proofs, or new tools. I care about
            writing code that others can read and extend, and I'm drawn to problems where
            structure and clarity matter as much as features.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
