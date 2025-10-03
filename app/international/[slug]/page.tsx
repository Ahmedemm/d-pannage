import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { countries, siteConfig } from "@/lib/config";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = countries.find((c) => c.slug === params.slug);
  
  if (!country) {
    return {
      title: "Pays non trouvé",
    };
  }

  return {
    title: `Remorquage Belgique - ${country.name} | ${siteConfig.name}`,
    description: `Service de remorquage et rapatriement de véhicules entre la Belgique et ${country.name}. Assistance 24/7, tarifs transparents. Appelez ${siteConfig.phoneDisplay}`,
    alternates: {
      canonical: `/international/${params.slug}`,
    },
  };
}

export default function CountryPage({ params }: Props) {
  const country = countries.find((c) => c.slug === params.slug);

  if (!country) {
    notFound();
  }

  const countryContent: { [key: string]: any } = {
    "france": {
      intro: "Votre véhicule est en panne en France ou vous devez rapatrier un véhicule depuis la France vers la Belgique ? Nous assurons un service de remorquage professionnel entre la Belgique et la France, 24/7.",
      cities: ["Paris", "Lille", "Reims", "Metz", "Strasbourg", "Lyon", "Marseille"],
      distance: "Variable selon la destination (de 50 km à 800 km)",
      duration: "24-48 heures selon la distance",
      features: [
        "Couverture de toute la France",
        "Intervention rapide dans le Nord de la France",
        "Partenariat avec assurances françaises et belges",
        "Prise en charge des formalités douanières si nécessaire",
        "Transport sécurisé et assuré",
        "Suivi en temps réel du transport"
      ]
    },
    "luxembourg": {
      intro: "Service de remorquage rapide entre la Belgique et le Luxembourg. Que vous soyez en panne au Luxembourg ou que vous ayez besoin de rapatrier un véhicule, nous intervenons rapidement.",
      cities: ["Luxembourg-Ville", "Esch-sur-Alzette", "Differdange", "Dudelange"],
      distance: "Environ 150-250 km",
      duration: "12-24 heures",
      features: [
        "Proximité géographique pour intervention rapide",
        "Connaissance des réglementations luxembourgeoises",
        "Service express disponible",
        "Tarifs compétitifs",
        "Prise en charge dans tout le Grand-Duché",
        "Livraison en Belgique ou au Luxembourg"
      ]
    },
    "pays-bas": {
      intro: "Remorquage professionnel entre la Belgique et les Pays-Bas. Nous assurons le rapatriement de véhicules depuis Amsterdam, Rotterdam, La Haye et toutes les villes néerlandaises.",
      cities: ["Amsterdam", "Rotterdam", "La Haye", "Utrecht", "Eindhoven", "Maastricht"],
      distance: "Variable (de 100 km à 400 km)",
      duration: "24-48 heures",
      features: [
        "Couverture complète des Pays-Bas",
        "Intervention rapide dans le sud des Pays-Bas",
        "Équipe multilingue (NL/FR/EN)",
        "Connaissance des autoroutes néerlandaises",
        "Service professionnel et ponctuel",
        "Tarifs transparents"
      ]
    },
    "allemagne": {
      intro: "Service de remorquage international entre la Belgique et l'Allemagne. Nous intervenons dans toute l'Allemagne pour rapatrier votre véhicule en toute sécurité.",
      cities: ["Cologne", "Düsseldorf", "Aix-la-Chapelle", "Bonn", "Francfort", "Munich", "Berlin"],
      distance: "Variable (de 100 km à 800 km)",
      duration: "24-72 heures selon la distance",
      features: [
        "Couverture de toute l'Allemagne",
        "Intervention prioritaire en Rhénanie",
        "Expérience des autoroutes allemandes",
        "Partenariat avec assurances allemandes",
        "Transport longue distance sécurisé",
        "Communication en allemand, français et anglais"
      ]
    }
  };

  const content = countryContent[params.slug] || {
    intro: country.description,
    cities: [],
    distance: "Variable",
    duration: "24-72 heures",
    features: []
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <nav className="text-sm mb-4 text-blue-100">
              <Link href="/" className="hover:text-white">Accueil</Link>
              {" / "}
              <Link href="/international" className="hover:text-white">International</Link>
              {" / "}
              <span>{country.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Remorquage Belgique – {country.name}
            </h1>
            <p className="text-xl text-blue-100 mb-6">
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
                <Link href="/contact">Demander un devis gratuit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  Notre service Belgique – {country.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.features.map((feature: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {content.cities.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">
                    Principales villes desservies en {country.name}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {content.cities.map((city: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Et toutes les autres villes de {country.name}
                  </p>
                </div>
              )}

              <div className="mb-12 bg-white border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Sortie de fourrière en {country.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Votre véhicule est en fourrière à l'étranger ? Nous vous accompagnons pour les démarches
                  et pouvons organiser le remorquage/rapatriement vers la Belgique.
                </p>
                <Link href="/services/sortie-de-fourriere" className="text-primary font-medium hover:text-primary/80">
                  En savoir plus sur la sortie de fourrière →
                </Link>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-12">
                <h3 className="text-xl font-semibold mb-4">Informations pratiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium mb-1">Distance moyenne</div>
                    <div className="text-sm text-muted-foreground">{content.distance}</div>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Délai de rapatriement</div>
                    <div className="text-sm text-muted-foreground">{content.duration}</div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  Comment ça marche ?
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong>Contactez-nous</strong> - Appelez-nous au {siteConfig.phoneDisplay} ou via WhatsApp avec votre localisation exacte en {country.name}
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong>Devis immédiat</strong> - Nous vous communiquons un devis détaillé basé sur la distance et le type de véhicule
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong>Planification</strong> - Nous organisons la prise en charge dans les meilleurs délais
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong>Prise en charge</strong> - Notre dépanneuse arrive sur place en {country.name} et charge votre véhicule
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <strong>Transport</strong> - Votre véhicule est transporté en toute sécurité vers la Belgique
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">6</span>
                    <div>
                      <strong>Livraison</strong> - Livraison à l'adresse convenue en Belgique avec tous les documents
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Contact urgence</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Téléphone</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-sm text-primary hover:underline">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Disponibilité</div>
                      <div className="text-sm text-muted-foreground">24/7 - Tous les jours</div>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full mb-4">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-4 w-4" />
                    Appeler maintenant
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Demander un devis</Link>
                </Button>

                <div className="border-t mt-6 pt-6">
                  <h4 className="font-semibold mb-3">Autres destinations</h4>
                  <div className="space-y-2">
                    {countries
                      .filter((c) => c.slug !== params.slug)
                      .map((c) => (
                        <Link
                          key={c.slug}
                          href={`/international/${c.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          → Remorquage vers {c.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
