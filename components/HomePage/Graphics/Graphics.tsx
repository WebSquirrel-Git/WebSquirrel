'use client';
import OfferCard from '@/components/Ui/Cards/OfferCard/OfferCard';
import styles from './graphics.module.scss';

const GRAPHICS_OFFERT = [
  {
    type: 'Projekt',
    title: 'Brandbooka',
    price: '500 - ∞ PLN',
    description:
      'Oferta dotyczy stworzenia Brandbooka w formacie PDF. Księga znaku zawiera informacje o marce, identyfikacje wizualną (logo, kolory, typografia, itp.) oraz reguły jej stosowania co pozwala zachować spójność i przekaz marki.',
    url: '/oferta/grafiki/brandbook',
    link: false,
  },
  {
    type: 'Modyfikacje',
    title: 'Logo',
    price: '100 - ∞ PLN',
    description:
      'Oferta polega na odwzorowaniu aktualnego logo do formatu SVG, który poprawi jego jakość i skalowanie. Usługa obejmuje także wprowadzenie modyfikacji do obecnego logo lub stworzenie alternatywnych wariantów.',
    url: '/oferta/grafiki/modyfikacje-logo',
    link: false,
  },
  {
    type: 'Animacje',
    title: 'HTML+CSS',
    price: '100 - ∞ PLN',
    description:
      'Usługa polega na stworzeniu animacji internetowej składającej się z kodu HTML i stylów CSS. Taki kod jest łatwy do umiejscowienia na stronie i w pełni skalowalny. Jest to lepsza alternatywa dla plików GIF, które więcej ważą i wydłużają ładowanie strony.',
    url: '/oferta/grafiki/animacje',
    link: false,
  },
  {
    type: 'Projekty graficzne',
    title: 'Figma',
    price: '100 - ∞ PLN',
    description:
      'Oferta obejmuje projektowanie banerów, ulotek, postów reklamowych i innych.',
    url: '/oferta/grafiki/projektygraficzne',
    link: false,
  },
  {
    type: 'Rolki',
    title: 'Social Media',
    price: '100 - ∞ PLN',
    description:
      'Oferta dotyczy tworzenia rolek na IG i FB z wykorzystaniem elementów montażu. Dopiero zaczynam się rozwijać w tym temacie więc pierwsza rolka ZA DARMO. Stworzone rolki można sprawdzić na moim Instagramie.',
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
          Wszystkie podane ceny są orientacyjne. Proces projektowania
          graficznego jest indywidualny i zależy od Twoich potrzeb - dlatego
          ostateczna wycena może się różnić. W celu poznania dokładnego kosztu
          realizacji projektu skontaktuj się.
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
