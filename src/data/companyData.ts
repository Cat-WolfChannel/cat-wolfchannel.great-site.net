import { TeamMember, ServicePillar, ChannelProject, FAQItem } from '../types';
import mascotImg from '../assets/images/cat_wolf_mascot_1787001120536.jpg';
import ceoImg from '../assets/images/cat_wolf_ceo_1787044097431.jpg';
import sandyImg from '../assets/images/cat_sandy_avatar_1787065834312.jpg';

export const KI_PORTAL_URL = 'https://catwolfyki.netlify.app';

export const SOCIAL_LINKS = {
  discord: 'https://discord.gg/rVcNPEh5vu',
  youtube: 'https://youtube.com/@cat-wolfchannel?si=tOuLGlVsbULQjUmo',
  twitch: 'https://m.twitch.tv/catwolfchannelgroup/home',
  whatsappChannel: 'https://whatsapp.com/channel/0029VaqCML8I7BeMKuC0jR1S',
  whatsappSandy: 'https://whatsapp.com/channel/0029ValObeHDOQIWfEUkxc0h',
};

export const COMPANY_INFO = {
  name: 'Cat-Wolf Channel',
  teamName: 'Cat-Wolf Channel Group',
  slogan: 'Kreativität trifft Spitzen-Technologie & Community-Power',
  email: 'cat-wolfchannel@outlook.com',
  description: 'Cat-Wolf Channel ist die innovative Plattform für digitalen Content, Entertainment und modernste KI-Entwicklung – angetrieben durch das engagierte Team der Cat-Wolf Channel Group.',
  stats: [
    { label: 'Aktive Community', value: '25.000+', change: '+38% dies Jahr' },
    { label: 'KI Interaktionen', value: '100.000+', change: '24/7 Bereit' },
    { label: 'Content Produktionen', value: '350+', change: 'Hochauflösend' },
    { label: 'Leitung & Gründer', value: '2 CEOs', change: 'Matthias & Sandy' },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'matthias',
    name: 'Matthias',
    role: 'CEO & Founder',
    bio: 'Leitet die strategische Ausrichtung von Cat-Wolf Channel und treibt zukunftsweisende KI- und Entertainment-Projekte der Cat-Wolf Channel Group voran.',
    avatar: ceoImg,
    badge: 'CEO & Gründer',
    specialty: 'KI-Integration & Channel Leadership',
    skills: ['KI-Entwicklung', 'Creative Direction', 'Projektleitung', 'Community-Building'],
    discordUrl: 'https://discord.com/users/1323182885829742683',
  },
  {
    id: 'sandy',
    name: 'Sandy',
    role: 'CEO & Co-Founder',
    bio: 'Co-Gründerin der Cat-Wolf Channel Group und Creator hinter dem beliebten Cat-Sandy Universe (Cats, Stuff, Cars) sowie dem offiziellen WhatsApp-Kanal „Katzen“.',
    avatar: sandyImg,
    badge: 'CEO & Gründerin',
    specialty: 'Creative Universe & Channel Growth',
    skills: ['Community Outreach', 'Content Creation', 'Cat Sandy Universe', 'Social Growth'],
    whatsappChannelUrl: 'https://whatsapp.com/channel/0029ValObeHDOQIWfEUkxc0h',
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'ki-innovation',
    title: 'Cat-Wolfy KI Assistent',
    description: 'Unser maßgeschneidertes, intelligentes KI-System Cat-Wolfy auf modernster Technologiebasis. Schnelle Antworten, smarte Assistenz und kreative Inspiration.',
    iconName: 'Sparkles',
    tags: ['Cat-Wolfy KI', 'Prompting', '24/7 Verfügbar', 'Automatisierung'],
    metrics: 'Direkt per Knopfdruck erreichbar',
  },
  {
    id: 'content-creation',
    title: 'Premium Content Creation',
    description: 'Hochwertige Video- und Media-Produktionen mit unverwechselbarem Cat-Wolf Branding. Unterhaltung und Fachwissen vereint.',
    iconName: 'Clapperboard',
    tags: ['4K Video', 'Tutorials', 'Short-Form', 'Storytelling'],
    metrics: '350+ Releases',
  },
  {
    id: 'gaming-stream',
    title: 'Gaming & Interactive Streaming',
    description: 'Interaktive Livestreams, spannende Gaming-Sessions und Turniere mit direktem Einbezug unseres Publikums.',
    iconName: 'Gamepad2',
    tags: ['Live Streams', 'Gaming Hub', 'Esports', 'Multiplayer'],
    metrics: 'Wöchentliche Streams',
  },
  {
    id: 'community-hub',
    title: 'Cat-Wolf Channel Group Hub',
    description: 'Eine engagierte Community aus Creators, Tech-Enthusiasten und Gamern. Gemeinsam Ideen umsetzen und vernetzen.',
    iconName: 'Users2',
    tags: ['Discord Server', 'Community Events', 'Feedback Loop', 'Exklusive Einblicke'],
    metrics: '25.000+ Mitglieder',
  },
];

export const CHANNEL_PROJECTS: ChannelProject[] = [
  {
    id: 'p1',
    title: 'Cat-Wolfy KI Assistant',
    category: 'KI & Tech',
    description: 'Das Flaggschiff-KI-Tool von Cat-Wolf Channel. Schnelle Generierung, smarte Fragenbeantwortung und moderne Web-UI.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    date: '2026',
    highlights: ['Intelligenter Chat', 'Schnelle Reaktionszeit', 'Cat-Wolfy Live'],
    status: 'Live',
    link: KI_PORTAL_URL,
  },
  {
    id: 'p2',
    title: 'Cat-Wolf Stream & Media Hub',
    category: 'Content Creation',
    description: 'Offizieller YouTube-Kanal mit neuen Episoden, Highlight-Videos und interaktiven Videoformaten.',
    imageUrl: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
    date: '2026',
    highlights: ['Multi-Cam Setup', '4K Rendering', 'Live Chat Overlay'],
    status: 'Aktiv',
    link: SOCIAL_LINKS.youtube,
  },
  {
    id: 'p3',
    title: 'Cat-Wolf Gaming & Live Broadcasts',
    category: 'Gaming & Streaming',
    description: 'Offizieller Twitch-Kanal der Cat-Wolf Channel Group mit Live-Gaming, Casts und Interaktion.',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    date: '2026',
    highlights: ['Live Broadcast', 'Chat Interaktion', 'Community Matches'],
    status: 'Live',
    link: SOCIAL_LINKS.twitch,
  },
  {
    id: 'p4',
    title: 'Cat-Wolf Discord Community Server',
    category: 'Community',
    description: 'Der offizielle Treffpunkt für alle Mitglieder der Cat-Wolf Channel Group mit KI-Guides, Ressourcen und VIP-Räumen.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    date: '2026',
    highlights: ['Custom Bots', 'Tutorial Corner', 'Support & Talk'],
    status: 'Aktiv',
    link: SOCIAL_LINKS.discord,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Was genau ist der Cat-Wolf Channel?',
    answer: 'Cat-Wolf Channel ist unsere moderne Marke für digitale Inhalte, Media-Produktion und innovative Technologie-Lösungen, entwickelt für eine wachsende und zukunftsorientierte Community.',
    category: 'Allgemein',
  },
  {
    question: 'Wer steckt hinter der Cat-Wolf Channel Group?',
    answer: 'Die Cat-Wolf Channel Group wird von den Gründern und CEOs Matthias und Sandy geleitet, die gemeinsam alle kreativen Medienprojekte, KI-Entwicklungen und Community-Aktivitäten steuern.',
    category: 'Team',
  },
  {
    question: 'Was bietet der integrierte KI-Assistent Cat-Wolfy?',
    answer: 'Über unseren KI-Button gelangen Sie direkt zu Cat-Wolfy. Dort können Sie interaktiv chatten, Fragen stellen, kreative Texte generieren lassen und smarte Workflows automatisieren.',
    category: 'KI',
  },
  {
    question: 'Wie kann ich mit der Cat-Wolf Channel Group kooperieren?',
    answer: 'Nutzen Sie einfach unser Kontaktformular weiter unten auf der Seite oder schreiben Sie uns direkt an. Wir sind offen für Sponsorings, kreative Kollaborationen und Tech-Partnerschaften.',
    category: 'Kooperation',
  },
];
