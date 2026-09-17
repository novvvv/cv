"use client";

import { useEffect, useState } from "react";

export const SECTIONS = [
  ["about", "About"],
  ["awards", "Awards"],
  ["papers", "Papers"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["activity", "Activity"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["skills", "Skills"],
  ["connect", "Connect"],
] as const;

/* 우측 고정 내비. 화면 위쪽 25~35% 선을 지나는 섹션을 활성으로 표시한다.
   #about 은 h1 이라 높이가 작으니 .intro 도 함께 관찰한다. */
export default function SideNav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const opts: IntersectionObserverInit = {
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    };

    const io = new IntersectionObserver((entries) => {
      let best: IntersectionObserverEntry | null = null;
      for (const e of entries) {
        if (
          e.isIntersecting &&
          (!best || e.boundingClientRect.top < best.boundingClientRect.top)
        )
          best = e;
      }
      if (best) setActive((best.target as HTMLElement).id);
    }, opts);

    for (const [id] of SECTIONS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }

    const intro = document.querySelector(".intro");
    const io2 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setActive("about");
    }, opts);
    if (intro) io2.observe(intro);

    return () => {
      io.disconnect();
      io2.disconnect();
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
