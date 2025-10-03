import { Phone, MessageCircle, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4" />
              <span>24/7 Disponible</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="h-4 w-4" />
              <span>Belgique + International</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Intervention en {siteConfig.delai}</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Dépannage & Remorquage 24/7<br />
            <span className="text-blue-200">en Belgique et à l'international</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            En panne, accident ou <strong>sortie de fourrière</strong> en Belgique ou à l'étranger ? 
            <strong>{siteConfig.name}</strong> intervient rapidement partout en Belgique et en Europe frontalière 
            (France, Luxembourg, Pays-Bas, Allemagne).
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="xl"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold shadow-xl"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                Appeler maintenant — {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700 font-bold shadow-xl"
            >
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* USPs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Intervention rapide", desc: `Délai moyen ${siteConfig.delai}` },
              { title: "Couverture totale", desc: "Belgique + 4 pays" },
              { title: "Tarifs transparents", desc: "Devis immédiat gratuit" },
              { title: "Chauffeurs certifiés", desc: "Professionnels expérimentés" },
            ].map((usp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-1">{usp.title}</h3>
                <p className="text-sm text-blue-100">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
