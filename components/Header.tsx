
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
      <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isMenuOpen ? 'hidden lg:block z-[40]' : 'z-50'
      } ${
        isScrolled 
          ? 'py-3 md:py-4 bg-white/95 backdrop-blur-md border-b border-primary-border/40 shadow-md' 
          : 'py-6 md:py-8 bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white font-black text-lg md:text-xl rounded-lg md:rounded-xl shadow-md group-hover:scale-105 transition-transform duration-200">W</div>
            <span className={`text-xl md:text-2xl font-black tracking-[-0.02em] transition-colors duration-200 ${isScrolled ? 'text-neutral-strong' : 'text-white'}`}>
              원복<span className={isScrolled ? 'text-primary' : 'text-white/80'}>프로</span>
            </span>
          </div>
          
          <div className="flex items-center gap-12">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {menuItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleScrollTo(item.href)}
                  className={`text-sm md:text-[15px] font-semibold transition-all duration-200 hover:text-primary relative group ${
                    isScrolled ? 'text-neutral-text/70' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-[-6px] left-0 w-0 h-[1.5px] bg-primary transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            <button 
              onClick={() => handleScrollTo('무료견적')}
              className={`hidden sm:block px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-[15px] transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-strong' 
                  : 'bg-white text-primary hover:bg-primary-soft'
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
      {isMenuOpen && (
        <div 
          className="lg:hidden"
          style={{ 
            backgroundColor: '#ffffff', 
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Close Button in Mobile Menu */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="메뉴 닫기"
            style={{ 
              position: 'absolute',
              top: '24px',
              right: '24px',
              color: '#171717', 
              fontSize: '28px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 100000
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px',
              padding: '32px 24px',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {menuItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleScrollTo(item.href)}
                style={{ 
                  color: '#171717',
                  fontSize: '22px',
                  fontWeight: 700,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  width: 'auto',
                  minWidth: '180px',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#008080'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#171717'}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleScrollTo('무료견적')}
              style={{ 
                width: '100%',
                maxWidth: '320px',
                padding: '18px 24px',
                backgroundColor: '#008080',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 700,
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px -5px rgba(0, 128, 128, 0.3)',
                marginTop: '8px',
                transition: 'background-color 0.2s ease, transform 0.1s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#006666';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#008080';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              무료 견적 신청
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
