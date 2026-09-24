import { GraduationCap, Award, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function EducationCertifications({ education, certifications }) {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute right-10 bottom-1/4 w-[400px] h-[400px] glow-blue rounded-full pointer-events-none -z-10 blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academics & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Formal foundations in computer science paired with continuous industry-recognized technical accreditations.
          </p>
        </div>

        {/* 2-Column Grid for Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Degree & University</h3>
            </div>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {item.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <div className="text-cyan-400 font-medium text-sm mb-2">
                  {item.institution} — <span className="text-slate-400">{item.location}</span>
                </div>

                {item.gpa && (
                  <div className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    {item.gpa}
                  </div>
                )}

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.highlights}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl border border-white/10 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white">
                      {cert.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400">
                      Issued by <span className="text-slate-200 font-medium">{cert.issuer}</span>
                    </p>

                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-slate-500">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400 border border-white/10 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
