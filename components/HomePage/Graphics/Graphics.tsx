'use client';
import OfferCard from '@/components/Ui/Cards/OfferCard/OfferCard';
import styles from './graphics.module.scss';

const GRAPHICS_OFFERT = [
  {
    type: 'Grafiki',
    title: 'SVG',
    price: '100 - ∞ PLN',
    description:
      'Grafiki takie jak np. logo firmy nie muszą być sztywnym obrazkiem, który zawsze wygląda tak samo. Pomogę Ci je ożywić wprowadzając kilka modyfikacji, które poprawią ich skalowanie i dadzą możliwość wprowadzania modyfikacji. Obrazy SVG nie tracą na jakości przy zmianie ich rozmiaru. ',
    url: '/oferta/grafiki/svg',
    link: false,
  },
  {
    type: 'Animacje',
    title: 'HTML+CSS',
    price: '100 - ∞ PLN',
    description:
      'Potrzebujesz nietypowej animacji na swoją stronę internetową? Tworzę animacje dla elementów na stronie internetowej jak i odwzorowania GIF.',
    url: '/oferta/grafiki/animacje',
    link: false,
  },
  {
    type: 'Projekty graficzne',
    title: 'Figma',
    price: '100 - ∞ PLN',
    description:
      'Podoba Ci się mój style i potrzebujesz projektu graficznego. Napisz, zadzwoń omówimy szczegóły i postaram Ci się pomóc.',
    url: '/oferta/grafiki/projektygraficzne',
    link: false,
  },
  {
    type: 'Rolki promocyjne',
    title: 'Figma+Jiter',
    price: '100 - ∞ PLN',
    description:
      'Rolki wideo do 20 sekund tworzone na podstawie projektu graficznego klienta. Jest to dobra opcja żeby poinformować klientów o ważnych wydarzeniach na Waszych socjal mediach.',
    url: '/oferta/grafiki/rolki',
    link: false,
  },
];

const Graphics = () => {
  return (
    <section id="offerGraphics" className={styles.container}>
      <div className={styles.headerBox}>
        <h2>Elementy graficzne i wideo</h2>
        <p>
          Wszystkie projekty graficzne , animacje i wideo obejmują darmową
          konsultację i stały kontakt w trakcie wykonywania zlecenia.
        </p>
      </div>
      <div className={styles.rowBox}>
        {GRAPHICS_OFFERT.map((offert, index) => (
          <OfferCard color="blue" {...offert} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Graphics;
