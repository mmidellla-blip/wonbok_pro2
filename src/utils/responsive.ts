/**
 * 반응형 유틸리티 함수
 */

export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * 현재 뷰포트 너비에 따른 미디어 쿼리 체크
 */
export const useMediaQuery = (query: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia(query).matches;
};

/**
 * 모바일 기기 체크
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.md;
};

/**
 * 태블릿 기기 체크
 */
export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false;
  const width = window.innerWidth;
  return width >= breakpoints.md && width < breakpoints.lg;
};

/**
 * 데스크톱 기기 체크
 */
export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.lg;
};
