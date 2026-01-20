
import React from 'react';
import { ArrowRight, MousePointer2, Figma, Palette, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-semibold tracking-wide uppercase">
            <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-ping"></span>
            <span>Disponible pour de nouveaux projets</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1]">
            Designer d'expériences <span className="gradient-text">mémorables.</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Je suis Abdel, UX Designer & Web Designer senior. Je transforme des problèmes complexes en interfaces intuitives et élégantes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#portfolio" 
              className="group w-full sm:w-auto px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-accent-600/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-600/40 active:scale-95"
            >
              <span>Voir mes projets</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:animate-nudge" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold transition-all flex items-center justify-center hover:-translate-y-1">
              Me contacter
            </a>
          </div>

          <div className="pt-10 flex items-center space-x-6 opacity-50 grayscale hover:grayscale-0 transition-all">
            <Figma size={32} />
            <Palette size={32} />
            <Monitor size={32} />
            <div className="h-8 w-px bg-slate-400"></div>
            <span className="text-sm font-medium uppercase tracking-widest">Toolkit Premium</span>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <img src="https://picsum.photos/seed/designer/600/700" alt="Abdel Designer" className="w-full h-auto object-cover" />
          </div>
          {/* Abstract Floating UI Elements */}
          <div className="absolute -top-10 -right-10 glass p-4 rounded-2xl shadow-xl z-20 animate-bounce transition-all">
            <MousePointer2 className="text-accent-500 w-8 h-8" />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border-l-4 border-accent-500">
            <p className="text-xs font-bold uppercase text-accent-500 mb-1">Dernier succès</p>
            <p className="text-sm font-medium">Conversion +40% chez Nova Health</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
