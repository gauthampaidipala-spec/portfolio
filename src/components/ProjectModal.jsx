import { X, ExternalLink, Zap, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0e1320] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
          )}
          {project.impact && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" />
              {project.impact}
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-slate-300 leading-relaxed text-base mb-6">
          {project.description}
        </p>

        {/* Key Highlights */}
        {project.keyHighlights && project.keyHighlights.length > 0 && (
          <div className="mb-6 bg-white/5 rounded-2xl p-5 border border-white/5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Key Architectural Achievements
            </h4>
            <ul className="space-y-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Technology Stack & Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-sm shadow-md transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              Explore Repository
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
