import { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero({ personalInfo, stats }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);

    const resumeContent = `${personalInfo.name} ${personalInfo.lastName || ''}
${personalInfo.tagline}
Email: ${personalInfo.email}
${personalInfo.location ? `Location: ${personalInfo.location}` : ''}
${personalInfo.socials?.github ? `GitHub: ${personalInfo.socials.github}` : ''}
${personalInfo.socials?.linkedin ? `LinkedIn: ${personalInfo.socials.linkedin}` : ''}

Summary:
${personalInfo.bio}`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${personalInfo.name}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="relative min-h-[82vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] glow-cyan rounded-full pointer-events-none -z-10 blur-3xl opacity-40 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge */}
        {personalInfo.availability && (
          <div className="flex items-center justify-start mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.availability}</span>
            </div>
          </div>
        )}

        {/* Hero Title & Authentic Headline */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 font-mono">
            {personalInfo.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-200 text-sm bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Resume</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-slate-400 hover:text-white text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3 text-slate-400 pt-4 border-t border-white/10 max-w-sm">
            {personalInfo.socials?.github && (
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socials?.linkedin && (
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-cyan-400 border border-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.socials?.twitter && (
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-sky-400 border border-white/5 transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-emerald-400 border border-white/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Real Stats Grid (Only if user has actual stats provided in resume) */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-2xl border border-white/10"
              >
                <span className="text-2xl font-bold text-white font-mono block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
