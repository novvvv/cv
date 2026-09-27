import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { getArticle } from "@/lib/articles";
import { isUnlocked, UNLOCK_COOKIE } from "@/lib/unlock";
import "../../articles.css";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ error?: string }>;
};

/* 잠긴 글(locked: true) — 정적으로 만들지 않고 요청마다 서버(Vercel 함수)에서 그린다.
   쿠키로 비밀번호 확인이 끝났을 때만 본문을 보내고, 아니면 입력 폼만 보낸다. */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  const t = a?.text.ja ?? a?.text.ko;
  return { title: `${t?.title ?? slug} — CHOI DOIL`, robots: { index: false, follow: false } };
}

export default async function LockedArticlePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article || !article.locked) notFound();

  const unlocked = isUnlocked((await cookies()).get(UNLOCK_COOKIE)?.value);
  const { error } = await searchParams;

  return <ArticleView article={article} showForm={!unlocked} error={!unlocked && error === "1"} />;
}
