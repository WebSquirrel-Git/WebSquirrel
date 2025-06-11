'use client';
import OfferCard from '@/components/Ui/Cards/OfferCard/OfferCard';
import styles from './pages.module.scss';

const PAGES_OFFERT = [
  {
    type: 'Strona internetowa',
    title: 'Single Page',
    price: '1300 - ∞ PLN',
    description:
      'Strona wizytówka to dobry wybór dla małych firm, które dopiero zaczynają swoją działalność i chcą przedstawić klientom profil swojej firmy.',
    url: '/oferta/strony/singlepage',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Standard',
    price: '2000 - ∞ PLN',
    description:
      'Standardowa strona z kilkoma podstronami i podstawowymi funkcjonalnościami. Idealna dla firm, które świadczą więcej niż jedną usługę.',
    url: '/oferta/strony/standard',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Premium',
    price: '3000 - ∞ PLN',
    description:
      'Rozbudowana strona internetowa z kilkoma podstronami i niestandardowymi funkcjonalnościami. Wymyśliłeś coś nietypowego czego nie ma na innych stronach i chcesz to mieć u siebie? Nie ma problemu. Skontaktuj się to ustalimy czy jesteśmy w stanie to zrobić.',
    url: '/oferta/strony/premium',
    link: true,
  },
  {
    type: 'Strona internetowa',
    title: 'Creative',
    price: '∞ PLN',
    description:
      'Jak to mówią sky is the limit. Ta oferta jest dla osób które chcą czegoś więcej niż standardowa strona i oczekują zastosowania złożonej logiki i mocno nietypowego designu.',
    url: '/oferta/strony/creative',
    link: true,
  },
  {
    type: 'Sklep internetowy ',
    title: 'WooCommerce',
    price: '2000 - ∞ PLN',
    description:
      'Prosty sklep internetowy zbudowany na WooCommerce. Idealne rozwiązanie dla startujących firm oferujących sprzedaż produktów lub usług. Zakres usług związanych ze sklepem: płatności online, sposób dostawy, zarządzanie SKU, aktualizacja stanu zamówienia e-mail dla klienta.',
    url: '/oferta/sklepy/woocommerce',
    link: true,
  },
];

const Pages = () => {
  return (
    <section id="offerWebsites" className={styles.container}>
      <div className={styles.headerBox}>
        <h2>Strony i sklepy internetowe</h2>
        <p>
          Projekty obejmują darmową konsultację, projekt graficzny strony,
          podstawowe ustawienia SEO, oraz stały kontakt. Wszystkie strony są
          projektowane tak żeby były w pełni responsywne RWD. Możesz też liczyć
          na wsparcie po zakończeniu projektu oraz szkolenie lub instrukcję
          obsługi strony.
        </p>
      </div>
      <div className={styles.rowBox}>
        {PAGES_OFFERT.map((offert, index) => (
          <OfferCard color="orange" {...offert} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Pages;
