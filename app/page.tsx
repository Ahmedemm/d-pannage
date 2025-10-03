import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ZonesSection from "@/components/sections/ZonesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Dépannage & Remorquage 24/7 Belgique & International | ${siteConfig.name}`,
  description: `En panne en Belgique ou à l'étranger ? ${siteConfig.name} intervient rapidement 24/7 partout en Belgique et en Europe. Appelez ${siteConfig.phoneDisplay}`,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  // Schema.org JSON-LD pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "image": `${siteConfig.url}/logo.png`,
        "logo": `${siteConfig.url}/logo.png`,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.street,
          "addressLocality": siteConfig.address.city,
          "postalCode": siteConfig.address.postal,
          "addressCountry": "BE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "50.8503", // À adapter selon votre localisation
          "longitude": "4.3517"
        },
        "url": siteConfig.url,
        "priceRange": "€€",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Bruxelles"
          },
          {
            "@type": "City",
            "name": "Liège"
          },
          {
            "@type": "City",
            "name": "Namur"
          },
          {
            "@type": "City",
            "name": "Charleroi"
          },
          {
            "@type": "Country",
            "name": "Belgium"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de dépannage",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Remorquage de véhicules",
                "description": "Service de remorquage 24/7 en Belgique et international"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dépannage sur route",
                "description": "Intervention rapide pour pannes automobiles"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sortie de fourrière",
                "serviceType": "Sortie de fourrière",
                "description": "Accompagnement & remorquage après fourrière, 24/7 en Belgique et pays frontaliers",
                "url": `${siteConfig.url}/services/sortie-de-fourriere`
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "inLanguage": "fr-BE"
      },
      {
        "@type": "Service",
        "name": "Sortie de fourrière",
        "serviceType": "Sortie de fourrière",
        "areaServed": ["Belgique","France","Luxembourg","Pays-Bas","Allemagne"],
        "provider": { "@type": "LocalBusiness", "name": siteConfig.name },
        "url": `${siteConfig.url}/services/sortie-de-fourriere`,
        "availableChannel": { "@type": "ServiceChannel", "servicePhone": { "@type": "ContactPoint", "telephone": siteConfig.phone } }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ZonesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
