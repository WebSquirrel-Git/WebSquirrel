import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IconListRowPropsType} from '@/components/OfferPage/IconListRow/IconListRow';
import {title} from 'process';
const hero = {
  subheader: 'Strona internetowa',
  title: 'Single Page',
  price: '1300 - ∞ PLN',
  description:
    'Strona wizytówka to dobry wybór dla małych firm, które dopiero zaczynają swoją działalność i chcą przedstawić klientom profil swojej firmy.',
};

const assumptions = [
  'Wszystkie informacje o firmie umieszczone na jednej stronie.',
  'Kategoryzacja informacji i umieszczenie ich w sekcjach. Każda sekcja powinna zawierać nagłówek. Poprawia to czytelności strony, SEO i powoduje zachowanie porządku i jasnego przekazu na stronie.',
  'Grafiki - uważamy że to co wyróżnia dobrą stronę to jej autentyczność i historia więc zachęcamy do robienia zdjęć pokazujących waszą pracę, żeby jak najlepiej przedstawić Was klientowi. W przypadku braku własnych zdjęć stworzymy dostosowane ikony, które pomogą w zachowaniu estetyki na stronie. Jak zapewne wiecie czytanie ściany tekstu na stronie jest męczące dlatego wspominamy Wam o grafikach i ich alternatywach, które można użyć jako kreatywne przerywniki. ',
];

const priceIncludes = [
  'Konsultacje odnośnie projektu graficznego i zakodowanej strony w wersji developerskiej. Spotkania na google meets.',
  'Podstawowe ustawienie SEO pod wyszukiwarkę google. Dodanie domeny do Google Search Console i Google Analytics.',
  'Pomoc w wyborze i zakupie hostingu i domeny.',
  'Projekt graficzny',
  'Formularz kontaktowy',
];

const priceNotIncludes = [
  'Pisanie tekstów na stronę - uważamy że to Wy najlepiej znacie swoją firmę i wasz opis będzie najbardziej rzetelny. Nasza praca w tym zakresie to podpowiedzenie Wam czego teksty mają dotyczyć i ich zredagowanie pod kątem SEO.',
  'Nie kupujemy domen i hostingów.',
];

const technologies = [
  'Wordpress',
  'HTML - CSS - JavaScript',
  'NextJs - Sass - TypeScript',
];

interface SINGLE_PAGE_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  assumptions: IconListRowPropsType;
  priceIncludes: IconListRowPropsType;
  priceNotIncludes: IconListRowPropsType;
  technologies: IconListRowPropsType;
}

export const SINGLE_PAGE_CONTENT: SINGLE_PAGE_CONTENT_TYPE = {
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
