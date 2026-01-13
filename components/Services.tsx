import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  items: string[];
  index: number;
}> = ({ title, items, index }) => (
  <div 
    className="group p-8 bg-white rounded-3xl border border-primary-border/60 hover:border-primary/40 transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-2"
  >
    <div className="flex flex-col gap-6 mb-8">
      <div className="w-14 h-14 bg-neutral-surface text-primary border border-primary-border/40 flex items-center justify-center rounded-2xl font-black text-xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
        0{index + 1}
      </div>
      <h3 className="text-xl md:text-2xl font-black text-neutral-strong tracking-tighter leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
            <i className="fas fa-check text-[14px]"></i>
          </div>
          <span className="text-neutral-text font-bold text-base leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
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
    <section id="사업분야" className="py-20 md:py-32 bg-neutral-surface scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-primary font-black text-[10px] mb-6 block tracking-[0.4em] uppercase">Expertise Core</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong leading-tight mb-8 tracking-tighter">
              20년 경력 베테랑, <br />
              원복프로가 제안하는 <br />
              실패없는 <br />
              <span className="text-primary mt-2 block">
                [ <span className="text-neutral-strong">공간 정리 솔루션</span> ]
              </span>
            </h2>
            <div className="space-y-4 mb-12">
              <p className="text-base md:text-lg text-neutral-text font-bold leading-relaxed opacity-90 tracking-tight">
                비우는 것이 곧 채우는 것입니다.
              </p>
              <p className="text-base md:text-lg text-neutral-text font-medium leading-relaxed opacity-70 tracking-tight">
                원상복구의 정석 '원복프로'가 <br />
                당신의 공간을 책임집니다.
              </p>
            </div>
            <div className="inline-flex items-center gap-6 p-8 bg-white rounded-3xl border border-primary-border/60 shadow-lg">
              <div className="w-16 h-16 bg-primary-strong text-white flex items-center justify-center rounded-2xl text-2xl shadow-lg">
                <i className="fas fa-certificate"></i>
              </div>
              <div>
                <p className="text-neutral-strong font-black text-lg tracking-tighter">정식 면허 보유 법인</p>
                <p className="text-neutral-text text-[10px] font-bold opacity-50 uppercase tracking-widest">Engineering License 2024</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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