import { useState } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-hero-landing pt-24 pb-16 md:pt-28 md:pb-24"
    >
      <div className="hero-decor">
        <div className="hero-decor-dots" aria-hidden />
        <div className="hero-decor-dashes" aria-hidden />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl lg:text-[2.75rem] lg:leading-[1.2]">
            Building digital products, brands{' '}
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] md:h-9 md:w-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
              <span className="text-[var(--color-accent)]">experience.</span>
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg md:leading-8">
            A Software Engineer who loves systems, data, and clean code. I specialize in Full-Stack Development, UI/UX-minded interfaces, and building maintainable, scalable software.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
            <button
              type="button"
              className="rounded-lg bg-[var(--color-accent)] px-6 py-3.5 font-semibold text-[var(--color-on-accent)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Connect With Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl bg-[var(--color-bg)] md:max-w-[380px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-8xl font-semibold text-[var(--color-accent)]/15 md:text-9xl">
                BP
              </span>
            </div>
            {/* Placeholder: replace with <img src="/your-photo.jpg" alt="Bijay Pokhrel" className="h-full w-full object-cover" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
