import {OffertHeroPropsType} from '@/components/OfferPage/Hero/Hero';
import {IconListRowPropsType} from '@/components/OfferPage/IconListRow/IconListRow';
const hero = {
  subheader: 'Sklep internetowy',
  title: 'WooCommerce',
  price: '2000 - ∞ PLN',
  description:
    'Rozwiązanie dla firm, które chcą sprzedawać produkty online i mieć możliwość samodzielnej edycji treści na nim. Aplikacje wykonywane są na platformie Wordpress z WooCommerce. Sklep mogą założyć także osoby prowadzące działalność nierejestrowaną.',
};

const assumptions = [
  'Strona sklepu składająca się ze strony głównej, podstrony sklepu zawierającej informacje o produktach oraz podstronach produktów.',
  'Strona główna podzielona na sekcję z opisami działalności firmy, oraz kategorii produktów zachęcających do sprawdzenia oferty.',
  'Podstrona z produktami zawiera listę produktów z możliwością ich filtrowania.',
  'Każdy produkt posiada swoją podstronę ze szczegółowym opisem, ceną, SKU, możliwością dostawy itp.',
  'Integracja z aplikacjami umożliwiającymi płatności online oraz formy dostawy.',
];

const priceIncludes = [
  'Konsultacje odnośnie projektu graficznego i zakodowanej strony w wersji developerskiej. Spotkania na google meets.',
  'Stworzenie strony głównej sklepu oraz podstron produktów.',
  'Podstawowe ustawienie SEO pod wyszukiwarkę google. Dodanie domeny do Google Search Console i Google Analytics.',
  'Pomoc w wyborze i zakupie hostingu i domeny.',
  'Wdrożenie integracji płatności online i wyboru sposobu dostawy.',
  'Projekt graficzny',
  'Formularz kontaktowy',
];

const priceNotIncludes = [
  'Pisanie tekstów na stronę - uważam że to Wy najlepiej znacie swoją firmę i wasz opis będzie najbardziej rzetelny. Moja praca w tym zakresie to podpowiedzenie Wam czego teksty mają dotyczyć i ich zredagowanie pod kątem SEO.',
  'Nie kupuje domen i hostingów.',
  'Wszelkie rejestracje i opłaty związane z aktywacją usług płatności online i sposobów dostawy leżą po stronie klienta. W przypadku występowania problemów służę pomocą.',
];

const technologies = ['WooCommerce'];

interface WOOCOMMERCE_SHOP_CONTENT_TYPE {
  hero: OffertHeroPropsType;
  assumptions: IconListRowPropsType;
  priceIncludes: IconListRowPropsType;
  priceNotIncludes: IconListRowPropsType;
  technologies: IconListRowPropsType;
}

export const WOOCOMMERCE_SHOP_CONTENT: WOOCOMMERCE_SHOP_CONTENT_TYPE = {
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
