import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malkain Showcase",
  description:
    "Discover Malkain's impressive work in web design and development. Get in touch with us to bring your project to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ backgroundColor: "" }} className={inter.className}>
      {children}
    </main>
  );
}
