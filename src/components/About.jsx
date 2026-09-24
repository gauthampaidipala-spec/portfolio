import { MapPin, Mail, User } from 'lucide-react';

export default function About({ personalInfo }) {
  if (!personalInfo.story && !personalInfo.bio) return null;

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Profile
          </h2>
        </div>

        {/* Clean Profile Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 max-w-3xl">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {personalInfo.story || personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-300 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
