
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 바디 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: '원복마켓 소개', href: '소개' },
    { name: '핵심서비스', href: '사업분야' },
    { name: '시공사례', href: '포트폴리오' },
    { name: '시공후기', href: '후기' }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white/95 backdrop-blur-md border-b border-primary-border shadow-2xl shadow-primary/5' 
          : 'py-8 bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary w-10 h-10 flex items-center justify-center text-white font-black text-xl rounded-xl shadow-xl group-hover:scale-110 transition-transform">W</div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-neutral-strong' : 'text-white'}`}>
              원복<span className={isScrolled ? 'text-primary' : 'text-white/70'}>프로</span>
            </span>
          </div>
          
          <div className="flex items-center gap-12">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {menuItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleScrollTo(item.href)}
                  className={`text-[15px] font-black transition-all hover:text-primary relative group ${
                    isScrolled ? 'text-neutral-text/80' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-[-8px] left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            <button 
              onClick={() => handleScrollTo('무료견적')}
              className={`hidden sm:block px-8 py-3 rounded-[1rem] font-black text-[15px] transition-all active:scale-95 shadow-2xl hover:-translate-y-1 ${
                isScrolled 
                  ? 'bg-primary text-white shadow-primary/20 hover:bg-primary-strong' 
                  : 'bg-white text-primary shadow-white/10 hover:bg-primary-soft'
              }`}
            >
              무료 견적 신청
            </button>

            {/* Mobile Toggle */}
            <button 
              className={`lg:hidden text-2xl transition-colors ${isScrolled ? 'text-neutral-strong' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[40] bg-neutral-bg transition-all duration-700 lg:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-12 px-10">
          {menuItems.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleScrollTo(item.href)}
              className="text-4xl font-black text-neutral-strong hover:text-primary transition-colors tracking-tighter"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => handleScrollTo('무료견적')}
            className="w-full max-w-sm py-6 bg-primary text-white font-black text-2xl rounded-2xl shadow-2xl shadow-primary/30"
          >
            무료 견적 신청
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
