import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cities, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Zones d'intervention - Dépannage dans toute la Belgique",
  description: `Service de dépannage et remorquage disponible dans toutes les grandes villes de Belgique : ${cities.map(c => c.name).join(', ')}. Intervention 24/7.`,
  alternates: {
    canonical: "/zones",
  },
};

export default function ZonesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Zones d'Intervention
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Nous intervenons rapidement dans toute la Belgique, 24/7. 
              Découvrez nos zones de couverture et contactez-nous pour une assistance immédiate.
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

      {/* Cities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dépannage dans toutes les grandes villes de Belgique
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/depannage-${city.slug}`}
                className="group bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-slate-200 hover:border-primary"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      Dépannage {city.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{city.region}</p>
                    <p className="text-sm">{city.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Couverture complète du territoire belge
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-center text-muted-foreground mb-8">
                Notre réseau de dépanneurs couvre l'ensemble du territoire belge. 
                Que vous soyez en Wallonie, en Flandre ou à Bruxelles, nous intervenons rapidement 
                pour tous vos besoins de dépannage et remorquage automobile.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Wallonie</h3>
                  <p className="text-sm text-muted-foreground">
                    Liège, Namur, Charleroi, Mons et toutes les provinces wallonnes
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Flandre</h3>
                  <p className="text-sm text-muted-foreground">
                    Anvers, Gand, Bruges, Louvain et toute la région flamande
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Bruxelles</h3>
                  <p className="text-sm text-muted-foreground">
                    Les 19 communes de Bruxelles-Capitale et périphérie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un remorquage international ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nous assurons également le rapatriement de véhicules depuis et vers 
              la France, le Luxembourg, les Pays-Bas et l'Allemagne.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/international">Découvrir nos services internationaux</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
