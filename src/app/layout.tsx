import "./globals.css";
import "./style.css";
import "./template_style.css";
import "./global_loader.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";

import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
// import * as gtag from "../app/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malkain",
  description: "Malkain Designs and Deployment",
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
      {/* bing tracking  */}
      <Script
        id="Bing clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", '${process.env.NEXT_PUBLIC_BING_CLARITY_ID}');`,
        }}
      />

      {/* this is for facebook tracking */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_META_PIXED_ID});
             fbq('track', 'PageView');
          `,
        }}
      />

      <body className=""> {children}</body>
      <GoogleTagManager gtmId="GTM-WQB5G2DQ" />
    </html>
  );
}
