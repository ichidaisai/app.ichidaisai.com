import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";
import { Inter, Kaisei_Opti } from "next/font/google";


import Header from "@/components/Header";
import Footer from "@/components/Footer";

//  const kaiseiOpti = Kaisei_Opti({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
