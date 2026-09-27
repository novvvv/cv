import Link from "next/link";
import Controls from "@/components/Controls";
import Logo from "@/components/Logo";
import SiteLinks from "@/components/SiteLinks";

/* 상단 바 — 왼쪽 서명 로고(포트폴리오 홈으로), 오른쪽에 메뉴 · 언어 · 테마.
   홈과 /articles 공용. */
export default function TopBar() {
  return (
    <div className="topbar">
      <Link className="logo" href="/" aria-label="CHOI DOIL — Portfolio">
        <Logo />
      </Link>
      <div className="topbar-right">
        <SiteLinks />
        <Controls />
      </div>
    </div>
  );
}
