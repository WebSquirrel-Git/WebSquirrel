import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {StagesPropsType} from '@/components/OfferPage/Stages/Stages';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import WebsiteIcon from '@/public/assets/icons/website-orange-icon.svg';
import FigmaIcon from '@/public/assets/icons/figma-icon.svg';
import LoopIcon from '@/public/assets/icons/loop-icon.svg';
import CalendarIcon from '@/public/assets/icons/calendar-icon.svg';
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import HtmlIcon from '@/public/assets/icons/html-icon.svg';
import WordpressIcon from '@/public/assets/icons/wordpress-icon.svg';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import PeopleIcon from '@/public/assets/icons/people-icon.svg';
import {IncostsPropsType} from '@/components/OfferPage/Incosts/Incosts';
import {TechnologiesPropsType} from '@/components/OfferPage/Technologies/Technologies';
import {AdvantagesPropsType} from '@/components/OfferPage/Advantages/Advantages';
const hero: OffertHeroPropsType = {
  videoTitle: 'Single-page.mp4',
  subheader: 'Strona internetowa',
  title: 'One Page',
  price: '1300 - ∞ PLN',
  description:
    'Chcesz być widoczny w internecie, ale nie potrzebujesz rozbudowanego serwisu i nie chcesz wkładać w to dużo czasu? Strona wizytówka w sposób krótki i treściwy przedstawi klientom Twoją ofertę oraz sposoby kontaktu. Idealne rozwiązanie dla małych firm jak hydraulicy, elektrycy czy mechanicy.',
};

const ADVANTAGES_DATA = [
  {
    header: 'DOSTĘPNOŚĆ 24/7',
    icon: VisibilityIcon,
    description:
      'Opis Twoich usług jest dostępny cały czas - nie tracisz klientów.',
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
    header: 'HTML + CSS + JS',
    icon: HtmlIcon,
    description:
      'Najbardziej klasyczne wykonanie bez zbędnych plików. Czysty kod bez panelu zarządzania treścią. Do edycji wymagana jest znajomości wyżej wymienionych technologii. Oferuję możliwość długoterminowej współpracy polegającej na wprowadzaniu zmian na stronę.',
  },
  {
    header: 'Wordpress',
    icon: WordpressIcon,
    description:
      'Wykonanie strony na platformie CMS Wordpress, która  posiada intuicyjny panel do zarządzania treścią. Ułatwione wprowadzanie zmian przez klienta.',
  },
];
const INCOST_SERVICES = [
  {
    img: WebsiteIcon,
    title: 'Cała treść na jednej stronie',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title:
      'Przedstawienie informacji o firmie w widocznych sekcjach z nagłówkami',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Poprawki tekstów podanych przez zlecającego pod SEO',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Dopasowane ikony',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Łatwy w obsłudze panel do zarządzania treścią strony ',
    alt: 'website',
  },
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
    img: GoogleIcon,
    title: 'Integracja strony z systemami Google',
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
      'Wykonuję projekt graficzny strony w Figmie. Po skończeniu umawiamy się na spotkanie i omawiamy efekty.',
  },
  {
    header: 'Akceptacja/Poprawki',
    number: '03',
    description:
      'Jeżeli projekt graficzny jest ok to lecimy dalej. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    header: 'Tworzenie strony',
    number: '04',
    description:
      'Na tym etapie praca jest głównie po mojej stronie ale jest to dobry moment żeby dosłać do mnie informacje ustalone na etapie planowania.',
  },
  {
    header: 'Akceptacja/Poprawki',
    number: '05',
    description:
      'Jeżeli strona jest ok to wrzucamy ją na hosting i zajmujemy się SEO. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    header: 'Monitoring',
    number: '06',
    description:
      'Obserwujemy jak działa strona. Spotykamy się na szkolenie online z obsługi strony i pozostajemy w stałym kontakcie.',
  },
];
interface SINGLE_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  advantages: AdvantagesPropsType;
  technologies: TechnologiesPropsType;
  incosts: IncostsPropsType;
  stages: StagesPropsType;
}

export const SINGLE_PAGE_CONTENT: SINGLE_PAGE_CONTENT_TYPE = {
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
