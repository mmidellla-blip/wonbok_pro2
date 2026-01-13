
import React from 'react';
import { ProcessStep } from '../types';

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    { number: "01", title: "정밀 방문 실측", description: "현장 팀장이 직접 방문하여 층고, 마감재, 설비 현황을 파악하고 최적의 견적을 산출합니다." },
    { number: "02", title: "공정 프로세스 설계", description: "소음 및 민원을 최소화하는 작업 시간대 설정과 행정 신고 절차를 완벽히 준비합니다." },
    { number: "03", title: "숙련 기술진 투입", description: "공정별 전문 장비와 인력을 투입하여 구조적 안정성을 유지하며 기한 내 시공을 완료합니다." },
    { number: "04", title: "사후 관리 및 대행", description: "폐기물 처리 영수증 발행부터 건물주 최종 컨펌 단계까지 책임지고 동행해 드립니다." }
  ];

  return (
    <section id="복구공정" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-black tracking-[0.4em] uppercase block mb-4 text-[10px]">Execution Rhythm</span>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-strong tracking-tighter leading-tight">
            신뢰를 구축하는 <br /><span className="text-primary">투명한 4단계</span> 공정
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full h-[1px] bg-primary-border/60 z-0"></div>
              )}
              
              <div className="relative z-10 bg-neutral-surface/30 p-8 rounded-3xl border border-primary-border/40 group-hover:bg-white group-hover:border-primary transition-all duration-500 hover:shadow-xl">
                <div className="text-4xl font-black text-primary/10 group-hover:text-primary transition-colors duration-500 mb-6 italic">
                  {step.number}
                </div>
                <h4 className="text-lg md:text-xl font-black text-neutral-strong mb-3 tracking-tighter group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-neutral-text text-sm font-medium leading-relaxed tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-text/30 font-bold italic tracking-widest uppercase text-[10px]">
            Wonbok Pro - Premium Engineering Process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
