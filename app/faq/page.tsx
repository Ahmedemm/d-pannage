import { Metadata } from "next";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes sur le dépannage automobile",
  description: "Toutes les réponses à vos questions sur nos services de dépannage et remorquage en Belgique. Tarifs, délais, zones d'intervention, paiement, assurance.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Services et interventions",
      questions: [
        {
          q: "Quels types de véhicules dépannez-vous ?",
          a: "Nous dépannons tous types de véhicules : voitures particulières, motos, scooters, utilitaires légers et camping-cars. Pour les véhicules lourds ou spéciaux, contactez-nous pour vérifier nos capacités."
        },
        {
          q: "Intervenez-vous vraiment 24/7 ?",
          a: "Oui, nous sommes disponibles 24 heures sur 24, 7 jours sur 7, y compris les jours fériés. Notre équipe est toujours prête à intervenir pour vos urgences."
        },
        {
          q: "Quel est votre délai d'intervention ?",
          a: `Notre délai moyen d'intervention est de ${siteConfig.delai}. Ce délai peut varier selon votre localisation exacte, les conditions de circulation et la disponibilité de nos équipes. Nous vous communiquons une estimation précise lors de votre appel.`
        },
        {
          q: "Puis-je choisir le garage où sera remorqué mon véhicule ?",
          a: "Absolument ! Vous êtes libre de choisir le garage de votre choix. Si vous n'avez pas de préférence, nous pouvons vous recommander des garages partenaires de confiance."
        }
      ]
    },
    {
      category: "Zones d'intervention",
      questions: [
        {
          q: "Dans quelles villes intervenez-vous en Belgique ?",
          a: "Nous intervenons dans toute la Belgique : Bruxelles, Liège, Namur, Charleroi, Mons, Anvers, Gand, Bruges, Louvain et toutes les autres villes et communes du pays."
        },
        {
          q: "Proposez-vous des services internationaux ?",
          a: "Oui, nous assurons le remorquage et le rapatriement de véhicules depuis et vers la France, le Luxembourg, les Pays-Bas et l'Allemagne. Contactez-nous pour un devis personnalisé."
        },
        {
          q: "Intervenez-vous sur les autoroutes ?",
          a: "Oui, nous intervenons sur toutes les autoroutes belges (E40, E19, E411, E42, etc.) ainsi que sur les routes nationales et locales."
        }
      ]
    },
    {
      category: "Tarifs et paiement",
      questions: [
        {
          q: "Comment sont calculés vos tarifs ?",
          a: "Nos tarifs dépendent de plusieurs facteurs : le type d'intervention, la distance, l'heure (jour/nuit), le type de véhicule et la complexité de la situation. Nous vous communiquons toujours un devis clair et transparent avant l'intervention."
        },
        {
          q: "Y a-t-il des frais cachés ?",
          a: "Non, absolument aucun frais caché. Le prix annoncé lors du devis est le prix final (TVA incluse). Aucun supplément ne sera ajouté sauf si vous demandez des services supplémentaires."
        },
        {
          q: "Quels moyens de paiement acceptez-vous ?",
          a: "Nous acceptons les paiements par carte bancaire, espèces et virement bancaire. Une facture détaillée vous est systématiquement fournie."
        },
        {
          q: "Puis-je obtenir un devis avant l'intervention ?",
          a: "Oui, nous vous communiquons toujours un devis gratuit et sans engagement avant toute intervention. Vous décidez ensuite si vous souhaitez procéder."
        }
      ]
    },
    {
      category: "Assurance",
      questions: [
        {
          q: "Mon assurance couvre-t-elle le dépannage ?",
          a: "De nombreuses assurances auto incluent une assistance dépannage dans leurs contrats. Vérifiez votre police d'assurance ou contactez votre assureur. Nous vous fournissons tous les documents nécessaires pour votre remboursement."
        },
        {
          q: "Travaillez-vous avec les compagnies d'assurance ?",
          a: "Oui, nous travaillons en partenariat avec les principales compagnies d'assurance belges. Nous pouvons facturer directement votre assureur si vous le souhaitez."
        },
        {
          q: "Que faire si je n'ai pas d'assurance assistance ?",
          a: "Pas de problème ! Vous pouvez faire appel à nos services même sans assurance assistance. Nous vous établissons un devis transparent et vous payez directement."
        }
      ]
    },
    {
      category: "Situations spécifiques",
      questions: [
        {
          q: "Que faire en cas de panne à l'étranger ?",
          a: `Contactez-nous immédiatement au ${siteConfig.phoneDisplay}. Nous organisons le rapatriement de votre véhicule depuis la France, le Luxembourg, les Pays-Bas ou l'Allemagne. Nous gérons toutes les formalités.`
        },
        {
          q: "Ma batterie est à plat, pouvez-vous la remplacer sur place ?",
          a: "Oui, nous pouvons démarrer votre véhicule et, si nécessaire, remplacer la batterie directement sur place. Nous disposons de batteries de qualité en stock."
        },
        {
          q: "J'ai enfermé mes clés dans la voiture, que faire ?",
          a: "Appelez-nous immédiatement. Nos techniciens sont formés pour ouvrir les portières sans causer de dégâts. Intervention rapide garantie."
        },
        {
          q: "Mon véhicule est en panne sur l'autoroute, c'est dangereux ?",
          a: "Mettez-vous en sécurité sur la bande d'arrêt d'urgence, allumez vos feux de détresse et appelez-nous. Nous intervenons en priorité sur les autoroutes pour des raisons de sécurité."
        }
      ]
    },
    {
      category: "Remorquage international",
      questions: [
        {
          q: "Combien de temps prend un remorquage international ?",
          a: "Le délai dépend de la distance et du pays. En moyenne : France/Luxembourg 24-48h, Pays-Bas/Allemagne 48-72h. Nous vous tenons informé à chaque étape du transport."
        },
        {
          q: "Quels documents sont nécessaires pour un remorquage international ?",
          a: "Vous aurez besoin de votre carte d'identité, carte grise du véhicule et éventuellement votre attestation d'assurance. Nous nous occupons des formalités douanières si nécessaire."
        },
        {
          q: "Le prix du remorquage international est-il fixe ?",
          a: "Nous établissons un devis précis basé sur la distance, le type de véhicule et les contraintes spécifiques. Le prix est fixé à l'avance, sans surprise."
        }
      ]
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Questions Fréquentes
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Trouvez rapidement les réponses à vos questions sur nos services de dépannage. 
                Vous ne trouvez pas votre réponse ? Contactez-nous !
              </p>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  Nous appeler
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, qIndex) => (
                      <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Vous avez une autre question ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Notre équipe est disponible 24/7 pour répondre à toutes vos questions 
                et vous assister en cas d'urgence.
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
