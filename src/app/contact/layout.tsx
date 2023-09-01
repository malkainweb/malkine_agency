import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Gtag from "../gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact malkain",
  description: "malkain designs contact page",
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
