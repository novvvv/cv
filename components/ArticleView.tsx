import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { ArticleTitle } from "@/components/ArticleIndex";
import TopBar from "@/components/TopBar";
import { categoryLabel, LANGS, type Article } from "@/lib/articles";
import { isPasswordConfigured } from "@/lib/unlock";

/* 코드 블록 하이라이트 — 라이트/다크 두 벌을 만들고 CSS 가 data-theme 로 고른다 */
const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [
      [rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }],
    ],
  },
};

/* 글 한 편 — /articles/[slug] (정적) 와 /articles/locked/[slug] (잠긴 글, 서버) 가 같이 쓴다.
   두 언어가 다 있으면 <article lang> 둘을 렌더하고 CSS 가 한쪽을 숨긴다.
   한 언어만 있으면 lang 없이 렌더해 어느 언어 모드에서든 보이게 한다.
   showForm 이면 본문 대신 비밀번호 입력 폼을 그린다 (본문은 아예 보내지 않는다). */
export default function ArticleView({
  article,
  showForm = false,
  error = false,
}: {
  article: Article;
  showForm?: boolean;
  error?: boolean;
}) {
  const langs = LANGS.filter((l) => article.text[l]);
  const both = langs.length === 2;

  return (
    <main className="page">
      <TopBar />

      <header className="post-head">
        <p className="post-meta">
          <Link href={`/articles/category/${article.category}`}>{categoryLabel(article.category)}</Link>
          <span className="sep">·</span>
          <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
          {article.draft && <span className="draft-tag">draft</span>}
          {article.locked && <span className="lock" aria-label="locked">🔒</span>}
        </p>
        <h1 className="post-title">
          <ArticleTitle article={article} />
        </h1>
      </header>

      {showForm ? (
        <UnlockForm slug={article.slug} error={error} />
      ) : (
        langs.map((lang) => (
          <article key={lang} className="prose" lang={both ? lang : undefined}>
            <MDXRemote source={article.text[lang]!.body} options={mdxOptions} />
          </article>
        ))
      )}

      <p className="post-back">
        <Link href="/articles">← Articles</Link>
      </p>
    </main>
  );
}

/* 잠긴 글의 비밀번호 입력 폼 */
function UnlockForm({ slug, error }: { slug: string; error: boolean }) {
  const configured = isPasswordConfigured();
  return (
    <form className="unlock" method="post" action="/api/articles/unlock">
      <p className="unlock-note">
        <span lang="ja">この記事は作成中のため、パスワードが必要です。</span>
        <span lang="ko">작성 중인 글이라 비밀번호가 필요합니다.</span>
      </p>
      <input type="hidden" name="slug" value={slug} />
      <div className="unlock-row">
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          aria-label="Password"
          placeholder="Password"
        />
        <button type="submit">
          <span lang="ja">開く</span>
          <span lang="ko">열기</span>
        </button>
      </div>
      {error && (
        <p className="unlock-error" role="alert">
          <span lang="ja">パスワードが違います。</span>
          <span lang="ko">비밀번호가 맞지 않습니다.</span>
        </p>
      )}
      {!configured && process.env.NODE_ENV !== "production" && (
        <p className="unlock-error">
          ARTICLES_PASSWORD 환경변수가 없습니다. .env.local 에 설정하세요.
        </p>
      )}
    </form>
  );
}
