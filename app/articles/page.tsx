import type { Metadata } from "next";
import ArticleIndex from "@/components/ArticleIndex";
import TopBar from "@/components/TopBar";
import "./articles.css";

export const metadata: Metadata = {
  title: "Articles — CHOI DOIL",
};

/* 글 목록 (All). 카테고리별 목록은 /articles/category/[category]. */
export default function ArticlesPage() {
  return (
    <main className="page">
      <TopBar />
      <h1>Articles</h1>
      <ArticleIndex />
    </main>
  );
}
