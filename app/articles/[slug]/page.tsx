import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { getAllArticles, getArticle } from "@/lib/articles";
import "../articles.css";

type Props = { params: Promise<{ slug: string }> };

/* 잠기지 않은 글 — 빌드 때 정적 HTML 로 만든다.
   잠긴 글은 /articles/locked/[slug] 에서 요청마다 서버가 그린다. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllArticles()
    .filter((a) => !a.locked)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  const t = a?.text.ja ?? a?.text.ko;
  return { title: `${t?.title ?? slug} — CHOI DOIL`, description: t?.summary };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || article.locked) notFound();
  return <ArticleView article={article} />;
}
