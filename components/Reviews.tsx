import React, { useState } from 'react';

interface Review {
  category: string;
  text: string;
  author: string;
  date: string;
  stars: number;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 70; // 표시할 최대 글자 수
  const shouldTruncate = review.text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate 
    ? review.text 
    : review.text.substring(0, maxLength) + '...';

  return (
    <div className="inline-block min-w-[350px] md:min-w-[420px] bg-white p-8 md:p-10 rounded-[2.5rem] border border-primary-border/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden mr-6 whitespace-normal">
      {/* Decorative Background Element */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-neutral-surface rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="px-4 py-1.5 bg-primary-soft text-primary font-black text-[10px] rounded-full tracking-wider uppercase border border-primary/10">
            {review.category}
          </span>
          <div className="flex gap-0.5">
            {[...Array(review.stars)].map((_, i) => (
              <i key={i} className="fas fa-star text-primary text-[10px]"></i>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <div className={`text-neutral-strong font-bold text-lg md:text-xl leading-relaxed tracking-tight group-hover:text-primary transition-colors whitespace-pre-line ${!isExpanded ? 'h-32 overflow-hidden' : ''}`}>
            <p>{displayText}</p>
          </div>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center justify-center w-8 h-8 rounded-full text-primary hover:text-primary/80 hover:bg-primary/10 transition-all group/btn"
              aria-label={isExpanded ? '접기' : '더보기'}
            >
              <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-sm transition-transform group-hover/btn:scale-110`}></i>
            </button>
          )}
        </div>
      
        <div className="flex items-center justify-between pt-6 border-t border-primary-border/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-surface flex items-center justify-center rounded-full text-primary/40 font-black text-xs border border-primary-border">
              {review.author[0]}
            </div>
            <div>
              <p className="text-neutral-strong font-black text-sm tracking-tighter">{review.author}</p>
              <p className="text-neutral-text/40 font-bold text-[10px] uppercase tracking-widest">{review.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <i className="fas fa-certificate text-primary/20 text-lg"></i>
             <span className="text-[10px] font-black text-neutral-text/30 uppercase tracking-tighter">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const allReviews: Review[] = [
    {
      category: "사무실 원상복구",
      text: "법인이라 세금계산서 발행도 깔끔하네요. 비용처리가 너무 편해요.\n건물주가 까다로운데도 군말없이 통과시켜 주셔서 놀랐습니다.\n보증보험 가입까지 확실하니까 큰 공사도 믿고 맡길 수 있었습니다.",
      author: "김*태 대표님",
      date: "2024.03 시공",
      stars: 5
    },
    {
      category: "카페 주방 철거",
      text: "철거부터 인테리어 마감까지 원스톱으로 해결하니 신경 쓸 게 없네요.\n폐업 이전으로 정신이 없었는데 원복 신경 쓰지 않고도 끝내주셔서\n마음 편히 다른 일에 집중할 수 있었어요.",
      author: "이*희 사장님",
      date: "2024.02 시공",
      stars: 5
    },
    {
      category: "학원 칸막이 제거",
      text: "여러 곳 견적 냈지만,\n원복프로만큼 전문적인 곳이 없네요.\n원복프로 덕분에 복잡한 서류 절차 없이\n지원금으로 잘 해결했습니다.\n폐업으로 막막했는데 덕분에\n새출발 할 힘을 얻었습니다.",
      author: "박*준 원장님",
      date: "2024.01 시공",
      stars: 5
    },
    {
      category: "지식산업센터 복구",
      text: "첫 복구 공사라 막막했는데\n견적부터 시공까지 친절한 설명에 잘 접수했습니다.\n원상복구 후 뒷정리가 너무 깔끔해서\n다음 세입자가 바로 들어왔어요\n사장님이 직접 현장 챙기시는\n모습 보고 신뢰가 확 갔습니다.",
      author: "최*윤 이사님",
      date: "2024.03 시공",
      stars: 5
    },
    {
      category: "상가 토탈 철거",
      text: "원복 프로는 단순한 철거를 넘어,\n정부 지원 연계로 최대 400만원까지 비용 절감을 도와줘서 정말 큰 힘이 되었어요.\n\n까다로운 건물주 설득부터 복잡한 서류 작업, 세금계산서 발행까지,\n원스톱으로 전문적인 솔루션을 제공해주시니,\n폐업으로 정신 없던 와중에도 신경 쓸 일이 전혀 없었네요.\n\n처음부터 끝까지 책임지고 현장을 챙기시는 모습과\n깔끔한 마무리 덕분에 다음 세입자도 바로 구해져서 정말 감사했습니다.\n새출발 할 용기를 얻었어요!",
      author: "정*훈 사장님",
      date: "2023.12 시공",
      stars: 5
    },
    {
      category: "프랜차이즈 원복",
      text: "여러 곳 견적을 받아봤지만, 원복 프로만큼 전문성과 신뢰를 준 곳은 없었습니다. 설계부터 시공, 마감까지 '보여주기식'이 아닌 공간 구조를 고려한 완벽한 원상 복구를 해주셨어요. 특히 보증보험 가입으로 큰 공사도 걱정 없이 맡길 수 있었고, 사장님이 직접 현장을 챙겨주시는 모습에 믿음이 확 갔습니다. 복잡한 서류 절차까지 전문가답게 처리해주셔서 정말 만족합니다.",
      author: "홍*수 점주님",
      date: "2024.02 시공",
      stars: 5
    }
  ];

  // 충분한 길이를 위해 리뷰 목록을 복제합니다.
  const extendedReviews = [...allReviews, ...allReviews, ...allReviews];

  return (
    <section id="후기" className="py-[40vh] bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-black text-[10px] mb-6 block tracking-[0.4em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-strong mb-10 tracking-tighter leading-[1.1]">
            우리의 실력은 <br />
            <span className="relative inline-block mt-2">
              <span className="text-primary">[고객의 후기]</span>로 남습니다.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>
          <p className="text-neutral-text font-bold text-base md:text-lg opacity-70 tracking-tight">
            20년차 원복 프로가 만든 생생한 성공 사례
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Single Row: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap py-4 hover:[animation-play-state:paused] transition-all">
            {extendedReviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>
        </div>

        {/* Gradient Fades for Smooth Transition */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
      `}</style>
      
      <div className="container mx-auto px-6 mt-20 text-center">
         <button 
           onClick={() => document.getElementById('무료견적')?.scrollIntoView({ behavior: 'smooth' })}
           className="inline-flex items-center gap-4 text-neutral-strong/40 hover:text-primary transition-all group"
         >
           <span className="w-12 h-[1px] bg-neutral-strong/10 group-hover:bg-primary/20 transition-all"></span>
           <span className="font-black text-xs tracking-widest uppercase">Start your story with Wonbok Pro</span>
           <span className="w-12 h-[1px] bg-neutral-strong/10 group-hover:bg-primary/20 transition-all"></span>
         </button>
      </div>
    </section>
  );
};

export default Reviews;