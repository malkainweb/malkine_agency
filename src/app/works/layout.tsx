import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Gtag from "../gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " malkain Works",
  description: "Our works at malkine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Gtag />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
