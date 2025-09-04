'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './websitesOffer.module.scss';
import OfferWebsiteCard, {
  OfferWebsiteCardPropsType,
} from '@/components/Ui/Cards/OfferWebsiteCard/OfferWebsiteCard';
import Link from 'next/link';

const OFFER_SINGLE_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'One Page',
  price: '1000 - 1500 PLN',
  time: 'ok. 1-2 tygodnie',
  url: '/oferta/strony-internetowe/singlepage',
  mainList: [
    'Oferta firmy przedstawiona na jednej stronie',
    'Przedstawienie informacji o firmie w sposób angażujący klienta do ich sprawdzenia',
    'Dostosowanie tekstów na stronę',
    'Pomoc w doborze odpowiedniego i sprawdzonego hostingu'
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [
      {
      type: 'check',
      value: 'Wykonanie statycznej strony w wydajnym frameworku NextJs z możlliwością obięcia strony aktualizacją treści przeze mnie',
    },
    {
      type: 'false',
      value: 'Brak panelu administracyjnego',
    },
  ],
  payloadCMSList: [],
};
const OFFER_STANDARD_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Standard',
  price: '1500 - 3000 PLN',
  time: 'ok. 2 tygodnie',
  url: '/oferta/strony-internetowe/standard',
  mainList: [
    'Do 6 zakładek',
    'Stworzenie treści na różnych zakładkach, które będą ze sobą współgrać i zaangażują klienta do zapoznania się z nimi',
    'Dostosowanie tekstów na stronę','Pomoc w doborze odpowiedniego i sprawdzonego hostingu'
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [
     {
      type: 'check',
      value: 'Wykonanie statycznej strony w wydajnym frameworku NextJs z możlliwością obięcia strony aktualizacją treści przeze mnie',
    },
    {
      type: 'false',
      value: 'Brak panelu administracyjnego',
    },
  ],
  payloadCMSList: [
    {
      type: 'check',
      value: 'Strona dostosowana pod Twoje potrzeby, wykonana w oparciu o mój autorski szablon',
    },
    {
      type: 'check',
      value:
        'Prosty panel administracyjny zaprojektowany przeze mnie',
    },
    {
      type: 'check',
      value: 'Framework oparty na NextJs zapewniający dużą wydajność',
    },
  ],
};
const OFFER_PREMIUM_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Premium',
  price: '2000 - 5000 PLN',
  time: 'ok. 2-3 tygodnie',
  url: '/oferta/strony-internetowe/premium',
  mainList: [
      'Powyżej 6 zakładek',
    'Stworzenie ścieżki dla klienta, która ułatwi mu zapoznanie się z ofertą zamieszczoną na różnych stronach',
     'Kreatywne rozmieszczenie informacji o firmie i CTA, które zachęcą klienta do kontaktu',
    'Dostosowanie tekstów na stronę','Pomoc w doborze odpowiedniego i sprawdzonego hostingu'
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [
  {
      type: 'check',
      value: 'Wykonanie statycznej strony w wydajnym frameworku NextJs z możlliwością obięcia strony aktualizacją treści przeze mnie',
    },
    {
      type: 'false',
      value: 'Brak panelu administracyjnego',
    },
  ],
  payloadCMSList: [
     {
      type: 'check',
      value: 'Strona dostosowana pod Twoje potrzeby, wykonana w oparciu o mój autorski szablon',
    },
    {
      type: 'check',
      value:
        'Możliwość dostosowania zaprojektowanego przeze mnie panelu administracyjnego pod Twoje potrzeby',
    },
    {
      type: 'check',
      value: 'Framework oparty na NextJs zapewniający dużą wydajność',
    },
  ],
};
const OFFER_CREATIVE_PAGE: OfferWebsiteCardPropsType = {
  type: 'Strona internetowa',
  title: 'Creative',
  price: '3000 - 7000 PLN',
  time: 'ok. 4-10 tygodni',
  url: '/oferta/strony-internetowe/creative',
  mainList: [
    'Powyżej 6 zakładek',
     'Stworzenie ścieżki dla klienta, która ułatwi mu zapoznanie się z ofertą zamieszczoną na różnych stronach',
     'Kreatywne rozmieszczenie informacji o firmie i CTA, które zachęcą klienta do kontaktu',
    'Strona rozbudowana o dodatkowe moduły i funkcjonalności',
    'Dodatkowe materiały graficzne na social media','Pomoc w doborze odpowiedniego i sprawdzonego hostingu'
  ],
  wordpressList: ['Łatwy w obsłudze panel do zarządzania treścią strony'],
  nextJsList: [
    {
      type: 'check',
      value: 'Wykonanie statycznej strony w wydajnym frameworku NextJs z możlliwością obięcia strony aktualizacją treści przeze mnie',
    },
    {
      type: 'false',
      value: 'Brak panelu administracyjnego',
    },
  ],
  payloadCMSList: [
      {
      type: 'check',
      value: 'Strona dostosowana pod Twoje potrzeby, wykonana od 0',
    },
    {
      type: 'check',
      value:
        'Panel administratora zaprojektowany pod Ciebie',
    },
    {
      type: 'check',
      value: 'Framework oparty na NextJs zapewniający dużą wydajność',
    },
     {
      type: 'check',
      value: 'Systemy automatyzacji treści dostosowane pod Ciebie',
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
        Istnieje możliwość wykonania stron w HTML+CSS+JS/TS. Więcej informacji o wycenie
        podczas kontaktu.
      </p>
      <p>Jeżeli zastanawiasz się czy potrzebujesz strony internetowej sprawdź mój artykuł <Link href='/artykuly/dlaczego-warto-miec-strone-www' className={styles.accent}>tutaj</Link>, w którym opisuję jaką rolę pełni strona internetowa w dzisiejszym rozwoju firmy.</p>
    </div>
  );
};

export default WebsitesOffer;
