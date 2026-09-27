import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 잠긴 글은 요청 때 서버 함수에서 MDX 파일을 읽으므로 함수 번들에 글 원본을 포함한다
  outputFileTracingIncludes: {
    "/articles/locked/[slug]": ["./content/articles/**/*"],
  },
};

export default nextConfig;
