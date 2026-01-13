
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-strong text-white py-8 md:py-10 lg:py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
          
          {/* 1. Brand Section */}
          <div className="max-w-xs space-y-3 md:space-y-4">
            <div 
              className="flex items-center gap-2 md:gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-primary w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white font-black text-base md:text-lg rounded-xl shadow-lg group-hover:scale-110 transition-transform">W</div>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">Wonbok<span className="text-white/70">Pro</span></span>
            </div>
            <p className="text-white/60 text-xs md:text-[13px] font-bold tracking-tight leading-relaxed">
              ㈜인주씨앤아이 원상복구 전문 브랜드
            </p>
            
            {/* Social Icons */}
          </div>
          
          {/* 2. Contact Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <div className="space-y-2">
              <p className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Contact Center</p>
              <div className="space-y-0.5">
                <a href="tel:070-5088-1576" className="text-white hover:text-primary transition-colors font-black text-lg md:text-xl lg:text-2xl block tracking-tight">070-5088-1576</a>
                <p className="text-white/50 text-[10px] md:text-xs font-medium">평일 09:00 - 18:00</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Email Support</p>
              <a href="mailto:Injucni15@naver.com" className="text-white hover:text-primary transition-colors font-bold text-sm md:text-base block tracking-tight break-all">Injucni15@naver.com</a>
            </div>
            
            <div className="space-y-2 sm:col-span-2 lg:col-auto">
              <p className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Head Office</p>
              <p className="text-white/80 font-bold text-sm md:text-base tracking-tight leading-snug">
                서울특별시 중구 다산로 32 114호<br />
                (주)인주씨앤아이 원복프로
              </p>
            </div>
          </div>
        </div>
        
        {/* 3. Bottom Bar */}
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-4 md:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-center sm:text-right">
              © 2026 WONBOK PRO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
