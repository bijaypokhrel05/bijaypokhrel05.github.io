import { useTheme } from '../../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
      <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="font-h2 text-lg font-bold tracking-tight text-on-background">BPD.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#hero">Home</a>
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="text-xs font-label-caps hover:text-primary transition-colors" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-surface-container-lowest px-6 py-2 font-bold text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-secondary/20"
          >
            Resume
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 flex items-center justify-center hover:text-secondary transition-all"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
