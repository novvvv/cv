import { createHash, timingSafeEqual } from "node:crypto";

/*
 * 잠긴 글(locked: true) 의 비밀번호 확인.
 *
 * - 비밀번호는 환경변수 ARTICLES_PASSWORD 에만 둔다 (Vercel: Project Settings → Environment Variables,
 *   로컬: .env.local). 설정되지 않으면 잠긴 글은 열리지 않는다.
 * - 쿠키에는 비밀번호 자체가 아니라 해시만 넣는다. 비밀번호를 바꾸면 기존 쿠키는 자동으로 무효가 된다.
 * - 한 번 입력하면 모든 잠긴 글이 열린다 (쿠키 하나, 30일).
 */

export const UNLOCK_COOKIE = "articles-unlock";
export const UNLOCK_MAX_AGE = 60 * 60 * 24 * 30;

function token(password: string): Buffer {
  return createHash("sha256").update(`cv-articles:${password}`).digest();
}

function configuredToken(): Buffer | null {
  const pw = process.env.ARTICLES_PASSWORD;
  return pw ? token(pw) : null;
}

export function isPasswordConfigured(): boolean {
  return configuredToken() !== null;
}

/** 입력한 비밀번호가 맞으면 쿠키에 넣을 값을, 틀리면 null 을 돌려준다. */
export function checkPassword(input: string): string | null {
  const expected = configuredToken();
  if (!expected) return null;
  const given = token(input);
  return timingSafeEqual(given, expected) ? given.toString("hex") : null;
}

/** 쿠키 값이 현재 비밀번호의 해시와 같은지. */
export function isUnlocked(cookieValue: string | undefined): boolean {
  const expected = configuredToken();
  if (!expected || !cookieValue || !/^[0-9a-f]{64}$/.test(cookieValue)) return false;
  return timingSafeEqual(Buffer.from(cookieValue, "hex"), expected);
}
