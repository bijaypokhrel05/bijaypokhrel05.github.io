import { motion } from 'framer-motion';

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub', href: 'https://github.com/bijaypokhrel05' },
  { label: 'Email', href: 'mailto:hello@example.com' },
] as const;

export function Social() {
  return (
    <section id="social" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-10 text-2xl md:text-3xl"
        >
          Social
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-wrap gap-8"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-base font-medium text-[var(--color-text)] underline decoration-2 decoration-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
