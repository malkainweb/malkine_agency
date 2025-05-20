import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
// import * as gtag from "../app/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malkain",
  description: "Malkain services",
  other: {
    "msvalidate.01": "7F19A1D05342FB69BD2941A0E771D847",
  },
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
