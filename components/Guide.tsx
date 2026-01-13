
import React from 'react';

const Guide: React.FC = () => {
  const guides = [
    { title: "전체 사진 촬영", desc: "공간의 전체적인 모습이 보이도록 동서남북 방향에서 촬영해 주세요.", icon: "fa-expand" },
    { title: "특이사항 근접 촬영", desc: "파손 부위, 전선 마감, 바닥 상태 등 정밀한 확인이 필요한 곳을 찍어주세요.", icon: "fa-search-plus" },
    { title: "진입로 확인", desc: "엘리베이터 유무, 사다리차 사용 가능 여부 등 작업 여건을 파악합니다.", icon: "fa-truck-ramp-box" }
  ];

  return (
    <section className="py-32 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.5em] text-xs uppercase block mb-4">Fast Estimate</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">사진 3장이면 <br /><span className="text-amber-500">견적 준비 끝</span></h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-8 mb-8"></div>
          <p className="text-gray-400 font-light text-lg">전화 상담 없이 스마트폰으로 찍어 올리면 <br />가장 합리적인 견적서를 바로 받아보실 수 있습니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guides.map((item, idx) => (
            <div key={idx} className="group p-12 bg-slate-900 border border-white/5 transition-all duration-500 hover:bg-slate-800/50 hover:border-amber-500/30 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white/5 text-amber-500 flex items-center justify-center text-4xl mb-10 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
