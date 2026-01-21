import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Dribbble, Globe, Send, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // REMPLACEZ 'VOTRE_ID_FORMSPREE' par l'ID fourni par Formspree (ex: mqaeobnd)
  const FORMSPREE_ID = 'meeeradq'; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Nouveau message Portfolio de ${formState.name}`
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || "Impossible d'envoyer le message. Veuillez réessayer.");
      console.error("Formspree Error:", err);
    }
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
                { icon: <Linkedin />, label: 'LinkedIn', href: 'www.linkedin.com/in/abdel-traore-developer-gmao-support' },
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
                  <p className="text-slate-500">Merci de m'avoir contacté, Abdel. Votre message a bien été transmis et je reviens vers vous rapidement.</p>
                  <button onClick={() => setSubmitted(false)} className="text-accent-500 font-bold hover:underline">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center space-x-3 text-sm animate-in slide-in-from-top-2">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Nom complet</label>
                    <input 
                      required
                      name="name"
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
                      name="email"
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
                      name="message"
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
                    className="w-full py-5 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-accent-600/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Envoi en cours...</span>
                      </span>
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
