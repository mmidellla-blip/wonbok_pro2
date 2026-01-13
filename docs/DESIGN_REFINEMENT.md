# 디자인 정제 가이드 (SaaS 수준 개선안)

## 🎯 개선 목표
현재 디자인의 투박함을 제거하고, 세련된 SaaS 서비스 수준의 UI로 개선
- 텍스트 내용은 변경하지 않음
- 폰트, 여백, 정렬, UI 디테일 중심 개선

## 📐 타이포그래피 시스템 개선

### 현재 문제점
- 폰트 크기가 과도하게 큼 (text-6xl 등)
- 일관성 없는 letter-spacing
- line-height가 일관되지 않음
- 시각적 위계가 불명확

### 개선안: 정제된 타이포그래피 스케일

```css
/* 헤딩 스케일 (더 정제된 크기) */
--font-size-h1: 2.5rem;      /* 40px - Hero 메인 타이틀 */
--font-size-h2: 2rem;         /* 32px - 섹션 타이틀 */
--font-size-h3: 1.5rem;       /* 24px - 서브 섹션 */
--font-size-h4: 1.25rem;      /* 20px - 카드 타이틀 */
--font-size-h5: 1.125rem;     /* 18px - 작은 헤딩 */
--font-size-h6: 1rem;         /* 16px - 최소 헤딩 */

/* 본문 스케일 */
--font-size-body-lg: 1.125rem;  /* 18px - 강조 본문 */
--font-size-body: 1rem;          /* 16px - 기본 본문 */
--font-size-body-sm: 0.875rem;   /* 14px - 보조 텍스트 */
--font-size-caption: 0.75rem;     /* 12px - 캡션 */

/* Letter Spacing (더 정밀한 조정) */
--letter-spacing-tight: -0.03em;   /* 헤딩 */
--letter-spacing-normal: -0.01em;  /* 본문 */
--letter-spacing-wide: 0.05em;      /* 라벨, 캡션 */

/* Line Height (가독성 최적화) */
--line-height-tight: 1.2;      /* 헤딩 */
--line-height-normal: 1.5;      /* 본문 */
--line-height-relaxed: 1.75;   /* 긴 본문 */
```

### 적용 예시
```tsx
// Before
<h1 className="text-4xl md:text-6xl font-black">제목</h1>

// After
<h1 className="text-[2.5rem] md:text-[2.75rem] font-black leading-[1.2] tracking-[-0.03em]">제목</h1>
```

## 📏 Spacing 시스템 개선

### 현재 문제점
- spacing이 일관되지 않음 (gap-6, gap-8, gap-12 혼재)
- 섹션 padding이 과도함 (py-20, py-32)
- 요소 간 간격이 불규칙

### 개선안: 4px 기준 미세 조정 시스템

```css
/* Spacing Scale (4px 기준) */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */

/* 섹션 Spacing (더 정제된 값) */
--section-padding-y-sm: 4rem;    /* 64px - 작은 섹션 */
--section-padding-y-md: 5rem;     /* 80px - 기본 섹션 */
--section-padding-y-lg: 6rem;     /* 96px - 큰 섹션 */

/* 컨테이너 Spacing */
--container-padding-x: 1.5rem;   /* 24px - 모바일 */
--container-padding-x-md: 2rem;   /* 32px - 태블릿 */
--container-padding-x-lg: 3rem;  /* 48px - 데스크톱 */
```

### 적용 예시
```tsx
// Before
<section className="py-20 md:py-32">
  <div className="container mx-auto px-6">
    <div className="mb-16 md:mb-24">
      <h2 className="mb-10">제목</h2>
    </div>
  </div>
</section>

// After
<section className="py-16 md:py-20 lg:py-24">
  <div className="container mx-auto px-6 md:px-8 lg:px-12">
    <div className="mb-12 md:mb-16">
      <h2 className="mb-6 md:mb-8">제목</h2>
    </div>
  </div>
</section>
```

## 🎨 시각적 위계 개선

### 1. 색상 위계 명확화
```css
/* 텍스트 색상 위계 */
--text-primary: #1F2933;        /* 가장 진한 텍스트 (헤딩) */
--text-secondary: #4B5563;      /* 기본 본문 */
--text-tertiary: #6B7280;       /* 보조 텍스트 */
--text-quaternary: #9CA3AF;    /* 비활성 텍스트 */

/* 배경 위계 */
--bg-primary: #FFFFFF;          /* 메인 배경 */
--bg-secondary: #F9FAFB;        /* 섹션 배경 */
--bg-tertiary: #F3F4F6;        /* 카드 배경 */
```

### 2. Border Radius 정제
```css
/* Border Radius (더 작고 정제된 값) */
--radius-sm: 0.375rem;    /* 6px - 작은 요소 */
--radius-md: 0.5rem;      /* 8px - 기본 */
--radius-lg: 0.75rem;     /* 12px - 카드 */
--radius-xl: 1rem;        /* 16px - 큰 카드 */
--radius-2xl: 1.25rem;    /* 20px - 모달 */
--radius-full: 9999px;    /* 완전한 원형 */
```

### 3. Shadow 정제
```css
/* Shadow (더 섬세한 그림자) */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

## 🎯 UI 디테일 개선

### 1. 버튼 스타일 정제
```css
/* 버튼 높이 표준화 */
--button-height-sm: 2rem;    /* 32px */
--button-height-md: 2.5rem;  /* 40px */
--button-height-lg: 3rem;    /* 48px */

/* 버튼 패딩 */
--button-padding-x-sm: 1rem;   /* 16px */
--button-padding-x-md: 1.5rem; /* 24px */
--button-padding-x-lg: 2rem;   /* 32px */
```

### 2. 카드 스타일 정제
```css
/* 카드 패딩 */
--card-padding-sm: 1.5rem;  /* 24px */
--card-padding-md: 2rem;    /* 32px */
--card-padding-lg: 2.5rem;  /* 40px */

/* 카드 간격 */
--card-gap-sm: 1rem;   /* 16px */
--card-gap-md: 1.5rem; /* 24px */
--card-gap-lg: 2rem;   /* 32px */
```

### 3. Transition 정제
```css
/* Transition (더 부드러운 애니메이션) */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

## 📐 정렬 시스템

### 1. 그리드 시스템
```css
/* 그리드 간격 표준화 */
--grid-gap-sm: 1rem;   /* 16px */
--grid-gap-md: 1.5rem; /* 24px */
--grid-gap-lg: 2rem;   /* 32px */
```

### 2. 컨테이너 최대 너비
```css
/* 컨테이너 너비 */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## 🎨 구체적 개선 사항

### Hero 섹션
- 타이틀 크기: text-6xl → text-[2.5rem] md:text-[2.75rem]
- 여백: mb-8 → mb-6 md:mb-8
- 버튼: py-4 → py-3 md:py-3.5

### 섹션 헤더
- 타이틀 크기: text-5xl → text-[2rem] md:text-[2.25rem]
- 여백: mb-10 → mb-6 md:mb-8
- 라벨 크기: text-[10px] → text-[0.6875rem] (11px)

### 카드
- 패딩: p-8 → p-6 md:p-8
- Border radius: rounded-3xl → rounded-xl md:rounded-2xl
- 간격: gap-6 → gap-4 md:gap-6

### 버튼
- 높이: py-4 → py-3 (더 정제된 높이)
- Border radius: rounded-xl → rounded-lg
- Shadow: shadow-xl → shadow-md (더 섬세한 그림자)
