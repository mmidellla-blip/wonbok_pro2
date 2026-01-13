import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveFeed from './components/LiveFeed';
import Services from './components/Services';
import QuickMenu from './components/QuickMenu';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';
import InquiryForm from './components/InquiryForm';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Philosophy from './components/Philosophy';

function App() {
  const whyChooseUs = [
    { 
      title: "법인 사업자 운영", 
      desc: "세금계산서 발행, 보증보험 가입으로 계약의 안정성을 확실하게 보장합니다.", 
      icon: "fa-building-circle-check" 
    },
    { 
      title: "원스톱 진행", 
      desc: "철거뿐 아니라 3D 공간 설계부터 마감 완성까지 모든 공정을 직접 책임집니다.", 
      icon: "fa-thumbs-up" 
    },
    { 
      title: "비용 부담 최소화", 
      desc: "정부 희망리턴패키지 등 폐업 지원금 연계로 고객님의 비용 부담을 덜어드립니다.", 
      icon: "fa-coins" 
    },
    { 
      title: "지역 특화 신속 시공", 
      desc: "서울·경기·인천 지역에 특화된 네트워크로 가장 신속하고 정확하게 시공합니다.", 
      icon: "fa-map-location-dot" 
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-bg selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        
        {/* Value Proposition */}
        <section id="소개" className="py-16 md:py-20 lg:py-24 bg-white scroll-mt-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <span className="text-primary font-semibold text-[0.6875rem] mb-3 md:mb-4 block tracking-[0.05em] uppercase">Premium Solution</span>
              
              <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-black text-neutral-strong mb-6 md:mb-8 tracking-[-0.03em] leading-[1.2]">
                공간 구조를 읽는 전문가가 완성하는 <br />
                <span className="text-primary mt-2 md:mt-3 block">
                  [ <span className="text-neutral-strong">원복·철거·리모델링 통합 솔루션</span> ]
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-[0.9375rem] md:text-base text-neutral-text font-medium leading-relaxed mb-4 md:mb-6">
                  원복 프로는 다년간 인테리어 건축 현장을 직접 운영해온 <br className="hidden md:block" />
                  <span className="text-primary font-semibold">㈜인주씨앤아이</span> 만의 원상복구 브랜드입니다.
                </p>
                <p className="text-[0.9375rem] md:text-base text-neutral-text/70 font-medium leading-relaxed">
                  단순 철거를 넘어 원복 기준 설계부터 시공, 마감까지 <br className="hidden md:block" />
                  공정을 하나로 묶어 책임지는 시스템으로 운영됩니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-neutral-surface/50 p-6 md:p-8 rounded-xl md:rounded-2xl border border-primary-border/30 transition-all duration-200 hover:border-primary/40 group hover:bg-white hover:shadow-md flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-primary-border/40 flex items-center justify-center text-primary text-lg md:text-xl mb-4 md:mb-6 rounded-lg md:rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 className="text-neutral-strong font-bold text-lg md:text-xl mb-2 md:mb-3 tracking-[-0.02em]">{item.title}</h4>
                  <p className="text-neutral-text/70 text-sm md:text-base font-medium leading-relaxed group-hover:text-neutral-text transition-colors duration-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        
        <section id="포트폴리오" className="bg-white py-16 md:py-20 lg:py-24 scroll-mt-20 border-y border-primary-border/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
             <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <span className="text-primary font-semibold text-[0.6875rem] mb-3 md:mb-4 block tracking-[0.05em] uppercase">Successful Projects</span>
                <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-black text-neutral-strong mb-4 md:mb-6 tracking-[-0.03em]">시공 사례</h2>
                <p className="text-neutral-text/70 font-semibold text-[0.9375rem] md:text-base mb-6 md:mb-8">원복의 차이는 현장에서 드러납니다.</p>
                <div className="w-12 md:w-16 h-[1px] bg-primary/20 mx-auto"></div>
             </div>
             <div className="max-w-6xl mx-auto">
                <PortfolioSlider />
             </div>
          </div>
        </section>

        <Reviews />
        <FAQ />
        <Philosophy />
        <InquiryForm />
      </main>
      <QuickMenu />
      <Footer />
    </div>
  );
}

export default App;