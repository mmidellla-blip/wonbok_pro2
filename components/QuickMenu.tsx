
import React, { useState, useEffect } from 'react';

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
      link: 'https://pf.kakao.com', 
    },
    {
      name: '블로그',
      icon: 'fa-blogger-b',
      color: 'bg-primary',
      link: 'https://blog.naver.com',
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[50] flex flex-col gap-4 items-end">
      {menus.map((menu, idx) => {
        const Content = (
          <>
            {menu.img ? (
              <img src={menu.img} alt="" className="w-7 h-7 object-contain" />
            ) : (
              <i className={`fab ${menu.icon} text-white text-xl`}></i>
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
};

export default QuickMenu;
