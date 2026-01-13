# 리팩토링 가이드

## 개선 사항 요약

### 1. CSS 구조 개선
- ✅ Tailwind CSS CDN 제거 → PostCSS + Tailwind 설치
- ✅ 디자인 토큰을 CSS 변수로 체계화
- ✅ 컴포넌트 스타일을 `@layer components`로 분리
- ✅ 유틸리티 클래스 체계화

### 2. 디자인 시스템 구축
- ✅ 색상 시스템 확장 (Primary, Neutral, Semantic)
- ✅ 타이포그래피 시스템 구축
- ✅ 간격 시스템 (8px 기준)
- ✅ 그림자 시스템
- ✅ 애니메이션 시스템

### 3. 반응형 표준화
- ✅ 브레이크포인트 통일
- ✅ 반응형 유틸리티 함수 제공
- ✅ 모바일 우선 접근 방식

### 4. 접근성 개선
- ✅ ARIA 속성 가이드
- ✅ 키보드 네비게이션 유틸리티
- ✅ 포커스 스타일 개선
- ✅ 스크린 리더 지원

### 5. 성능 최적화
- ✅ 이미지 지연 로딩
- ✅ 디바운스/쓰로틀 유틸리티
- ✅ 빌드 최적화 설정
- ✅ 코드 스플리팅

### 6. 재사용 가능한 컴포넌트
- ✅ Button 컴포넌트
- ✅ Card 컴포넌트
- ✅ Input 컴포넌트
- ✅ Textarea 컴포넌트
- ✅ Section 컴포넌트

## 마이그레이션 가이드

### 기존 컴포넌트 업데이트 방법

1. **스타일 클래스 업데이트**
   ```tsx
   // Before
   <button className="px-8 py-4 bg-primary text-white rounded-xl">
   
   // After
   <Button variant="primary" size="lg">
   ```

2. **섹션 컴포넌트 사용**
   ```tsx
   // Before
   <section className="py-20 md:py-32 bg-white">
     <div className="container mx-auto px-6">
       <h2>제목</h2>
     </div>
   </section>
   
   // After
   <Section id="section-id" title="제목" background="white">
     내용
   </Section>
   ```

3. **입력 필드 개선**
   ```tsx
   // Before
   <input className="w-full px-4 py-3 rounded-xl" />
   
   // After
   <Input label="이름" required error={errors.name} />
   ```

## 다음 단계

1. 기존 컴포넌트를 새 UI 컴포넌트로 점진적 교체
2. 접근성 검사 도구로 테스트
3. 성능 측정 및 최적화
4. 브라우저 호환성 테스트
