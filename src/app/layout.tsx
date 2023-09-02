import "./globals.css";
import "./style.css";
import "./global_loader.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";
// import * as gtag from "../app/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "malkain",
  description: "malkain designs and deployment",
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
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} `}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
        }}
      />

      <body className="hide_now">{children}</body>
    </html>
  );
}
