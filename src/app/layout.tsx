import "./globals.css";
import "./style.css";
import "./global_loader.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Gtag from "./gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "malkain",
  description: "malkain designs and deployment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Gtag />
      <body className="hide_now">{children}</body>
    </html>
  );
}
