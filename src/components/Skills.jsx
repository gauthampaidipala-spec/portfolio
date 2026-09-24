import { Code } from 'lucide-react';

export default function Skills({ skills }) {
  if (!skills) return null;

  // Handle both grouped format and categorized list format
  const skillCategories = Array.isArray(skills.technical) 
    ? skills.technical 
    : Object.entries(skills).map(([category, items]) => ({
        name: category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1'),
        items: Array.isArray(items) 
          ? items.map(i => typeof i === 'string' ? i : i.name) 
          : []
      })).filter(cat => cat.items && cat.items.length > 0);

  if (skillCategories.length === 0) return null;

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Code className="w-3.5 h-3.5" />
            Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 text-cyan-300">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
