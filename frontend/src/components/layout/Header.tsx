import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Works' },
  { href: '#skills', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://twitter.com', Icon: FaTwitter, label: 'Twitter' },
  { href: 'https://instagram.com', Icon: FaInstagram, label: 'Instagram' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8 md:py-4">
        <a
          href="#hero"
          className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] transition hover:border-[var(--color-accent)]"
          aria-label="Home"
        >
          <span className="flex h-full w-full items-center justify-center text-sm font-bold text-[var(--color-text)]">
            BP
          </span>
        </a>

        <ul className="hidden flex-row items-center md:flex md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="inline-flex">
              <a
                href={link.href}
                className="whitespace-nowrap py-2 text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-on-accent)] transition hover:opacity-90 md:flex"
            aria-label="Connect"
          >
            <HiOutlineGlobeAlt size={20} />
          </a>
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] md:block"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition hover:bg-[var(--color-bg)] hover:text-[var(--color-text)]"
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-text)] hover:bg-[var(--color-bg)] md:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
