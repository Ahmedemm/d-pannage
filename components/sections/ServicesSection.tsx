import Link from "next/link";
import { Truck, Wrench, Battery, Circle, Key, Recycle, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/config";

const iconMap: { [key: string]: any } = {
  truck: Truck,
  wrench: Wrench,
  battery: Battery,
  circle: Circle,
  key: Key,
  recycle: Recycle,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Services de Dépannage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos besoins de dépannage automobile, 
            disponibles 24/7 en Belgique et à l'international.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
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

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
