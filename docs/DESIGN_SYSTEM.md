# 디자인 시스템 가이드

## 개요
원복프로 웹사이트의 디자인 시스템 문서입니다. 일관된 UI/UX를 위한 가이드라인을 제공합니다.

## 색상 시스템

### Primary Colors
- `primary` (#008080): 메인 브랜드 컬러
- `primary-soft` (#E6F2F2): 연한 배경용
- `primary-strong` (#134E4A): 강조용

### Neutral Colors
- `neutral-bg` (#FFFBF7): 페이지 배경
- `neutral-surface` (#F5F1EC): 카드/컨테이너 배경
- `neutral-text` (#4B5563): 본문 텍스트
- `neutral-strong` (#1F2933): 제목/강조 텍스트

### Semantic Colors
- `semantic-success` (#10B981): 성공 상태
- `semantic-warning` (#F59E0B): 경고 상태
- `semantic-error` (#EF4444): 오류 상태
- `semantic-info` (#3B82F6): 정보 상태

## 타이포그래피

### 폰트 패밀리
- 기본: `Pretendard`, `-apple-system`, `BlinkMacSystemFont`, `system-ui`, `Roboto`, `sans-serif`

### 폰트 크기
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px)
- `6xl`: 3.75rem (60px)

### 폰트 웨이트
- `normal`: 400
- `medium`: 500
- `bold`: 700
- `black`: 900

## 간격 시스템

8px 기준 그리드 시스템을 사용합니다.

- `xs`: 4px (0.25rem)
- `sm`: 8px (0.5rem)
- `md`: 16px (1rem)
- `lg`: 24px (1.5rem)
- `xl`: 32px (2rem)
- `2xl`: 48px (3rem)
- `3xl`: 64px (4rem)

## 그림자 시스템

- `shadow-sm`: 작은 그림자
- `shadow-md`: 기본 그림자
- `shadow-lg`: 큰 그림자
- `shadow-xl`: 매우 큰 그림자
- `shadow-primary`: Primary 컬러 그림자

## 반응형 브레이크포인트

- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 컴포넌트 가이드

### Button
```tsx
import Button from '@ui/Button';

<Button variant="primary" size="md">클릭</Button>
<Button variant="secondary">보조 버튼</Button>
<Button variant="ghost">고스트 버튼</Button>
```

### Card
```tsx
import Card from '@ui/Card';

<Card hover>
  카드 내용
</Card>
```

### Input
```tsx
import Input from '@ui/Input';

<Input
  label="이름"
  placeholder="이름을 입력하세요"
  required
  error="필수 입력 항목입니다"
/>
```

### Section
```tsx
import Section from '@ui/Section';

<Section
  id="section-id"
  label="Label"
  title="제목"
  description="설명"
  background="white"
>
  섹션 내용
</Section>
```

## 접근성 가이드

### ARIA 속성
- 모든 인터랙티브 요소에 적절한 `aria-label` 또는 `aria-labelledby` 사용
- 폼 요소에 `aria-describedby`로 에러 메시지 연결
- 모달/드롭다운에 `aria-expanded`, `aria-controls` 사용

### 키보드 네비게이션
- 모든 인터랙티브 요소는 키보드로 접근 가능해야 함
- Tab 순서가 논리적이어야 함
- 포커스 스타일이 명확해야 함

### 색상 대비
- WCAG AA 기준 준수 (4.5:1 이상)
- 텍스트와 배경의 대비 확인

## 성능 최적화

### 이미지
- WebP 포맷 우선 사용
- 적절한 크기로 리사이즈
- Lazy loading 적용

### 폰트
- Preconnect 사용
- 폰트 디스플레이 전략 설정

### 번들 크기
- 코드 스플리팅
- 불필요한 의존성 제거
- Tree shaking 활성화
