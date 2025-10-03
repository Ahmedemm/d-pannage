export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  contentHtml: string; // simple HTML content
};

export const posts: BlogPost[] = [
  {
    slug: "panne-etranger-que-faire",
    title: "Que faire en cas de panne à l’étranger ?",
    date: "2025-01-10",
    excerpt:
      "Les bons réflexes à adopter si votre véhicule tombe en panne à l’étranger (sécurité, assurance, remorquage et rapatriement).",
    contentHtml: `
      <h2>1) Sécurisez la zone</h2>
      <p>Mettez votre gilet réfléchissant, placez le triangle de présignalisation et garez-vous en sécurité (bande d’arrêt d’urgence si autorisé). Priorité absolue : votre sécurité et celle de vos passagers.</p>
      <h2>2) Identifiez votre position</h2>
      <p>Notez l’autoroute, la borne kilométrique, la sortie la plus proche ou utilisez le GPS de votre smartphone. Ces informations accélèrent l’intervention.</p>
      <h2>3) Vérifiez votre assurance</h2>
      <p>De nombreux contrats belges incluent une <strong>assistance internationale</strong>. Contactez votre assistance si vous en avez une. Sinon, nous pouvons intervenir et établir un devis transparent.</p>
      <h2>4) Contactez un dépanneur international</h2>
      <p>Nous organisons le <strong>remorquage et le rapatriement</strong> de votre véhicule depuis la France, le Luxembourg, les Pays‑Bas et l’Allemagne vers la Belgique (et inversement).</p>
      <h2>5) Préparez les documents</h2>
      <p>Carte d’identité, carte grise, attestation d’assurance. Nous vous aidons pour les formalités si nécessaire.</p>
      <h2>6) Suivi et livraison</h2>
      <p>Nous assurons un <strong>suivi complet</strong> jusqu’à la livraison au garage de votre choix en Belgique, avec facture détaillée pour un éventuel remboursement par l’assurance.</p>
    `,
  },
  {
    slug: "remorquage-national-vs-international",
    title: "Remorquage national vs international : quelles différences ?",
    date: "2025-01-18",
    excerpt:
      "Distances, formalités, délais et tarifs : tout ce qui change entre un remorquage en Belgique et un rapatriement international.",
    contentHtml: `
      <h2>Distances et délais</h2>
      <p>En Belgique, l’intervention est souvent <strong>moins d’une heure</strong>. En international, comptez <strong>24–72 h</strong> selon le pays et la distance.</p>
      <h2>Formalités</h2>
      <p>À l’international, vérification des documents, éventuelles formalités frontalières et coordination accrue. Nous gérons ces aspects pour vous.</p>
      <h2>Tarifs</h2>
      <p>Le prix dépend de la distance, du type de véhicule et des contraintes (accès, horaire, stockage). Un <strong>devis est fourni avant départ</strong>.</p>
      <h2>Suivi et assurance</h2>
      <p>Nous travaillons avec des compagnies d’assurances belges et étrangères. Vous recevez un <strong>suivi clair</strong> et une <strong>facture détaillée</strong>.</p>
    `,
  },
  {
    slug: "assurance-auto-depannage-belgique-etranger",
    title:
      "Assurance auto & dépannage : ce qui est couvert en Belgique et à l’étranger",
    date: "2025-01-25",
    excerpt:
      "Assistance, rapatriement, véhicule de remplacement : ce que prévoient la plupart des contrats et comment vérifier votre couverture.",
    contentHtml: `
      <h2>Assistance en Belgique</h2>
      <p>Selon votre contrat, l’assistance peut couvrir le dépannage sur place, le <strong>remorquage</strong> jusqu’au garage, voire un véhicule de remplacement.</p>
      <h2>Assistance internationale</h2>
      <p>Certaines formules incluent le <strong>rapatriement</strong> du véhicule et le retour des passagers. Vérifiez les pays couverts (France, Luxembourg, Pays-Bas, Allemagne…).</p>
      <h2>Franchise et plafond</h2>
      <p>Regardez la <strong>franchise</strong>, les plafonds et les exclusions. Nous vous remettons une facture conforme pour faciliter le remboursement.</p>
    `,
  },
  {
    slug: "conseils-eviter-panne-voyage",
    title: "Top 5 conseils pour éviter la panne en voyage",
    date: "2025-02-02",
    excerpt:
      "Vérifications simples avant de prendre la route : batterie, pneus, niveaux, trousse d’urgence et astuces pour rouler serein.",
    contentHtml: `
      <h2>1) Batterie</h2>
      <p>Testez la batterie avant un long trajet, surtout en hiver. Remplacez-la si elle est faible.</p>
      <h2>2) Pneus</h2>
      <p>Pression correcte (y compris la roue de secours) et usure régulière. Emportez un kit ou une galette.</p>
      <h2>3) Niveaux</h2>
      <p>Huile, liquide de refroidissement, lave-glace. Des niveaux corrects évitent des pannes simples.</p>
      <h2>4) Équipements</h2>
      <p>Gilet, triangle, lampe, câble de démarrage, cric. Utile pour les petits incidents.</p>
      <h2>5) Conduite</h2>
      <p>Évitez les surcharges, faites des pauses et adaptez votre vitesse pour limiter les risques.</p>
    `,
  },
  {
    slug: "depannage-auto-belgique-guide-complet",
    title: "Dépannage auto en Belgique : guide complet",
    date: "2025-02-12",
    excerpt:
      "Fonctionnement du dépannage 24/7 en Belgique, délais moyens, tarifs indicatifs et droits de l’automobiliste.",
    contentHtml: `
      <h2>Comment ça marche ?</h2>
      <p>Vous appelez, nous localisons, <strong>devis immédiat</strong>, intervention, réparation sur place ou remorquage.</p>
      <h2>Délais moyens</h2>
      <p>Selon la zone et la circulation, comptez <strong>${'{'}siteConfig?.delai || '30 minutes'{}} en moyenne</strong>.</p>
      <h2>Tarifs indicatifs</h2>
      <p>Changement de roue, démarrage, ouverture de porte : des <strong>forfaits transparents</strong>. Remorquage longue distance : sur devis.</p>
      <h2>Vos droits</h2>
      <p>Devis, facture, libre choix du garage, pas de frais cachés. Nos conditions sont <strong>claires</strong> et communiquées avant intervention.</p>
    `,
  },
  {
    slug: "choisir-depanneur-fiable-etranger",
    title: "Comment choisir un dépanneur fiable à l’étranger ?",
    date: "2025-02-20",
    excerpt:
      "Critères essentiels : disponibilité 24/7, transparence tarifaire, assurances, avis clients et réseau transfrontalier.",
    contentHtml: `
      <h2>Vérifiez la disponibilité</h2>
      <p>Un dépanneur fiable affiche une <strong>disponibilité 24/7</strong> et des délais clairs.</p>
      <h2>Transparence</h2>
      <p>Demandez un <strong>devis écrit</strong> avant intervention. Fuyez les prix opaques.</p>
      <h2>Assurances et partenaires</h2>
      <p>Assurances professionnelles, chauffeurs certifiés, partenariats reconnus : des gages de sérieux.</p>
      <h2>Avis clients</h2>
      <p>Consultez les avis vérifiés et privilégiez les entreprises avec <strong>preuve sociale</strong>.</p>
    `,
  },
];
