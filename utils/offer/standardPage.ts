import {AdvantagesPropsType} from '@/components/OfferPage/Advantages/Advantages';
import {IncostsPropsType} from '@/components/OfferPage/Incosts/Incosts';
import {StagesPropsType} from '@/components/OfferPage/Stages/Stages';
import {TechnologiesPropsType} from '@/components/OfferPage/Technologies/Technologies';
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
import PayloadcmsIcon from '@/public/assets/icons/payloadcms-orange-icon.svg';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import PeopleIcon from '@/public/assets/icons/people-icon.svg';

interface OffertHeroType {
  subheader: string;
  title: string;
  price: string;
  description: string;
  videoTitle: string;
}

const hero: OffertHeroType = {
  videoTitle: 'Standard-page.mp4',
  subheader: 'Strona internetowa',
  title: 'Standard',
  price: '2000 - ∞ PLN',
  description:
    'Strona internetowa posiadająca do 5 zakładek. Dobra opcja jeżeli Twoja firma posiada rozbudowane usługi, a Ty nie potrzebujesz rozbudowanego serwisu za większe pieniądze. Większa ilość stron przekłada się na większe możliwości SEO.',
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
  {
    header: 'PayloadCMS',
    icon: PayloadcmsIcon,
    description:
      'Nowoczesny framework oparty na NextJs. Oferta zawiera wykonanie stronie internetowej na jednym z dostępnych szablonów. PayloadCMS charakteryzuje się wysoką wydajnością oraz w pełni konfigurowalnym panelem administratora, z którego można w łatwy sposób aktualizować treści na stronie.',
  },
];
const INCOST_SERVICES = [
  {
    img: WebsiteIcon,
    title: 'Strona główna',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Do 5 podstron',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Indywidualny projekt graficzny dla każdej podstrony',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Propozycje tekstów',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Pływające menu nawigacyjne',
    alt: 'website',
  },
  {
    img: WebsiteIcon,
    title: 'Dopasowane ikony',
    alt: 'website',
  },
  {
    img: WordpressIcon,
    title:
      'Łatwy w obsłudze panel do zarządzania treścią strony (Projekt w Wordpress)',
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
    img: WebsiteIcon,
    title: '5 personalizowanych zakładek',
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
    title: 'Szkolenie online z obsługi strony i poradnik w formie PDF',
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
    description:
      'Po skontaktowaniu się ze mną zaproszę Cię na rozmowę online, gdzie przeanalizujemy obecność Twojej firmy w internecie oraz ustalimy podstawowe cele jakie ma realizować strona.',
  },
  {
    header: 'Ustalenie strategii',
    number: '02',
    description:
      'Na podstawie ustalonych celów, oraz analizy konkurecji i obecności Twojej firmy w sieci zaplanuję dla Ciebie strategię na wykonanie strony i przedstawię Ci ją na spotkaniu lub w formie krótkiego raportu.',
  },
  {
    header: 'Projekt graficzny',
    number: '03',
    description:
      'Na tym etapie mam wszystkie niezbędne informacje potrzebne do stworzenia projektu graficznego strony, który będzie spełniał założenia projektu oraz współgrał z brandingiem Twojej firmy.',
  },
  {
    header: 'Raportowanie',
    number: '04',
    description:
      'W trakcie tworzenia projektu graficznego będę przedstawiał Ci postępy prac, do których będziesz mógł/mogła zgłaszać obiekcje i które poprawie. Kontaktujemy się przez wiadomości lub spotkania online.',
  },
  {
    header: 'Wdrożenie',
    number: '05',
    description:
      'Po ukończeniu projektu graficznego zajmuję się konfiguracją hostingu, domeny oraz wdrożeniu strony na serwer. Zadbam o to żeby strona była zoptymalizowana technicznie, wydajna oraz działała poprawnie na różnych urządzeniach i przeglądarkach.',
  },
  {
    header: 'Konfiguracja',
    number: '07',
    description:
      'Po skutecznymm wdrożeniu strony zajmuję się implementacją pozostałych narzędzi potrzebnych do skutecznego funkcjonowania strony jak: kopie zapasowe, dodanie strony do Google, implementacja Google Analytics, pliki cookies itp.',
  },
  {
    header: 'Szkolenie',
    number: '08',
    description:
      'W tym etapie umawiamy się na spotkanie online lub na żywo, gdzie pokazuję Ci jak działa strona, panel administratora oraz jak o nią dbać. Dostaniesz ode mnie, krótki poradnik o zarządzaniu stroną rozszerzony o odpowiedzi na pytania, które mi zadasz na spotkaniu.',
  },
  {
    header: 'Opieka',
    number: '09',
    description:
      'Przez 2 kolejne miesiące oferuję opiekę nad Twoją stroną, żeby pomóc Ci się na spokojnie wdrożyć w jej edycję bez zbędnego stresu. Po zakończonym procesie zawsze odezwę się do Ciebie żeby sprawdzić czy wszystko jest ok i Ty możesz zrobić to samo.',
  },
];
interface STANDARD_PAGE_CONTENT_TYPE {
  hero: OffertHeroType;
  advantages: AdvantagesPropsType;
  technologies: TechnologiesPropsType;
  incosts: IncostsPropsType;
  stages: StagesPropsType;
}

export const STANDARD_PAGE_CONTENT: STANDARD_PAGE_CONTENT_TYPE = {
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
