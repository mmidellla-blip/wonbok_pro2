
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ConsultantAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '반갑습니다. 원복프로 전문 상담 AI입니다. 철거 평수나 지역을 말씀해주시면 대략적인 절차를 안내해 드리겠습니다.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 외부 트리거(QuickMenu 등)에서 AI 창을 열 수 있도록 이벤트 리스너 등록
    const handleOpenAI = () => setIsOpen(true);
    window.addEventListener('openConsultantAI', handleOpenAI);
    return () => window.removeEventListener('openConsultantAI', handleOpenAI);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-[400px] h-[600px] bg-white shadow-2xl flex flex-col z-[60] overflow-hidden border border-primary-border animate-in slide-in-from-bottom-10 rounded-t-2xl sm:rounded-2xl">
      <div className="bg-primary-strong p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 flex items-center justify-center text-white rounded-lg border border-white/10">
            <i className="fas fa-robot text-xs"></i>
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase">Consultant AI</h3>
            <span className="text-[10px] text-primary-soft/40 font-bold uppercase tracking-widest">Expert Estimator</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors p-2" aria-label="닫기">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-surface/30"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-primary-strong text-white' 
                : 'bg-white text-neutral-strong border border-primary-border shadow-sm'
            }`}>
              <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 border border-primary-border rounded-2xl">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-primary/30 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-primary-border">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="궁금하신 점을 입력해주세요..."
            className="flex-1 bg-neutral-bg border border-primary-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-text/40"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 active:scale-95 shadow-md shadow-primary/20"
          >
            <i className="fas fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantAI;
