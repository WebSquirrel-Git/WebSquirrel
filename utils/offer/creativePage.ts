import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IconListRowPropsType} from '@/components/OfferPage/IconListRow/IconListRow';
const hero = {
  subheader: 'Strona internetowa',
  title: 'Creative',
  price: '∞ PLN',
  description:
    'Jak to mówią sky is the limit. Ta oferta jest dla osób które chcą czegoś więcej niż standardowa strona i oczekują zastosowania złożonej logiki i mocno nietypowego designu.',
};

const assumptions = [
  'Jeżeli pozostałe oferty nie spełniają Twoich oczekiwań to dobrze, że tu jesteś.',
  'Założenia ustalimy na początku współpracy.',
  'W przypadku bardziej rozbudowanego projektu dodam Cię do tablicy na Jirze w celu lepszego monitorowania postępów prac.',
];

const priceIncludes = [
  'Konsultacje, spotkania na Google Meets.',
  'Projekt graficzny.',
  'Zakodowana strona.',
  'Dostęp do tablicy na Jirze.',
  'Pomoc w wyborze i zakupie hostingu i domeny.',
  'Podstawowe ustawienie SEO pod wyszukiwarkę google. Dodanie domeny do Google Search Console i Google Analytics.',
  'Co tylko klient sobie zażyczy.',
];

const priceNotIncludes = [
  'Pisanie tekstów na stronę - uważam że to Wy najlepiej znacie swoją firmę i wasz opis będzie najbardziej rzetelny. Moja praca w tym zakresie to podpowiedzenie Wam czego teksty mają dotyczyć i ich zredagowanie pod kątem SEO.',
  'Nie kupuje domen i hostingów.',
];

const technologies = [
  'NextJs - Sass - TypeScript',
  'React - Sass - TypeScript',
  'Express.js - TypeScript',
];

interface CREATIVE_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  assumptions: IconListRowPropsType;
  priceIncludes: IconListRowPropsType;
  priceNotIncludes: IconListRowPropsType;
  technologies: IconListRowPropsType;
}

export const CREATIVE_PAGE_CONTENT: CREATIVE_PAGE_CONTENT_TYPE = {
  hero: hero,
  assumptions: {
    title: 'Założenia',
    list: assumptions,
    icon: 'reader',
  },
  priceIncludes: {
    title: 'Co zawiera usługa',
    list: priceIncludes,
    icon: 'checkmarkDone',
  },
  priceNotIncludes: {
    title: 'Czego NIE zawiera usługa',
    list: priceNotIncludes,
    icon: 'closeCircle',
  },
  technologies: {
    title: 'Możliwości wykonania',
    list: technologies,
    icon: 'codeSlash',
  },
};
