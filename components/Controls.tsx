"use client";

import { useEffect, useState } from "react";

type Lang = "ja" | "ko";
type Theme = "dark" | "light";

const LANG_KEY = "cv-lang";
const THEME_KEY = "cv-theme";

function readAttr<T extends string>(name: string, fallback: T): T {
  if (typeof document === "undefined") return fallback;
  return (document.documentElement.getAttribute(name) as T) || fallback;
}

/* 日本語 / 한국어 세그먼트 + Light / Dark 토글.
   실제 전환은 <html> 의 data-lang / data-theme 속성으로만 이뤄지고
   (CSS 가 [lang] 을 숨기고 색 토큰을 바꾼다), 여기서는 그 속성과
   localStorage 만 관리한다. 초기값은 layout 의 부트 스크립트가 이미
   적용해 둔 속성에서 읽는다. */
export default function Controls() {
  const [lang, setLang] = useState<Lang>("ja");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setLang(readAttr<Lang>("data-lang", "ja"));
    setTheme(readAttr<Theme>("data-theme", "dark"));
  }, []);

  function applyLang(next: Lang) {
    const r = document.documentElement;
    r.setAttribute("data-lang", next);
    r.setAttribute("lang", next);
    setLang(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {}
  }

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  return (
    <div className="controls">
      <div className="seg" role="group" aria-label="Language">
        <button
          className="btn"
          type="button"
          lang="ja"
          aria-pressed={lang === "ja"}
          onClick={() => applyLang("ja")}
        >
          日本語
        </button>
        <span className="seg-sep" aria-hidden="true">
          /
        </span>
        <button
          className="btn"
          type="button"
          lang="ko"
          aria-pressed={lang === "ko"}
          onClick={() => applyLang("ko")}
        >
          한국어
        </button>
      </div>
      <button
        className="btn"
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={theme === "dark"}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
