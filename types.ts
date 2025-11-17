
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  longDescription: string;
  includes: string[];
  delivery: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

export type View = 'home' | 'purchase' | 'booking' | 'questionnaire' | 'thankyou' | 'contact';
