/**
 * 성능 최적화 유틸리티
 */

/**
 * 이미지 지연 로딩 (Intersection Observer 사용)
 */
export const lazyLoadImage = (img: HTMLImageElement) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    imageObserver.observe(img);
  } else {
    // Fallback for older browsers
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  }
};

/**
 * 디바운스 함수
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

/**
 * 쓰로틀 함수
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 이미지 최적화 (WebP 지원 체크)
 */
export const getOptimizedImageSrc = (src: string, format: 'webp' | 'jpg' | 'png' = 'webp'): string => {
  if (typeof window === 'undefined') return src;
  
  // WebP 지원 체크
  const supportsWebP = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;

  if (format === 'webp' && supportsWebP) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }

  return src;
};
