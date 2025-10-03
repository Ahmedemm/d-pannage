import { Metadata } from "next";
import { Phone, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs Transparents - Dépannage & Remorquage en Belgique",
  description: "Découvrez nos tarifs clairs et transparents pour tous nos services de dépannage automobile. Devis gratuit et immédiat. Pas de frais cachés.",
  alternates: {
    canonical: "/tarifs",
  },
};

export default function TarifsPage() {
  const pricingCategories = [
    {
      title: "Dépannage sur place",
      description: "Intervention rapide pour résoudre votre panne sur place",
      services: [
        { name: "Batterie à plat (démarrage)", price: "À partir de 50€" },
        { name: "Changement de roue", price: "À partir de 40€" },
        { name: "Ouverture de portière", price: "À partir de 60€" },
        { name: "Diagnostic panne", price: "À partir de 45€" },
      ]
    },
    {
      title: "Remorquage national",
      description: "Transport de votre véhicule en Belgique",
      services: [
        { name: "Remorquage local (0-20 km)", price: "À partir de 80€" },
        { name: "Remorquage moyen (20-50 km)", price: "À partir de 120€" },
        { name: "Remorquage longue distance (50+ km)", price: "Sur devis" },
        { name: "Supplément nuit/weekend", price: "+20%" },
      ]
    },
    {
      title: "Remorquage international",
      description: "Rapatriement depuis/vers l'étranger",
      services: [
        { name: "Belgique - France (frontière)", price: "À partir de 200€" },
        { name: "Belgique - Luxembourg", price: "À partir de 250€" },
        { name: "Belgique - Pays-Bas", price: "À partir de 180€" },
        { name: "Belgique - Allemagne", price: "Sur devis" },
      ]
    }
  ];

  const included = [
    "Devis gratuit et immédiat par téléphone",
    "Intervention 24/7 sans supplément excessif",
    "Paiement sur place (CB, espèces)",
    "Facture détaillée fournie",
    "Assurance tous risques incluse"
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Des prix clairs et honnêtes pour tous nos services de dépannage. 
              Devis gratuit et immédiat avant toute intervention.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                Demander un devis gratuit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {pricingCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 p-6 border-b">
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex justify-between items-start">
                          <span className="text-sm">{service.name}</span>
                          <span className="text-sm font-semibold text-primary whitespace-nowrap ml-2">
                            {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Tarifs indicatifs</h3>
                  <p className="text-sm text-muted-foreground">
                    Les tarifs affichés sont indicatifs et peuvent varier selon la complexité de l'intervention, 
                    l'heure, la distance et le type de véhicule. Un devis précis vous sera communiqué gratuitement 
                    par téléphone avant toute intervention. Aucune surprise, aucun frais caché.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Ce qui est inclus dans nos tarifs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes sur les tarifs</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Comment obtenir un devis ?",
                  a: `Appelez-nous au ${siteConfig.phoneDisplay} ou contactez-nous via WhatsApp. Nous vous communiquerons un devis gratuit et immédiat après avoir évalué votre situation.`
                },
                {
                  q: "Les tarifs sont-ils fixes ?",
                  a: "Oui, une fois le devis accepté, le prix est fixe. Aucun supplément ne sera ajouté sauf si vous demandez des services supplémentaires."
                },
                {
                  q: "Quels moyens de paiement acceptez-vous ?",
                  a: "Nous acceptons les paiements par carte bancaire, espèces, et virement. Une facture détaillée vous est systématiquement fournie."
                },
                {
                  q: "Y a-t-il des frais supplémentaires la nuit ou le weekend ?",
                  a: "Un léger supplément (environ 20%) peut s'appliquer pour les interventions de nuit (22h-6h) et les jours fériés. Ce supplément vous sera clairement indiqué dans le devis."
                },
                {
                  q: "Mon assurance peut-elle prendre en charge les frais ?",
                  a: "De nombreuses assurances auto incluent une assistance dépannage. Nous vous fournissons tous les documents nécessaires pour votre remboursement. Nous travaillons également en direct avec plusieurs compagnies d'assurance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un devis personnalisé ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous maintenant pour obtenir un devis gratuit et immédiat, 
              adapté à votre situation spécifique.
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
  );
}
