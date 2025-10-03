import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/config";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service non trouvé",
    };
  }

  // Meta spécifique pour Sortie de fourrière
  if (params.slug === "sortie-de-fourriere") {
    return {
      title: `Sortie de fourrière 24/7 | ${siteConfig.name} Belgique`,
      description: `Accompagnement & remorquage après fourrière. Démarches, récupération et retour sécurisé. 24/7 partout en Belgique. Appelez ${siteConfig.phoneDisplay}.`,
      alternates: {
        canonical: `/services/${params.slug}`,
      },
    };
  }

  return {
    title: `${service.name} 24/7 en Belgique | ${siteConfig.name}`,
    description: `${service.description}. Service professionnel disponible 24/7 partout en Belgique. Appelez ${siteConfig.phoneDisplay}`,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Contenu détaillé par service
  const serviceDetails: { [key: string]: any } = {
    "remorquage-vehicules": {
      intro: "Notre service de remorquage professionnel assure le transport sécurisé de votre véhicule en panne vers le garage de votre choix, partout en Belgique et à l'international.",
      features: [
        "Remorquage de tous types de véhicules (voitures, motos, utilitaires)",
        "Dépanneuses modernes et équipées",
        "Transport sécurisé et assuré",
        "Choix libre du garage de destination",
        "Service national et international",
        "Tarifs transparents communiqués à l'avance"
      ],
      process: [
        "Appelez-nous ou contactez-nous via WhatsApp",
        "Nous localisons votre position exacte",
        "Devis immédiat et transparent",
        "Intervention rapide de notre dépanneuse",
        "Chargement sécurisé de votre véhicule",
        "Transport vers la destination de votre choix"
      ]
    },
    "depannage-route": {
      intro: "En panne sur la route ? Notre équipe intervient rapidement 24/7 pour diagnostiquer et résoudre votre problème sur place quand c'est possible.",
      features: [
        "Intervention 24/7 sur tout le territoire belge",
        "Diagnostic professionnel sur place",
        "Réparations d'urgence quand possible",
        "Équipement professionnel embarqué",
        "Chauffeurs expérimentés et certifiés",
        "Assistance sur autoroutes et routes secondaires"
      ],
      process: [
        "Contactez-nous immédiatement",
        "Décrivez brièvement votre problème",
        "Nous envoyons un technicien qualifié",
        "Diagnostic sur place",
        "Réparation immédiate si possible",
        "Sinon, remorquage vers un garage"
      ]
    },
    "batterie-a-plat": {
      intro: "Batterie déchargée ? Nous intervenons rapidement pour démarrer votre véhicule ou remplacer votre batterie défectueuse sur place.",
      features: [
        "Démarrage rapide avec câbles professionnels",
        "Test de batterie et alternateur",
        "Remplacement de batterie sur place",
        "Batteries de qualité en stock",
        "Intervention rapide (délai moyen 30 min)",
        "Service disponible 24/7"
      ],
      process: [
        "Appelez-nous dès que possible",
        "Indiquez votre localisation",
        "Notre technicien arrive rapidement",
        "Test de la batterie",
        "Démarrage ou remplacement",
        "Conseils pour éviter la récidive"
      ]
    },
    "crevaison-pneu": {
      intro: "Pneu crevé ? Nous changeons votre roue rapidement et en toute sécurité, où que vous soyez en Belgique.",
      features: [
        "Changement de roue professionnel",
        "Intervention sur tous types de véhicules",
        "Équipement adapté et sécurisé",
        "Service rapide (15-20 minutes)",
        "Disponible 24/7",
        "Conseils sur l'état de vos pneus"
      ],
      process: [
        "Contactez-nous immédiatement",
        "Restez en sécurité (bande d'arrêt d'urgence)",
        "Notre technicien arrive avec l'équipement",
        "Changement de la roue crevée",
        "Vérification de la roue de secours",
        "Conseils pour la réparation du pneu"
      ]
    },
    "ouverture-de-portes": {
      intro: "Clés enfermées dans votre véhicule ? Nous ouvrons votre portière rapidement et sans dégâts, avec des techniques professionnelles.",
      features: [
        "Ouverture sans dégâts",
        "Techniques professionnelles certifiées",
        "Intervention rapide",
        "Tous types de véhicules",
        "Service d'urgence 24/7",
        "Discrétion assurée"
      ],
      process: [
        "Appelez-nous en urgence",
        "Vérifiez qu'aucune fenêtre n'est ouverte",
        "Notre spécialiste arrive rapidement",
        "Ouverture professionnelle sans dégâts",
        "Récupération de vos clés",
        "Conseils pour éviter la récidive"
      ]
    },
    "rachat-epaves": {
      intro: "Véhicule hors d'usage ? Nous rachetons et enlevons votre épave rapidement, avec toutes les démarches administratives incluses.",
      features: [
        "Rachat au meilleur prix",
        "Enlèvement gratuit",
        "Démarches administratives incluses",
        "Certificat de destruction",
        "Respect de l'environnement",
        "Paiement immédiat"
      ],
      process: [
        "Contactez-nous pour un devis",
        "Décrivez l'état de votre véhicule",
        "Nous vous proposons un prix",
        "Prise de rendez-vous pour l'enlèvement",
        "Enlèvement et paiement",
        "Certificat de destruction fourni"
      ]
    },
    "sortie-de-fourriere": {
      intro: "Votre véhicule a été mis en fourrière ? Nous vous accompagnons de A à Z : informations sur les démarches, vérification des documents, déplacement sur place, et remorquage/rapatriement jusqu’à votre domicile ou votre garagiste. Service 24/7 dans toute la Belgique, et dans les pays frontaliers si besoin.",
      features: [
        "Conseils sur les démarches et la fourrière concernée",
        "Vérification des documents requis (ID, carte grise, assurance)",
        "Accompagnement sur place pour la récupération",
        "Contrôle visuel du véhicule au moment de la sortie",
        "Option remorquage/rapatriement immédiat",
        "Service 24/7 en Belgique et pays frontaliers"
      ],
      process: [
        "Appel & devis clair (fourrière concernée, documents requis)",
        "Accompagnement sur place (récupération, contrôle, options de remorquage)",
        "Retour sécurisé (domicile/garage), reçu & recommandations"
      ],
      documents: [
        "Pièce d’identité",
        "Preuve de propriété / assurance",
        "Carte grise (certificat d’immatriculation)"
      ],
      fees: [
        "Frais de garde",
        "Frais d’enlèvement",
        "Frais administratifs éventuels (à régler sur place par le propriétaire/mandataire)"
      ],
      zones: {
        belgium: ["Bruxelles", "Liège", "Namur", "Charleroi", "Mons", "Anvers", "Gand", "Bruges", "Louvain"],
        intl: ["France", "Luxembourg", "Pays-Bas", "Allemagne"]
      },
      why: [
        "Disponibilité 24/7",
        "Délais d’intervention rapides",
        "Accompagnement administratif",
        "Remorques et véhicules homologués"
      ],
      faq: [
        { q: "Quels documents pour récupérer un véhicule en fourrière ?", a: "Généralement : pièce d’identité, carte grise et preuve d’assurance. Certaines fourrières demandent des pièces supplémentaires — nous vous indiquons précisément selon la ville." },
        { q: "Pouvez-vous payer à ma place ?", a: "Non. Les frais se règlent par le propriétaire/mandataire auprès de la fourrière. Nous vous accompagnons et anticipons les moyens de paiement acceptés." },
        { q: "Proposez-vous le remorquage après la sortie ?", a: "Oui, vers domicile/garage, en Belgique et dans les pays frontaliers." },
        { q: "Intervenez-vous la nuit et le week-end ?", a: "Oui, 24/7, sous réserve des horaires d’ouverture de la fourrière concernée." }
      ]
    }
  };

  const details = serviceDetails[params.slug] || {
    intro: service.description,
    features: [],
    process: []
  };

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phone
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    }
  };

  if (params.slug === "sortie-de-fourriere") {
    jsonLd.serviceType = "Sortie de fourrière";
    jsonLd.url = `${siteConfig.url}/services/sortie-de-fourriere`;
    jsonLd.areaServed = ["Belgique", "France", "Luxembourg", "Pays-Bas", "Allemagne"];
    jsonLd.availableChannel = {
      "@type": "ServiceChannel",
      "servicePhone": { "@type": "ContactPoint", "telephone": siteConfig.phone }
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {params.slug === "sortie-de-fourriere" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": serviceDetails["sortie-de-fourriere"].faq.map((f: any) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a }
              }))
            })
          }}
        />
      )}
      
      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <nav className="text-sm mb-4 text-blue-100">
                <Link href="/" className="hover:text-white">Accueil</Link>
                {" / "}
                <Link href="/services" className="hover:text-white">Services</Link>
                {" / "}
                <span>{service.name}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {params.slug === "sortie-de-fourriere"
                  ? "Sortie de fourrière — Accompagnement & remorquage 24/7"
                  : service.name}
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                {details.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                {details.features.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Ce que nous offrons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {details.features.map((feature: string, index: number) => (
                        <div key={index} className="flex gap-3">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {details.process.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Comment ça marche ?</h2>
                    <div className="space-y-4">
                      {details.process.map((step: string, index: number) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div className="pt-1">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Besoin de ce service maintenant ?</h3>
                  <p className="text-muted-foreground mb-4">
                    Notre équipe est disponible 24/7 pour intervenir rapidement partout en Belgique.
                  </p>
                  <Button asChild>
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="h-4 w-4" />
                      Appeler {siteConfig.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Informations pratiques</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Disponibilité</div>
                        <div className="text-sm text-muted-foreground">24/7 - Tous les jours</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Zone d'intervention</div>
                        <div className="text-sm text-muted-foreground">Toute la Belgique + International</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-medium">Contact</div>
                        <a href={`tel:${siteConfig.phone}`} className="text-sm text-primary hover:underline">
                          {siteConfig.phoneDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Autres services</h4>
                    <div className="space-y-2">
                      {services
                        .filter((s) => s.slug !== params.slug)
                        .slice(0, 4)
                        .map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ArrowRight className="h-3 w-3 inline mr-1" />
                            {s.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="border-t pt-6 mt-6">
                    <h4 className="font-semibold mb-3">Ressources</h4>
                    <div className="space-y-2">
                      <Link href="/tarifs" className="block text-sm text-primary hover:underline">
                        Voir nos tarifs
                      </Link>
                      <Link href="/contact" className="block text-sm text-primary hover:underline">
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
