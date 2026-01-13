# 프리미엄 디자인 시스템 구현 가이드

## 적용 완료 사항

### 1. 타이포그래피 시스템
- ✅ Inter 폰트 추가 (영문, 숫자용)
- ✅ Pretendard + Inter 조합 적용
- ✅ 반응형 폰트 크기 시스템 구축
- ✅ Letter spacing, line height 최적화

### 2. 컬러 시스템
- ✅ Primary Palette 확장 (50-900)
- ✅ Neutral Palette 정제 (미니멀 & 고급스러움)
- ✅ Legacy 지원 유지 (기존 컴포넌트 호환)

### 3. Spacing 시스템
- ✅ 8pt 기준 Spacing Scale 구축
- ✅ 섹션 패딩 표준화
- ✅ 컨테이너 패딩 반응형 적용

### 4. UI 컴포넌트
- ✅ 버튼 스타일 개선 (터치 최적화)
- ✅ 카드 스타일 정제
- ✅ 입력 필드 스타일 개선

## 다음 단계: 컴포넌트별 적용

### Hero 섹션 개선
```tsx
// 적용할 스타일
- Hero 타이틀: font-size-h1-lg (64px)
- Hero 설명: body-lg (18px)
- CTA 버튼: btn-primary (44px 높이)
- Badge: label 스타일 + backdrop-blur
```

### 카드 컴포넌트 개선
```tsx
// Portfolio Card
- Border radius: 16px (radius-xl)
- Padding: 32px (card-padding-md)
- Shadow: shadow-sm → shadow-md (hover)
- Hover: translateY(-2px)
```

### 폼 컴포넌트 개선
```tsx
// Inquiry Form
- Input height: 44px (터치 최적화)
- Border: neutral-200
- Focus: primary-500 + shadow
- Label: label 스타일
```

## CSS 변수 사용 예시

### 컴포넌트에서 사용
```tsx
// Tailwind 클래스로 사용
<div className="p-8 bg-white rounded-xl shadow-sm">
  <h2 className="text-2xl font-bold text-neutral-900">
    제목
  </h2>
</div>

// 또는 CSS 변수 직접 사용
<div style={{
  padding: 'var(--space-16)',
  backgroundColor: 'var(--color-neutral-50)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-sm)'
}}>
```

## 디자인 토큰 참조

모든 디자인 토큰은 `src/styles/main.css`의 `:root`에 정의되어 있습니다.

### 주요 토큰
- `--color-primary-500`: 메인 컬러
- `--color-neutral-900`: 제목 텍스트
- `--color-neutral-600`: 본문 텍스트
- `--space-8`: 기본 간격 (16px)
- `--radius-md`: 기본 border radius (8px)
- `--shadow-md`: 기본 shadow
- `--transition-base`: 기본 transition
