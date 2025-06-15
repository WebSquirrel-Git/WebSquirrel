'use client';
import OfferCard from '@/components/Ui/Cards/OfferCard/OfferCard';
import styles from './pages.module.scss';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import WebsiteIcon from '@/public/assets/icons/website-orange-icon.svg';
import FigmaIcon from '@/public/assets/icons/figma-icon.svg';
import LoopIcon from '@/public/assets/icons/loop-icon.svg';
import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import DolarIcon from '@/public/assets/icons/dolar-icon.svg';
import DeliveryIcon from '@/public/assets/icons/delivery-icon.svg';
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';

const PAGES_OFFERT = [
  {
    type: 'Strona internetowa',
    title: 'Single Page',
    price: '1300 - ∞ PLN',
    description:
      'Chcesz być widoczny w internecie, ale nie potrzebujesz rozbudowanego serwisu i nie chcesz wkładać w to dużo czasu? Strona wizytówka w sposób krótki i treściwy przedstawi klientom Twoją ofertę oraz sposoby kontaktu. Idealne rozwiązanie dla małych firm jak hydraulicy, elektrycy czy mechanicy.',
    url: '/oferta/strony/singlepage',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Standard',
    price: '2000 - ∞ PLN',
    description:
      'Strona internetowa posiadająca do 5 zakładek. Dobra opcja jeżeli Twoja firma posiada rozbudowane usługi, a Ty nie potrzebujesz rozbudowanego serwisu za większe pieniądze. Większa ilość stron przekłada się na większe możliwości SEO.',
    url: '/oferta/strony/standard',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Premium',
    price: '3000 - ∞ PLN',
    description:
      'Oferta dla firm, które chcą profesjonalnie zaprezentować wiele usług, produktów lub treści. Sprawdzi się również, jeżeli prowadzisz mały biznes, ale regularnie tworzysz content i chcesz zadbać o silniejszą widoczność w Google.',
    url: '/oferta/strony/premium',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Creative',
    price: '∞ PLN',
    description:
      'Oferta dla firm, które oczekują bardzo wysokiej wydajności strony oraz potrzebują konkretnych rozwiązań — nietypowe funkcje, integracje i layouty. Aplikacje są robione w frameworku NextJs, którego używają takie platformy jak Netflix czy Nike.',
    url: '/oferta/strony/creative',
    link: true,
  },
  {
    type: 'Sklep internetowy ',
    title: 'WooCommerce',
    price: '2000 - ∞ PLN',
    description:
      'Rozwiązanie dla firm, które chcą sprzedawać produkty online i mieć możliwość samodzielnej edycji treści na nim. Aplikacje wykonywane są na platformie Wordpress z WooCommerce. Sklep mogą założyć także osoby prowadzące działalność nierejestrowaną.',
    url: '/oferta/sklepy/woocommerce',
    link: true,
  },
];
const INCOST_SERVICES = [
  {
    img: PhoneIcon,
    title: 'Darmowa konsultacja',
    alt: 'phone',
  },
  {
    img: WebsiteIcon,
    title: 'Pomoc w zakupie i konfiguracji hostingu oraz domeny',
    alt: 'website',
  },
  {
    img: FigmaIcon,
    title: 'Personalizowany projekt graficzny',
    alt: 'figma',
  },
  {
    img: LoopIcon,
    title: 'Optymalizacja SEO',
    alt: 'loop',
  },
  {
    img: CalendarIcon,
    title: 'Spotkania na Google Meet',
    alt: 'calendar',
  },
  {
    img: DolarIcon,
    title: 'Wdrożenie płatności online (sklep)',
    alt: 'cash',
  },
  {
    img: DeliveryIcon,
    title: 'Wdrożenie wyboru dostawy online (sklep)',
    alt: 'delivery',
  },
  {
    img: GoogleIcon,
    title: 'Integracja strony z systemami Google',
    alt: 'google',
  },
  {
    img: ToolIcon,
    title: 'Szkolenie online z obsługi strony/sklepu i poradnik w formie PDF',
    alt: 'tool',
  },
  {
    img: ChatIcon,
    title: 'Stały kontakt po zakończeniu projektu',
    alt: 'chat',
  },
];
const Pages = () => {
  return (
    <section id="offerWebsites" className={styles.container}>
      <div className={styles.headerBox}>
        <h2>Strony i sklepy internetowe</h2>
        <p>
          Wszystkie podane ceny są orientacyjne. Proces tworzenia stron i
          sklepów internetowych jest indywidualny i zależy od potrzeb oraz
          zakresu prac – dlatego ostateczna wycena może się różnić. W celu
          poznania dokładnego kosztu realizacji projektu skontaktuj się.
        </p>
      </div>
      <div className={styles.rowBox}>
        {PAGES_OFFERT.map((offert, index) => (
          <OfferCard color="orange" {...offert} key={index} />
        ))}
      </div>
      <div className={styles.rowBox}>
        {INCOST_SERVICES.map((service, index) => (
          <div className={styles.serviceBox} key={index}>
            <img
              src={service.img.src}
              alt={service.alt}
              title={service.alt}
              width={24}
              height={24}
              loading="lazy"
            />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
      <DefaultLink name="Dopytaj o szczegóły" url="/#contact" />
    </section>
  );
};

export default Pages;
