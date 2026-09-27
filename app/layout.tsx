import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./base.css";
import "./layout.css";
import "./print.css";

export const metadata: Metadata = {
  title: "CHOI DOIL — Backend Engineer",
  description:
    "Backend engineer portfolio of Choi Doil (최도일). Spring Boot / FastAPI / infra.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/*
 * 저장된 언어·테마를 첫 페인트 전에 <html> 에 적용한다.
 * 서버는 항상 ja / light 로 렌더하므로, 클라이언트에서 값이 다르면
 * 하이드레이션 경고가 나는데 그건 suppressHydrationWarning 으로 막는다.
 * (LangSwitch / ThemeToggle 컴포넌트가 같은 키를 읽고 쓴다)
 */
const bootScript = `
(function () {
  try {
    var r = document.documentElement;
    var l = localStorage.getItem('cv-lang');
    var t = localStorage.getItem('cv-theme');
    if (l === 'ko' || l === 'ja') { r.setAttribute('data-lang', l); r.setAttribute('lang', l); }
    if (t === 'light' || t === 'dark') { r.setAttribute('data-theme', t); }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" data-lang="ja" data-theme="light" suppressHydrationWarning>
      <head>
        <Script id="cv-boot" strategy="beforeInteractive">
          {bootScript}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
