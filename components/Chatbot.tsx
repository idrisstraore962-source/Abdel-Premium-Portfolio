import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Settings, ExternalLink, ShieldCheck } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

// Fix: All declarations of 'aistudio' must have identical modifiers and same type. 
// Using a merged interface for AIStudio to resolve potential environment typing conflicts.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
  interface Window {
    aistudio: AIStudio;
  }
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Bonjour ! Je suis l'assistant IA de Abdel. Je peux vous renseigner sur son parcours et ses projets. Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [needsConfig, setNeedsConfig] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      checkConfiguration();
    }
  }, [messages, isLoading, isOpen]);

  const checkConfiguration = async () => {
    const envKey = process.env.API_KEY;
    if (envKey && envKey !== "undefined" && envKey !== "") {
      setNeedsConfig(false);
      return;
    }

    if (window.aistudio) {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      setNeedsConfig(!hasKey);
    } else {
      setNeedsConfig(true);
    }
  };

  const handleOpenConfig = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Fix: Assume the key selection was successful to proceed to the app as per guidelines
      setNeedsConfig(false);
    } else {
      alert("Le sélecteur de clé n'est pas disponible. Veuillez configurer la variable d'environnement API_KEY.");
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || needsConfig) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Fix: Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      if (!chatSessionRef.current) {
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `Tu es l'assistant de Abdel TRAORE, UX/Web Designer senior chez YULCOM TECHNOLOGIE.
            Ton but est de présenter ses compétences (Figma, UX Research, Design System) et ses succès (OIF, Nova Healthcare).
            Réponds de manière professionnelle, chaleureuse et concise. Langue : Français.
            Contact : abdeltraore830@gmail.com | +226 74 88 66 25.`,
          },
        });
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMessage });
      const aiResponse = response.text;
      
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "Désolé, je n'ai pas pu formuler de réponse." }]);
    } catch (error: any) {
      console.error("Gemini Error:", error);
      
      // Fix: If the request fails with a 401/403 or "not found", reset key selection state
      if (error.message?.includes("entity was not found") || error.status === 401 || error.status === 403) {
        setNeedsConfig(true);
        setMessages(prev => [...prev, { role: 'ai', text: "Ma clé API semble invalide. Veuillez reconfigurer l'accès." }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: "Une erreur technique est survenue. Veuillez réessayer." }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-accent-600 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] glass bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-white/20 animate-in slide-in-from-bottom-6 fade-in">
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-accent-600 to-accent-700 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot size={22} />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight">IA Assistant</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">En ligne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-accent-600 text-white rounded-br-none shadow-md' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
                  <Loader2 size={18} className="animate-spin text-accent-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input or Config */}
          <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            {needsConfig ? (
              <div className="space-y-4 text-center">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                  <div className="flex justify-center mb-2">
                    <Settings className="text-amber-500 animate-spin-slow" size={24} />
                  </div>
                  <h5 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase mb-1">Configuration requise</h5>
                  <p className="text-[11px] text-amber-700/80 dark:text-amber-500/80 leading-snug">
                    Pour activer l'IA, veuillez sélectionner une clé API valide.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={handleOpenConfig}
                    className="w-full py-3 bg-slate-800 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 hover:opacity-90 transition-all shadow-lg"
                  >
                    <ShieldCheck size={16} />
                    <span>Sélectionner une clé API</span>
                  </button>
                  <a 
                    href="https://ai.google.dev/gemini-api/docs/billing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-slate-400 hover:text-accent-500 flex items-center justify-center space-x-1"
                  >
                    <span>Documentation facturation</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex items-center space-x-3">
                <input 
                  type="text" 
                  placeholder="Posez-moi une question..."
                  className="flex-1 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-accent-500 outline-none transition-all dark:text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 bg-accent-600 text-white rounded-xl flex items-center justify-center hover:bg-accent-700 transition-all shadow-lg shadow-accent-600/20 disabled:opacity-50 active:scale-95"
                >
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      <style>{`
        .animate-spin-slow { animation: spin 4s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Chatbot;
