import { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageSquare,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact({ personalInfo }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background radial glows */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[600px] glow-cyan rounded-full pointer-events-none -z-10 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Whether you have an upcoming project, an engineering opening, or just want to discuss software architecture — my inbox is always open.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Get in Direct Contact
              </h3>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Preferred Email Channel
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-semibold text-white font-mono truncate">
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-white/10 transition-all flex items-center gap-1.5 shrink-0"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-emerald-400 font-sans font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs font-sans font-medium">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Response Time & Location Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-slate-200 block">Fast Response Guarantee</span>
                    <span className="text-[11px] text-slate-400">Replies typically within 12–24 hours</span>
                  </div>
                </div>

                {personalInfo.phone && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-slate-200 block">Phone</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-[11px] text-slate-300 font-mono hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {personalInfo.location && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-slate-200 block">Based in</span>
                      <span className="text-[11px] text-slate-400">{personalInfo.location}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block mb-3">
                  Find me across the web:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials?.github || "https://github.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials?.linkedin || "https://linkedin.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-cyan-400 border border-white/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.socials?.twitter || "https://twitter.com"}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-sky-400 border border-white/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:text-emerald-400 border border-white/10 transition-colors"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold text-cyan-400">{formData.name || 'there'}</span>. I have received your message and will review it promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ada@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, team, timeline, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-500/25 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message Directly
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
