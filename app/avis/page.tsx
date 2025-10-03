import { Metadata } from "next";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Avis Clients - Témoignages de nos clients satisfaits",
  description: "Découvrez les avis et témoignages de nos clients sur nos services de dépannage automobile en Belgique. Plus de 500 clients satisfaits.",
  alternates: {
    canonical: "/avis",
  },
};

export default function AvisPage() {
  const testimonials = [
    {
      name: "Sophie Martin",
      location: "Bruxelles",
      rating: 5,
      date: "15 septembre 2025",
      text: "Service impeccable ! En panne sur l'autoroute E40 à 2h du matin, ils sont arrivés en moins de 30 minutes. Le chauffeur était professionnel, sympathique et a pris soin de ma voiture. Prix honnête annoncé dès le départ. Je recommande vivement !",
      service: "Remorquage d'urgence"
    },
    {
      name: "Marc Dubois",
      location: "Liège",
      rating: 5,
      date: "8 septembre 2025",
      text: "J'ai dû faire remorquer ma voiture depuis la France jusqu'à Liège. Tout s'est passé parfaitement : communication claire, suivi en temps réel, et prix transparent. Mon véhicule est arrivé en parfait état. Excellent service international !",
      service: "Remorquage international"
    },
    {
      name: "Julie Vandenberghe",
      location: "Namur",
      rating: 5,
      date: "3 septembre 2025",
      text: "Batterie à plat un dimanche matin, impossible de démarrer. J'ai appelé et en 20 minutes le technicien était là. Problème résolu rapidement, tarif transparent annoncé dès le début. Service rapide et efficace, merci !",
      service: "Batterie à plat"
    },
    {
      name: "Thomas Laurent",
      location: "Charleroi",
      rating: 5,
      date: "28 août 2025",
      text: "Professionnels et réactifs. Ma voiture a été remorquée avec soin jusqu'au garage de mon choix. Le chauffeur a pris le temps de bien sécuriser le véhicule. Service client au top, je n'hésiterai pas à refaire appel à eux.",
      service: "Remorquage local"
    },
    {
      name: "Isabelle Rousseau",
      location: "Anvers",
      rating: 5,
      date: "22 août 2025",
      text: "Situation d'urgence : clés enfermées dans la voiture avec mon bébé à l'intérieur. Ils sont venus en urgence et ont ouvert la portière sans aucun dégât en quelques minutes. Professionnels et rassurants. Merci infiniment !",
      service: "Ouverture de portière"
    },
    {
      name: "Pierre Kowalski",
      location: "Gand",
      rating: 5,
      date: "18 août 2025",
      text: "Service de remorquage international impeccable. Mon véhicule a été rapatrié depuis l'Allemagne en 48h comme prévu. Communication excellente tout au long du processus, je savais exactement où en était mon véhicule. Très satisfait !",
      service: "Remorquage international"
    },
    {
      name: "Marie Lejeune",
      location: "Mons",
      rating: 5,
      date: "12 août 2025",
      text: "Crevaison sur l'autoroute E19. Intervention rapide et professionnelle. Le technicien a changé la roue en 15 minutes et m'a donné de bons conseils pour faire réparer le pneu. Prix correct et service impeccable.",
      service: "Crevaison"
    },
    {
      name: "David Peeters",
      location: "Bruges",
      rating: 5,
      date: "5 août 2025",
      text: "J'ai fait appel à eux pour un dépannage de nuit. Malgré l'heure tardive, ils sont arrivés rapidement et ont résolu le problème sur place. Tarif honnête, pas d'arnaque. Je recommande sans hésitation !",
      service: "Dépannage de nuit"
    },
    {
      name: "Céline Moreau",
      location: "Louvain",
      rating: 5,
      date: "30 juillet 2025",
      text: "Service client exceptionnel. J'ai eu un problème avec ma voiture un jour férié et ils ont répondu immédiatement. Intervention rapide, technicien compétent et prix transparent. Vraiment au top !",
      service: "Dépannage jour férié"
    },
    {
      name: "François Janssens",
      location: "Bruxelles",
      rating: 5,
      date: "25 juillet 2025",
      text: "Remorquage depuis le Luxembourg vers Bruxelles. Service professionnel du début à la fin. Devis clair, respect des délais, et véhicule livré en parfait état. Je suis très satisfait de leur prestation.",
      service: "Remorquage international"
    },
    {
      name: "Anne Dupont",
      location: "Liège",
      rating: 5,
      date: "18 juillet 2025",
      text: "Panne de moteur sur l'E25. Le dépanneur est arrivé très vite, a diagnostiqué le problème et m'a remorquée jusqu'au garage. Très professionnel et rassurant. Prix annoncé à l'avance, aucune surprise. Excellent !",
      service: "Remorquage + diagnostic"
    },
    {
      name: "Luc Vermeulen",
      location: "Namur",
      rating: 5,
      date: "10 juillet 2025",
      text: "Service rapide et efficace pour une batterie à plat. Le technicien a testé la batterie et l'alternateur, puis a démarré la voiture. Conseils utiles pour éviter que ça se reproduise. Très bon rapport qualité-prix.",
      service: "Batterie à plat"
    }
  ];

  const stats = [
    { value: "500+", label: "Clients satisfaits" },
    { value: "4.9/5", label: "Note moyenne" },
    { value: "98%", label: "Recommandations" },
    { value: "24/7", label: "Disponibilité" }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Avis de nos clients
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Découvrez les témoignages de nos clients satisfaits. 
              Leur confiance est notre meilleure récompense.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ce que disent nos clients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 text-slate-700">
                      {testimonial.text}
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                      <div className="text-xs text-primary mt-1">{testimonial.service}</div>
                      <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi nous font-ils confiance ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rapidité",
                  desc: "Intervention en moyenne en 30 minutes"
                },
                {
                  title: "Professionnalisme",
                  desc: "Chauffeurs certifiés et expérimentés"
                },
                {
                  title: "Transparence",
                  desc: "Tarifs clairs, pas de frais cachés"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Besoin d'un dépannage ? Faites confiance à notre expertise et notre réactivité. 
              Contactez-nous maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <a href="/contact">Demander un devis</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
