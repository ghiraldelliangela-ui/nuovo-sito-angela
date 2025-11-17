
import React, { useState, useCallback, FormEvent, useRef } from 'react';
import type { Service, View } from './types';
import { SERVICES, CALENDLY_URL, FORMSPREE_ENDPOINT, SEO } from './constants';
import { MenuIcon, XIcon } from './components/Icons';
import PayPalButton from './components/PayPalButton';


// HEADER COMPONENT
interface HeaderProps {
  setView: (view: View) => void;
}
const Header: React.FC<HeaderProps> = ({ setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' as View },
    { name: 'Servizi', view: 'purchase' as View },
    { name: 'Prenota', view: 'booking' as View },
    { name: 'Contatti', view: 'contact' as View },
  ];

  const NavLink: React.FC<{ view: View, children: React.ReactNode, isMobile?: boolean }> = ({ view, children, isMobile = false }) => (
    <button
      onClick={() => {
        setView(view);
        if (isMobile) setIsMenuOpen(false);
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isMobile ? 'w-full text-left' : ''} text-text-gray hover:text-accent-pink hover:bg-primary-pink/20`}
    >
      {children}
    </button>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setView('home')} className="text-xl font-serif font-bold text-accent-pink">
          Dr. Angela Ghiraldelli
        </button>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => <NavLink key={link.view} view={link.view}>{link.name}</NavLink>)}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="w-6 h-6 text-accent-pink" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6">
          <div className="flex justify-between items-center mb-8">
             <span className="text-xl font-serif font-bold text-accent-pink">Menu</span>
             <button onClick={() => setIsMenuOpen(false)}>
                <XIcon className="w-6 h-6 text-accent-pink"/>
             </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => <NavLink key={link.view} view={link.view} isMobile>{link.name}</NavLink>)}
          </nav>
        </div>
      )}
    </header>
  );
};


// FOOTER COMPONENT
const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray-bg border-t border-primary-pink/30">
      <div className="container mx-auto px-6 py-12 text-center text-text-gray">
        <p className="font-serif text-lg text-accent-pink">Dr. Angela Ghiraldelli</p>
        <p className="text-sm mt-2">Veterinario Nutrizionista</p>
        <p className="text-xs mt-4 max-w-2xl mx-auto">
          La consulenza nutrizionale non sostituisce una visita veterinaria clinica. Non si effettuano prescrizioni di farmaci a distanza.
        </p>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Dr. Angela Ghiraldelli. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};


// HOME PAGE VIEW
const HomePage: React.FC<{ setView: (view: View) => void, onServiceSelect: (service: Service) => void }> = ({ setView, onServiceSelect }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://picsum.photos/id/1025/1200/800" alt="Dottoressa con un cane" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Cura e Benessere</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Nutrizione clinica e percorsi personalizzati per la salute del tuo cane e gatto.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => setView('purchase')} className="bg-primary-pink hover:bg-accent-pink text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
              Acquista una Dieta
            </button>
            <button onClick={() => setView('booking')} className="bg-white/20 backdrop-blur-sm border border-white/50 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Prenota una Consulenza
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-gray-bg">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/id/342/600/600" alt="Dr. Angela Ghiraldelli" className="rounded-xl shadow-xl aspect-square object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-accent-pink mb-4">Dr. Angela Ghiraldelli</h2>
            <p className="mb-4">
              Medico Veterinario con una passione profonda per la nutrizione clinica e la medicina interna. Il mio obiettivo è migliorare la qualità della vita dei vostri animali attraverso un'alimentazione sana, bilanciata e personalizzata.
            </p>
            <p>
              Credo fermamente in un approccio integrato, che consideri l'animale nella sua totalità, per costruire insieme un percorso di salute e benessere duraturo.
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <img src="https://picsum.photos/seed/shivach/100/50" alt="Logo Shivach" className="h-10"/>
              <img src="https://picsum.photos/seed/gpcert/100/50" alt="Logo GP-Cert" className="h-10"/>
              <img src="https://picsum.photos/seed/nutri/100/50" alt="Logo Formazione Nutrizionale" className="h-10"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-accent-pink">I Miei Servizi</h2>
            <p className="mt-2 text-lg max-w-2xl mx-auto">Un approccio su misura per ogni esigenza nutrizionale e clinica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-light-gray-bg rounded-xl shadow-md p-8 flex flex-col text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-primary-pink text-white p-4 rounded-full mb-4">
                  <service.icon className="w-8 h-8"/>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 flex-grow">{service.description}</p>
                <p className="text-2xl font-bold text-accent-pink mb-6">€{service.price}</p>
                <button onClick={() => { onServiceSelect(service); setView('purchase'); }} className="bg-accent-pink text-white font-bold py-2 px-6 rounded-full w-full hover:bg-primary-pink transition-colors">
                  Scopri di più
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


// PURCHASE PAGE VIEW
const PurchasePage: React.FC<{
  setView: (view: View) => void;
  selectedService: Service | null;
  onServiceSelect: (service: Service | null) => void;
  onPurchaseSuccess: () => void;
}> = ({ setView, selectedService, onServiceSelect, onPurchaseSuccess }) => {
  const [error, setError] = useState<string | null>(null);

  const handlePayPalError = useCallback((err: any) => {
    setError('Si è verificato un errore durante il pagamento. Riprova.');
    console.error(err);
  }, []);

  return (
    <div className="bg-light-gray-bg py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-accent-pink">Acquista un Servizio</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">Seleziona il percorso più adatto alle esigenze del tuo animale. Dopo l'acquisto, verrai guidato alla compilazione del questionario.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1 flex flex-col gap-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => { onServiceSelect(service); setError(null); }}
                className={`p-4 rounded-lg text-left transition-all border-2 ${selectedService?.id === service.id ? 'bg-primary-pink/20 border-accent-pink shadow-lg' : 'bg-white border-transparent hover:border-primary-pink'}`}
              >
                <h3 className="font-bold text-text-gray">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
                <p className="font-bold text-accent-pink mt-1">€{service.price}</p>
              </button>
            ))}
          </div>
          
          <div className="md:col-span-1 bg-white p-8 rounded-xl shadow-lg">
            {selectedService ? (
              <div>
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
                <h3 className="text-2xl font-serif text-accent-pink mb-2">{selectedService.title}</h3>
                <p className="text-3xl font-bold mb-4">€{selectedService.price}</p>
                <p className="text-sm mb-4">{selectedService.longDescription}</p>
                <div className="text-sm space-y-2 mb-6">
                  <div>
                    <h4 className="font-bold">Cosa include:</h4>
                    <ul className="list-disc list-inside ml-2">
                      {selectedService.includes.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Quando lo riceverai:</h4>
                    <p>{selectedService.delivery}</p>
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <p className="text-xs text-center mb-4">Paga in sicurezza con PayPal.</p>
                <PayPalButton
                  key={selectedService.id}
                  service={selectedService}
                  onSuccess={onPurchaseSuccess}
                  onError={handlePayPalError}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <p className="text-text-gray">Seleziona un servizio per visualizzare i dettagli e procedere con l'acquisto.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// BOOKING PAGE VIEW
const BookingPage: React.FC = () => {
  return (
    <div className="py-20 bg-light-gray-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-accent-pink">Prenota una Consulenza</h2>
          <p className="mt-2 text-lg max-w-2xl mx-auto">Scegli il giorno e l'orario che preferisci per la nostra consulenza online. L'appuntamento si terrà su Zoom.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="min-h-[700px]">
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="700"
              frameBorder="0"
              title="Calendly Booking"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};


// FIX: Update FormField to accept and spread additional props like `step`.
// FORM BASE COMPONENT
const FormField: React.FC<{label: string, name: string, type?: string, required?: boolean, children?: React.ReactNode, as?: 'input' | 'textarea' | 'select', [key: string]: any}> = ({label, name, type='text', required=false, children, as='input', ...props}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-text-gray mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        {as === 'textarea' ? (
            <textarea id={name} name={name} rows={4} required={required} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-pink focus:border-accent-pink" {...props} />
        ) : as === 'select' ? (
             <select id={name} name={name} required={required} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-pink focus:border-accent-pink bg-white" {...props}>
                {children}
             </select>
        ) : (
            <input type={type} id={name} name={name} required={required} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-pink focus:border-accent-pink" {...props} />
        )}
    </div>
);

// QUESTIONNAIRE PAGE VIEW
const QuestionnairePage: React.FC<{setView: (view: View) => void}> = ({setView}) => {
    const [status, setStatus] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        setStatus('Invio in corso...');
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                setStatus('Grazie! Il tuo questionario è stato inviato con successo.');
                form.reset();
            } else {
                setStatus('Si è verificato un errore. Riprova.');
            }
        } catch (error) {
            setStatus('Si è verificato un errore. Riprova.');
        }
    };
    
    return (
        <div className="py-20 bg-light-gray-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif text-accent-pink">Questionario Pre-Consulenza</h2>
                        <p className="mt-2">Compila questo modulo con la massima precisione. Mi aiuterà a preparare la dieta migliore per il tuo animale.</p>
                    </div>

                    <form ref={formRef} action={FORMSPREE_ENDPOINT} method="POST" encType="multipart/form-data" onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-lg font-semibold border-b pb-2 text-accent-pink">Dati dell'Animale</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField label="Nome Animale" name="nome_animale" required />
                            <FormField label="Specie" name="specie" as="select" required>
                                <option value="">Seleziona...</option>
                                <option value="cane">Cane</option>
                                <option value="gatto">Gatto</option>
                            </FormField>
                             <FormField label="Età (anni)" name="eta" type="number" required />
                             <FormField label="Peso (kg)" name="peso" type="number" step="0.1" required />
                        </div>
                         <FormField label="Sterilizzato/a?" name="sterilizzato" as="select" required>
                            <option value="">Seleziona...</option>
                            <option value="si">Sì</option>
                            <option value="no">No</option>
                        </FormField>
                        
                        <h3 className="text-lg font-semibold border-b pb-2 mt-8 text-accent-pink">Anamnesi Alimentare e Clinica</h3>
                        <FormField label="Alimentazione attuale e quantità giornaliera" name="alimentazione_attuale" as="textarea" required />
                        <FormField label="Patologie diagnosticate" name="patologie" as="textarea" />
                        <FormField label="Terapie in corso" name="terapie" as="textarea" />
                        <FormField label="Qual è l'obiettivo della consulenza?" name="obiettivo" as="textarea" required />
                        <FormField label="Note aggiuntive" name="note" as="textarea" />
                        
                        <h3 className="text-lg font-semibold border-b pb-2 mt-8 text-accent-pink">Dati del Proprietario e Documenti</h3>
                        <FormField label="La tua Email" name="email" type="email" required />
                        <div>
                            <label htmlFor="referti" className="block text-sm font-medium text-text-gray mb-1">Carica file (esami, referti - max 10MB)</label>
                            <input type="file" id="referti" name="upload" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-pink/20 file:text-accent-pink hover:file:bg-primary-pink/40" />
                        </div>
                        
                        <div className="pt-6">
                             {status ? (
                                <p className="text-center font-semibold text-accent-pink">{status}</p>
                            ) : (
                                <button type="submit" className="w-full bg-accent-pink hover:bg-primary-pink text-white font-bold py-3 px-8 rounded-full transition-colors">
                                    Invia Questionario
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


// THANK YOU PAGE VIEW
const ThankYouPage: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
  return (
    <div className="py-20 bg-light-gray-bg min-h-[60vh] flex items-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white p-12 rounded-xl shadow-lg">
          <h2 className="text-4xl font-serif text-accent-pink">Grazie per il tuo acquisto!</h2>
          <p className="mt-4 text-lg">Il pagamento è stato completato con successo.</p>
          <p className="mt-4">Il prossimo passo è compilare il questionario dettagliato. Per favore, prenditi il tempo necessario per fornire tutte le informazioni, sono fondamentali per elaborare il piano nutrizionale corretto.</p>
          <button
            onClick={() => setView('questionnaire')}
            className="mt-8 bg-accent-pink hover:bg-primary-pink text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            Vai al Questionario
          </button>
        </div>
      </div>
    </div>
  );
};


// CONTACT PAGE VIEW
const ContactPage: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        setStatus('Invio in corso...');
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                setStatus('Messaggio inviato! Ti risponderò il prima possibile.');
                form.reset();
            } else {
                setStatus('Ops! Qualcosa è andato storto. Riprova.');
            }
        } catch (error) {
            setStatus('Ops! Qualcosa è andato storto. Riprova.');
        }
    };

    return (
        <div className="py-20 bg-light-gray-bg">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif text-accent-pink">Contattami</h2>
                        <p className="mt-2">Hai domande o vuoi richiedere informazioni? Compila il modulo qui sotto.</p>
                    </div>
                    <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-6">
                        <FormField label="Il tuo Nome" name="name" required />
                        <FormField label="La tua Email" name="email" type="email" required />
                        <FormField label="Oggetto" name="subject" required />
                        <FormField label="Messaggio" name="message" as="textarea" required />
                        <div className="pt-2">
                            {status ? (
                                <p className="text-center font-semibold text-accent-pink">{status}</p>
                            ) : (
                                <button type="submit" className="w-full bg-accent-pink hover:bg-primary-pink text-white font-bold py-3 px-8 rounded-full transition-colors">
                                    Invia Messaggio
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


// MAIN APP COMPONENT
export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const handlePurchaseSuccess = useCallback(() => {
    setView('thankyou');
  }, []);

  const handleServiceSelect = useCallback((service: Service | null) => {
    setSelectedService(service);
  }, []);
  
  const renderView = () => {
    switch(view) {
      case 'purchase':
        return <PurchasePage setView={setView} selectedService={selectedService} onServiceSelect={handleServiceSelect} onPurchaseSuccess={handlePurchaseSuccess} />;
      case 'booking':
        return <BookingPage />;
      case 'questionnaire':
        return <QuestionnairePage setView={setView} />;
      case 'thankyou':
        return <ThankYouPage setView={setView} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setView={setView} onServiceSelect={handleServiceSelect} />;
    }
  };

  return (
    <div className="bg-white text-text-gray font-sans">
      <Header setView={setView} />
      <main>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}
