import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="border-b border-primary-border/40">
      <button 
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-base md:text-lg font-bold text-neutral-strong group-hover:text-primary transition-colors flex items-start gap-4 tracking-tighter">
          <span className="text-primary font-black">Q{index + 1}.</span>
          {question}
        </span>
        <i className={`fas fa-plus transition-transform duration-300 text-neutral-text/40 ${isOpen ? 'rotate-45' : ''}`}></i>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="pl-12 text-neutral-text/70 font-medium leading-relaxed whitespace-pre-line text-sm md:text-base tracking-tight">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "계약 진행, 복잡하지 않나요?",
      answer: "현장 실측부터 견적, 계약까지 베테랑이 직접 가이드하여 가장 빠르고 단순하게 진행해 드립니다."
    },
    {
      question: "공사 후 하자가 생기면 어쩌죠?",
      answer: "걱정 마세요. 저희는 건축 면허가 있는 정식 법인 업체로서 하자이행보증보험 발급을 통해 끝까지 책임지는 사후관리를 보장합니다."
    },
    {
      question: "견적 받는 데 비용이 드나요?",
      answer: "서울·경기 수도권 어디든 20년 노하우를 담은 무료 방문 상담과 정확한 실측 견적을 약속드립니다."
    }
  ];

  return (
    <section className="py-[40vh] bg-neutral-surface border-t border-primary-border/40 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 w-full max-w-[90%]">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-primary font-black text-[10px] mb-6 block tracking-[0.4em] uppercase">Professional Q&A</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong mb-8 tracking-tighter leading-[1.2]">
              복잡한 원상복구, <br />
              전문가에겐 쉽습니다. <br />
              <span className="text-lg md:text-xl text-neutral-text/60 font-bold block mt-4">
                [20년차 베테랑의 명쾌한 Q&A]
              </span>
            </h2>
            <div className="space-y-4 max-w-sm">
              <p className="text-neutral-text font-bold text-base md:text-lg leading-relaxed tracking-tight">
                비용은 덜고 속도는 높이는법, <br />
                궁금하신가요?
              </p>
              <p className="text-neutral-text/60 font-medium text-sm md:text-base tracking-tight">
                원복프로가 명확하게 답해드립니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t-2 border-primary-border">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white rounded-2xl border border-primary-border/60 shadow-sm flex items-center justify-between group cursor-pointer hover:border-primary transition-all" onClick={() => document.getElementById('무료견적')?.scrollIntoView({ behavior: 'smooth' })}>
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                   <i className="fas fa-phone-alt"></i>
                 </div>
                 <div>
                   <p className="text-neutral-strong font-black tracking-tight">더 궁금한 점이 있으신가요?</p>
                   <p className="text-neutral-text/60 text-sm font-bold tracking-tight">지금 바로 전문가와 직접 상담하세요.</p>
                 </div>
               </div>
               <i className="fas fa-chevron-right text-neutral-text/40 group-hover:text-primary group-hover:translate-x-1 transition-all"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;