
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <Quote size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 space-y-4">
          <h2 className="text-sm font-bold text-accent-400 uppercase tracking-widest">Témoignages</h2>
          <h3 className="text-4xl font-display font-bold">Ils m'ont fait confiance</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl hover:border-accent-500/30 transition-colors">
              <Quote className="text-accent-500 mb-6" size={32} />
              <p className="text-xl leading-relaxed italic text-slate-300 mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-accent-500" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role} @ {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
