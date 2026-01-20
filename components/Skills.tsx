
import React from 'react';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest">Compétences</h2>
          <h3 className="text-4xl font-display font-bold">Mon expertise technique</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="space-y-8">
              <h4 className="text-xl font-bold border-b-2 border-accent-500 pb-2 w-max">
                {group.category}
              </h4>
              <div className="space-y-8">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group space-y-3 cursor-default">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold group-hover:text-accent-500 transition-colors">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-400 group-hover:text-accent-500 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                      <div 
                        className="h-full bg-gradient-to-r from-accent-500 to-accent-600 rounded-full transition-all duration-1000 ease-out relative" 
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-all"></div>
                      </div>
                    </div>
                    {/* Visual hint on hover */}
                    <div className="h-0.5 w-0 bg-accent-500 group-hover:w-full transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
