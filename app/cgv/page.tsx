import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV)",
  description: "Conditions générales de vente applicables aux prestations de dépannage et remorquage.",
  alternates: { canonical: "/cgv" },
};

export default function CGVPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Conditions Générales de Vente</h1>
          <div className="prose max-w-none">
            <h2>Objet</h2>
            <p>Les présentes CGV s’appliquent à toutes les prestations de dépannage et remorquage effectuées par [COMPANY_NAME].</p>
            <h2>Devis et prix</h2>
            <p>Un devis transparent est communiqué avant toute intervention. Les éventuels suppléments (nuit, jours fériés, longue distance) sont indiqués à l’avance.</p>
            <h2>Paiement</h2>
            <p>Le paiement s’effectue à la fin de la prestation (CB, espèces, virement). Une facture détaillée est remise.</p>
            <h2>Responsabilité</h2>
            <p>Nous mettons en œuvre tous les moyens nécessaires pour assurer une prestation de qualité. Notre responsabilité ne peut être engagée qu’en cas de faute prouvée.</p>
            <h2>Réclamations</h2>
            <p>Toute réclamation doit être adressée par écrit à [EMAIL] dans un délai raisonnable après la prestation.</p>
            <h2>Droit applicable</h2>
            <p>Le droit belge est applicable. En cas de litige, les tribunaux compétents seront ceux du siège social de l’entreprise.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
