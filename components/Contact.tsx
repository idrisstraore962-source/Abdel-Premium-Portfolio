
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Dribbble, Globe, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest">Contact</h2>
            <h3 className="text-5xl font-display font-bold">Travaillons <span className="gradient-text">ensemble.</span></h3>
            <p className="text-xl text-slate-500 leading-relaxed">
              Vous avez un projet en tête ou souhaitez simplement échanger sur le design ? N'hésitez pas à m'écrire.
            </p>

            <div className="space-y-6 pt-6">
              <a href="mailto:abdeltraore830@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium">abdeltraore830@gmail.com</span>
              </a>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <span className="text-lg font-medium">+226 74 88 66 25</span>
              </div>
            </div>

            <div className="pt-10 flex space-x-6">
              {[
                { icon: <Linkedin />, label: 'LinkedIn', href: '#' },
                { icon: <Dribbble />, label: 'Dribbble', href: '#' },
                { icon: <Globe />, label: 'Behance', href: '#' },
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative p-8 sm:p-12 glass rounded-[2.5rem] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h4 className="text-2xl font-bold">Message envoyé !</h4>
                  <p className="text-slate-500">Merci de m'avoir contacté. Je reviens vers vous sous 24h.</p>
                  <button onClick={() => setSubmitted(false)} className="text-accent-500 font-bold hover:underline">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Nom complet</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jean Dupont" 
                      className="w-full px-6 py-4 rounded-xl glass bg-white/50 dark:bg-slate-800/50 border-transparent focus:border-accent-500 outline-none transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jean@exemple.com" 
                      className="w-full px-6 py-4 rounded-xl glass bg-white/50 dark:bg-slate-800/50 border-transparent focus:border-accent-500 outline-none transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Votre projet</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="Parlez-moi de vos besoins..." 
                      className="w-full px-6 py-4 rounded-xl glass bg-white/50 dark:bg-slate-800/50 border-transparent focus:border-accent-500 outline-none transition-all resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-5 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-accent-600/20"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
