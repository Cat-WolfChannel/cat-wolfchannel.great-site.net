export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  badge: string;
  specialty: string;
  skills: string[];
  discordUrl?: string;
  whatsappChannelUrl?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  metrics: string;
}

export interface ChannelProject {
  id: string;
  title: string;
  category: 'KI & Tech' | 'Content Creation' | 'Gaming & Streaming' | 'Community';
  description: string;
  imageUrl: string;
  date: string;
  highlights: string[];
  status: 'Aktiv' | 'Neu' | 'Geplant' | 'Live';
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

