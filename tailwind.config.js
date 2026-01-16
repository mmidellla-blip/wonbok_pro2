/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      // 디자인 토큰: 색상 시스템
      colors: {
        primary: {
          DEFAULT: '#004891',
          soft: '#E6EDF5',
          strong: '#001020',
          border: '#E5E0D8',
          50: '#E6EDF5',
          100: '#B3C9E0',
          200: '#80A5CC',
          300: '#4D81B8',
          400: '#1A5DA4',
          500: '#004891',
          600: '#003A73',
          700: '#002C55',
          800: '#001E37',
          900: '#001020',
        },
        neutral: {
          bg: '#FAFAFA',
          surface: '#F5F5F5',
          text: '#525252',
          strong: '#171717',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
      // 타이포그래피 시스템 - 프리미엄 디자인
      fontFamily: {
        sans: ['Pretendard', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        number: ['Inter', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'base': ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '3xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '6xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      // 간격 시스템 (8px 기준)
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // 그림자 시스템
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 10px 25px -5px rgba(0, 72, 145, 0.2)',
        'primary-lg': '0 20px 40px -10px rgba(0, 72, 145, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      // 애니메이션 시스템
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // 반응형 브레이크포인트 표준화
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // 컨테이너 설정
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2.5rem',
          xl: '3rem',
        },
      },
      // 보더 라디우스 (정제된 값)
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',    /* 6px */
        'DEFAULT': '0.5rem',  /* 8px */
        'md': '0.5rem',      /* 8px */
        'lg': '0.75rem',     /* 12px */
        'xl': '1rem',        /* 16px */
        '2xl': '1.25rem',    /* 20px */
        '3xl': '1.5rem',     /* 24px */
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
