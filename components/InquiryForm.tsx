
import React, { useState } from 'react';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone1: '',
    phone2: '',
    phone3: '',
    email: '',
    industry: '',
    constructionDate: '',
    budget: '',
    visitDate: '',
    details: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agree: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 항목 검증
    if (!formData.name || !formData.address || !formData.phone1 || !formData.phone2 || !formData.phone3 || 
        !formData.email || !formData.industry || !formData.constructionDate || !formData.budget || 
        !formData.visitDate || !formData.details) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    // 이메일 메시지 템플릿 생성
    const phone = `${formData.phone1}-${formData.phone2}-${formData.phone3}`;
    const emailBody = `[원복프로 견적 신청]

회사명/담당자: ${formData.name}
현장 주소: ${formData.address}
연락처: ${phone}
이메일: ${formData.email}
업종 및 평수: ${formData.industry}
공사 희망일: ${formData.constructionDate}
예산: ${formData.budget}만원
방문 견적 희망일: ${formData.visitDate}

상세 설명:
${formData.details}

━━━━━━━━━━━━━━━━━━━━
빠른 시일 내에 연락드리겠습니다.
감사합니다.`;

    try {
      // FormSubmit을 사용하여 이메일 직접 발송
      const formDataToSend = new FormData();
      formDataToSend.append('email', 'glad64@naver.com');
      formDataToSend.append('subject', '[원복프로] 견적 신청');
      formDataToSend.append('message', emailBody);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'box');
      formDataToSend.append('_autoresponse', `안녕하세요 ${formData.name}님,\n\n견적 신청이 정상적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.\n\n감사합니다.\n원복프로`);

      const response = await fetch('https://formsubmit.co/ajax/glad64@naver.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          alert('견적 신청이 성공적으로 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.');
          
          // 폼 초기화
          setFormData({
            name: '',
            address: '',
            phone1: '',
            phone2: '',
            phone3: '',
            email: '',
            industry: '',
            constructionDate: '',
            budget: '',
            visitDate: '',
            details: '',
            agree: false
          });
        } else {
          throw new Error('이메일 발송 실패');
        }
      } else {
        throw new Error('서버 오류');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('이메일 발송에 실패했습니다. 직접 glad64@naver.com으로 문의해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="무료견적" className="bg-primary py-32 md:py-40 lg:py-48 scroll-mt-20 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Logo Background */}
      <div className="absolute top-1/2 right-[-15%] md:right-[-5%] -translate-y-1/2 opacity-[0.12] pointer-events-none">
        <img 
          src="/imges/main/pa_logo.png.png" 
          alt="원복프로 로고" 
          className="w-[25rem] h-auto md:w-[40rem] rotate-[-15deg]"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 max-w-full overflow-hidden w-full max-w-[90%]">
        {/* Section Header: Responsive Typography */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16 lg:mb-20 text-white">
          <p className="text-base md:text-lg font-bold mb-2 md:mb-4 text-white">막막한 원상복구</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tighter text-white">
            [ 원복 프로가 함께합니다. ]
          </h2>
          <div className="w-10 md:w-12 h-1 bg-white/30 mx-auto mb-4 md:mb-6"></div>
          <p className="text-white font-medium text-lg md:text-xl leading-relaxed">
            철거, 복구, 리모델링 <br className="md:hidden" />
            공간 복원의 모든 해답을 알려드립니다.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-7xl mx-auto min-w-0">
          
          {/* 1. Contact Info Column: Optimized for Mobile/Tablet */}
          <div className="w-full lg:w-[42%] space-y-8 md:space-y-12">
            <div className="text-center lg:text-left">
              <h3 className="text-white text-xl md:text-3xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">
                지금 바로 무료로 <br className="hidden lg:block" />
                상담 받아보세요.
              </h3>
              
              {/* Info Cards: Grid on Tablet, List on Mobile/Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 text-left">
                {[
                  { label: "전화 상담", value: "070-5088-1576", icon: "fa-phone-alt", link: "tel:070-5088-1576" },
                  { label: "이메일", value: "Injucni15@naver.com", icon: "fa-envelope", link: "mailto:Injucni15@naver.com" },
                  { label: "회사 주소", value: "서울특별시 중구 다산로 32 114호", icon: "fa-location-dot" },
                  { label: "블로그 바로가기", value: "사례 확인하기 (클릭)", icon: "fa-blog", link: "https://blog.naver.com/jsjmyoo77" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link || "#"} 
                    target={item.link?.startsWith('http') ? "_blank" : undefined}
                    className="bg-white/10 md:backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 group md:hover:bg-white/25 transition-colors duration-200 cursor-pointer min-h-[72px] md:min-h-[88px]"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 flex items-center justify-center rounded-xl text-white md:group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                      <i className={`fas ${item.icon} text-base md:text-xl`}></i>
                    </div>
                    <div>
                      <p className="text-white/50 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-0.5 md:mb-1">{item.label}</p>
                      <p className="text-white font-bold text-sm md:text-base lg:text-lg tracking-tight">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Summary: Visible on all devices */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "빠른 견적,\n신뢰할 수 있는 법인 시공",
                "폐업 지원금까지\n원스톱으로 진행"
              ].map((text, idx) => (
                <div key={idx} className="bg-white p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-xl text-center flex flex-col items-center justify-center gap-2 md:gap-4 group md:hover:shadow-2xl transition-shadow duration-200 border border-primary-border/20">
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md md:group-hover:scale-110 transition-transform duration-200">
                    <i className="fas fa-check text-[10px] md:text-sm"></i>
                  </div>
                  <p className="text-neutral-strong font-black text-[11px] sm:text-xs md:text-base leading-snug tracking-tighter whitespace-pre-line">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Main Form Column: Refined Spacing for Touch Accessibility */}
          <div className="w-full lg:w-[58%] min-w-0">
            <div className="bg-white p-4 sm:p-6 md:p-12 lg:p-14 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,40,40,0.4)] border border-neutral-border/10 overflow-hidden">
              <form className="space-y-4 md:space-y-8 max-w-full" onSubmit={handleSubmit}>
                
                {/* Field Group 1: 2-Cols on Tablet/Desktop, 1-Col on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-w-0">
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      회사명 / 담당자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm h-[44px] md:h-[56px] box-border" 
                      placeholder="이름을 입력해주세요" 
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      현장 주소 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm h-[44px] md:h-[56px] box-border" 
                      placeholder="시공 주소를 입력해주세요" 
                    />
                  </div>
                </div>

                {/* Contact Field (3 parts): Responsive Flex */}
                <div className="space-y-1.5 md:space-y-2 min-w-0">
                  <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-1.5 md:gap-2 min-w-0 max-w-full">
                    <input 
                      type="text" 
                      name="phone1"
                      value={formData.phone1}
                      onChange={handleChange}
                      required
                      maxLength={3}
                      className="flex-1 min-w-0 max-w-full bg-neutral-surface/50 border-2 border-transparent px-2 py-2.5 md:px-3 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] text-center font-bold transition-[border-color,background-color] duration-200 box-border" 
                      placeholder="010" 
                    />
                    <span className="text-neutral-text/20 font-black flex-shrink-0 text-sm md:text-base">-</span>
                    <input 
                      type="text" 
                      name="phone2"
                      value={formData.phone2}
                      onChange={handleChange}
                      required
                      maxLength={4}
                      className="flex-1 min-w-0 max-w-full bg-neutral-surface/50 border-2 border-transparent px-2 py-2.5 md:px-3 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] text-center font-bold transition-[border-color,background-color] duration-200 box-border" 
                      placeholder="0000" 
                    />
                    <span className="text-neutral-text/20 font-black flex-shrink-0 text-sm md:text-base">-</span>
                    <input 
                      type="text" 
                      name="phone3"
                      value={formData.phone3}
                      onChange={handleChange}
                      required
                      maxLength={4}
                      className="flex-1 min-w-0 max-w-full bg-neutral-surface/50 border-2 border-transparent px-2 py-2.5 md:px-3 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] text-center font-bold transition-[border-color,background-color] duration-200 box-border" 
                      placeholder="0000" 
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1.5 md:space-y-2 min-w-0">
                  <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                    placeholder="example@email.com" 
                  />
                </div>

                {/* Grid Group 2: Industrial & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-w-0">
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      업종 및 평수 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                      placeholder="업종 / 면적(평)" 
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      공사 희망일 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date" 
                      name="constructionDate"
                      value={formData.constructionDate}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                    />
                  </div>
                </div>

                {/* Budget & Visit Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-w-0">
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      예산 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                      placeholder="예상 예산(만원)" 
                    />
                  </div>
                  <div className="space-y-1.5 md:space-y-2 min-w-0">
                    <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                      방문 견적 희망일 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date" 
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      required
                      className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-2.5 md:px-5 md:py-4 h-[44px] md:h-[56px] focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                    />
                  </div>
                </div>

                {/* Details TextArea */}
                <div className="space-y-1.5 md:space-y-2 min-w-0">
                  <label className="text-[10px] md:text-[12px] font-black text-neutral-strong/60 uppercase tracking-widest flex items-center gap-1.5 pl-1">
                    상세 설명 <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    className="w-full max-w-full bg-neutral-surface/50 border-2 border-transparent px-4 py-3 md:px-5 md:py-4 h-24 md:h-40 resize-none focus:outline-none focus:border-primary/30 focus:bg-white rounded-lg md:rounded-xl text-[13px] md:text-[15px] font-bold transition-[border-color,background-color] duration-200 shadow-sm box-border" 
                    placeholder="요청 사항을 자유롭게 입력해주세요."
                  ></textarea>
                </div>

                {/* Agreement: Scrollable for Mobile Space Saving */}
                <div className="pt-6 border-t border-neutral-surface">
                   <div className="flex items-center gap-3 mb-4 cursor-pointer group">
                     <input 
                       type="checkbox" 
                       id="agree" 
                       checked={formData.agree}
                       onChange={handleCheckboxChange}
                       required
                       className="w-5 h-5 accent-primary cursor-pointer rounded transition-transform duration-150 active:scale-90" 
                     />
                     <label htmlFor="agree" className="text-xs md:text-sm font-bold text-neutral-strong cursor-pointer select-none">개인정보 수집 및 이용 동의 <span className="text-red-500">*</span></label>
                   </div>
                   <div className="bg-neutral-surface/50 p-4 md:p-5 rounded-xl text-[11px] md:text-[12px] text-neutral-text/70 leading-relaxed font-medium h-24 md:h-28 overflow-y-auto border border-neutral-surface shadow-inner">
                     <b>개인정보 처리방침 (표준 안내문)</b><br /><br />
                     1. 수집항목: 성함/업체명, 연락처, 현장 주소, 이메일 등 견적 상담에 필요한 정보<br />
                     2. 수집목적: 원상복구 및 철거 견적 상담, 현장 실측 예약 서비스 제공<br />
                     3. 보유기간: 목적 달성 시까지 또는 상담 종료 후 1년 이내 파기 (관계 법령에 의한 경우 예외)<br />
                     4. 동의 거부권: 귀하는 동의를 거부할 권리가 있으나, 거부 시 상담 신청이 제한될 수 있습니다.
                   </div>
                </div>

                {/* Submit Button: Full-width for Mobile Thumb Reach */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-white py-3.5 md:py-6 rounded-xl md:rounded-2xl font-black text-sm md:text-xl md:hover:bg-primary-strong transition-[background-color,transform] duration-200 active:scale-[0.98] shadow-2xl shadow-primary/30 mt-3 md:mt-4 group min-h-[48px] md:min-h-[64px] ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin text-[10px] md:text-sm"></i>
                        처리 중...
                      </>
                    ) : (
                      <>
                        문의하기
                        <i className="fas fa-envelope text-[10px] md:text-sm opacity-60 md:group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform duration-200"></i>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
