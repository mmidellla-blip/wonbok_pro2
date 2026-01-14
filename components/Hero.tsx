import React, { useEffect, useState } from 'react';
import LiveFeed from './LiveFeed';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      img: "/imges/1.jpg", 
      title1: "폐업지원금으로",
      title2: "부담 없이 원복하세요.",
      desc: "철거부터 원상복구까지,\n정부 지원 연계로 최대 400만원 절감 가능합니다.\n\n원복 프로는 정부의 희망리턴패키지 등\n폐업 · 원복 지원 제도와 연계하여\n철거 및 원상복구 비용 부담을 최소화해드립니다.\n\n현장 실측부터 견적, 사진 촬영, 행정 서류 준비까지\n원복에 필요한 전 과정을 한 번에 지원합니다."
    },
    {
      img: "/imges/2.jpg", 
      title1: "원복은 감이 아니라,",
      title2: "기술입니다.",
      desc: "보여주기식 철거로 끝내는 원복은 이제 그만.\n공간 구조부터 공정 순서까지 계산하는 프로의 원상 복구 솔루션\n\n설계 없이 시작하는 원복은 실패로 귀결됩니다.\n설계부터 시공, 마무리까지 결과로 증명하는 원복 프로"
    },
    {
      img: "/imges/3.jpg",
      title1: "결과물 부터 다른",
      title2: "원복프로",
      desc: "보이는 것만 맞추는 원복은 위험합니다.\n계약서 기준까지 정확히 맞추는 전문 원상복구 솔루션\n\n공사 이후 검수 불합격, 추가 철거 요구, 보증금 차감\n\n원복 프로는 이런 리스크를 처음부터 계산하고 들어갑니다."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary-strong">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img 
            src={slide.img} 
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      ))}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-strong/40 via-primary-strong/20 to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto relative z-20 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-3xl px-4 md:px-0 w-full">
            <div className="overflow-hidden mb-5 md:mb-6">
              <span className="inline-block px-3.5 py-1.5 bg-primary text-white text-[0.6875rem] font-semibold rounded-full shadow-md tracking-[0.05em] uppercase animate-in slide-in-from-bottom-full duration-700">
                Premium Restoration Partner
              </span>
            </div>
            
            <div className="mb-6 md:mb-8 space-y-1.5 md:space-y-2">
               <h2 className="text-lg md:text-xl font-medium text-white/80 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                 {slides[currentSlide].title1}
               </h2>
               <h1 className="text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] font-black text-white leading-[1.2] tracking-[-0.03em] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                 {slides[currentSlide].title2}
               </h1>
            </div>
            
            <p className="text-[0.9375rem] md:text-base text-white/85 font-medium leading-relaxed mb-10 md:mb-12 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 whitespace-pre-line">
              {slides[currentSlide].desc}
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <button 
                onClick={() => document.getElementById('무료견적')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3 md:py-3.5 bg-primary text-white font-semibold text-base md:text-lg rounded-lg hover:bg-primary-strong transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center gap-2.5 md:gap-3 group"
              >
                상담 문의하기
                <i className="fas fa-arrow-right text-sm group-hover:translate-x-0.5 transition-transform duration-200"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LiveFeed at bottom - full width */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-30">
        <LiveFeed />
      </div>
    </section>
  );
};

export default Hero;