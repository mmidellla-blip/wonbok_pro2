import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  items: string[];
  index: number;
}> = ({ title, items, index }) => (
  <div 
    className="group p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-primary-border/40 hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-surface text-primary border border-primary-border/30 flex items-center justify-center rounded-lg md:rounded-xl font-bold text-lg md:text-xl group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
        0{index + 1}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-neutral-strong tracking-[-0.02em] leading-tight group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
    </div>
    <ul className="space-y-3 md:space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 md:gap-4">
          <div className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 flex items-center justify-center text-primary/50 group-hover:text-primary transition-colors duration-200 mt-0.5">
            <i className="fas fa-check text-xs md:text-sm"></i>
          </div>
          <span className="text-neutral-text/70 font-medium text-sm md:text-base leading-tight group-hover:text-neutral-text transition-colors duration-200">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "철거 공사",
      items: [
        "불필요한 것은 빠르게, 필요한 것은 정확하게",
        "안전 · 폐기 · 일정까지 깔끔한 철거"
      ],
    },
    {
      title: "폐업 원상 복구",
      items: [
        "임대차 기준 완벽 반영",
        "분쟁 없는 깔끔한 마무리"
      ],
    },
    {
      title: "건물 · 공장 리모델링",
      items: [
        "공간 가치 상승 리모델링",
        "공장 · 사무실 · 상가 맞춤 시공"
      ],
    },
    {
      title: "폐업 지원금 연계",
      items: [
        "정부 지원으로 부담은 줄이고",
        "철거 · 복구 비용 최대 400만원 지원"
      ],
    }
  ];

  return (
    <section id="사업분야" className="py-[40vh] bg-neutral-surface scroll-mt-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 w-full max-w-[90%]">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-primary font-semibold text-base mb-4 md:mb-6 block tracking-[0.05em] uppercase">Expertise Core</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong leading-[1.2] mb-8 md:mb-10 tracking-[-0.03em]">
              20년 경력 베테랑, <br />
              원복프로가 제안하는 <br />
              실패없는 <br />
              <span className="text-primary mt-2 block">
                [ <span className="text-primary">공간 정리 솔루션</span> ]
              </span>
            </h2>
            <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              <p className="text-lg md:text-xl text-neutral-text font-semibold leading-relaxed tracking-[-0.01em]">
                비우는 것이 곧 채우는 것입니다.
              </p>
              <p className="text-lg md:text-xl text-neutral-text/70 font-medium leading-relaxed tracking-[-0.01em]">
                원상복구의 정석 '원복프로'가 <br />
                당신의 공간을 책임집니다.
              </p>
            </div>
            <div className="inline-flex items-center gap-4 md:gap-6 p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-primary-border/40 shadow-md">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white flex items-center justify-center rounded-lg md:rounded-xl text-xl md:text-2xl shadow-md">
                <i className="fas fa-certificate"></i>
              </div>
              <div>
                <p className="text-neutral-strong font-bold text-base md:text-lg tracking-[-0.02em]">정식 면허 보유 법인</p>
                <p className="text-neutral-text/50 text-[0.8rem] font-semibold uppercase tracking-[0.1em]">Engineering License 2019</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  index={index}
                  title={service.title} 
                  items={service.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;