import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de l'entreprise de dépannage et remorquage en Belgique.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Mentions légales</h1>
          <div className="prose max-w-none">
            <h2>Éditeur du site</h2>
            <p>
              Raison sociale: [COMPANY_NAME]<br />
              Adresse: [ADDRESS_LINE], [POSTAL_CODE] [CITY], Belgique<br />
              Email: [EMAIL]
            </p>
            {/* Section hébergeur volontairement omise */}
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit d'auteur.
              Toute reproduction sans autorisation est interdite.
            </p>
            <h2>Responsabilités</h2>
            <p>
              Les informations présentées sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis.
            </p>
            <h2>Contact</h2>
            <p>
              Pour toute question, contactez-nous à l'adresse: [EMAIL]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
