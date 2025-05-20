import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malkain-terms_of_service",
  description: "Malkain designs terms of service page",
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
