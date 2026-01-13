
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
