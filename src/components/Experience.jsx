import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship & Work Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-3xl">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium text-sm">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                  {item.type && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.type}
                    </span>
                  )}
                </div>
              </div>

              {item.description && (
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              )}

              {/* Achievements from Resume */}
              {item.achievements && item.achievements.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills tags */}
              {item.skills && item.skills.length > 0 && (
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
