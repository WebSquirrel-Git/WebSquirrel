import {AdvantagesPropsType} from '@/components/OfferPage/Advantages/Advantages';
import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IncostsPropsType} from '@/components/OfferPage/Incosts/Incosts';
import {StagesPropsType} from '@/components/OfferPage/Stages/Stages';
import {TechnologiesPropsType} from '@/components/OfferPage/Technologies/Technologies';
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
import HtmlIcon from '@/public/assets/icons/html-icon.svg';
import WooCommerceIcon from '@/public/assets/icons/woocommerce-orange-icon.svg';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import PeopleIcon from '@/public/assets/icons/people-icon.svg';

const hero: OffertHeroPropsType = {
  videoTitle: 'Timeline4.mp4',
  subheader: 'Sklep internetowy',
  title: 'WooCommerce',
  price: '2000 - ∞ PLN',
  description:
    'Rozwiązanie dla firm, które chcą sprzedawać produkty online i mieć możliwość samodzielnej edycji treści na nim. Aplikacje wykonywane są na platformie Wordpress z WooCommerce. Sklep mogą założyć także osoby prowadzące działalność nierejestrowaną.',
};

const ADVANTAGES_DATA = [
  {
    header: 'DOSTĘPNOŚĆ 24/7',
    icon: VisibilityIcon,
    description: 'Twoje produkty są dostępne cały czas - nie tracisz klientów.',
  },
  {
    header: 'ROZPOZNAWALNOŚĆ',
    icon: MegaphoneIcon,
    description: 'Zwiększenie zasięgu i rozpoznawalności firmy.',
  },
  {
    header: 'NOWI KLIENCI',
    icon: PersonIcon,
    description: 'Większy zasięg to nowi klienci.',
  },
  {
    header: 'WIARYGODNOŚĆ',
    icon: TrustIcon,
    description:
      'Firmy ze stroną są częściej postrzegane jako bardziej wiarygodne.',
  },
  {
    header: 'CZAS',
    icon: ClockIcon,
    description:
      'Dobrze opisana oferta oszczędzi Ci czas na odbieranie telefonów i odpisywanie na wiadomości.',
  },
  {
    header: 'INWESTYCJA',
    icon: AnalyzeIcon,
    description:
      'Budowanie rozpoznawalności strony to długi proces - lepiej zacząć wcześniej.',
  },
  {
    header: 'ANALIZA',
    icon: LoopIcon,
    description:
      'Zyskujesz dostęp do analizy zachowań klientów, które mogą pomoc Ci w rozwoju.',
  },
  {
    header: 'INTEGRACJA',
    icon: PeopleIcon,
    description: 'Miejsce gdzie możesz przekierować ruch z różnych portali.',
  },
];
const TECHNOLOGIES_DATA = [
  {
    header: 'WooCommerce',
    icon: WooCommerceIcon,
    description:
      'Wykonanie sklepu na platformie Woocommerce, która oferuje panel zarządzania sklepem. Zarządzanie treściami - Wordpress, więc będziesz w stanie wszystko samemu edytować.',
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
    img: WebsiteIcon,
    title: 'Strona sklepu',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Personalizowane zakładki opisujące kategorie produktów',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Zakładka poświęcona marce',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Dodanie kilku produktów szablonowych',
    alt: 'website',
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
    title: 'Wdrożenie płatności online',
    alt: 'cash',
  },
  {
    img: DeliveryIcon,
    title: 'Wdrożenie wyboru dostawy online',
    alt: 'delivery',
  },
  {
    img: GoogleIcon,
    title: 'Integracja strony z systemami Google',
    alt: 'google',
  },
  {
    img: ToolIcon,
    title: 'Szkolenie online z obsługi sklepu i poradnik w formie PDF',
    alt: 'tool',
  },
  {
    img: ChatIcon,
    title: 'Stały kontakt po zakończeniu projektu',
    alt: 'chat',
  },
];
const STAGES_DATA = [
  {
    header: 'Konsultacja',
    number: '01',
    description: 'Omówienie założeń projektu.',
  },
  {
    header: 'Projekt graficzny',
    number: '02',
    description:
      'Wykonuję projekt graficzny sklepu w Figmie. Po skończeniu umawiamy się na spotkanie i omawiamy efekty.',
  },
  {
    header: 'Akceptacja/Poprawki',
    number: '03',
    description:
      'Jeżeli projekt graficzny jest ok to lecimy dalej. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    header: 'Tworzenie sklepu',
    number: '04',
    description:
      'Na tym etapie praca jest głównie po mojej stronie ale jest to dobry moment żeby dosłać do mnie informacje ustalone na etapie planowania.',
  },
  {
    header: 'Akceptacja/Poprawki',
    number: '05',
    description:
      'Jeżeli sklep jest ok to wrzucamy go na hosting i zajmujemy się SEO. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    header: 'Monitoring',
    number: '06',
    description:
      'Obserwujemy jak działa sklep. Spotykamy się na szkolenie online z obsługi sklepu i pozostajemy w stałym kontakcie.',
  },
];
interface WOOCOMMERCE_SHOP_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  advantages: AdvantagesPropsType;
  technologies: TechnologiesPropsType;
  incosts: IncostsPropsType;
  stages: StagesPropsType;
}

export const WOOCOMMERCE_SHOP_CONTENT: WOOCOMMERCE_SHOP_CONTENT_TYPE = {
  hero: hero,
  advantages: {
    ADVANTAGES_DATA: ADVANTAGES_DATA,
  },
  incosts: {
    INCOST_SERVICES: INCOST_SERVICES,
  },
  technologies: {
    TECHNOLOGIES_DATA: TECHNOLOGIES_DATA,
  },
  stages: {
    STAGES_DATA: STAGES_DATA,
  },
};
