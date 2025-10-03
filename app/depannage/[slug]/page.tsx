import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cities, siteConfig, services } from "@/lib/config";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.slug);
  
  if (!city) {
    return {
      title: "Ville non trouvée",
    };
  }

  return {
    title: `Dépannage & Remorquage 24/7 à ${city.name} | ${siteConfig.name}`,
    description: `Service de dépannage automobile rapide à ${city.name} et environs. Intervention 24/7, ${siteConfig.delai} en moyenne. Appelez ${siteConfig.phoneDisplay}`,
    alternates: {
      canonical: `/depannage/${params.slug}`,
    },
  };
}

export default function CityPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.slug);

  if (!city) {
    notFound();
  }

  const cityContent: { [key: string]: any } = {
    "bruxelles": {
      intro: "Service de dépannage et remorquage automobile disponible 24/7 dans les 19 communes de Bruxelles-Capitale et sa périphérie. Intervention rapide sur les grands axes (Ring, E40, E411) et dans tous les quartiers.",
      neighborhoods: ["Centre-ville", "Ixelles", "Schaerbeek", "Anderlecht", "Uccle", "Woluwe", "Etterbeek", "Molenbeek"],
      highways: ["Ring R0", "E40 (vers Liège/Gand)", "E411 (vers Namur)", "E19 (vers Anvers/Paris)"]
    },
    "liege": {
      intro: "Dépannage automobile rapide à Liège et dans toute la province. Intervention 24/7 sur les autoroutes E25, E40, E42 et dans tous les quartiers de la cité ardente.",
      neighborhoods: ["Centre-ville", "Outremeuse", "Guillemins", "Angleur", "Herstal", "Seraing", "Ans"],
      highways: ["E25 (vers Maastricht)", "E40 (vers Bruxelles/Aix)", "E42 (vers Namur)"]
    },
    "namur": {
      intro: "Service de dépannage professionnel à Namur et environs. Disponible 24/7 pour tous vos besoins de remorquage et assistance routière dans la capitale wallonne.",
      neighborhoods: ["Centre-ville", "Jambes", "Salzinnes", "Bouge", "Belgrade", "Vedrin"],
      highways: ["E42 (vers Liège/Mons)", "E411 (vers Bruxelles/Luxembourg)", "N4"]
    },
    "charleroi": {
      intro: "Dépannage automobile 24/7 à Charleroi et dans toute la région. Intervention rapide sur le Ring de Charleroi, les autoroutes et dans tous les quartiers.",
      neighborhoods: ["Centre-ville", "Marcinelle", "Gosselies", "Montignies", "Jumet", "Gilly"],
      highways: ["Ring R3", "E42 (vers Mons/Namur)", "E420", "A54"]
    },
    "mons": {
      intro: "Service de remorquage et dépannage disponible 24/7 à Mons et dans le Borinage. Intervention rapide sur les autoroutes et dans toute la région.",
      neighborhoods: ["Centre-ville", "Jemappes", "Cuesmes", "Ghlin", "Havré", "Nimy"],
      highways: ["E19 (vers Bruxelles/Paris)", "E42 (vers Charleroi/Lille)", "A501"]
    },
    "anvers": {
      intro: "Dépannage professionnel 24/7 à Anvers et sa région. Service rapide sur le Ring d'Anvers, dans le port et tous les quartiers de la métropole.",
      neighborhoods: ["Centrum", "Borgerhout", "Berchem", "Deurne", "Hoboken", "Merksem"],
      highways: ["Ring R1", "E19 (vers Bruxelles)", "E34 (vers Pays-Bas)", "E17 (vers Gand)"]
    },
    "gand": {
      intro: "Service de dépannage automobile à Gand disponible 24/7. Intervention rapide sur le Ring de Gand, les autoroutes et dans tous les quartiers de la ville.",
      neighborhoods: ["Centrum", "Ledeberg", "Gentbrugge", "Mariakerke", "Sint-Amandsberg"],
      highways: ["Ring R4", "E17 (vers Anvers/Courtrai)", "E40 (vers Bruxelles/Bruges)"]
    },
    "bruges": {
      intro: "Dépannage et remorquage 24/7 à Bruges et environs. Service professionnel dans le centre historique, le port de Zeebrugge et toute la région côtière.",
      neighborhoods: ["Centre historique", "Sint-Andries", "Sint-Michiels", "Assebroek", "Zeebrugge"],
      highways: ["E40 (vers Gand/Ostende)", "E403 (vers Courtrai)", "N31"]
    },
    "louvain": {
      intro: "Service de dépannage automobile à Louvain (Leuven) disponible 24/7. Intervention rapide sur le Ring, les autoroutes et dans tous les quartiers universitaires.",
      neighborhoods: ["Centrum", "Heverlee", "Kessel-Lo", "Wilsele", "Wijgmaal"],
      highways: ["Ring R23", "E40 (vers Bruxelles/Liège)", "E314 (vers Hasselt)"]
    }
  };

  const content = cityContent[params.slug] || {
    intro: city.description,
    neighborhoods: [],
    highways: []
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteConfig.name} - ${city.name}`,
    "description": `Service de dépannage automobile à ${city.name}`,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressCountry": "BE"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="text-sm mb-4 text-blue-100">
                <Link href="/" className="hover:text-white">Accueil</Link>
                {" / "}
                <Link href="/zones" className="hover:text-white">Zones</Link>
                {" / "}
                <span>{city.name}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dépannage & Remorquage à {city.name}
              </h1>
              <p className="text-xl text-blue-100 mb-2">
                {city.region}
              </p>
              <p className="text-lg text-blue-100 mb-6">
                {content.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos services à {city.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.slug} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    En savoir plus →
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-semibold mb-2">Sortie de fourrière à {city.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Les démarches et horaires peuvent varier selon la fourrière locale. Nous vous accompagnons pour
                récupérer votre véhicule et proposons le remorquage immédiat vers votre domicile ou garage.
              </p>
              <Link href="/services/sortie-de-fourriere" className="text-primary font-medium hover:text-primary/80">
                En savoir plus sur la sortie de fourrière →
              </Link>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Zone de couverture à {city.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.neighborhoods.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Quartiers desservis
                    </h3>
                    <ul className="space-y-2">
                      {content.neighborhoods.map((neighborhood: string, index: number) => (
                        <li key={index} className="text-muted-foreground">• {neighborhood}</li>
                      ))}
                      <li className="text-sm text-primary font-medium">Et tous les autres quartiers de {city.name}</li>
                    </ul>
                  </div>
                )}

                {content.highways.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Autoroutes et axes principaux
                    </h3>
                    <ul className="space-y-2">
                      {content.highways.map((highway: string, index: number) => (
                        <li key={index} className="text-muted-foreground">• {highway}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Intervention rapide à {city.name}</h3>
                    <p className="text-muted-foreground">
                      Notre équipe intervient en moyenne en {siteConfig.delai} à {city.name} et ses environs. 
                      Disponibles 24/7, nous sommes prêts à vous assister à tout moment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un dépannage à {city.name} ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Notre équipe est prête à intervenir 24/7 dans toute la région de {city.name}. 
                Contactez-nous maintenant pour une assistance immédiate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/contact">Formulaire de contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
