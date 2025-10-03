import { Clock, Shield, Euro, Users, MapPin, Award } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function WhyUsSection() {
  const features = [
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Nous sommes disponibles jour et nuit, 7 jours sur 7, même les jours fériés. Une urgence peut survenir à tout moment."
    },
    {
      icon: MapPin,
      title: "Couverture étendue",
      description: "Intervention dans toute la Belgique et services internationaux vers la France, Luxembourg, Pays-Bas et Allemagne."
    },
    {
      icon: Shield,
      title: "Professionnels certifiés",
      description: "Tous nos chauffeurs sont formés, certifiés et expérimentés. Véhicules homologués et assurés."
    },
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Devis gratuit et immédiat avant intervention. Pas de frais cachés, vous savez exactement ce que vous payez."
    },
    {
      icon: Users,
      title: "Service client réactif",
      description: "Une équipe à votre écoute pour répondre à toutes vos questions et coordonner l'intervention rapidement."
    },
    {
      icon: Award,
      title: "Partenaire des assurances",
      description: "Nous travaillons avec les principales compagnies d'assurance pour faciliter vos démarches."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir {siteConfig.name} ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un service de dépannage professionnel, rapide et fiable pour vous assister 
            en toutes circonstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
