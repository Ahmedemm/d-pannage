import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCallButtons from "@/components/ui/StickyCallButtons";
import CookieBanner from "@/components/ui/CookieBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Dépannage & Remorquage 24/7 Belgique & International | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: `En panne en Belgique ou à l'étranger ? ${siteConfig.name} intervient rapidement 24/7 partout en Belgique et en Europe. Appelez ${siteConfig.phoneDisplay}`,
  keywords: [
    "dépannage auto Belgique",
    "remorquage Belgique",
    "dépannage 24/7",
    "remorquage international",
    "dépannage Bruxelles",
    "dépannage Liège",
    "assistance routière Belgique",
    "remorquage France Belgique",
    "panne voiture Belgique"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    alternateLocale: ["nl_BE", "en_US"],
    url: siteConfig.url,
    title: `Dépannage & Remorquage 24/7 Belgique & International | ${siteConfig.name}`,
    description: `En panne en Belgique ou à l'étranger ? Intervention rapide 24/7. Appelez ${siteConfig.phoneDisplay}`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Dépannage & Remorquage 24/7 Belgique | ${siteConfig.name}`,
    description: `Service de dépannage automobile 24/7 en Belgique et à l'international`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VOTRE_CODE_VERIFICATION_GOOGLE', // À remplacer
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'fr-BE': siteConfig.url,
      'nl-BE': `${siteConfig.url}/nl`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE">
      <head>
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href={`${siteConfig.url}/favicon.png`} type="image/png" />
        <link rel="apple-touch-icon" href={`${siteConfig.url}/apple-touch-icon.png`} />
        
        {/* Google Analytics */}
        {siteConfig.googleAnalyticsId && (
          <>
            {/* Consent defaults (GDPR) */}
            <Script id="ga-consent-default" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied'
                });
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                // Respect consent; anonymize IP
                gtag('config', '${siteConfig.googleAnalyticsId}', { 'anonymize_ip': true });
                // If prior consent exists, update immediately
                try {
                  var c = localStorage.getItem('cookie-consent');
                  if (c === 'accepted') {
                    gtag('consent', 'update', { 'analytics_storage': 'granted' });
                  }
                } catch (e) {}
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCallButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
