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
import PerliaPc from '@/public/portfolio/perlia/pc.webp';
import ATZMPc from '@/public/portfolio/atzmdesign/pc.webp';
import NemoPc from '@/public/portfolio/nemosportowaprzygoda/pc.webp';
import TrigetPc from '@/public/portfolio/triget/pc.webp';
import PerliaBg from '@/public/portfolio/perlia/background.webp';
import ATZMBg from '@/public/portfolio/atzmdesign/background.webp';
import NemoBg from '@/public/portfolio/nemosportowaprzygoda/background.webp';
import TrigetBg from '@/public/portfolio/triget/background.webp';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
const PORTFOLIO_SHORT_ITEMS: PortfolioShortCardProps[] = [
  {
    header: 'Sklep internetowy',
    website_url: 'https://perlia.pl/',
    website_name: 'www.perlia.pl',
    subheader: 'Sprzedaż ręcznie robionej biżuterii',
    about:'Jak sklep online zwiększył atrakcyjność oferty i poprawił komfort kupujących z instagrama?',
    imgPhone: PerliaIphone,
    imgPc:PerliaPc,
    imgBg:PerliaBg,
    logo: PerliaLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Brandbook',
    website_url:
      'https://www.behance.net/gallery/226380319/ATZM-Design-Brandbook',
    website_name: 'www.behance.net',
    subheader: 'Sprzedaż ręcznie robionych ubrań',
    about:'Co zawiera brandbook i jak wpływa na prezentację marki w internecie?',
     imgPhone: ATZMIphone,
    imgPc:ATZMPc,
    imgBg:ATZMBg,
    logo: ATZMLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Strona internetowa',
    website_url: 'https://nemosportowaprzygoda.pl/',
    website_name: 'www.nemosportowaprzygoda.pl',
    subheader: 'Szkoła nauki pływania',
    about:'Jak stworzyć stronę dla firmy, która zajmuje się nauką pływania oraz organizacją obozów lato/zima? Jak udało nam się wypozycjonować ją lokalnie i dotrzeć do nowych klientów?',
      imgPhone: NemoIphone,
    imgPc:NemoPc,
    imgBg:NemoBg,
    logo: NemoLogo,
    portfolio_url: '/portfolio',
  },
  {
    header: 'Strona internetowa',
    website_url: 'https://triget.pl/',
    website_name: 'www.triget.pl',
    subheader: 'Usługi elektroinstalacyjne',
    about:'Modernizacja strony firmy zajmującej się świadczeniem usłlug elektroinstalacyjnych.',
      imgPhone: TrigetIphone,
    imgPc:TrigetPc,
    imgBg:TrigetBg,
    logo: TrigetLogo,
    portfolio_url: '/portfolio',
  },
];

const PortfolioShort = () => {
  return (
    <div className={styles.container}>
      <H2About
        h2="Zobacz projekty stworzone dla moich klientów"
        about=""
        // Sprawdź co udało mi się stworzyć w ramach współpracy z klientami. Każdy projekt był indywidualnie dostosowany pod zleceniodawcę i powstał w wyniku naszej wspólnej pracy i zaangażowania.
      />
      <div className={styles.columnBox}>
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
