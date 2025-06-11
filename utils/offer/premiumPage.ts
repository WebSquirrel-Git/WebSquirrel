import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IconListRowPropsType} from '@/components/OfferPage/IconListRow/IconListRow';
const hero = {
  subheader: 'Strona internetowa',
  title: 'Premium',
  price: '3000 - ∞ PLN',
  description:
    'Rozbudowana strona internetowa z kilkoma podstronami i niestandardowymi funkcjonalnościami. Wymyśliłeś coś nietypowego czego nie ma na innych stronach i chcesz to mieć u siebie? Nie ma problemu. Skontaktuj się to ustalimy czy jestem w stanie to zrobić.',
};

const assumptions = [
  'Strona internetowa składająca się ze strony głównej oraz kilku podstron.',
  'Strona główna podzielona na sekcję z krótkimi opisami podstron zachęcających do ich sprawdzenia. Główne zadanie to przedstawienie profilu firmy i tego co oferuje bez wdawania się w szczegółowe opisy - do tego użyjemy podstron.',
  'Kategoryzacja i uporządkowanie treści z wykorzystaniem strony głównej i podstron.',
  'Zaprojektowanie i wdrożenie animacji dla elementów strony internetowej. Menu wyskakujące z prawej strony ekranu, kafelki które po najechaniu zmieniają treść czy nietypowy pasek ładowania strony. Wymieniłem tylko przykładowe animację, które mogą zwiększyć atrakcyjność strony i zapadną odwiedzającemu w pamięci, a właśnie to jest głównym celem żeby strona była polecana i odwiedzana ponownie.',
  'Nie będę się rozpisywać odnośnie nietypowych funkcjonalności - po prostu postaram się zrealizować to co wymyśliliście. Przykładami mogą być interaktywny poradnik, integracja z API czy zaimplementowanie zewnętrznych danych i ich dostosowanie do strony. Opcji jest wiele dlatego zapraszam do konsultacji i omówienia jak coś takiego ma wyglądać i działać.',
];

const priceIncludes = [
  'Konsultacje odnośnie projektu graficznego i zakodowanej strony w wersji developerskiej. Spotkania na google meets.',
  'Stworzenie strony głównej oraz kilku podstron.',
  'Stworzenie nietypowych funkcjonalności strony oraz animacji',
  'Podstawowe ustawienie SEO pod wyszukiwarkę google. Dodanie domeny do Google Search Console i Google Analytics.',
  'Pomoc w wyborze i zakupie hostingu i domeny.',
  'Projekt graficzny',
  'Formularz kontaktowy',
];

const priceNotIncludes = [
  'Pisanie tekstów na stronę - uważam że to Wy najlepiej znacie swoją firmę i wasz opis będzie najbardziej rzetelny. Moja praca w tym zakresie to podpowiedzenie Wam czego teksty mają dotyczyć i ich zredagowanie pod kątem SEO.',
  'Nie kupuje domen i hostingów.',
];

const technologies = [
  'Wordpress',
  'HTML - CSS - JavaScript',
  'NextJs - Sass - TypeScript',
];

interface PREMIUM_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  assumptions: IconListRowPropsType;
  priceIncludes: IconListRowPropsType;
  priceNotIncludes: IconListRowPropsType;
  technologies: IconListRowPropsType;
}

export const PREMIUM_PAGE_CONTENT: PREMIUM_PAGE_CONTENT_TYPE = {
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
