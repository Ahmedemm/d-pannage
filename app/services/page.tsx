import { Metadata } from "next";
import Link from "next/link";
import { Truck, Wrench, Battery, Circle, Key, Recycle, ArrowRight, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Nos Services de Dépannage Automobile 24/7 en Belgique",
  description: "Remorquage, dépannage sur route, batterie à plat, crevaison, ouverture de portes, rachat d'épaves. Service professionnel 24/7 en Belgique et international.",
  alternates: {
    canonical: "/services",
  },
};

const iconMap: { [key: string]: any } = {
  truck: Truck,
  wrench: Wrench,
  battery: Battery,
  circle: Circle,
  key: Key,
  recycle: Recycle,
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dépannage automobile",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${siteConfig.url}/services`,
      "servicePhone": siteConfig.phone
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
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nos Services de Dépannage
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Une gamme complète de services professionnels pour tous vos besoins de dépannage 
                automobile en Belgique et à l'international. Disponibles 24/7.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Wrench;
                return (
                  <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.name}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 group"
                      >
                        En savoir plus
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi choisir nos services ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Disponibilité 24/7",
                  desc: "Nous intervenons jour et nuit, tous les jours de l'année"
                },
                {
                  title: "Intervention rapide",
                  desc: `Délai moyen d'intervention : ${siteConfig.delai}`
                },
                {
                  title: "Professionnels certifiés",
                  desc: "Chauffeurs expérimentés et véhicules homologués"
                },
                {
                  title: "Tarifs transparents",
                  desc: "Devis gratuit et immédiat, sans frais cachés"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un dépannage immédiat ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Notre équipe est prête à intervenir 24/7. Contactez-nous maintenant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="/contact">Formulaire de contact</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
