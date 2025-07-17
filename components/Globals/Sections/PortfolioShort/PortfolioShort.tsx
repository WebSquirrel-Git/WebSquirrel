'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './portfolioShort.module.scss';
import PortfolioShortCard, {
  PortfolioShortCardProps,
} from '@/components/Ui/Cards/PortfolioShortCard/PortfolioShortCard';
import ATZMLogo from '@/public/portfolio/atzmdesign/logo-white.svg';
import PerliaLogo from '@/public/portfolio/perlia/logo-gray.svg';
import NemoLogo from '@/public/portfolio/nemosportowaprzygoda/nemo-logo.svg';
import TrigetLogo from '@/public/portfolio/triget/triget-logo.svg';
import PerliaIphone from '@/public/portfolio/perlia/iphone-flat.webp';
import ATZMIphone from '@/public/portfolio/atzmdesign/iphone-flat.webp';
import NemoIphone from '@/public/portfolio/nemosportowaprzygoda/iphone-flat.webp';
import TrigetIphone from '@/public/portfolio/triget/iphone-flat.webp';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
const PORTFOLIO_SHORT_ITEMS: PortfolioShortCardProps[] = [
  {
    header: 'Sklep internetowy',
    website_url: 'https://perlia.pl/',
    website_name: 'www.perlia.pl',
    about: 'Sprzedaż ręcznie robionej biżuterii',
    img: PerliaIphone,
    logo: PerliaLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Brandbook',
    website_url:
      'https://www.behance.net/gallery/226380319/ATZM-Design-Brandbook',
    website_name: 'www.behance.net',
    about: 'Sprzedaż ręcznie robionych ubrań',
    img: ATZMIphone,
    logo: ATZMLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Strona internetowa',
    website_url: 'https://nemosportowaprzygoda.pl/',
    website_name: 'www.nemosportowaprzygoda.pl',
    about: 'Szkoła nauki pływania',
    img: NemoIphone,
    logo: NemoLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Strona internetowa',
    website_url: 'https://triget.pl/',
    website_name: 'www.triget.pl',
    about: 'Usługi elektroinstalacyjne',
    img: TrigetIphone,
    logo: TrigetLogo,
    portfolio_url: '/portfolio',
  },
];

const PortfolioShort = () => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Przykładowe realizacje"
        about="Sprawdź co udało mi się stworzyć w ramach współpracy z klientami. Każdy projekt był indywidualnie dostosowany pod zleceniodawcę i powstał w wyniku naszej wspólnej pracy i zaangażowania."
      />
      <div className={styles.rowBox}>
        {PORTFOLIO_SHORT_ITEMS.map((project, index) => (
          <PortfolioShortCard {...project} key={index} />
        ))}
      </div>
      <div className={styles.linkBox}>
        <p>
          Przycisk poniżej przeniesie Cię na stronę mojego portfolio gdzie
          znajdziesz więcej realizacji.
        </p>
        <DefaultLink name="Sprawdź portfolio" url="/portfolio" />
      </div>
    </div>
  );
};

export default PortfolioShort;
