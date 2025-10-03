import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données (RGPD).",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Politique de confidentialité</h1>
          <div className="prose max-w-none">
            <h2>Collecte des données</h2>
            <p>Nous collectons les informations que vous nous fournissez via le formulaire de contact (nom, téléphone, email, message) dans le seul but de vous recontacter.</p>
            <h2>Base légale</h2>
            <p>La base légale du traitement est votre consentement explicite (case à cocher) et l’intérêt légitime de répondre à votre demande.</p>
            <h2>Conservation</h2>
            <p>Les données sont conservées pour la durée nécessaire au traitement de votre demande et le suivi commercial, puis supprimées.</p>
            <h2>Partage</h2>
            <p>Nous ne vendons pas vos données. Elles peuvent être partagées avec des prestataires techniques strictement nécessaires (hébergement, email) sous contrat.</p>
            <h2>Cookies</h2>
            <p>Avec votre consentement, des cookies d’analyse (Google Analytics) peuvent être utilisés pour mesurer l’audience. Vous pouvez retirer votre consentement à tout moment.</p>
            <h2>Vos droits</h2>
            <p>Vous disposez d’un droit d’accès, rectification, suppression, opposition et portabilité. Contact: [EMAIL]</p>
          </div>
        </div>
      </section>
    </div>
  );
}
