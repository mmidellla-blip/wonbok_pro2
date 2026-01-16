
import React, { useState, useEffect } from 'react';

const PortfolioSlider: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isReady, setIsReady] = useState(false);

  const projects = [
    {
      img: "/imges/project/1.PNG", 
      title: "강남구 오피스 원상복구",
      desc: "45평 | 공정 기간 4일",
      tag: "OFFICE"
    },
    {
      img: "/imges/project/2.PNG", 
      title: "성수동 카페 철거",
      desc: "25평 | 야간 작업 진행",
      tag: "CAFE"
    },
    {
      img: "/imges/project/3.PNG", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
    {
      img: "/imges/project/4.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
     {
      img: "/imges/project/5.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
    {
      img: "/imges/project/6.jpg", 
      title: "성수동 카페 철거",
      desc: "25평 | 야간 작업 진행",
      tag: "CAFE"
    },
    {
      img: "/imges/project/7.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
    {
      img: "/imges/project/8.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
     {
      img: "/imges/project/9.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
    {
      img: "/imges/project/10.jpg", 
      title: "성수동 카페 철거",
      desc: "25평 | 야간 작업 진행",
      tag: "CAFE"
    },
    {
      img: "/imges/project/11.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
    {
      img: "/imges/project/12.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
     {
      img: "/imges/project/13.jpg", 
      title: "용산 지식산업센터 복구",
      desc: "32평 | 관리실 검수 완료",
      tag: "INDUSTRIAL"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // 첫 번째 실제 이미지부터 시작 (인덱스 0은 마지막 복제본)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 무한 루프를 위해 첫 번째와 마지막 이미지를 복제
  const duplicatedProjects = [
    projects[projects.length - 1], // 마지막 이미지를 앞에 추가
    ...projects,
    projects[0] // 첫 번째 이미지를 뒤에 추가
  ];

  // 처음 3개 이미지 프리로드
  useEffect(() => {
    const initialLoadCount = Math.min(3, projects.length);
    const loadedStates = new Array(projects.length).fill(false);
    setImagesLoaded(loadedStates);
    
    let loadedCount = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const checkReady = () => {
      loadedCount++;
      if (loadedCount >= initialLoadCount) {
        setIsReady(true);
        if (timeoutId) clearTimeout(timeoutId);
      }
    };
    
    // 처음 3개 이미지 프리로드
    for (let i = 0; i < initialLoadCount; i++) {
      const img = new Image();
      img.onload = () => {
        loadedStates[i] = true;
        setImagesLoaded([...loadedStates]);
        checkReady();
      };
      img.onerror = () => {
        loadedStates[i] = false;
        setImagesLoaded([...loadedStates]);
        checkReady();
      };
      img.src = projects[i].img;
    }
    
    // 최대 3초 후에는 강제로 표시
    timeoutId = setTimeout(() => {
      setIsReady(true);
    }, 3000);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= duplicatedProjects.length - 1) {
          // 마지막 복제본에 도달하면 transition 없이 첫 번째 실제 이미지로 이동
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(1);
            setTimeout(() => {
              setIsTransitioning(true);
            }, 50);
          }, 700);
          return duplicatedProjects.length - 1;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isReady, duplicatedProjects.length]);

  // 첫 번째 복제본에서 뒤로 갈 때 처리
  const handlePrev = () => {
    if (currentIndex === 1) {
      setIsTransitioning(false);
      setCurrentIndex(duplicatedProjects.length - 1);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(duplicatedProjects.length - 2);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 마지막 복제본에서 앞으로 갈 때 처리
  const handleNext = () => {
    if (currentIndex === duplicatedProjects.length - 2) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // 실제 인덱스 계산 (복제본 제외)
  const getRealIndex = (idx: number) => {
    if (idx === 0) return projects.length - 1;
    if (idx === duplicatedProjects.length - 1) return 0;
    return idx - 1;
  };

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden bg-neutral-surface rounded-3xl shadow-sm border border-primary-border">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-surface z-50">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div 
        className="absolute inset-0 flex"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          opacity: isReady ? 1 : 0,
          transition: isTransitioning ? 'transform 0.7s ease-out' : 'none',
          willChange: 'transform',
          width: '100%'
        }}
      >
        {duplicatedProjects.map((project, idx) => {
          const realIdx = getRealIndex(idx);
          return (
            <div 
              key={`${realIdx}-${idx}`} 
              className="h-full relative flex-shrink-0 overflow-hidden"
              style={{ width: '100%', minWidth: '100%', maxWidth: '100%' }}
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover" 
                alt={project.title}
                loading={realIdx < 3 ? "eager" : "lazy"}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  minWidth: '100%'
                }}
                onLoad={() => {
                  if (imagesLoaded.length > 0 && !imagesLoaded[realIdx]) {
                    const newLoaded = [...imagesLoaded];
                    newLoaded[realIdx] = true;
                    setImagesLoaded(newLoaded);
                  }
                }}
                onError={(e) => {
                  // 이미지 로드 실패 시에도 상태 업데이트
                  const target = e.target as HTMLImageElement;
                  target.style.opacity = '0.3';
                  if (imagesLoaded.length > 0 && !imagesLoaded[realIdx]) {
                    const newLoaded = [...imagesLoaded];
                    newLoaded[realIdx] = true;
                    setImagesLoaded(newLoaded);
                  }
                }}
              />
              {imagesLoaded.length > 0 && !imagesLoaded[realIdx] && (
                <div className="absolute inset-0 bg-neutral-surface flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-strong/80 via-transparent to-transparent"></div>
            </div>
          );
        })}
      </div>

      {isReady && (
        <>
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20 pointer-events-none">
            {duplicatedProjects.map((project, idx) => {
              const realIdx = getRealIndex(idx);
              const isActive = idx === currentIndex;
              return (
                <div key={`info-${realIdx}-${idx}`} className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                  <span className="inline-block px-2 py-1 bg-primary text-white text-[10px] font-black mb-3 rounded-sm">{project.tag}</span>
                  <h3 className="text-white text-2xl md:text-4xl font-black mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-white/80 text-sm md:text-lg font-medium">{project.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-8 right-8 z-30 flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
              aria-label="이전 프로젝트"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all active:scale-90"
              aria-label="다음 프로젝트"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioSlider;
