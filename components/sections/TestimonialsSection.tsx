import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie M.",
      location: "Bruxelles",
      rating: 5,
      text: "Service impeccable ! En panne sur l'autoroute à 2h du matin, ils sont arrivés en moins de 30 minutes. Chauffeur professionnel et très sympathique.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Marc D.",
      location: "Liège",
      rating: 5,
      text: "J'ai dû faire remorquer ma voiture depuis la France. Tout s'est passé parfaitement, communication claire et prix honnête. Je recommande vivement !",
      date: "Il y a 1 mois"
    },
    {
      name: "Julie V.",
      location: "Namur",
      rating: 5,
      text: "Batterie à plat un dimanche matin. Intervention rapide, problème résolu en 20 minutes. Tarif transparent annoncé dès le départ. Parfait !",
      date: "Il y a 3 semaines"
    },
    {
      name: "Thomas L.",
      location: "Charleroi",
      rating: 5,
      text: "Professionnels et réactifs. Ma voiture a été remorquée avec soin jusqu'au garage. Service client au top, je n'hésiterai pas à refaire appel à eux.",
      date: "Il y a 1 semaine"
    },
    {
      name: "Isabelle R.",
      location: "Anvers",
      rating: 5,
      text: "Clés enfermées dans la voiture avec mon bébé à l'intérieur. Ils sont venus en urgence et ont ouvert la portière sans dégâts. Merci infiniment !",
      date: "Il y a 2 mois"
    },
    {
      name: "Pierre K.",
      location: "Gand",
      rating: 5,
      text: "Service de remorquage international impeccable. Véhicule rapatrié depuis l'Allemagne en 24h. Communication excellente tout au long du processus.",
      date: "Il y a 3 semaines"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Avis de nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 500 clients satisfaits nous font confiance pour leurs dépannages 
            en Belgique et à l'international.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 text-slate-700">"{testimonial.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/avis"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 group"
          >
            Voir tous les avis
            <Star className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
