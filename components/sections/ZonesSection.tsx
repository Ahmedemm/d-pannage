import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cities } from "@/lib/config";

export default function ZonesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zones d'intervention en Belgique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous intervenons rapidement dans toutes les grandes villes de Belgique 
            et leurs environs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/depannage/${city.slug}`}
              className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all border border-slate-200 hover:border-primary"
            >
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{city.region}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Remorquage International
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            En panne à l'étranger ? Nous assurons le rapatriement de véhicules depuis et vers 
            la France, le Luxembourg, les Pays-Bas et l'Allemagne.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/international">
              Découvrir nos services internationaux
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
