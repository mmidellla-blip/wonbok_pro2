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
        <section id="소개" className="py-20 md:py-32 bg-white scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
              <span className="text-primary font-black text-[10px] mb-6 block tracking-[0.4em] uppercase">Premium Solution</span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong mb-10 tracking-tighter leading-tight">
                공간 구조를 읽는 전문가가 완성하는 <br />
                <span className="text-primary mt-3 block">
                  [ <span className="text-neutral-strong">원복·철거·리모델링 통합 솔루션</span> ]
                </span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-neutral-text font-medium leading-relaxed opacity-90 mb-6">
                  원복 프로는 다년간 인테리어 건축 현장을 직접 운영해온 <br className="hidden md:block" />
                  <span className="text-primary font-bold">㈜인주씨앤아이</span> 만의 원상복구 브랜드입니다.
                </p>
                <p className="text-base md:text-lg text-neutral-text font-medium leading-relaxed opacity-70">
                  단순 철거를 넘어 원복 기준 설계부터 시공, 마감까지 <br className="hidden md:block" />
                  공정을 하나로 묶어 책임지는 시스템으로 운영됩니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-neutral-surface/30 p-8 rounded-3xl border border-primary-border/40 transition-all duration-500 hover:border-primary group hover:bg-white hover:shadow-xl flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white border border-primary-border/60 flex items-center justify-center text-primary text-xl mb-6 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4 className="text-neutral-strong font-black text-xl mb-3 tracking-tighter">{item.title}</h4>
                  <p className="text-neutral-text text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        
        <section id="포트폴리오" className="bg-white py-20 md:py-32 scroll-mt-20 border-y border-primary-border/40">
          <div className="container mx-auto px-6">
             <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-primary font-black text-[10px] mb-6 block tracking-[0.4em] uppercase">Successful Projects</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong mb-6 tracking-tighter">시공 사례</h2>
                <p className="text-neutral-text font-bold text-base md:text-lg opacity-70 mb-8">원복의 차이는 현장에서 드러납니다.</p>
                <div className="w-16 h-0.5 bg-primary/20 mx-auto"></div>
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