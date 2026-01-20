
import React from 'react';
import { 
  Figma, 
  Layout, 
  Smartphone, 
  Database, 
  Search, 
  Layers, 
  Zap, 
  Palette,
  Eye,
  Edit3,
  CheckCircle,
  BarChart,
  Globe,
  SmartphoneIcon
} from 'lucide-react';
import { Project, Service, SkillGroup, Testimonial, TimelineItem, MethodologyStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'oif-observatoire',
    title: 'Observatoire de la Langue Française (OIF)',
    shortDescription: 'Conception du nouveau design web et mobile de l\'application de l\'OIF.',
    category: ['UX', 'UI', 'Mobile', 'Web'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Illustration captivante avec dégradés similaires à la capture
    context: 'L\'Organisation Internationale de la Francophonie (OIF) souhaitait créer un portail unifié pour l\'Observatoire de la langue française, permettant aux chercheurs et au public d\'accéder aux données et indicateurs linguistiques mondiaux.',
    problem: 'Nécessité d\'une interface moderne, sécurisée et accessible, intégrant un système de connexion professionnel et une navigation fluide entre les données, les documents et les informations institutionnelles.',
    process: [
      'Analyse des besoins utilisateurs (chercheurs, diplomates, public)',
      'Design d\'interface épuré avec dégradés "glassmorphism"',
      'Création d\'un système d\'authentification sécurisé et intuitif',
      'Architecture d\'information complexe simplifiée en 4 piliers majeurs',
      'Intégration des logos partenaires (AUF, ODSEF, OPALE)'
    ],
    wireframes: ['https://picsum.photos/seed/oif-wire1/400/300', 'https://picsum.photos/seed/oif-wire2/400/300'],
    finalUI: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop'
    ],
    results: 'Mise en place d\'un portail professionnel utilisé mondialement, facilitant la synchronisation des préférences utilisateurs et l\'accès aux données.'
  },
  {
    id: '1',
    title: 'Nova Healthcare',
    shortDescription: 'Optimisation du parcours patient pour une plateforme de télémédecine.',
    category: ['UX', 'UI', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    context: 'Nova Healthcare souhaitait réduire le taux d\'abandon lors de la prise de rendez-vous en ligne.',
    problem: 'L\'interface actuelle était trop complexe et ne rassurait pas les utilisateurs sur la confidentialité de leurs données.',
    process: [
      'Audit UX & Interviews utilisateurs',
      'Définition des Personas',
      'Architecture d\'information',
      'Wireframing Low-Fi'
    ],
    wireframes: ['https://picsum.photos/seed/nova1/400/300'],
    finalUI: ['https://picsum.photos/seed/nova-f1/800/600'],
    results: 'Augmentation de 40% des rendez-vous finalisés sur les 3 premiers mois.'
  },
  {
    id: '2',
    title: 'EcoSwap Marketplace',
    shortDescription: 'Plateforme Web minimaliste de seconde main pour objets durables.',
    category: ['Web', 'UI'],
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    context: 'Un projet visant à encourager l\'économie circulaire avec une approche design éco-responsable.',
    problem: 'Les places de marché actuelles sont visuellement surchargées.',
    process: [
      'Recherche sur le Green UX',
      'Design System modulaire',
      'Tests d\'utilisabilité'
    ],
    wireframes: ['https://picsum.photos/seed/eco1/400/300'],
    finalUI: ['https://picsum.photos/seed/eco-f1/800/600'],
    results: 'Temps de chargement divisé par 2 et feedback utilisateur extrêmement positif.'
  },
  {
    id: '3',
    title: 'Lumina Smart Home',
    shortDescription: 'Contrôle intelligent de la maison via une interface tactile futuriste.',
    category: ['UI', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
    context: 'Création d\'une application de contrôle domotique unifiée.',
    problem: 'Fragmentation des applications de contrôle pour chaque appareil connecté.',
    process: [
      'Analyse des flux de contrôle',
      'Interface néomorphique/glassmorphique',
      'Micro-interactions animées'
    ],
    wireframes: ['https://picsum.photos/seed/smart1/400/300'],
    finalUI: ['https://picsum.photos/seed/smart-f1/800/600'],
    results: 'Une expérience de contrôle fluide et hautement esthétique.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'UX Research',
    description: 'Comprendre vos utilisateurs par des interviews, audits et tests pour bâtir sur des bases solides.',
    icon: <Search className="w-6 h-6 text-accent-500" />
  },
  {
    id: '2',
    title: 'UX/UI Design',
    description: 'Conception d\'interfaces esthétiques et fonctionnelles centrées sur l\'expérience utilisateur.',
    icon: <Palette className="w-6 h-6 text-accent-500" />
  },
  {
    id: '3',
    title: 'Web Design',
    description: 'Création de sites web modernes, responsive et optimisés pour la conversion.',
    icon: <Layout className="w-6 h-6 text-accent-500" />
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Création de bibliothèques de composants réutilisables pour assurer la cohérence de votre marque.',
    icon: <Layers className="w-6 h-6 text-accent-500" />
  },
  {
    id: '5',
    title: 'Prototypage Figma',
    description: 'Animations et prototypes interactifs pour tester vos idées avant le développement.',
    icon: <Figma className="w-6 h-6 text-accent-500" />
  },
  {
    id: '6',
    title: 'Optimisation UX',
    description: 'Analyse de vos tunnels de conversion et amélioration continue des parcours.',
    icon: <Zap className="w-6 h-6 text-accent-500" />
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'UX Skills',
    skills: [
      { name: 'User Research', level: 90 },
      { name: 'Wireframing', level: 95 },
      { name: 'Information Architecture', level: 85 },
      { name: 'User Testing', level: 80 }
    ]
  },
  {
    category: 'UI Skills',
    skills: [
      { name: 'Visual Design', level: 92 },
      { name: 'Typography', level: 88 },
      { name: 'Color Theory', level: 90 },
      { name: 'Interaction Design', level: 85 }
    ]
  },
  {
    category: 'Outils',
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Power BI', level: 75 },
      { name: 'DimoMaint OM', level: 80 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Directeur Technique',
    role: 'Product Owner',
    company: 'YULCOM',
    content: 'Une approche UX incroyable. Abdel a su créer un design system qui nous fait gagner un temps précieux au quotidien et améliorer nos parcours.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=YT&backgroundColor=0ea5e9'
  },
  {
    id: '2',
    name: 'Julien Durand',
    role: 'Directeur Associé',
    company: 'BBC & Partners',
    content: 'Rigoureux et créatif, Abdel maîtrise aussi bien la technique que le design. Son support technique et sa vision UX ont été cruciaux.',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JD&backgroundColor=38bdf8'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 'Septembre 2025 - Actuellement',
    title: 'UX Designer & Web Designer',
    company: 'YULCOM TECHNOLOGIE',
    description: 'Conception d’expériences centrées utilisateur et interfaces modernes pour différents clients. Refonte des interfaces, création d’un design system (-40% temps dev), conception responsive et tests utilisateurs pour corriger des blocages majeurs.'
  },
  {
    year: 'Janvier 2024 - Avril 2025',
    title: 'Développeur d\'applications',
    company: 'BBC & Partners',
    description: 'Développement logiciel web/mobile et support technique. Administration et support de l\'outil DimoMaint OM (paramétrage, interfaçage, résolution d\'incidents). Reporting via Power BI et suivi des demandes d\'amélioration.'
  },
  {
    year: 'Août 2023 - Décembre 2023',
    title: 'Stage en UX Design',
    company: 'PUBBIX TECHNOLOGIES',
    description: 'Réalisation et conception des interfaces utilisateurs et maquettes pour les différentes applications web et mobiles.'
  },
  {
    year: 'Octobre 2022 - Juillet 2023',
    title: 'Designer web',
    company: 'Lerroyprod',
    description: 'Chargé de la création des maquettes et prototypes pour les applications web et mobiles afin de permettre une expérience utilisateur optimale.'
  },
  {
    year: 'Août 2021 - Août 2022',
    title: 'Développeur web & Responsable IT',
    company: 'S.U.F.A.C SARL',
    description: 'Conception du parc informatique et maintenance des différents systèmes informatiques de l\'entreprise.'
  }
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    title: 'Découverte',
    description: 'Interviews utilisateurs, audit de l\'existant et immersion business.',
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: 'Stratégie',
    description: 'Architecture de l\'information et définition des personas.',
    icon: <BarChart className="w-5 h-5" />
  },
  {
    title: 'Conception',
    description: 'Wireframing, UI Design et prototypage interactif sur Figma.',
    icon: <Edit3 className="w-5 h-5" />
  },
  {
    title: 'Validation',
    description: 'Tests d\'utilisabilité et livraison des spécifications de développement.',
    icon: <CheckCircle className="w-5 h-5" />
  }
];
