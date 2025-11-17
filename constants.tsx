
import type { Service } from './types';
import { BoneIcon, StethoscopeIcon, PawIcon, HeartPulseIcon, LaptopIcon, SproutIcon } from './components/Icons';

export const SEO = {
  defaultTitle: 'Dr. Angela Ghiraldelli - Veterinario Nutrizionista',
  defaultDescription: 'Nutrizione clinica, medicina interna e percorsi personalizzati per la salute e il benessere di cani e gatti.',
};

export const CALENDLY_URL = 'https://calendly.com/ghiraldelli-angela/30min';
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvgdekyk';
export const CONTACT_EMAIL = 'angela.ghiraldelli@email.com';

export const SERVICES: Service[] = [
  {
    id: 'dieta_cane_adulto',
    title: 'Dieta Cane Adulto',
    description: 'Piano nutrizionale bilanciato per cani adulti sani.',
    price: 95,
    longDescription: 'Un piano alimentare casalingo, su misura per le esigenze specifiche del tuo cane adulto, garantendo salute e vitalità ottimali. Formulato con ingredienti freschi e naturali.',
    includes: ['Analisi del questionario', 'Piano dietetico personalizzato', 'Guida alla preparazione', 'Supporto email per 15 giorni'],
    delivery: 'Riceverai la dieta via email entro 5-7 giorni lavorativi dal pagamento e dalla compilazione del questionario.',
    image: 'https://picsum.photos/id/237/600/400',
    icon: BoneIcon,
  },
  {
    id: 'dieta_cucciolo',
    title: 'Dieta Cucciolo',
    description: 'Supporto nutrizionale per una crescita sana e armoniosa.',
    price: 80,
    longDescription: 'Una dieta studiata per accompagnare il tuo cucciolo in ogni fase della crescita. Assicura il corretto apporto di nutrienti per uno sviluppo scheletrico e muscolare ottimale.',
    includes: ['Valutazione curva di crescita', 'Piano dietetico evolutivo', 'Consigli per lo svezzamento', 'Supporto email per 30 giorni'],
    delivery: 'Riceverai la dieta via email entro 5-7 giorni lavorativi.',
    image: 'https://picsum.photos/id/1062/600/400',
    icon: SproutIcon,
  },
  {
    id: 'dieta_patologie',
    title: 'Dieta per Patologie',
    description: 'Alimentazione specifica per cani e gatti con patologie.',
    price: 120,
    longDescription: 'Supporto nutrizionale mirato per animali con diagnosi di patologie (renali, gastroenteriche, dermatologiche, etc.). La dieta è formulata per gestire la condizione e migliorare la qualità della vita.',
    includes: ['Analisi della documentazione clinica', 'Piano dietetico terapeutico', 'Collaborazione con il veterinario curante', 'Follow-up programmato'],
    delivery: 'Riceverai la dieta via email entro 7-10 giorni lavorativi.',
    image: 'https://picsum.photos/id/1084/600/400',
    icon: StethoscopeIcon,
  },
  {
    id: 'percorsi_clinici',
    title: 'Percorsi Clinici',
    description: 'Gestione integrata di casi complessi di medicina interna.',
    price: 150,
    longDescription: 'Un percorso completo che integra medicina interna e nutrizione clinica per affrontare casi complessi. Ideale per animali con problematiche multiple o croniche.',
    includes: ['Visita specialistica (online o in ambulatorio)', 'Piano diagnostico e terapeutico', 'Formulazione dietetica specifica', 'Controlli periodici'],
    delivery: 'Il percorso inizia con la prima consulenza, da prenotare dopo l\'acquisto.',
    image: 'https://picsum.photos/id/431/600/400',
    icon: HeartPulseIcon,
  },
  {
    id: 'parere_nutrizionale',
    title: 'Parere Nutrizionale',
    description: 'Valutazione della dieta attuale e consigli mirati.',
    price: 35,
    longDescription: 'Un\'analisi professionale della dieta attuale del tuo animale (commerciale o casalinga) per identificare eventuali carenze o eccessi e fornire consigli pratici per migliorarla.',
    includes: ['Analisi della dieta corrente', 'Report scritto con suggerimenti', 'Indicazioni su integrazioni, se necessarie'],
    delivery: 'Riceverai il parere scritto via email entro 3-4 giorni lavorativi.',
    image: 'https://picsum.photos/id/343/600/400',
    icon: PawIcon,
  },
  {
    id: 'consulenza_zoom',
    title: 'Consulenza Online',
    description: 'Appuntamento di 30 minuti su Zoom per discutere le esigenze del tuo pet.',
    price: 50,
    longDescription: 'Una consulenza video per discutere dubbi, problematiche o per un primo contatto conoscitivo. Potremo analizzare insieme la situazione e definire i passi successivi.',
    includes: ['Sessione video di 30 minuti', 'Risposte a dubbi e domande', 'Indicazioni per il percorso futuro'],
    delivery: 'Dopo l\'acquisto, prenota il tuo slot preferito tramite il link che riceverai via email.',
    image: 'https://picsum.photos/id/176/600/400',
    icon: LaptopIcon,
  }
];
