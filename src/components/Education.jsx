import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education({ education, achievements, areasOfInterest }) {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Education & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 text-cyan-300">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>

            {education && education.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {item.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10 shrink-0">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <div className="text-cyan-400 font-medium text-xs sm:text-sm mb-2">
                  {item.institution} {item.location ? `— ${item.location}` : ''}
                </div>

                {item.highlights && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.highlights}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Achievements & Honors Column */}
          <div className="lg:col-span-5 space-y-5">
            {achievements && achievements.length > 0 && (
              <>
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 text-indigo-300">
                  <Award className="w-4 h-4" />
                  Achievements & Competitions
                </h3>

                <div className="space-y-3">
                  {achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <span className="text-xs text-slate-400">
                          {item.issuer}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        {item.award}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Areas of Interest */}
            {areasOfInterest && areasOfInterest.length > 0 && (
              <div className="pt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Focus Areas & Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {areasOfInterest.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
