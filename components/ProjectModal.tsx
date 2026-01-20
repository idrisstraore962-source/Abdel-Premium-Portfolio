
import React from 'react';
import { X, CheckCircle2, Layout, Image as ImageIcon, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in zoom-in duration-300">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] glass bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-2xl font-display font-bold">{project.title}</h3>
            <p className="text-sm text-accent-500 font-bold uppercase tracking-widest mt-1">Étude de Cas</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Top Banner */}
          <div className="rounded-2xl overflow-hidden h-64 sm:h-96">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h4 className="text-xl font-bold flex items-center space-x-2 mb-4">
                  <Layout size={20} className="text-accent-500" />
                  <span>Contexte & Problématique</span>
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.context}
                </p>
                <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-xl">
                  <p className="text-red-700 dark:text-red-400 font-medium">
                    {project.problem}
                  </p>
                </div>
              </section>

              <section>
                <h4 className="text-xl font-bold flex items-center space-x-2 mb-4">
                  <Zap size={20} className="text-accent-500" />
                  <span>Processus UX</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {project.process.map((step, idx) => (
                    <li key={idx} className="flex items-center space-x-3 p-4 glass rounded-xl border border-slate-200 dark:border-slate-800">
                      <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-bold flex items-center space-x-2 mb-4">
                  <ImageIcon size={20} className="text-accent-500" />
                  <span>UI Finale</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.finalUI.map((img, idx) => (
                    <img key={idx} src={img} className="rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer" />
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="p-8 glass rounded-2xl bg-accent-50/30 dark:bg-accent-950/10 border-accent-500/20">
                <h4 className="text-lg font-bold mb-4">Résultats & Impact</h4>
                <p className="text-3xl font-display font-extrabold text-accent-600 dark:text-accent-400 mb-2">
                  {project.results.split(' ')[0]} {/* Simple extract for emphasis */}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {project.results}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Catégories</h4>
                <div className="flex flex-wrap gap-2">
                  {project.category.map(cat => (
                    <span key={cat} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-accent-600 text-white rounded-xl font-bold hover:bg-accent-700 transition-colors"
          >
            Fermer le projet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
