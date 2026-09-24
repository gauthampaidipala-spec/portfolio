import { useState } from 'react';
import { X, Sparkles, Check, RotateCcw, Code, User, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeDrawer({ 
  isOpen, 
  onClose, 
  portfolioData, 
  onUpdateData, 
  onResetData 
}) {
  const [activeTab, setActiveTab] = useState('quick');
  const [personal, setPersonal] = useState({ ...portfolioData.personalInfo });
  const [jsonText, setJsonText] = useState(JSON.stringify(portfolioData, null, 2));
  const [jsonError, setJsonError] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleQuickSave = (e) => {
    e.preventDefault();
    const updated = {
      ...portfolioData,
      personalInfo: {
        ...portfolioData.personalInfo,
        ...personal
      }
    };
    onUpdateData(updated);
    setJsonText(JSON.stringify(updated, null, 2));
    triggerSuccess();
  };

  const handleJsonSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onUpdateData(parsed);
      setPersonal({ ...parsed.personalInfo });
      setJsonError('');
      triggerSuccess();
    } catch (err) {
      setJsonError('Invalid JSON format: ' + err.message);
    }
  };

  const triggerSuccess = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 }
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl h-full bg-[#0d121f] border-l border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-indigo-500/20 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Customize Portfolio Data</h3>
                <p className="text-xs text-slate-400">Update your resume info live</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl mb-6">
            <button
              onClick={() => setActiveTab('quick')}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'quick'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Quick Form Edit
            </button>
            <button
              onClick={() => {
                setJsonText(JSON.stringify(portfolioData, null, 2));
                setActiveTab('json');
              }}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'json'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Full JSON Data Edit
            </button>
          </div>

          {/* Quick Form Tab */}
          {activeTab === 'quick' && (
            <form onSubmit={handleQuickSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={personal.name || ''}
                    onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={personal.lastName || ''}
                    onChange={(e) => setPersonal({ ...personal, lastName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Tagline / Professional Title
                </label>
                <input
                  type="text"
                  value={personal.tagline || ''}
                  onChange={(e) => setPersonal({ ...personal, tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Availability Badge
                </label>
                <input
                  type="text"
                  value={personal.availability || ''}
                  onChange={(e) => setPersonal({ ...personal, availability: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={personal.email || ''}
                  onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={personal.location || ''}
                  onChange={(e) => setPersonal({ ...personal, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Short Bio
                </label>
                <textarea
                  rows={3}
                  value={personal.bio || ''}
                  onChange={(e) => setPersonal({ ...personal, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4" />}
                {savedSuccess ? 'Changes Applied!' : 'Update Profile'}
              </button>
            </form>
          )}

          {/* JSON Editor Tab */}
          {activeTab === 'json' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">
                You can paste your complete resume schema here (projects, experience, skills, education) to replace all data instantly:
              </p>

              {jsonError && (
                <div className="p-2.5 rounded-lg bg-red-500/20 text-red-300 text-xs border border-red-500/30">
                  {jsonError}
                </div>
              )}

              <textarea
                rows={16}
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-slate-200 border border-white/10 focus:outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleJsonSave}
                className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Code className="w-4 h-4" />}
                {savedSuccess ? 'Data Applied Successfully!' : 'Apply JSON Data'}
              </button>
            </div>
          )}
        </div>

        {/* Reset Button */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              onResetData();
              setSavedSuccess(true);
              setTimeout(() => setSavedSuccess(false), 1500);
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Default Sample Data
          </button>
          <span className="text-[10px] text-slate-500 font-mono">Changes persist in local state</span>
        </div>
      </div>
    </div>
  );
}
