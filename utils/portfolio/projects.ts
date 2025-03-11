import {ProjectLandscapeCardPropsType} from '@/components/Ui/Cards/ProjectLandscapeCard/ProjectLandscapeCard';
import NextJsIcon from '@/public/assets/icons/next-js-icon.svg';
import TypeScriptIcon from '@/public/assets/icons/typescript-icon.svg';
import SassIcon from '@/public/assets/icons/sass-icon.svg';
import FigmaIcon from '@/public/assets/icons/figma-icon.svg';
import FigmaBlueIcon from '@/public/assets/icons/figma-blue-icon.svg';
import ExpressjsIcon from '@/public/assets/icons/express-icon.svg';
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
import FilmnawieczorCoverImage from '@/public/portfolio/filmnawieczor/cover.svg';
import FilmnawieczorImg1 from '@/public/portfolio/filmnawieczor/filmnawieczor-1.webp';
import FilmnawieczorImg2 from '@/public/portfolio/filmnawieczor/filmnawieczor-2.webp';
import FilmnawieczorImg3 from '@/public/portfolio/filmnawieczor/filmnawieczor-3.webp';
import FilmnawieczorImg4 from '@/public/portfolio/filmnawieczor/filmnawieczor-4.webp';
import FilmnawieczorImg5 from '@/public/portfolio/filmnawieczor/filmnawieczor-5.webp';
import NemoLogoImg1 from '@/public/portfolio/nemologo/nemo-logo-1.webp';
import NemoLogoImg2 from '@/public/portfolio/nemologo/nemo-logo-2.webp';
import NemoLogoImg3 from '@/public/portfolio/nemologo/nemo-logo-3.webp';
import NemoLogoImg4 from '@/public/portfolio/nemologo/nemo-logo-4.webp';
import NemoLogoImg5 from '@/public/portfolio/nemologo/nemo-logo-5.webp';
interface ProjectType extends ProjectLandscapeCardPropsType {
  orientation: 'landscape' | 'portrait';
  popup: PortfolioPopupType;
}
export interface PortfolioPopupType {
  title: string;
  description: string;
  technologiesIcons: any[];
  url: string;
  frontImages: any[];
  reverseImages: any[];
}
export const PORTFOLIO_PROJECTS: ProjectType[] = [
  {
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
      url: 'www.nemosportowaprzygoda.pl',
      frontImages: [NemoImg1, NemoImg2],
      reverseImages: [NemoImg3, NemoImg4, NemoImg5],
    },
  },
  {
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
      url: 'www.atzmdesign.pl',
      frontImages: [AtzmImg1, AtzmImg2],
      reverseImages: [AtzmImg3, AtzmImg4, AtzmImg5],
    },
  },
  {
    title: 'Film na wieczór',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'NextJs, Express.js',
    coverImage: FilmnawieczorCoverImage.src,
    active: false,
    style: 'website',
    popup: {
      title: 'Film na wieczór',
      description:
        'Celem było stworzenie strony internetowej z bazą filmów dającej możliwość używania nietypowych filtrów miejsca i czasu akcji. Projekt został podzielony na dwie aplikacje. Część pierwsza czyli backend została napisana w Express.js w formie Rest-API odpowiedzialnego za przesyłanie informacji o filmach z bazy danych. Druga część - frontend została napisana w NextJs, TS oraz Sass. To co wyróżnia stronę to nietypowe animacje HTML + CSS oraz interfejs dla użytkownika umożliwiający filtrowanie filmów. Prace nad stroną są ciągle prowadzone. Jedną z nowych implementacji są uniwersa filmowe.',
      technologiesIcons: [
        NextJsIcon,
        ExpressjsIcon,
        TypeScriptIcon,
        SassIcon,
        FigmaIcon,
      ],
      url: 'www.filmnawieczor.pl',
      frontImages: [FilmnawieczorImg1, FilmnawieczorImg2],
      reverseImages: [FilmnawieczorImg3, FilmnawieczorImg4, FilmnawieczorImg5],
    },
  },
  {
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
      url: 'www.nemosportowaprzygoda.pl',
      frontImages: [NemoLogoImg1, NemoLogoImg2],
      reverseImages: [NemoLogoImg3, NemoLogoImg4, NemoLogoImg5],
    },
  },
  // {
  //   title: 'ATZM Design',
  //   type: 'website',
  //   orientation: 'landscape',
  //   typeTitle: 'Strona internetowa',
  //   mainTechnology: 'WooCommerce',
  //   coverImage: ATZMCoverImage.src,
  //   active: false,
  //   style: 'graphic',
  //   popup:{
  //     title: 'ATZM Design',
  //     description:'Naszym zadaniem było stworzenie strony internetowej dla firmy Nemo Sportowa Przygoda od zera. Głównym wyzwaniem projektu było przedstawienie wielu usług firmy w sposób uporządkowany i dobrze widoczny dla klientów. Zadanie powiodło się. Firma w pełni nam zaufała decydując się na rozwiązanie bez panelu admiracyjnego i powierzając nam bezpośrednie wprowadzanie zmian, co pozwoliło na zastosowanie nowszych technologii w postaci NextJS. Firma dalej się rozwija i poszerza portfolio swoich usług, a my ciągle dbamy o projektowanie i wdrażanie nowych opcji na stronie.',
  //     technologiesIcons:[NextJsIcon,TypeScriptIcon,SassIcon,FigmaIcon],
  //     url:"www.nemosportowaprzygoda.pl",
  //     frontImages:[NemoImg1,NemoImg2],
  //     reverseImages:[NemoImg3,NemoImg4,NemoImg5]
  //   }
  // },
  // {
  //   title: 'ATZM Design',
  //   type: 'website',
  //   orientation: 'landscape',
  //   typeTitle: 'Strona internetowa',
  //   mainTechnology: 'WooCommerce',
  //   coverImage: ATZMCoverImage.src,
  //   active: false,
  //   style: 'graphic',
  //   popup:{
  //     title: 'ATZM Design',
  //     description:'Naszym zadaniem było stworzenie strony internetowej dla firmy Nemo Sportowa Przygoda od zera. Głównym wyzwaniem projektu było przedstawienie wielu usług firmy w sposób uporządkowany i dobrze widoczny dla klientów. Zadanie powiodło się. Firma w pełni nam zaufała decydując się na rozwiązanie bez panelu admiracyjnego i powierzając nam bezpośrednie wprowadzanie zmian, co pozwoliło na zastosowanie nowszych technologii w postaci NextJS. Firma dalej się rozwija i poszerza portfolio swoich usług, a my ciągle dbamy o projektowanie i wdrażanie nowych opcji na stronie.',
  //     technologiesIcons:[NextJsIcon,TypeScriptIcon,SassIcon,FigmaIcon],
  //     url:"www.nemosportowaprzygoda.pl",
  //     frontImages:[NemoImg1,NemoImg2],
  //     reverseImages:[NemoImg3,NemoImg4,NemoImg5]
  //   }
  // },
];
