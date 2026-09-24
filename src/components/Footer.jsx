import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06070a] border-t border-white/10 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-sm">
              {personalInfo.name.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-white block">
                {personalInfo.name} {personalInfo.lastName || ''}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {personalInfo.tagline}
              </span>
            </div>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Built with precision using React, Vite & Tailwind CSS</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name} {personalInfo.lastName || ''}. All rights reserved. Designed to make an immediate first impression.
        </div>
      </div>
    </footer>
  );
}
