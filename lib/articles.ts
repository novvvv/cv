import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/*
 * Articles — content/articles/<slug>/{ja,ko}.mdx 를 읽는다.
 *
 * - 폴더 이름이 곧 주소: /articles/<slug>
 * - 한 언어만 있어도 된다. date · category · draft 는 ja 를 우선하고 없으면 ko 에서 읽는다.
 * - draft: true 인 글은 개발 서버(npm run dev)에서만 보이고 배포 빌드에서는 빠진다.
 * - locked: true 인 글은 목록에 🔒 로 보이고, 본문은 비밀번호(lib/unlock.ts)를 입력해야 보인다.
 */

export const CATEGORIES = [
  { id: "prompt-injection", label: "Prompt Injection Security Model" },
  { id: "nyaki", label: "Nyaki" },
  { id: "engineering", label: "Engineering" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];
export type Lang = "ja" | "ko";
export const LANGS: Lang[] = ["ja", "ko"];

export type ArticleText = { title: string; summary?: string; body: string };

export type Article = {
  slug: string;
  date: string; // YYYY-MM-DD
  category: CategoryId;
  draft: boolean;
  locked: boolean;
  text: Partial<Record<Lang, ArticleText>>;
};

const ROOT = path.join(process.cwd(), "content", "articles");
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

/** 글 주소. 잠긴 글은 서버에서 그리는 전용 경로로 간다. */
export function articleHref(a: Pick<Article, "slug" | "locked">): string {
  return a.locked ? `/articles/locked/${a.slug}` : `/articles/${a.slug}`;
}

// /articles/category/..., /articles/locked/... 와 겹치므로 글 폴더 이름으로 쓸 수 없다
const RESERVED = new Set(["category", "locked"]);

export function categoryLabel(id: CategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

function toDateString(v: unknown): string {
  // gray-matter 는 YAML 날짜를 Date 로 바꿔 준다
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v ?? "");
}

function readArticle(slug: string): Article | null {
  if (RESERVED.has(slug)) {
    throw new Error(`content/articles/${slug}: "${slug}" 는 주소와 겹쳐서 글 폴더 이름으로 쓸 수 없습니다.`);
  }
  const dir = path.join(ROOT, slug);
  const text: Article["text"] = {};
  const meta: Record<string, unknown> = {};

  for (const lang of [...LANGS].reverse()) {
    const file = path.join(dir, `${lang}.mdx`);
    if (!fs.existsSync(file)) continue;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    Object.assign(meta, data); // ko 를 먼저, ja 를 나중에 덮어써서 ja 우선
    text[lang] = { title: String(data.title ?? slug), summary: data.summary, body: content };
  }
  if (!text.ja && !text.ko) return null;

  const category = meta.category as CategoryId;
  if (!CATEGORIES.some((c) => c.id === category)) {
    throw new Error(
      `content/articles/${slug}: category "${String(category)}" 는 없는 카테고리입니다. ` +
        `(${CATEGORIES.map((c) => c.id).join(" / ")})`,
    );
  }

  return {
    slug,
    date: toDateString(meta.date),
    category,
    draft: meta.draft === true,
    locked: meta.locked === true,
    text,
  };
}

/** 모든 글, 최신순. 배포 빌드에서는 draft 제외. */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => readArticle(d.name))
    .filter((a): a is Article => a !== null && (SHOW_DRAFTS || !a.draft))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}
