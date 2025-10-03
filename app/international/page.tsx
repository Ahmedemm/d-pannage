import { Metadata } from "next";
import Link from "next/link";
import { Globe, Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { countries, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Remorquage international Belgique – France, Luxembourg, Pays-Bas, Allemagne",
  description: "Rapatriement de véhicules depuis et vers la Belgique. Assistance 24/7 pour vos pannes à l'étranger. Service professionnel et tarifs transparents.",
  alternates: {
    canonical: "/international",
  },
};

export default function InternationalPage() {
  const faqs = [
    {
      question: "Faut-il une assurance spéciale pour un remorquage international ?",
      answer: "La plupart des assurances auto incluent une assistance internationale. Nous vous conseillons de vérifier votre contrat. Dans tous les cas, nous pouvons intervenir même sans couverture d'assurance, avec un devis transparent communiqué avant l'intervention."
    },
    {
      question: "Combien de temps prend un remorquage international ?",
      answer: "Le délai dépend de la distance et du pays. En moyenne, un rapatriement depuis la France ou le Luxembourg prend 24-48h, depuis les Pays-Bas ou l'Allemagne 48-72h. Nous vous tenons informé à chaque étape."
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer: "Vous aurez besoin de votre carte d'identité, carte grise du véhicule, et éventuellement votre attestation d'assurance. Nous nous occupons de toutes les formalités douanières si nécessaire."
    },
    {
      question: "Le prix est-il fixe ou variable ?",
      answer: "Nous établissons un devis précis basé sur la distance, le type de véhicule et les éventuelles contraintes. Le prix est fixé à l'avance, sans surprise."
    },
    {
      question: "Puis-je choisir le garage de destination ?",
      answer: "Absolument ! Vous pouvez choisir librement le garage ou l'adresse de destination en Belgique ou à l'étranger."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remorquage international",
    "description": "Service de remorquage et rapatriement de véhicules entre la Belgique et les pays frontaliers",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone
    },
    "areaServed": [
      { "@type": "Country", "name": "Belgium" },
      { "@type": "Country", "name": "France" },
      { "@type": "Country", "name": "Luxembourg" },
      { "@type": "Country", "name": "Netherlands" },
      { "@type": "Country", "name": "Germany" }
    ]
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
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-8 w-8" />
                <span className="text-blue-100 font-medium">Service International</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Remorquage international depuis et vers la Belgique
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Votre véhicule est en panne à l'étranger ? Nous assurons le rapatriement de véhicules 
                depuis la France, le Luxembourg, les Pays-Bas et l'Allemagne vers la Belgique — et inversement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="/contact">Demander un devis</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos destinations internationales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/international/${country.slug}`}
                  className="group bg-white rounded-lg p-6 hover:shadow-xl transition-all border border-slate-200 hover:border-primary"
                >
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    Remorquage Belgique – {country.name}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-muted-foreground">{country.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi choisir notre service international ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Assistance 24/7",
                  desc: "Disponibles jour et nuit pour vos urgences à l'étranger"
                },
                {
                  title: "Tarifs transparents",
                  desc: "Devis détaillé avant départ, sans frais cachés"
                },
                {
                  title: "Chauffeurs expérimentés",
                  desc: "Professionnels habitués aux trajets internationaux"
                },
                {
                  title: "Partenariat assurances",
                  desc: "Nous travaillons avec les principales compagnies"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Comment fonctionne le remorquage international ?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Contactez-nous",
                    desc: "Appelez-nous ou envoyez un message WhatsApp avec votre localisation et la destination souhaitée"
                  },
                  {
                    step: "2",
                    title: "Devis immédiat",
                    desc: "Nous vous communiquons un devis détaillé et transparent, sans engagement"
                  },
                  {
                    step: "3",
                    title: "Validation et planification",
                    desc: "Une fois le devis accepté, nous planifions l'intervention et vous tenons informé"
                  },
                  {
                    step: "4",
                    title: "Prise en charge",
                    desc: "Notre dépanneuse arrive sur place et charge votre véhicule en toute sécurité"
                  },
                  {
                    step: "5",
                    title: "Transport sécurisé",
                    desc: "Votre véhicule est transporté vers la destination avec un suivi en temps réel"
                  },
                  {
                    step: "6",
                    title: "Livraison",
                    desc: "Livraison à l'adresse convenue avec tous les documents nécessaires"
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Questions fréquentes
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un remorquage international ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez-nous maintenant pour un devis gratuit et une intervention rapide.
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
    </>
  );
}
