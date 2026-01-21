import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Bonjour ! Je suis l'assistant IA de Abdel. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasKeyError, setHasKeyError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const initChat = () => {
    if (!chatSessionRef.current) {
      const apiKey = process.env.API_KEY;
      
      if (!apiKey || apiKey === "undefined" || apiKey === "") {
        console.error("Gemini API Key is missing. Please add API_KEY to your environment variables.");
        setHasKeyError(true);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: `Tu es l'assistant personnel de Abdel TRAORE, un UX Designer et Web Designer senior. 
            Détails sur Abdel : 5+ ans d'expérience, 45+ projets, expert Figma et UX Research.
            Projets : OIF (Observatoire de la Francophonie), Nova Healthcare, EcoSwap.
            Poste actuel : UX Designer & Web Designer chez YULCOM TECHNOLOGIE.
            Instructions : Réponds avec courtoisie, créativité et brièveté. Langue : Français.
            Contact : abdeltraore830@gmail.com | +226 74 88 66 25.`,
          },
        });
        setHasKeyError(false);
      } catch (err) {
        console.error("Failed to initialize Gemini AI:", err);
        setHasKeyError(true);
      }
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      initChat();
      
      if (hasKeyError || !chatSessionRef.current) {
        throw new Error("Clé API non configurée");
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMessage });
      const aiResponse = response.text;
      
      if (!aiResponse) throw new Error("Réponse vide de l'IA");
      
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      let errorMsg = "Désolé, je rencontre des difficultés techniques. Veuillez réessayer plus tard.";
      if (hasKeyError) {
        errorMsg = "Le chatbot n'est pas encore configuré. L'administrateur doit ajouter la clé API sur Vercel.";
      }
      setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <button 
        onClick={() => {
          const nextState = !isOpen;
          setIsOpen(nextState);
          if (nextState) initChat();
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-accent-600 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[520px] glass bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20 animate-in slide-in-from-bottom-6 fade-in">
          <div className="p-4 bg-accent-600 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Assistant de Abdel</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">IA Gemini • En ligne</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-accent-600 text-white rounded-br-none' 
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
                  <Loader2 size={16} className="animate-spin text-accent-500" />
                </div>
              </div>
            )}
            {hasKeyError && (
              <div className="flex justify-center p-2">
                <div className="flex items-center space-x-2 text-[10px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-lg">
                  <AlertCircle size={12} />
                  <span>Clé API manquante dans l'environnement.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Écrivez votre message..."
              className="flex-1 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-500 outline-none transition-all dark:text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim() || hasKeyError}
              className="w-10 h-10 bg-accent-600 text-white rounded-xl flex items-center justify-center hover:bg-accent-700 transition-all disabled:opacity-50 disabled:scale-95"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
