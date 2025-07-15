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
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import PeopleIcon from '@/public/assets/icons/people-icon.svg';
import NexjJSIcon from '@/public/assets/icons/next-js-icon.svg';

const hero: OffertHeroPropsType = {
  videoTitle: 'Creative-page.mp4',
  subheader: 'Strona internetowa',
  title: 'Creative',
  price: '∞ PLN',
  description:
    'Oferta dla firm, które oczekują bardzo wysokiej wydajności strony oraz potrzebują konkretnych rozwiązań — nietypowe funkcje, integracje i layouty. Aplikacje są robione w frameworku NextJs, którego używają takie platformy jak Netflix czy Nike.',
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
    header: 'NextJs',
    icon: NexjJSIcon,
    description:
      'Innowacyjne rozwiązanie, w którym do stworzenia strony używam frameworka NextJs z TS i Scss. Ta opcja wyróżnia się bardzo dużą wydajnością i możliwościami personalizacji pod klienta - nietypowe funkcje, integracje i layouty. Minusem jest brak panelu zarządzania treścią. Do samodzielnej obsługi wymagana jest znajomość programowania w wyżej wymienionych technologiach. Oferuję współpracę na zasadzie aktualizacji treści na stronie podanych przez klienta. Rozliczenie za godziny mojej pracy.',
  },
];
const INCOST_SERVICES = [
   {
    img: NexjJSIcon,
    title: 'Strona główna',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Do 10 podstron',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Indywidualny projekt graficzny dla każdej podstrony',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Propozycje tekstów',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Pływające menu nawigacyjne',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Dopasowane ikony',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Animacje',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Rozbudowana stopka',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Kod strony napisany od 0 w nowoczesnym frameworku',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Elementy interaktywne',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Integracja z zewnętrznymi API',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Dokumentacja techniczna strony',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Rozbudowane skrypty zwiększające funkcjonalności',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Możliwość stworzenia własnych systemów opartych na kodzie TS niezależnych od firm trzecich',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Wysoka wydajność',
    alt: 'nextjs',
  },
  {
    img: NexjJSIcon,
    title: 'Współpraca w aktualizowaniu treści 50pln/h',
    alt: 'nextjs',
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
    img: FigmaIcon,
    title: 'Animacje',
    alt: 'figma',
  },
  {
    img: WebsiteIcon,
    title: 'Dedykowane skrypty pod potrzeby firmy',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Możliwość wprowadzenia obrobionych klipów wideo',
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
    img: GoogleIcon,
    title: 'Integracja strony z systemami Google',
    alt: 'google',
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
interface CREATIVE_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  advantages: AdvantagesPropsType;
  technologies: TechnologiesPropsType;
  incosts: IncostsPropsType;
  stages: StagesPropsType;
}

export const CREATIVE_PAGE_CONTENT: CREATIVE_PAGE_CONTENT_TYPE = {
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
