import {ProjectLandscapeCardPropsType} from '@/components/Ui/Cards/ProjectLandscapeCard/ProjectLandscapeCard';
import NextJsIcon from '@/public/assets/icons/next-js-icon.svg';
import PayloadcmsIcon from '@/public/assets/icons/payloadcms-orange-icon.svg';
import TypeScriptIcon from '@/public/assets/icons/typescript-icon.svg';
import SassIcon from '@/public/assets/icons/sass-icon.svg';
import FigmaIcon from '@/public/assets/icons/figma-icon.svg';
import FigmaBlueIcon from '@/public/assets/icons/figma-blue-icon.svg';
import WordpressIcon from '@/public/assets/icons/wordpress-orange-icon.svg';
import WooCommerceIcon from '@/public/assets/icons/woocommerce-orange-icon.svg';
import NemoCoverImage from '@/public/portfolio/nemosportowaprzygoda/cover.svg';
import NemoImg1 from '@/public/portfolio/nemosportowaprzygoda/nemo-1.webp';
import NemoImg2 from '@/public/portfolio/nemosportowaprzygoda/nemo-2.webp';
import NemoImg3 from '@/public/portfolio/nemosportowaprzygoda/nemo-3.webp';
import NemoImg4 from '@/public/portfolio/nemosportowaprzygoda/nemo-4.webp';
import NemoImg5 from '@/public/portfolio/nemosportowaprzygoda/nemo-5.webp';
import AtzmCoverImage from '@/public/portfolio/atzmdesign/cover.svg';
import AtzmImg1 from '@/public/portfolio/atzmdesign/atzm-1.webp';
import AtzmImg2 from '@/public/portfolio/atzmdesign/atzm-2.webp';
import AtzmImg3 from '@/public/portfolio/atzmdesign/atzm-3.webp';
import AtzmImg4 from '@/public/portfolio/atzmdesign/atzm-4.webp';
import AtzmImg5 from '@/public/portfolio/atzmdesign/atzm-5.webp';
import TrigetCoverImage from '@/public/portfolio/triget/cover.svg';
import TrigetImg1 from '@/public/portfolio/triget/triget-1.webp';
import TrigetImg2 from '@/public/portfolio/triget/triget-2.webp';
import TrigetImg3 from '@/public/portfolio/triget/triget-3.webp';
import TrigetImg4 from '@/public/portfolio/triget/triget-4.webp';
import TrigetImg5 from '@/public/portfolio/triget/triget-5.webp';
import NemoLogoImg1 from '@/public/portfolio/nemologo/nemo-logo-1.webp';
import NemoLogoImg2 from '@/public/portfolio/nemologo/nemo-logo-2.webp';
import NemoLogoImg3 from '@/public/portfolio/nemologo/nemo-logo-3.webp';
import NemoLogoImg4 from '@/public/portfolio/nemologo/nemo-logo-4.webp';
import NemoLogoImg5 from '@/public/portfolio/nemologo/nemo-logo-5.webp';
import PerliaCoverImage from '@/public/portfolio/perlia/cover.svg';
import PerliaImg1 from '@/public/portfolio/perlia/perlia-1.webp';
import PerliaImg2 from '@/public/portfolio/perlia/perlia-2.webp';
import PerliaImg3 from '@/public/portfolio/perlia/perlia-3.webp';
import PerliaImg4 from '@/public/portfolio/perlia/perlia-4.webp';
import PerliaImg5 from '@/public/portfolio/perlia/perlia-5.webp';
import InteriordesignerCoverImage from '@/public/portfolio/interiordesigner/cover.svg';
import InteriordesignerImg1 from '@/public/portfolio/interiordesigner/interiordesigner-1.webp';
import InteriordesignerImg2 from '@/public/portfolio/interiordesigner/interiordesigner-2.webp';
import InteriordesignerImg3 from '@/public/portfolio/interiordesigner/interiordesigner-3.webp';
import InteriordesignerImg4 from '@/public/portfolio/interiordesigner/interiordesigner-4.webp';
import InteriordesignerImg5 from '@/public/portfolio/interiordesigner/interiordesigner-5.webp';
import ClientAnimationsCoverImage from '@/public/portfolio/clientanimations/cover.svg';
export interface ProjectType extends ProjectLandscapeCardPropsType {
  orientation: 'landscape' | 'portrait';
  popup: PortfolioPopupType;
}
export interface PortfolioPopupType {
  title: string;
  description: string;
  technologiesIcons: any[];
  url?: string;
  frontImages: any[];
  reverseImages: any[];
}
export const PORTFOLIO_PROJECTS: ProjectType[] = [
  {
    displayType: 'Popup',
    url: '',
    title: 'Projektanci Wnętrz - Szablon',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'PayloadCMS',
    coverImage: InteriordesignerCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'Projektanci Wnętrz - Szablon',
      description:
        'Szablon dla projektantów wnętrz - gotowy do użycia i dostosowania pod Twoje potrzeby. Aplikacja została stworzona w nowoczesnym frameworku PayloadCMS, który cechuje się wysoką wydajnością oraz panelem administracyjnym umożliwiającym zarządzanie treścią na stronie. Panel jest dostosowany dla projektantów wnętrz i posiada unikalne funkcjonalności jak kolekcja ofert, realizacji czy bloki do wstawiania na stronę (opinie, realizacja, oferta zbiorcza, oferta pojedyńcza i inne). Szablon ma możliwość modyfikacji treści i panelu administratora pod Twoje oczekiwania. W celu uzyskania dostępu do panelu administratora napisz do mnie wiadomość lub zadzwoń.',
      technologiesIcons: [PayloadcmsIcon, NextJsIcon, FigmaIcon],
      url: 'interior-designer-template-omega.vercel.app',
      frontImages: [InteriordesignerImg1, InteriordesignerImg2],
      reverseImages: [
        InteriordesignerImg3,
        InteriordesignerImg4,
        InteriordesignerImg5,
      ],
    },
  },
  {
    displayType: 'Website',
    url: '/portfolio/perlia',
    title: 'Perlia',
    type: 'shop',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'WooCommerce',
    coverImage: PerliaCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'Perlia',
      description:
        'Projekt miał na celu stworzenie od zera sklepu internetowego na platformie WooCommerce. Dużym plusem podczas realizacji było to, że Weronika właścicielka Perlia z bardzo dużym zaangażowaniem prowadzi swoje konto na instagramie, dzięki czemu nie było większych problemów z ogarnięciem zdjęć produktów i odpowiednich opisów. Usługa obejmowała: pomoc w zakupie hostingu, domeny, serwisu e-mail, projekt graficzny strony, stworzenie strony, wdrożenie płatności online, wdrożenie dostaw InPost paczkomaty, integracja z systemami Google (analytics, merchant), SEO, konsultacje na google meet (ok. 8 spotkań), szkolenie z obsługi sklepu, instrukcja do zarządzania sklepem.',
      technologiesIcons: [WooCommerceIcon, FigmaIcon],
      url: 'perlia.pl',
      frontImages: [PerliaImg1, PerliaImg2],
      reverseImages: [PerliaImg3, PerliaImg4, PerliaImg5],
    },
  },
  {
    displayType: 'Website',
    url: '/portfolio/atzmdesign',
    title: 'ATZM Design',
    type: 'shop',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'WooCommerce',
    coverImage: AtzmCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'ATZM Design',
      description:
        'Celem projektu było stworzenie sklepu internetowego dla małej firmy specjalizującej się w sprzedaży ręcznie robionych swetrów damskich. Po konsultacji z klientką i akceptacji projektu graficznego przystąpiliśmy do tworzenia sklepu na platformie WooCommerce. Zrealizowany projekt posiada integrację z płatnościami online, możliwość wyboru dostawy, formularz kontaktowy oraz powiadomienia e-mail o statusie zamówienia. Nasz klientka ciągle rozwija swój asortyment o nowe produkty pozostając z nami w kontakcie.',
      technologiesIcons: [WooCommerceIcon, FigmaIcon],
      url: 'atzmdesign.com',
      frontImages: [AtzmImg1, AtzmImg2],
      reverseImages: [AtzmImg3, AtzmImg4, AtzmImg5],
    },
  },
  {
    displayType: 'Website',
    url: '/portfolio/nemo-sportowa-przygoda',
    title: 'NEMO Sportowa Przygoda',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'NextJs',
    coverImage: NemoCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'NEMO Sportowa Przygoda',
      description:
        'Naszym zadaniem było stworzenie strony internetowej dla firmy Nemo Sportowa Przygoda od zera. Głównym wyzwaniem projektu było przedstawienie wielu usług firmy w sposób uporządkowany i dobrze widoczny dla klientów. Zadanie powiodło się. Firma w pełni nam zaufała decydując się na rozwiązanie bez panelu admiracyjnego i powierzając nam bezpośrednie wprowadzanie zmian, co pozwoliło na zastosowanie nowszych technologii w postaci NextJS. Firma dalej się rozwija i poszerza portfolio swoich usług, a my ciągle dbamy o projektowanie i wdrażanie nowych opcji na stronie.',
      technologiesIcons: [NextJsIcon, TypeScriptIcon, SassIcon, FigmaIcon],
      url: 'nemosportowaprzygoda.pl',
      frontImages: [NemoImg1, NemoImg2],
      reverseImages: [NemoImg3, NemoImg4, NemoImg5],
    },
  },
  {
    displayType: 'Popup',
    url: '/portfolio/triget',
    title: 'Triget',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'Wordpress',
    coverImage: TrigetCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'Triget',
      description:
        'Naszym zadaniem było odnowienie starej strony internetowej firmy specjalizującej się w montażu instalacji elektrycznych. Firma bardzo rozwinęła portfolio swoich usług więc konieczne było ustalenie podziałów stron i kategoryzacja usług. Po akceptacji projektu graficznego przystąpiliśmy do działania. W efekcie stworzyliśmy stronę, która posiada jasny podział wykonywanych usług oraz posiada swoją paletę barw opartą o logo. Projekt został zrealizowany na CMS Wordpress dający możliwość łatwej edycji treści właścicielowi.',
      technologiesIcons: [WordpressIcon, FigmaIcon],
      url: 'triget.pl',
      frontImages: [TrigetImg1, TrigetImg2],
      reverseImages: [TrigetImg3, TrigetImg4, TrigetImg5],
    },
  },

  {
    displayType: 'Popup',
    url: '',
    title: 'Modyfikacje logo',
    type: 'svg',
    orientation: 'landscape',
    typeTitle: 'Grafiki SVG',
    mainTechnology: 'Figma',
    coverImage: NemoCoverImage.src,
    active: false,
    style: 'graphic',
    popup: {
      title: 'Modyfikacje logo',
      description:
        'Podczas tworzenia projektu graficznego dla NEMO Sportowa Przygoda dostaliśmy bardzo ładną rybkę w logo w formacie SVG. Od razu stwierdziliśmy, że to logo ma bardzo duży potencjał do wprowadzania tematycznych przeróbek. Efekty na zdjęciach obok oraz stronie internetowej i SM Nemo.',
      technologiesIcons: [FigmaBlueIcon],
      url: 'nemosportowaprzygoda.pl',
      frontImages: [NemoLogoImg1, NemoLogoImg2],
      reverseImages: [NemoLogoImg3, NemoLogoImg4, NemoLogoImg5],
    },
  },
  {
    displayType: 'Popup',
    url: '',
    title: 'Rolki Social Media',
    type: 'reel',
    orientation: 'landscape',
    typeTitle: 'Rolka promocyjna',
    mainTechnology: 'Figma, Jitter',
    coverImage: AtzmCoverImage.src,
    active: false,
    style: 'graphic',
    popup: {
      title: 'Rolki Social Media',
      description:
        'Po stworzeniu sklepu internetowego dla ATZM Design nadszedł czas na jego prezentację na ich socjal mediach. Mieliśmy gotowy projekt graficzny strony w figmie więc zaproponowaliśmy stworzenie kilku rolek promocyjnych w Jitterze. Efekty naszej pracy możecie sprawdzić na wideo obok oraz na SM ATZM Design.',
      technologiesIcons: [FigmaBlueIcon],
      url: 'atzmdesign.com',
      frontImages: ['/portfolio/atzmreel/atzm-reel-1.mp4'],
      reverseImages: ['/portfolio/atzmreel/atzm-reel-2.mp4'],
    },
  },
  {
    displayType: 'Popup',
    url: '',
    title: 'Animacje HTML+CSS',
    type: 'animation',
    orientation: 'landscape',
    typeTitle: 'Animacje',
    mainTechnology: 'HTML, CSS',
    coverImage: ClientAnimationsCoverImage.src,
    active: false,
    style: 'graphic',
    popup: {
      title: 'Animacje HTML+CSS',
      description:
        'Specjalnie dla jednego z klientów przerobiliśmy kilka wideo w formacie GIF na animacje HTML + CSS. Głównym problemem było to, że skalowanie wideo w formacie GIF powoduje znaczną utratę jakości. Idealnym rozwiązaniem było zastosowanie animacji CSS na zdjęciach w formacie SVG zaprojektowanych przez nas. Animacje można bez problemów skalować i zajmują znacznie mniej przestrzeni dyskowej.',
      technologiesIcons: [FigmaBlueIcon],
      frontImages: ['/portfolio/clientanimations/animation-2.mp4'],
      reverseImages: [
        '/portfolio/clientanimations/animation-3.mp4',
        '/portfolio/clientanimations/animation-1.mp4',
      ],
    },
  },
];
