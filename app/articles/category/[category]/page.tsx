import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleIndex from "@/components/ArticleIndex";
import TopBar from "@/components/TopBar";
import { CATEGORIES, categoryLabel, type CategoryId } from "@/lib/articles";
import "../../articles.css";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return { title: `${categoryLabel(category as CategoryId)} — Articles — CHOI DOIL` };
}

/* 카테고리별 글 목록 — 홈의 프로젝트 항목에서 이 주소로 바로 연결할 수 있다. */
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.some((c) => c.id === category)) notFound();

  return (
    <main className="page">
      <TopBar />
      <h1>Articles</h1>
      <ArticleIndex active={category as CategoryId} />
    </main>
  );
}
