
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const QuickMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const menus = [
    {
      name: '카톡상담',
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg',
      color: 'bg-[#FEE500]',
      link: 'http://pf.kakao.com/_duBWn/chat', 
    },
    {
      name: '블로그',
      icon: 'fa-blogger-b',
      color: 'bg-primary',
      link: 'https://blog.naver.com/jsjmyoo77',
    },
    {
      name: '인스타그램',
      icon: 'fa-instagram',
      color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
      link: 'https://www.instagram.com/15designhaus/',
      iconSize: 'text-2xl',
    }

  ];

  const menuContent = (
    <div 
      className="flex flex-col gap-4 items-end"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999
      }}
    >
      {menus.map((menu, idx) => {
        const Content = (
          <>
            {menu.img ? (
              <img 
                src={menu.img} 
                alt="" 
                className="w-7 h-7 object-contain" 
              />
            ) : (
              <i className={`fab ${menu.icon} text-white ${menu.iconSize || 'text-xl'}`}></i>
            )}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-neutral-strong text-white text-[11px] font-bold rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none hidden md:block">
              {menu.name}
            </span>
          </>
        );

        return (
          <a
            key={idx}
            href={menu.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${menu.color} w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:-translate-y-1 active:scale-90 group relative border border-white/20`}
            aria-label={menu.name}
          >
            {Content}
          </a>
        );
      })}
      
      {isVisible && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-white text-primary rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-primary-border animate-in fade-in slide-in-from-bottom-4"
          aria-label="최상단으로 이동"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );

  // React Portal을 사용하여 body 직계 자식으로 렌더링
  // transform이 적용된 상위 요소의 영향을 받지 않도록
  return typeof window !== 'undefined' 
    ? createPortal(menuContent, document.body)
    : menuContent;
};

export default QuickMenu;
