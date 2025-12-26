import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MainNavigationCompo from "./components/MainNavigationCompo";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://www.jcchaudhry.com";
export const metadata: Metadata = {
  title: "Dr. J C Chaudhry",
  description: "Official website of Dr. J.C. Chaudhry",
  robots: "index, follow",

  keywords: [
    "numerologist in india",
    "numerology by jc chaudhry",
    "vaastu shastra expert",
    "motivational speaker",
    "motivational speakers in india",
  ],

  alternates: {
    canonical: `${DOMAIN}`,
  },

  metadataBase: new URL("https://www.jcchaudhry.com"),

  verification: {
    google: "ti0zsKNBjhegR03iI5Wf1VJEqFXU_5rfqXZGTRA85S4",
    other: {
      "facebook-domain-verification": "aw8b35v0othbalm5h4baxkffz7sf9o",
    },
  },

  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "J C Chaudhry",
    url: `${DOMAIN}/page-path`,

    title: "PAGE TITLE HERE",
    description: "PAGE DESCRIPTION HERE",

    images: [
      {
        url: "/allbanners/IMAGE-NAME.webp",
        width: 1200,
        height: 630,
        alt: "J C Chaudhry Awards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@jc_chaudhry",
    title: "PAGE TITLE HERE",
    description: "PAGE DESCRIPTION HERE",
    images: ["/allbanners/IMAGE-NAME.webp"],
  },

  icons: {
    icon: "/favicon_0.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font preload */}
        <link
          rel="preload"
          href="/font/acumin-pro-cufonfonts-webfont/Acumin-RPro.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        {/* ✅ Preconnect */}
        {/* <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" /> */}


       <Script src="https://www.googletagmanager.com" security="lazyOnload"></Script>
       <Script src="https://connect.facebook.net" security="lazyOnload"></Script>

        {/* ✅ Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr. J C Chaudhry",
            "url": "https://www.jcchaudhry.com/",
            "logo": "https://www.jcchaudhry.com/logos/jclogo.png",
            "sameAs": [
              "https://www.facebook.com/NumerologistAndMotivator/",
              "https://x.com/jc_chaudhry",
              "https://www.instagram.com/jc_chaudhrynumerology/",
              "https://www.youtube.com/@drjcchaudhry"
            ]
          }
          `}
        </Script>
        {/* ✅ Google Analytics (UA) */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.google-analytics.com/analytics.js"
        />

        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};
            ga.l=+new Date;
            ga("create", "UA-130885643-1", "auto");
            ga("set", "anonymizeIp", true);
            ga("send", "pageview");
          `}
        </Script>

        {/* ✅ OLD ga.js support (legacy) */}
        <Script id="gaq-support" strategy="afterInteractive">
          {`
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-130885643-1']);
            _gaq.push(['_trackPageview']);

            (function() {
              var ga = document.createElement('script');
              ga.type = 'text/javascript';
              ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(ga, s);
            })();
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1108468366874635');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ✅ FB Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1108468366874635&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <MainNavigationCompo />

        {children}
        <Footer />
      </body>
    </html>
  );
}
