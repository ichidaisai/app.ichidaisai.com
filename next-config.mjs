// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Workers運用下では Next の標準最適化を捨てて Cloudflare に委譲
    loader: "custom",
    loaderFile: "./cf-image-loader.ts",
    // 受け側ブラウザが対応していれば avif/webp を優先的に受け取るヒント
    formats: ["image/avif", "image/webp"],
    // 必要ならリモート許可ドメインを追加
    remotePatterns: [{ protocol: "https", hostname: "vrccreative.net" }],
  },
};

export default nextConfig;
