import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden bg-white min-h-[80vh] flex items-center">
      {/* Background Grid: Subtle Architectural Feel */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[90%]">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          {/* Left Side: Professional Headline */}
          <div className="lg:col-span-5 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-0.5 w-6 bg-primary"></span>
              <span className="text-primary font-black text-[11px] tracking-[0.3em] uppercase">Brand Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8 whitespace-nowrap lg:whitespace-normal">
              <span className="text-neutral-strong/20 mr-1">[</span>
              <span className="text-primary">원복은</span> <span className="text-neutral-strong">설계입니다</span>
              <span className="text-neutral-strong/20 ml-1">]</span>
            </h2>
            
            <div className="space-y-4 text-center relative pt-6">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-primary/20"></div>
              <p className="text-xl md:text-2xl font-bold text-neutral-strong/80 tracking-tight leading-tight">
                철거부터 원상까지, <br />
                하나의 기준을 세웁니다.
              </p>
              <p className="text-lg md:text-xl font-medium text-primary/70 tracking-tight">
                복구 전문 플랫폼 원복프로
              </p>
            </div>
          </div>

          {/* Right Side: High-Contrast Definition Card */}
          <div className="lg:col-span-7">
            <div className="relative p-8 md:p-14 text-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl group" style={{ backgroundColor: '#002244' }}>
              {/* Subtle Decorative Detail */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[4rem] -mr-12 -mt-12 transition-all" style={{ backgroundColor: 'rgba(0, 110, 221, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 110, 221, 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 110, 221, 0.1)'}></div>
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tighter text-white">
                    원상복구는 <br />
                    <span className="text-white">부수고 덮는 일이 아닙니다.</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl leading-relaxed font-bold text-white/90 tracking-tight">
                      임대 조건을 이해하고, <br />
                      공간의 구조를 읽고, <br />
                      마감 기준까지 계산해야 <br />
                      <span className="text-primary underline underline-offset-8 decoration-2">'문제 없는 복구'</span>가 완성됩니다.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-base md:text-lg leading-relaxed font-medium text-white/50 whitespace-pre-line">
                    원복 프로는 법인 인테리어 전문 업체로서, <br />
                    설계 기준에 맞춘 복구 시공으로 <br />
                    끝까지 책임지는 결과를 만듭니다.
                  </p>
                </div>

                {/* Professional Badge */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <i className="fas fa-check-double text-primary text-sm"></i>
                  </div>
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                    Standard Protocol Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-8 left-0 w-full px-10 hidden md:flex items-center justify-between opacity-5">
        <span className="text-[10px] font-mono">RESTORE_PRO_v2.0</span>
        <div className="flex-1 mx-10 h-[1px] bg-neutral-strong"></div>
        <span className="text-[10px] font-mono tracking-widest">ARCHITECTURE & DESIGN</span>
      </div>
    </section>
  );
};

export default Philosophy;