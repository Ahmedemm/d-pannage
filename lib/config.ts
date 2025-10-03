// Configuration centrale - Remplacer les placeholders par vos vraies données
export const siteConfig = {
  name: "M&M dépannage",
  phone: "+32484670060", // Format: +32xxxxxxxxx
  phoneDisplay: "+32 484 67 00 60", // Format d'affichage: +32 XXX XX XX XX
  whatsapp: "https://wa.me/32484670060", // Format: https://wa.me/32xxxxxxxxx
  email: "[EMAIL]",
  address: {
    street: "[ADDRESS_LINE]",
    postal: "[POSTAL_CODE]",
    city: "[CITY]",
    country: "Belgique"
  },
  vat: "[VAT_NUMBER]",
  delai: "30 minutes", // Délai moyen d'intervention
  
  // URLs et domaine
  url: "https://votre-domaine.be",
  
  // Zones d'intervention
  zones: {
    belgium: [
      "Bruxelles", "Liège", "Namur", "Charleroi", "Mons", 
      "Anvers", "Gand", "Bruges", "Louvain"
    ],
    international: [
      "France", "Luxembourg", "Pays-Bas", "Allemagne"
    ]
  },
  
  // Réseaux sociaux (optionnel)
  social: {
    facebook: "",
    instagram: "",
    linkedin: ""
  },
  
  // Analytics
  googleAnalyticsId: "G-XXXXXXXXXX", // À remplacer
};

export const services = [
  {
    slug: "remorquage-vehicules",
    name: "Remorquage de véhicules",
    description: "Transport sécurisé de votre véhicule en panne vers le garage de votre choix",
    icon: "truck"
  },
  {
    slug: "depannage-route",
    name: "Dépannage sur route",
    description: "Intervention rapide 24/7 pour tous types de pannes automobiles",
    icon: "wrench"
  },
  {
    slug: "batterie-a-plat",
    name: "Batterie à plat",
    description: "Démarrage rapide ou remplacement de batterie sur place",
    icon: "battery"
  },
  {
    slug: "crevaison-pneu",
    name: "Crevaison de pneu",
    description: "Changement de roue rapide et sécurisé où que vous soyez",
    icon: "circle"
  },
  {
    slug: "ouverture-de-portes",
    name: "Ouverture de portes",
    description: "Clés enfermées dans le véhicule ? Nous intervenons sans dégâts",
    icon: "key"
  },
  {
    slug: "sortie-de-fourriere",
    name: "Sortie de fourrière",
    description: "Accompagnement complet et remorquage après fourrière, 24/7 en Belgique et pays frontaliers",
    icon: "truck"
  },
  {
    slug: "rachat-epaves",
    name: "Rachat d'épaves",
    description: "Enlèvement et rachat de véhicules hors d'usage",
    icon: "recycle"
  }
];

export const cities = [
  {
    slug: "bruxelles",
    name: "Bruxelles",
    region: "Région de Bruxelles-Capitale",
    description: "Dépannage et remorquage 24/7 à Bruxelles et ses 19 communes"
  },
  {
    slug: "liege",
    name: "Liège",
    region: "Province de Liège",
    description: "Service de dépannage rapide à Liège et environs"
  },
  {
    slug: "namur",
    name: "Namur",
    region: "Province de Namur",
    description: "Intervention d'urgence à Namur et dans toute la province"
  },
  {
    slug: "charleroi",
    name: "Charleroi",
    region: "Province de Hainaut",
    description: "Dépannage automobile 24/7 à Charleroi et alentours"
  },
  {
    slug: "mons",
    name: "Mons",
    region: "Province de Hainaut",
    description: "Service de remorquage professionnel à Mons"
  },
  {
    slug: "anvers",
    name: "Anvers",
    region: "Province d'Anvers",
    description: "Dépannage rapide à Anvers et sa région"
  },
  {
    slug: "gand",
    name: "Gand",
    region: "Province de Flandre-Orientale",
    description: "Assistance routière 24/7 à Gand"
  },
  {
    slug: "bruges",
    name: "Bruges",
    region: "Province de Flandre-Occidentale",
    description: "Remorquage et dépannage à Bruges et environs"
  },
  {
    slug: "louvain",
    name: "Louvain",
    region: "Province du Brabant flamand",
    description: "Service de dépannage automobile à Louvain"
  }
];

export const countries = [
  {
    slug: "france",
    name: "France",
    description: "Remorquage transfrontalier Belgique-France"
  },
  {
    slug: "luxembourg",
    name: "Luxembourg",
    description: "Transport de véhicules Belgique-Luxembourg"
  },
  {
    slug: "pays-bas",
    name: "Pays-Bas",
    description: "Rapatriement de véhicules Belgique-Pays-Bas"
  },
  {
    slug: "allemagne",
    name: "Allemagne",
    description: "Service de remorquage international Belgique-Allemagne"
  }
];
