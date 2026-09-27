import type { Metadata } from "next";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Articles — CHOI DOIL",
};

/* 글 목록 (임시). 글 목록 로딩은 추후 content/posts 에서 읽어 온다. */
export default function ArticlesPage() {
  return (
    <main className="page">
      <TopBar />

      <h1>Articles</h1>
      <p>
        <span lang="ja">準備中です。</span>
        <span lang="ko">준비 중입니다.</span>
      </p>
    </main>
  );
}
