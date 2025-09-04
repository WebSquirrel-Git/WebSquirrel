'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './storesOffer.module.scss';
import OfferStoreCard, {
  OfferStoreCardPropsType,
} from '@/components/Ui/Cards/OfferStoreCard/OfferStoreCard';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import Link from 'next/link';

const OFFER_WOOCOMMERCE_STORE: OfferStoreCardPropsType = {
  type: 'Sklep Internetowy',
  title: 'WooCommerce',
  price: '2000 - 5000 PLN',
  time: 'ok. 2-6 tygodni',
  url: '/oferta/sklepy-internetowe/woocommerce',
  mainList: [
    'Stworzenie planu sklepu oraz ścieżki zakupowej klienta',
    'Stworzenie personalizowanego projektu graficznego spójnego z brandingiem Twojej marki',
    'Utworzenie kategorii produktów',
    'Dodanie szablonów produktów',
    'Implementacja kuponów i promocji',
    'Modyfikacja wiadomości informujących o statusie zamówienia',
    'Optymalizacja SEO dla strony i produktów',
    'Szkolenie z wykorzystania narzędzi analitycznych',
    'Pomoc w doborze odpowiedniego i sprawdzonego hostingu',
    'Przedstawienie informacji o firmie w sposób angażujący klienta do ich sprawdzenia'
  ],
  woocommerceList: [
    'Łatwy w obsłudze panel do zarządzania treścią strony',
    'Panel do obsługi stanów magazynowych i statusów zamówień, płatności i metod dostawy',
    'BRAK opłat abonamentowych - płacisz raz i sklep jest Twój. Opłacasz tylko hosting, domenę, skrzynkę e-mail i prowizje od płatności online.',
  ],
};

const StoresOffer = () => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Ile kosztuje sklep www?"
        about="Wycena zaprojektowania sklepu online jest bardzo złożona i składa się na nią kilka czynników. W zależności od celu jaki sklep ma spełniać oraz określonej grupy klientów i wyróżnieniu się na tle konkurencji powstaje plan sklepu, który może być bardziej lub mniej wymagający i skomplikowany. Integracje z systemami faktur, zewnętrznymi systemami do zarządzania stanami magazynowymi oraz inne modyfikacje także zwiększają złożoność projektu oraz czas potrzebny na jego wykonanie. Poniższe ceny są orientacyjne i zostały podane w celu ogólnego rozeznania się jakie są koszty. W celu poznania dokładnej ceny z uzasadnienim skontaktuj się ze mną klikając w przycisk poniżej i uzyskaj darmową wycenę."
      />
      <DefaultLink name='Uzyskaj darmową wycenę' url='#contact'/>
      <div className={styles.rowBox}>
        <OfferStoreCard {...OFFER_WOOCOMMERCE_STORE} />
      </div>
      <p className={styles.info}>
        Informacja dodatkowa - nie musisz posiadać działalności gospodarczej
        żeby otworzyć sklep online. To platforma sprzedażowa taka jak allegro,
        olx czy vinted - tyle że Twoja. Pamiętaj tylko żeby monitorować ilość
        sprzedanych towarów i ich wartość.
      </p>
      <p className={styles.info}>Jeżeli chcesz dowiedzieć się więcej o korzyściach jakie przynosi sklep internetowy i czy jest to odpowiednie rozwiązanie dla Ciebie sprawdź mój artykuł klikając  <Link href='/artykuly/korzysci-plynace-z-posiadania-sklepu-internetowego' className={styles.accent}>tutaj.</Link></p>
    </div>
  );
};

export default StoresOffer;
