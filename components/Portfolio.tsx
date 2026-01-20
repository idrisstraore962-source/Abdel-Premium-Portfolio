
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import ProjectModal from './ProjectModal';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter as any));

  const categories: ProjectCategory[] = ['All', 'UX', 'UI', 'Web', 'Mobile'];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest">Portfolio</h2>
            <h3 className="text-4xl font-display font-bold">Projets sélectionnés</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20' 
                  : 'glass text-slate-500 hover:text-accent-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex space-x-2 mb-3">
                  {project.category.map(cat => (
                    <span key={cat} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-accent-500/20 text-accent-400 border border-accent-500/30">
                      {cat}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex items-center text-accent-400 font-bold text-sm">
                  <span>Voir l'étude de cas</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Portfolio;
