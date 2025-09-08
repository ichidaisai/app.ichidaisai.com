import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "広島市立大学 第32回 大学祭",
  description: "広島市立大学 第32回 大学祭の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
