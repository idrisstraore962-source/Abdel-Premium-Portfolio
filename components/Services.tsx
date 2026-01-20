
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest">Mes Services</h2>
          <h3 className="text-4xl font-display font-bold">Une expertise à 360° pour vos produits digitaux</h3>
          <p className="text-slate-500">De la phase de recherche à la livraison finale, j'apporte mon savoir-faire pour créer des solutions cohérentes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 glass rounded-3xl hover:border-accent-500/50 hover:bg-slate-50/50 dark:hover:bg-slate-900 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:shadow-lg group-hover:shadow-accent-500/20 group-hover:bg-accent-500 group-hover:text-white">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6">
                <a href="#contact" className="text-sm font-bold text-accent-600 dark:text-accent-400 flex items-center space-x-1 group-hover:space-x-2 transition-all">
                  <span>En savoir plus</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
