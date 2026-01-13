
import React from 'react';

const LiveFeed: React.FC = () => {
  const feeds = [
    "강남구 역삼동 오피스 45평 원상복구 요청",
    "분당구 정자동 카페 주방 철거 요청",
    "마포구 서교동 학원 칸막이 제거 완료",
    "송파구 문정동 지식산업센터 원복 완료",
    "영등포구 여의도동 상가 원상복구 요청",
    "해운대구 우동 식당 부분 철거 완료",
    "인천 송도 사무실 천장 복구 요청",
    "수원시 팔달구 의류 매장 철거 완료"
  ];

  return (
    <div className="bg-white border-y border-primary-border/40 py-4 overflow-hidden relative h-16 flex items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] w-full">
      {/* Live Status Label */}
      <div className="absolute left-0 top-0 bottom-0 h-full z-30 flex items-center bg-white/90 backdrop-blur-md pl-4 md:pl-8 pr-4 md:pr-8">
        <div className="flex items-center gap-4 h-full">
          <div className="relative flex h-3 w-3 flex-shrink-0">
            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></div>
            <div className="relative inline-flex rounded-full h-3 w-3 bg-primary"></div>
          </div>
          <span className="text-primary font-black text-[11px] tracking-[0.2em] uppercase whitespace-nowrap">Live Status</span>
        </div>
      </div>

      {/* Marquee Content */}
      <div className="animate-marquee whitespace-nowrap z-10 pl-32 md:pl-48">
        {[...feeds, ...feeds].map((text, i) => (
          <span key={i} className="text-neutral-strong/60 text-[14px] font-bold mx-16 inline-flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-primary/20 rounded-full"></span>
            {text}
          </span>
        ))}
      </div>

      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 h-full w-40 z-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LiveFeed;
