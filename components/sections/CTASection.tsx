import { Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un dépannage immédiat ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Notre équipe est disponible 24/7 pour vous assister. 
            Appelez-nous maintenant ou contactez-nous via WhatsApp pour une intervention rapide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="xl"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-xl"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-green-600 text-white hover:bg-green-700 font-bold shadow-xl border-0"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 font-bold"
            >
              <a href="/contact">
                <Mail className="h-5 w-5" />
                Formulaire
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Disponibilité</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">{siteConfig.delai}</div>
              <div className="text-blue-100">Délai moyen</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
