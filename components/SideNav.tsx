"use client";

import { useEffect, useState } from "react";

/* 몇 줄짜리 섹션(Education · Certifications · Connect)은 스크롤로 금방
   보이므로 내비에서 뺐다. */
export const SECTIONS = [
  ["about", "About"],
  ["awards", "Awards"],
  ["papers", "Papers"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["activity", "Activity"],
  ["skills", "Skills"],
] as const;

/* 우측 고정 내비. 화면 위에서 30% 지점(판정선)보다 위로 올라간 섹션 중
   마지막 것을 활성으로 표시한다. 스크롤 위치만으로 정하므로 오르내리는
   방향과 관계없이 같은 위치에서는 같은 항목이 켜진다. */
export default function SideNav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      // 마지막 섹션은 판정선까지 올라오기 전에 스크롤이 끝나므로, 바닥이면 마지막으로
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setActive(SECTIONS[SECTIONS.length - 1][0]);
        return;
      }
      const line = window.innerHeight * 0.3;
      let current: string = SECTIONS[0][0];
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="sidenav" aria-label="Sections">
      {SECTIONS.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}
