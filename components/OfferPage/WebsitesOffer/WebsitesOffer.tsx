'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './websitesOffer.module.scss';
import OfferWebsiteCard, {
  OfferWebsiteCardPropsType,
} from '@/components/Ui/Cards/OfferWebsiteCard/OfferWebsiteCard';

const OFFER_SINGLE_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'One Page',
  price: '1300 PLN',
  time: 'ok. 1-2 tygodnie',
  url: '/oferta/strony-internetowe/singlepage',
  mainList: [
    'Cała treść na jednej stronie',
    'Przedstawienie informacji o firmie w widocznych sekcjach z nagłówkami',
    'Poprawki tekstów podanych przez zlecającego pod SEO',
    'Dopasowane ikony',
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [],
};
const OFFER_STANDARD_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Standard',
  price: '2000 PLN',
  time: 'ok. 2 tygodnie',
  url: '/oferta/strony-internetowe/standard',
  mainList: [
    'Strona główna',
    'Do 5 podstron',
    'Indywidualny projekt graficzny dla każdej podstrony',
    'Propozycje tekstów',
    'Pływające menu nawigacyjne',
    'Dopasowane ikony',
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [],
};
const OFFER_PREMIUM_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Premium',
  price: '3000 PLN',
  time: 'ok. 2-3 tygodnie',
  url: '/oferta/strony-internetowe/premium',
  mainList: [
    'Strona główna',
    'Do 10 podstron',
    'Indywidualny projekt graficzny dla każdej podstrony',
    'Propozycje tekstów',
    'Pływające menu nawigacyjne',
    'Dopasowane ikony',
    'Animacje',
    'Rozbudowana stopka',
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [
    {
      type: 'check',
      value: 'Kod strony napisany od 0 w nowoczesnym frameworku',
    },
    {
      type: 'check',
      value: 'Elementy interaktywne',
    },
    {
      type: 'check',
      value: 'Wysoka wydajność',
    },
    {
      type: 'check',
      value: 'Współpraca w aktualizowaniu treści 50pln/h',
    },
    {
      type: 'check',
      value: 'Brak panelu do zarządzania treścią',
    },
  ],
};
const OFFER_CREATIVE_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Creative',
  price: '5000 PLN',
  time: 'ok. 4-6 tygodni',
  url: '/oferta/strony-internetowe/creative',
  mainList: [],
  wordpressList: [],
  nextJsList: [
    {
      type: 'check',
      value: 'Strona główna',
    },
    {
      type: 'check',
      value: 'Do 10 podstron',
    },
    {
      type: 'check',
      value: 'Indywidualny projekt graficzny dla każdej podstrony',
    },
    {
      type: 'check',
      value: 'Propozycje tekstów',
    },
    {
      type: 'check',
      value: 'Pływające menu nawigacyjne',
    },
    {
      type: 'check',
      value: 'Dopasowane ikony',
    },
    {
      type: 'check',
      value: 'Animacje',
    },
    {
      type: 'check',
      value: 'Rozbudowana stopka',
    },
    {
      type: 'check',
      value: 'Kod strony napisany od 0 w nowoczesnym frameworku',
    },
    {
      type: 'check',
      value: 'Elementy interaktywne',
    },
    {
      type: 'check',
      value: 'Dokumentacja techniczna strony',
    },
    {
      type: 'check',
      value: 'Rozbudowane skrypty zwiększające funkcjonalności',
    },
    {
      type: 'check',
      value:
        'Możliwość stworzenia własnych systemów opartych na kodzie TS niezależnych od firm trzecich',
    },
    {
      type: 'check',
      value: 'Wysoka wydajność',
    },
    {
      type: 'check',
      value: 'Współpraca w aktualizowaniu treści 50pln/h',
    },
    {
      type: 'false',
      value: 'Brak panelu do zarządzania treścią',
    },
  ],
};

const WebsitesOffer = () => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Ile kosztuje strona www?"
        about="Wszystkie podane ceny są orientacyjne. Proces projektowania stron internetowych oraz ich tworzenia jest indywidualny i zależy od potrzeb oraz zakresu prac – dlatego ostateczna wycena może się różnić. W celu poznania dokładnego kosztu Twojej strony www skontaktuj się ze mną."
      />
      <div className={styles.rowBox}>
        <OfferWebsiteCard {...OFFER_SINGLE_PAGE} />
        <OfferWebsiteCard {...OFFER_STANDARD_PAGE} />
        <OfferWebsiteCard {...OFFER_PREMIUM_PAGE} />
        <OfferWebsiteCard {...OFFER_CREATIVE_PAGE} />
      </div>
      <p className={styles.info}>
        Dla pasjonatów klasycznych rozwiązań bez zbędnych dodatków istnieje
        możliwość wykonania stron w HTML+CSS+JS/TS. Więcej informacji o wycenie
        podczas kontaktu.
      </p>
    </div>
  );
};

export default WebsitesOffer;
