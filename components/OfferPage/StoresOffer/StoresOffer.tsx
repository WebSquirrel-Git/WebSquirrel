'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './storesOffer.module.scss';
import OfferStoreCard, {
  OfferStoreCardPropsType,
} from '@/components/Ui/Cards/OfferStoreCard/OfferStoreCard';

const OFFER_WOOCOMMERCE_STORE: OfferStoreCardPropsType = {
  type: 'Sklep Internetowy',
  title: 'WooCommerce',
  price: '2000 PLN',
  time: 'ok. 2-4 tygodni',
  url: '/oferta/sklepy-internetowe/woocommerce',
  mainList: [
    'Strona główna z opisem firmy i produktów',
    'Do 5 podstron z produktami',
    'Indywidualny projekt graficzny dla każdej podstrony',
    'Dopasowane ikony',
    'Rozbudowana stopka',
    'Propozycje tekstów',
    'Utworzenie kategorii produktów',
    'Dodanie 5 produktów, które posłużą jako szablony dla kolejnych',
    'Integracja z płatnościami online',
    'Integracja sposobów dostawy',
    'Modyfikacje kuponów i promocji',
    'Modyfikacja wiadomości informujących o statusie zamówienia',
    'Integracja z Google Merchant',
    'Optymalizacja SEO dla 3 produktów',
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
        about="Wszystkie podane ceny są orientacyjne. Budowa sklepu internetowego jest procesem indywidualnym, który zależy od potrzeb oraz zakresu prac – dlatego ostateczna wycena może się różnić. W celu poznania dokładnego kosztu realizacji Twojego e-sklepu skontaktuj się ze mną."
      />
      <div className={styles.rowBox}>
        <OfferStoreCard {...OFFER_WOOCOMMERCE_STORE} />
      </div>
      <p className={styles.info}>
        Informacja dodatkowa - nie musisz posiadać działalności gospodarczej
        żeby otworzyć sklep online. To platforma sprzedażowa taka jak allegro,
        olx czy vinted - tyle że Twoja. Pamiętaj tylko żeby monitorować ilość
        sprzedanych towarów i ich wartość.
      </p>
    </div>
  );
};

export default StoresOffer;
