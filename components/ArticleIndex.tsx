import Link from "next/link";
import {
  articleHref,
  CATEGORIES,
  categoryLabel,
  getAllArticles,
  type Article,
  type CategoryId,
} from "@/lib/articles";

/* 한/일 제목. 두 언어가 다 있으면 lang span 둘을 두고 CSS 가 한쪽을 숨긴다.
   한 언어만 있으면 lang 없이 늘 보이게 하고, 어느 언어인지 작은 라벨을 붙인다. */
export function ArticleTitle({ article }: { article: Article }) {
  const { ja, ko } = article.text;
  if (ja && ko)
    return (
      <>
        <span lang="ja">{ja.title}</span>
        <span lang="ko">{ko.title}</span>
      </>
    );
  const only = (ja ?? ko)!;
  return (
    <>
      {only.title}
      <span className="lang-only">{ja ? "日本語" : "한국어"}</span>
    </>
  );
}

/* 글 목록 — 위에 카테고리 탭, 아래에 연도별 목록. active 가 없으면 All. */
export default function ArticleIndex({ active }: { active?: CategoryId }) {
  const articles = getAllArticles().filter((a) => !active || a.category === active);

  const byYear = new Map<string, Article[]>();
  for (const a of articles) {
    const y = a.date.slice(0, 4);
    byYear.set(y, [...(byYear.get(y) ?? []), a]);
  }

  const tabs = [
    { href: "/articles", label: "All", current: !active },
    ...CATEGORIES.map((c) => ({
      href: `/articles/category/${c.id}`,
      label: c.label,
      current: active === c.id,
    })),
  ];

  return (
    <>
      <nav className="article-tabs" aria-label="Categories">
        {tabs.map((t) => (
          <Link key={t.href} href={t.href} aria-current={t.current ? "page" : undefined}>
            {t.label}
          </Link>
        ))}
      </nav>

      {articles.length === 0 ? (
        <p className="article-empty">
          <span lang="ja">まだ記事がありません。</span>
          <span lang="ko">아직 글이 없습니다.</span>
        </p>
      ) : (
        [...byYear].map(([year, list]) => (
          <section key={year} className="article-year">
            <h2>{year}</h2>
            <ul className="article-list">
              {list.map((a) => (
                <li key={a.slug}>
                  <Link href={articleHref(a)} className="article-link">
                    <span className="article-title">
                      <ArticleTitle article={a} />
                      {a.draft && <span className="draft-tag">draft</span>}
                      {a.locked && <span className="lock" aria-label="locked">🔒</span>}
                    </span>
                    <span className="article-meta">
                      {!active && <span className="article-cat">{categoryLabel(a.category)}</span>}
                      <time dateTime={a.date}>{a.date.slice(5).replace("-", ".")}</time>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  );
}
