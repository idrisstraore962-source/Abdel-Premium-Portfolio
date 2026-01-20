
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-2xl font-display font-bold tracking-tight">
          Abdel<span className="text-accent-500">.</span>
        </div>
        
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Abdel TRAORE. Fait avec passion pour le Design.
        </p>
        
        <div className="flex space-x-6 text-sm font-medium text-slate-500">
          <a href="#home" className="hover:text-accent-500 transition-colors">Accueil</a>
          <a href="#portfolio" className="hover:text-accent-500 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-accent-500 transition-colors">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
