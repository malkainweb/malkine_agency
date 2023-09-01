import "./globals.css";
import "./style.css";
import "./global_loader.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

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
      <script
        // strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NNC83QXFK8"
      />

      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NNC83QXFK8', {
            page_path: window.location.pathname,
          });
        `,
        }}
      /> */}

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_TRACKING_CODE');
            `,
        }}
      />
      <body className="hide_now">{children}</body>
    </html>
  );
}
