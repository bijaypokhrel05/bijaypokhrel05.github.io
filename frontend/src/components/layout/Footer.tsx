import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-outline-variant py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="font-h2 text-lg font-bold tracking-tight text-on-background">BPD.</span>
          <span className="text-outline text-xs font-code-sm opacity-50">© 2026 Built with Precision.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/bijay-pokhrel-darji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-primary transition-all text-2xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/bijaypokhrel05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-secondary transition-all text-2xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <span className="text-xs font-code-sm text-secondary uppercase tracking-widest">System Status: Active</span>
        </div>
      </div>
    </footer>
  );
}
