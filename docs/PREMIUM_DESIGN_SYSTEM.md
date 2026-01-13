# 프리미엄 디자인 시스템 가이드
## 건설·인테리어 업체 전문 웹사이트 디자인 시스템

---

## 1. 타이포그래피 시스템

### 1.1 폰트 추천 (상업적 사용 가능)

#### 국문 폰트
**주 추천: Pretendard (현재 사용 중)**
- 무료, 상업적 사용 가능
- 가독성 우수, 다양한 웨이트 지원
- 건설/인테리어 업체에 적합한 중립적이고 전문적인 느낌

**대안:**
- **Noto Sans KR** (Google Fonts) - 무료, 상업적 사용 가능
- **Spoqa Han Sans** - 무료, 상업적 사용 가능
- **나눔고딕** - 무료, 상업적 사용 가능

#### 영문 폰트
**주 추천: Inter (Google Fonts)**
- 무료, 상업적 사용 가능
- 모던하고 전문적인 느낌
- 건설 대기업들이 선호하는 폰트
- 숫자 가독성 우수 (견적, 면적 등 표시에 중요)

**대안:**
- **Work Sans** (Google Fonts) - 무료, 상업적 사용 가능
- **DM Sans** (Google Fonts) - 무료, 상업적 사용 가능
- **Plus Jakarta Sans** (Google Fonts) - 무료, 상업적 사용 가능

#### 폰트 조합
```css
/* 국문 + 영문 조합 */
font-family: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

/* 또는 */
font-family: 'Pretendard', 'Work Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### 1.2 타이포그래피 스케일

#### 제목 (Heading)
```css
/* H1 - Hero 메인 타이틀 */
--font-size-h1: 3rem;        /* 48px */
--font-size-h1-md: 3.5rem;   /* 56px */
--font-size-h1-lg: 4rem;     /* 64px */
--line-height-h1: 1.1;
--letter-spacing-h1: -0.04em;
--font-weight-h1: 800;

/* H2 - 섹션 타이틀 */
--font-size-h2: 2rem;        /* 32px */
--font-size-h2-md: 2.5rem;   /* 40px */
--font-size-h2-lg: 3rem;     /* 48px */
--line-height-h2: 1.2;
--letter-spacing-h2: -0.03em;
--font-weight-h2: 700;

/* H3 - 서브 섹션 */
--font-size-h3: 1.5rem;      /* 24px */
--font-size-h3-md: 1.75rem;  /* 28px */
--font-size-h3-lg: 2rem;     /* 32px */
--line-height-h3: 1.3;
--letter-spacing-h3: -0.02em;
--font-weight-h3: 600;

/* H4 - 카드/컨테이너 타이틀 */
--font-size-h4: 1.25rem;     /* 20px */
--font-size-h4-md: 1.5rem;   /* 24px */
--line-height-h4: 1.4;
--letter-spacing-h4: -0.01em;
--font-weight-h4: 600;
```

#### 본문 (Body)
```css
/* Body Large - 강조 본문 */
--font-size-body-lg: 1.125rem;  /* 18px */
--line-height-body-lg: 1.7;
--letter-spacing-body-lg: -0.01em;
--font-weight-body-lg: 400;

/* Body - 기본 본문 */
--font-size-body: 1rem;         /* 16px */
--line-height-body: 1.75;
--letter-spacing-body: 0;
--font-weight-body: 400;

/* Body Small - 보조 텍스트 */
--font-size-body-sm: 0.875rem; /* 14px */
--line-height-body-sm: 1.6;
--letter-spacing-body-sm: 0;
--font-weight-body-sm: 400;
```

#### 강조 텍스트
```css
/* Label - 라벨/캡션 */
--font-size-label: 0.75rem;     /* 12px */
--line-height-label: 1.5;
--letter-spacing-label: 0.05em;
--font-weight-label: 600;
--text-transform-label: uppercase;

/* Number - 숫자 강조 (면적, 가격 등) */
--font-size-number: 1.5rem;     /* 24px */
--font-size-number-md: 2rem;    /* 32px */
--line-height-number: 1.2;
--letter-spacing-number: -0.02em;
--font-weight-number: 700;
--font-family-number: 'Inter', monospace;
```

---

## 2. 컬러 시스템

### 2.1 메인 컬러 (Primary)

**현재 컬러 분석:**
- Primary: #008080 (Teal) - 신뢰감 있는 색상, 건설 업계에서 자주 사용
- Primary Strong: #134E4A (Dark Teal) - 안정감 있는 어두운 톤

**개선안:**
```css
/* Primary Palette - 신뢰감 & 안정감 중심 */
--color-primary-50: #E6F7F5;   /* 가장 연한 배경 */
--color-primary-100: #B3E8E0;
--color-primary-200: #80D9CC;
--color-primary-300: #4DCAB8;
--color-primary-400: #1ABBA4;
--color-primary-500: #008080;  /* 메인 컬러 (현재 유지) */
--color-primary-600: #006666;  /* Hover 상태 */
--color-primary-700: #004D4D;  /* Active 상태 */
--color-primary-800: #003333;  /* 강조 */
--color-primary-900: #134E4A;  /* 가장 진한 톤 (현재 strong) */

/* 사용 비율 */
/* Primary 500: 60% (버튼, 링크, 강조) */
/* Primary 600: 20% (Hover) */
/* Primary 700: 10% (Active) */
/* Primary 900: 10% (Footer, 강조 배경) */
```

### 2.2 서브 컬러 (Neutral)

**개선안:**
```css
/* Neutral Palette - 미니멀 & 고급스러움 */
--color-neutral-50: #FAFAFA;   /* 가장 연한 배경 */
--color-neutral-100: #F5F5F5;
--color-neutral-200: #E5E5E5;  /* Border */
--color-neutral-300: #D4D4D4;
--color-neutral-400: #A3A3A3;
--color-neutral-500: #737373;  /* 보조 텍스트 */
--color-neutral-600: #525252;  /* 본문 텍스트 */
--color-neutral-700: #404040;  /* 강조 텍스트 */
--color-neutral-800: #262626;  /* 제목 */
--color-neutral-900: #171717;  /* 가장 진한 텍스트 */

/* 현재 사용 중인 컬러와 매핑 */
--color-neutral-bg: #FAFAFA;      /* 기존 #FFFBF7 대체 */
--color-neutral-surface: #F5F5F5; /* 기존 #F5F1EC 대체 */
--color-neutral-text: #525252;   /* 기존 #4B5563 대체 */
--color-neutral-strong: #171717;  /* 기존 #1F2933 대체 */
```

### 2.3 포인트 컬러 (Accent)

```css
/* Accent Colors - 신뢰감 & 전문성 */
--color-accent-success: #10B981;  /* 성공, 완료 */
--color-accent-warning: #F59E0B;  /* 주의, 진행중 */
--color-accent-error: #EF4444;    /* 오류, 취소 */
--color-accent-info: #3B82F6;     /* 정보, 안내 */

/* 건설 업계 특화 컬러 */
--color-accent-concrete: #9CA3AF; /* 콘크리트 톤 */
--color-accent-steel: #6B7280;    /* 철강 톤 */
--color-accent-wood: #92400E;     /* 목재 톤 (선택적) */
```

### 2.4 배색 비율 (Color Ratio)

**신뢰감 & 안정감 중심 배색:**
```
- Neutral (흰색/회색): 70% (배경, 카드)
- Primary (Teal): 20% (버튼, 강조, 링크)
- Accent: 5% (상태 표시, 포인트)
- Text (검정/회색): 5% (텍스트)
```

---

## 3. 여백 & 레이아웃

### 3.1 8pt Spacing System

```css
/* 8pt 기준 Spacing Scale */
--space-0: 0;
--space-1: 0.125rem;   /* 2px */
--space-2: 0.25rem;    /* 4px */
--space-3: 0.375rem;   /* 6px */
--space-4: 0.5rem;     /* 8px - 기본 단위 */
--space-5: 0.625rem;   /* 10px */
--space-6: 0.75rem;    /* 12px */
--space-8: 1rem;       /* 16px */
--space-10: 1.25rem;   /* 20px */
--space-12: 1.5rem;    /* 24px */
--space-16: 2rem;      /* 32px */
--space-20: 2.5rem;    /* 40px */
--space-24: 3rem;      /* 48px */
--space-32: 4rem;      /* 64px */
--space-40: 5rem;      /* 80px */
--space-48: 6rem;      /* 96px */
--space-64: 8rem;      /* 128px */
```

### 3.2 섹션 간 여백 규칙

```css
/* 섹션 패딩 */
--section-padding-y-sm: 4rem;    /* 64px - 작은 섹션 */
--section-padding-y-md: 5rem;    /* 80px - 기본 섹션 */
--section-padding-y-lg: 6rem;    /* 96px - 큰 섹션 (Hero) */
--section-padding-y-xl: 8rem;    /* 128px - 매우 큰 섹션 */

/* 섹션 간격 */
--section-gap-sm: 2rem;   /* 32px */
--section-gap-md: 3rem;   /* 48px */
--section-gap-lg: 4rem;   /* 64px */
```

### 3.3 컨테이너 패딩

```css
/* 컨테이너 패딩 */
--container-padding-x-sm: 1rem;   /* 16px - 모바일 */
--container-padding-x-md: 1.5rem; /* 24px - 태블릿 */
--container-padding-x-lg: 2rem;   /* 32px - 데스크톱 */
--container-padding-x-xl: 3rem;   /* 48px - 큰 화면 */
```

### 3.4 카드형 레이아웃

```css
/* 카드 패딩 */
--card-padding-sm: 1.5rem;  /* 24px - 작은 카드 */
--card-padding-md: 2rem;    /* 32px - 기본 카드 */
--card-padding-lg: 2.5rem;  /* 40px - 큰 카드 */

/* 카드 간격 */
--card-gap-sm: 1rem;   /* 16px */
--card-gap-md: 1.5rem; /* 24px */
--card-gap-lg: 2rem;   /* 32px */
```

### 3.5 Grid 구조

```css
/* Grid Gap */
--grid-gap-sm: 1rem;   /* 16px */
--grid-gap-md: 1.5rem; /* 24px */
--grid-gap-lg: 2rem;   /* 32px */

/* Grid Columns (반응형) */
/* 모바일: 1열 */
/* 태블릿: 2열 */
/* 데스크톱: 3-4열 */
```

---

## 4. UI 컴포넌트 디자인

### 4.1 버튼

#### Primary Button
```css
.btn-primary {
  /* 크기 */
  padding: 0.75rem 1.5rem;  /* 12px 24px */
  min-height: 2.75rem;       /* 44px - 터치 최적화 */
  
  /* 타이포그래피 */
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  
  /* 색상 */
  background-color: var(--color-primary-500);
  color: white;
  
  /* 스타일 */
  border-radius: 0.5rem;     /* 8px */
  border: none;
  
  /* 효과 */
  box-shadow: 0 1px 3px rgba(0, 128, 128, 0.2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.3);
  transform: translateY(-1px);
}

.btn-primary:active {
  background-color: var(--color-primary-700);
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 128, 128, 0.2);
}
```

#### Secondary Button
```css
.btn-secondary {
  padding: 0.75rem 1.5rem;
  min-height: 2.75rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: white;
  color: var(--color-primary-500);
  border: 1.5px solid var(--color-primary-500);
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background-color: var(--color-primary-50);
  border-color: var(--color-primary-600);
}
```

### 4.2 상담/문의 폼

```css
.form-input {
  /* 크기 */
  padding: 0.875rem 1rem;  /* 14px 16px */
  min-height: 2.75rem;      /* 44px */
  
  /* 타이포그래피 */
  font-size: 1rem;
  line-height: 1.5;
  
  /* 색상 */
  background-color: white;
  color: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-200);
  
  /* 스타일 */
  border-radius: 0.5rem;
  
  /* 효과 */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.1);
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-neutral-700);
  margin-bottom: 0.5rem;
  display: block;
}
```

### 4.3 시공 사례 카드

```css
.portfolio-card {
  /* 레이아웃 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  /* 스타일 */
  background-color: white;
  border-radius: 1rem;      /* 16px */
  border: 1px solid var(--color-neutral-200);
  
  /* 효과 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.portfolio-card:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.portfolio-card-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.portfolio-card-content {
  padding: 1.5rem;
}

.portfolio-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-neutral-900);
  margin-bottom: 0.5rem;
}

.portfolio-card-desc {
  font-size: 0.875rem;
  color: var(--color-neutral-600);
  margin-bottom: 0.75rem;
}

.portfolio-card-tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary-700);
  background-color: var(--color-primary-50);
  border-radius: 0.375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 4.4 아이콘 스타일

```css
/* 아이콘 크기 */
--icon-size-xs: 1rem;    /* 16px */
--icon-size-sm: 1.25rem; /* 20px */
--icon-size-md: 1.5rem;  /* 24px */
--icon-size-lg: 2rem;    /* 32px */
--icon-size-xl: 2.5rem;  /* 40px */

/* 아이콘 색상 */
.icon-primary {
  color: var(--color-primary-500);
}

.icon-neutral {
  color: var(--color-neutral-600);
}

.icon-white {
  color: white;
}
```

### 4.5 Hover/Active 효과

```css
/* Hover 효과 - 미세한 움직임 */
.hover-lift {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Active 효과 - 눌림 피드백 */
.active-press {
  transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

.active-press:active {
  transform: scale(0.98);
}
```

---

## 5. 시각적 위계

### 5.1 히어로 섹션 구조

```css
.hero-section {
  /* 레이아웃 */
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  
  /* 배경 */
  background: linear-gradient(135deg, var(--color-primary-900) 0%, var(--color-primary-700) 100%);
  
  /* 오버레이 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
  }
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 48rem;  /* 768px */
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

### 5.2 CTA 강조 방식

```css
/* Primary CTA */
.cta-primary {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: var(--color-primary-500);
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.4);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary:hover {
  background-color: var(--color-primary-600);
  box-shadow: 0 6px 20px rgba(0, 128, 128, 0.5);
  transform: translateY(-2px);
}

/* Secondary CTA */
.cta-secondary {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: white;
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-secondary:hover {
  background-color: var(--color-primary-50);
}
```

### 5.3 중요 정보 배치 기준

```css
/* 정보 위계 */
.info-primary {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-neutral-900);
}

.info-secondary {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-neutral-600);
}

.info-tertiary {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-neutral-500);
}
```

---

## 6. CSS 리팩토링 예시

### 6.1 CSS 변수 설계

```css
:root {
  /* ============================================
     타이포그래피 변수
     ============================================ */
  --font-family-base: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-family-number: 'Inter', monospace;
  
  /* 제목 */
  --font-size-h1: 3rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.25rem;
  
  /* 본문 */
  --font-size-body-lg: 1.125rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.875rem;
  
  /* 라벨 */
  --font-size-label: 0.75rem;
  
  /* Line Height */
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.04em;
  --letter-spacing-normal: -0.01em;
  --letter-spacing-wide: 0.05em;
  
  /* ============================================
     색상 변수
     ============================================ */
  --color-primary-500: #008080;
  --color-primary-600: #006666;
  --color-primary-700: #004D4D;
  --color-primary-900: #134E4A;
  --color-primary-50: #E6F7F5;
  
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-900: #171717;
  
  /* ============================================
     Spacing 변수 (8pt 기준)
     ============================================ */
  --space-4: 0.5rem;    /* 8px */
  --space-8: 1rem;      /* 16px */
  --space-12: 1.5rem;   /* 24px */
  --space-16: 2rem;     /* 32px */
  --space-24: 3rem;     /* 48px */
  --space-32: 4rem;     /* 64px */
  --space-40: 5rem;     /* 80px */
  --space-48: 6rem;     /* 96px */
  
  /* ============================================
     Border Radius
     ============================================ */
  --radius-sm: 0.375rem;  /* 6px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  
  /* ============================================
     Shadow
     ============================================ */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.2);
  
  /* ============================================
     Transition
     ============================================ */
  --transition-base: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 6.2 Typography Class 예시

```css
/* 제목 클래스 */
.heading-1 {
  font-size: var(--font-size-h1);
  font-weight: 800;
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-neutral-900);
}

.heading-2 {
  font-size: var(--font-size-h2);
  font-weight: 700;
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-neutral-900);
}

/* 본문 클래스 */
.body-large {
  font-size: var(--font-size-body-lg);
  font-weight: 400;
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-neutral-600);
}

.body {
  font-size: var(--font-size-body);
  font-weight: 400;
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);
  color: var(--color-neutral-600);
}

/* 라벨 클래스 */
.label {
  font-size: var(--font-size-label);
  font-weight: 600;
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-neutral-700);
}
```

### 6.3 Spacing Utility 예시

```css
/* Padding Utilities */
.p-4 { padding: var(--space-4); }
.p-8 { padding: var(--space-8); }
.p-12 { padding: var(--space-12); }
.p-16 { padding: var(--space-16); }

.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
.px-8 { padding-left: var(--space-8); padding-right: var(--space-8); }
.px-12 { padding-left: var(--space-12); padding-right: var(--space-12); }

.py-4 { padding-top: var(--space-4); padding-bottom: var(--space-4); }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
.py-16 { padding-top: var(--space-16); padding-bottom: var(--space-16); }

/* Margin Utilities */
.m-4 { margin: var(--space-4); }
.m-8 { margin: var(--space-8); }
.m-12 { margin: var(--space-12); }
.m-16 { margin: var(--space-16); }

.mb-4 { margin-bottom: var(--space-4); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-12 { margin-bottom: var(--space-12); }
.mb-16 { margin-bottom: var(--space-16); }

/* Gap Utilities */
.gap-4 { gap: var(--space-4); }
.gap-8 { gap: var(--space-8); }
.gap-12 { gap: var(--space-12); }
.gap-16 { gap: var(--space-16); }
```

---

## 적용 우선순위

1. **1단계**: 타이포그래피 시스템 적용 (폰트, 크기, 간격)
2. **2단계**: 컬러 시스템 개선 (Neutral 색상 정제)
3. **3단계**: Spacing 시스템 통일 (8pt 기준)
4. **4단계**: UI 컴포넌트 개선 (버튼, 폼, 카드)
5. **5단계**: 시각적 위계 정리 (Hero, CTA)
