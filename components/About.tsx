
import React from 'react';
import { Target, Zap, Coffee, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { METHODOLOGY, TIMELINE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest">À propos de moi</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold">Je crée l'équilibre entre <span className="text-accent-500">esthétique</span> et <span className="text-accent-500">utilité</span>.</h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Avec une expérience diversifiée allant du développement à l'UX Design, j'accompagne les entreprises dans la création de produits digitaux performants. Mon parcours me permet de comprendre les enjeux techniques tout en gardant une vision centrée sur l'utilisateur.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex flex-col space-y-2 p-6 glass rounded-2xl">
                <span className="text-3xl font-display font-bold">5+</span>
                <span className="text-sm text-slate-500 font-medium">Années d'Expérience</span>
              </div>
              <div className="flex flex-col space-y-2 p-6 glass rounded-2xl">
                <span className="text-3xl font-display font-bold">45+</span>
                <span className="text-sm text-slate-500 font-medium">Projets Réalisés</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-500 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            <div className="relative glass p-4 rounded-3xl shadow-2xl overflow-hidden">
               <img src="https://picsum.photos/seed/abdel-work/700/800" alt="Working" className="rounded-2xl w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
               <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                     <Coffee className="text-white" size={20} />
                   </div>
                   <div>
                     <p className="text-xs font-bold uppercase tracking-widest text-accent-500">Humeur</p>
                     <p className="text-sm font-medium italic">"Designer dans l'âme, développeur par rigueur."</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Methodology & Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Working Methodology */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-display font-bold flex items-center gap-3">
                <Zap className="text-accent-500" />
                Méthodologie de Travail
              </h4>
              <p className="text-slate-500">Un processus structuré pour garantir des résultats de haute qualité.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {METHODOLOGY.map((step, idx) => (
                <div key={idx} className="group p-6 glass border-l-4 border-accent-500 rounded-r-2xl hover:bg-white dark:hover:bg-slate-800 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg text-accent-600 dark:text-accent-400">
                      {step.icon}
                    </div>
                    <h5 className="font-bold">{step.title}</h5>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Journey Timeline */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-display font-bold flex items-center gap-3">
                <Briefcase className="text-accent-500" />
                Parcours Professionnel
              </h4>
              <p className="text-slate-500">Mon évolution à travers différents environnements techniques et créatifs.</p>
            </div>

            <div className="relative pl-8 space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-accent-500 group-hover:scale-125 transition-transform z-10"></div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-accent-500 uppercase tracking-widest">{item.year}</span>
                    <h5 className="text-base font-bold">{item.title} — <span className="text-slate-400 font-medium">{item.company}</span></h5>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
