# cv — CHOI DOIL portfolio

Next.js (App Router, TypeScript) 로 서빙하는 개인 포트폴리오.
정적 HTML 버전은 `_to_delete/static-v2/` 에 백업되어 있습니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## 구조

```
app/
  layout.tsx      <html> 골격 · 메타데이터 · 저장된 언어/테마를 첫 페인트 전에 적용하는 부트 스크립트
  page.tsx        본문 (한/일 병기 텍스트, 섹션들)
  base.css        색 토큰 · 리셋 · 타이포 · 형광펜
  layout.css      페이지 골격 · 뱃지 · 타임라인 · 스크린샷 카드 · 우측 내비
  print.css       ⌘+P 인쇄용 (@media print)
  icon.svg        파비콘
components/
  Controls.tsx    日本語 / 한국어 · Light / Dark 토글 (localStorage: cv-lang, cv-theme)
  SideNav.tsx     우측 고정 섹션 내비 (IntersectionObserver 로 활성 표시)
public/assets/    프로젝트 스크린샷
```

## 언어 / 테마 동작

- 본문의 한/일 텍스트는 `lang="ja"` / `lang="ko"` span 으로 나란히 들어 있고,
  `<html data-lang>` 에 따라 CSS 가 한쪽을 숨깁니다. 기본은 일본어.
- 테마는 `<html data-theme>` 로 색 토큰(`--bg`, `--fg`, `--hl` …)이 바뀝니다. 기본은 라이트.
- 두 값은 `layout.tsx` 의 인라인 스크립트가 하이드레이션 전에 적용하므로 새로고침해도 깜빡이지 않습니다.

## 배포

Vercel 에 그대로 올리면 됩니다. 정적 파일만 필요하면 `next.config.ts` 에
`output: "export"` 를 추가하고 `npm run build` 후 `out/` 을 배포하세요.
