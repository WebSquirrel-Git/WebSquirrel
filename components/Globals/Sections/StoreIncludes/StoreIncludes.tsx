'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './storeIncludes.module.scss';
import PhoneIcon from '@/public/assets/icons/phone-orange-icon.svg';
import WebsiteIcon from '@/public/assets/icons/website-orange-icon.svg';
import FigmaIcon from '@/public/assets/icons/figma-icon.svg';
import LoopIcon from '@/public/assets/icons/loop-icon.svg';
import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import ImageIcon from '@/public/assets/icons/image-orange-icon.svg';
import CookiesIcon from '@/public/assets/icons/notifications-orange-icon.svg';
import DeliveryIcon from '@/public/assets/icons/delivery-icon.svg';
import PaymentsIcon from '@/public/assets/icons/dolar-icon.svg';

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
    img: DeliveryIcon,
    title: 'Integracja sposobów dostawy',
    alt: 'image',
  },
  {
    img: PaymentsIcon,
    title: 'Integracja z płatnościami online',
    alt: 'image',
  },
  {
    img: ImageIcon,
    title: 'Optymalizacja zdjęć ',
    alt: 'image',
  },
  {
    img: PhoneIcon,
    title: 'RWD - dostosowanie do urządzeń mobilnych',
    alt: 'phone',
  },
  {
    img: CookiesIcon,
    title: 'Informacja o cookies',
    alt: 'ring',
  },
  {
    img: LoopIcon,
    title: 'Optymalizacja SEO',
    alt: 'loop',
  },
  {
    img: ChatIcon,
    title: 'Formularz kontaktowy',
    alt: 'chat',
  },
  {
    img: CalendarIcon,
    title: 'Regularne spotkania na Google Meet',
    alt: 'calendar',
  },
  {
    img: ChatIcon,
    title: 'Konfiguracja automatycznych powiadomień o statusie zamówienia',
    alt: 'chat',
  },
  {
    img: GoogleIcon,
    title: 'Integracja strony z systemami Google (Analytics, Search Console, Merchant Center)',
    alt: 'google',
  },
  {
    img: ToolIcon,
    title: 'Szkolenie online z obsługi strony',
    alt: 'tool',
  },
  {
    img: ChatIcon,
    title: 'Stały kontakt po zakończeniu projektu',
    alt: 'chat',
  },
];

interface StoreIncludesPropsType {
  h2: string;
}

const StoreIncludes = ({h2}: StoreIncludesPropsType) => {
  return (
    <div className={styles.container}>
      <H2About
        h2={h2}
        about="Poniżej znajdziesz listę elementów i usług, która jest wdrażana do każdego projektu, który tworzę."
      />
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
    </div>
  );
};

export default StoreIncludes;
