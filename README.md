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
  articles/       글 목록 · 카테고리별 목록 · 글 본문(정적) · locked/ 잠긴 글(서버), articles.css
  api/articles/unlock/  잠긴 글 비밀번호 확인 → 쿠키 발급
components/
  TopBar.tsx      상단 바 (서명 로고 · Articles · GitHub · Tistory · 언어/테마)
  Logo.tsx        "doil" 서명 SVG
  ArticleIndex.tsx 글 목록 (카테고리 탭 + 연도별)
  ArticleView.tsx  글 본문 · 비밀번호 입력 폼
  Controls.tsx    日本語 / 한국어 · Light / Dark 토글 (localStorage: cv-lang, cv-theme)
  SideNav.tsx     우측 고정 섹션 내비 (IntersectionObserver 로 활성 표시)
content/articles/ 글 원본 (MDX)
lib/articles.ts   글 읽기 · 카테고리 정의
lib/unlock.ts     잠긴 글 비밀번호 확인 (ARTICLES_PASSWORD)
public/assets/    프로젝트 스크린샷
```

## 언어 / 테마 동작

- 본문의 한/일 텍스트는 `lang="ja"` / `lang="ko"` span 으로 나란히 들어 있고,
  `<html data-lang>` 에 따라 CSS 가 한쪽을 숨깁니다. 기본은 일본어.
- 테마는 `<html data-theme>` 로 색 토큰(`--bg`, `--fg`, `--hl` …)이 바뀝니다. 기본은 라이트.
- 두 값은 `layout.tsx` 의 인라인 스크립트가 하이드레이션 전에 적용하므로 새로고침해도 깜빡이지 않습니다.

## 글 쓰기 (Articles)

글 하나 = `content/articles/` 아래 폴더 하나. 폴더 이름이 주소가 됩니다 (`/articles/<폴더 이름>`).

```
content/articles/
  login-security-checklist/
    ja.mdx      일본어 본문
    ko.mdx      한국어 본문 (한쪽만 있어도 됨)
public/images/articles/login-security-checklist/
    diagram.png → 본문에서 ![설명](/images/articles/login-security-checklist/diagram.png)
```

각 `.mdx` 파일 맨 위에 글 정보를 적습니다.

```mdx
---
title: ログイン実装で気をつけること
date: 2026-10-01
category: engineering        # prompt-injection | nyaki | engineering
summary: 한 줄 요약 (선택)
draft: true                  # true 면 npm run dev 에서만 보이고 배포에는 안 나옴
---

본문은 마크다운으로 씁니다.
```

### 비밀번호로 잠그기

작성 중인 글을 특정 사람에게만 보여줄 때 `locked: true` 를 적습니다.

- 목록에는 🔒 와 함께 제목만 보이고, 본문은 비밀번호를 입력해야 보입니다 (주소: `/articles/locked/<폴더 이름>`).
- 비밀번호는 환경변수 `ARTICLES_PASSWORD` 에 둡니다.
  - 배포: Vercel → Project → Settings → Environment Variables 에 추가 후 재배포
  - 로컬: 프로젝트 루트의 `.env.local` 에 `ARTICLES_PASSWORD=...` (git 에 올라가지 않음)
- 한 번 입력하면 30일 동안 모든 잠긴 글이 열립니다. 비밀번호를 바꾸면 기존 입력은 무효가 됩니다.
- 저장소가 public 이면 GitHub 에서 원본 파일이 보이므로, 잠긴 글은 저장소를 private 으로 두거나 푸시하지 않아야 합니다.

- 카테고리 목록은 `lib/articles.ts` 의 `CATEGORIES` 에서 추가·수정합니다.
- 카테고리별 목록 주소: `/articles/category/<카테고리 id>`
- 형식 견본: `content/articles/sample-article/` (draft)
- 올리기: `draft: false` 로 바꾸고 `npm run dev` 로 확인한 뒤 커밋·푸시하면 Vercel 이 배포합니다.

## 배포

Vercel 에 그대로 올리면 됩니다. 정적 파일만 필요하면 `next.config.ts` 에
`output: "export"` 를 추가하고 `npm run build` 후 `out/` 을 배포하세요.
