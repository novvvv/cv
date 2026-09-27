import { NextResponse, type NextRequest } from "next/server";
import { checkPassword, UNLOCK_COOKIE, UNLOCK_MAX_AGE } from "@/lib/unlock";

/* 잠긴 글의 비밀번호 입력 폼이 여기로 POST 한다.
   맞으면 쿠키를 심고 글로, 틀리면 ?error=1 을 붙여 글로 돌려보낸다. */
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const slug = String(form.get("slug") ?? "");

  // 다른 사이트로 튕기는 리다이렉트를 막기 위해 slug 는 폴더 이름 형식만 허용
  const safeSlug = /^[a-z0-9-]+$/.test(slug) ? slug : "";
  const back = new URL(safeSlug ? `/articles/locked/${safeSlug}` : "/articles", req.url);

  const value = checkPassword(password);
  if (!value) {
    back.searchParams.set("error", "1");
    return NextResponse.redirect(back, 303);
  }

  const res = NextResponse.redirect(back, 303);
  res.cookies.set(UNLOCK_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: UNLOCK_MAX_AGE,
  });
  return res;
}
