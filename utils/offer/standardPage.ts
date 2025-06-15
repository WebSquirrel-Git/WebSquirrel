import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IconListRowPropsType} from '@/components/OfferPage/IconListRow/IconListRow';
const hero = {
  subheader: 'Strona internetowa',
  title: 'Standard',
  price: '2000 - ∞ PLN',
  description:
    'Strona internetowa posiadająca do 5 zakładek. Dobra opcja jeżeli Twoja firma posiada rozbudowane usługi, a Ty nie potrzebujesz rozbudowanego serwisu za większe pieniądze. Większa ilość stron przekłada się na większe możliwości SEO.',
};

const assumptions = [
  'Strona internetowa składająca się ze strony głównej oraz kilku podstron.',
  'Strona główna podzielona na sekcję z krótkimi opisami podstron zachęcających do ich sprawdzenia. Główne zadanie to przedstawienie profilu firmy i tego co oferuje bez wdawania się w szczegółowe opisy - do tego użyjemy podstron.',
  'Podstrony zawierają informację o poszczególnych usługach i opisach działalności firmy. W przypadku większej ilości informacji ich kategoryzacja, uporządkowanie oraz możliwość szybkiego dostępu jest kluczowym elementem. Podstrony pozwalają na ich bezpośrednie dodanie do wyszukiwarki google i tym samym zwiększają szanse na trafienie użytkownika na stronę firmy ze względu na bardziej szczegółowe słowa kluczowe dotyczące usługi.',
  'Dobre SEO - opisy SEO muszą być krótkie i treściwe. Podstrony pozwalają na skupienie się wyłącznie na danym temacie i lepsze dopasowanie słów kluczowych do tematu. Kolejnym plusem jest możliwość bezpośredniego udostępniania linków dzięki czemu klient trafia bezpośrednio do informacji których potrzebuje. Budujemy także rzetelność zarówno podstrony jak i strony co podnosi pozycję na których wyświetla się nasza strona w wyszukiwarkach.',
];

const priceIncludes = [
  'Konsultacje odnośnie projektu graficznego i zakodowanej strony w wersji developerskiej. Spotkania na google meets.',
  'Stworzenie strony głównej oraz kilku podstron.',
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

interface STANDARD_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  assumptions: IconListRowPropsType;
  priceIncludes: IconListRowPropsType;
  priceNotIncludes: IconListRowPropsType;
  technologies: IconListRowPropsType;
}

export const STANDARD_PAGE_CONTENT: STANDARD_PAGE_CONTENT_TYPE = {
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
