import {About} from '@/components/Portfolio/Realization/About/About';
import {Hero} from '@/components/Portfolio/Realization/Hero/Hero';
import {Results} from '@/components/Portfolio/Realization/Results/Results';
import {Stages} from '@/components/Portfolio/Realization/Stages/Stages';
import {Summary} from '@/components/Portfolio/Realization/Summary/Summary';
import {Targets} from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';
import HeroImg from '@/public/portfolio/atzmdesign/laptop.webp';
import Logo from '@/public/portfolio/atzmdesign/logo-white.svg';
import GalleryLandscape1 from '@/public/portfolio/atzmdesign/landscape-old-1.webp';
import GalleryLandscape2 from '@/public/portfolio/atzmdesign/landscape-new-1.webp';
import GalleryLandscape3 from '@/public/portfolio/atzmdesign/landscape-old-2.webp';
import GalleryLandscape4 from '@/public/portfolio/atzmdesign/landscape-new-2.webp';
import GalleryPortrait1 from '@/public/portfolio/atzmdesign/portrait-old-1.webp';
import GalleryPortrait2 from '@/public/portfolio/atzmdesign/portrait-new-1.webp';
import GalleryPortrait3 from '@/public/portfolio/atzmdesign/portrait-old-2.webp';
import GalleryPortrait4 from '@/public/portfolio/atzmdesign/portrait-new-2.webp';
import GalleryPortrait5 from '@/public/portfolio/atzmdesign/portrait-old-3.webp';
import GalleryPortrait6 from '@/public/portfolio/atzmdesign/portrait-new-3.webp';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import ImgIcon from '@/public/assets/icons/image-orange-icon.svg';
import StoreIcon from '@/public/assets/icons/shop-orange-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import TestIcon from '@/public/assets/icons/test-orange-icon.svg';
import PaletteIcon from '@/public/assets/icons/palette-orange-icon.svg';
import {Gallery} from '@/components/Portfolio/Realization/Gallery/Gallery';
import ContactForm from '@/components/ContactForm/ContactForm';
export const metadata: Metadata = {
  title: 'Realizacja sklepu internetowego dla marki ATZM Design',
  description:
    'Sprawdź jak stworzyliśmy sklep internetowy dla marki zajmującej się tworzeniem ręcznie robionej odzieży i dotatków damskich.',
  metadataBase: new URL('https://websquirrel.pl/portfolio/atzmdesign'),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio/atzmdesign',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

const CONTENT = {
  hero: {
    subheader: 'SKLEP INTERNETOWY',
    header: 'ATZM Design',
    technology: 'WooCommerce',
    industry: 'Rękodzieło',
    time: '4 tygodnie',
    target: 'Prezentacja marki',
    image: HeroImg,
    link: {
      label: 'www.atzmdesign.com',
      url: 'https://atzmdesign.com/',
    },
  },
  about: {
    text1:
      'ATZM Design to marka zajmująca się sprzedażą ręcznie robionych swetrów, torebek i T-shirtów. Założycielką jest Anna, która od lat zajmuje się tworzeniem rękodzieła i pokazuje efekty swojej pracy za pomocą konta na Instagramie.',
    text2:
      'W tej współpracy możemy wyróżnić dwa etapy. Pierwszym było stworzenie sklepu, który będzie profesjonalnie prezentował markę dla nowych klientów, oraz umożliwiał zakup produktów online. Drugim etapem był rebranding marki w związku z jej rozwojem i dodaniem nowych produktów do kolekcji produktów. ',
    logo: Logo,
    alt: 'ATZM Design',
  },
  targets: [
    'Prezentacja marki i oferty produktów',
    'Stworzenie prostego sklepu z płatnościami online i możliwością wyboru dostawy',
    'Rebranding marki i dodanie nowych produktów',
  ],
  results: [
    'Sklep skupiający się na prezentacji marki ATZM',
    'Nowy branding nadający stylu glamour',
    'Prosta ścieżka zakupowa klientów',
    'Właścicielka po przeszkoleniu sama edytuje treści, zarządza stanami magazynowymi, kuponami oraz edycją i dodawaniem nowych produktów',
  ],
  galleryLandscapes: [
    GalleryLandscape1,
    GalleryLandscape2,
    GalleryLandscape3,
    GalleryLandscape4,
  ],
  galleryPortraits: [
    GalleryPortrait1,
    GalleryPortrait2,
    GalleryPortrait3,
    GalleryPortrait4,
    GalleryPortrait5,
    GalleryPortrait6,
  ],
  stages: [
    {
      icon: ChatIcon,
      header: '01 Spotkanie online',
      description:
        'Naszą współpracę rozpoczęliśmy od spotkania na Google Meet, gdzie ustaliliśmy cele jakie ma realizować sklep, oraz określilśmy styl brandingu marki. Na podstawie wstępnie określonych wytycznych dobraliśmy odpowiedni hosting i domenę.',
    },
    {
      icon: ChatIcon,
      header: '02 Ustalenie sposobu komunikacji',
      description:
        'W tym przypadku wybraliśmy e-mail oraz google drive do przesyłania informacji związanych z ofertą, zdjęć i innych plików. Do komunikacji o postępach wybraliśmy messanger, ponieważ była to dla nas obojga platforma, z której regularnie korzystamy.',
    },
    {
      icon: ImgIcon,
      header: '03 Projekt graficzny',
      description:
        'Po przesłaniu zdjęć produktów przez Anię, rozpocząłem pracę nad projektem graficznym w Figmie. Dużym plusem jest to, że Figma umożliwia dostęp do makiety dzięki czemu można na bieżąco monitorować postępy mojej pracy. Po kilku konsultacjach i poprawkach projekt był gotowy.',
    },
    {
      icon: StoreIcon,
      header: '04 Wdrożenie sklepu',
      description:
        'Na podstawie projektu graficznego stworzyłem sklep internetowy skupiający się na dobrej prezentacji marki oraz jej oferty. Ostatnim etapem było przetestowanie jego działania na różnych przeglądarkach.',
    },
    {
      icon: ToolIcon,
      header: '05 Konfiguracja sklepu',
      description:
        'Konfiguracja sklepu obejmowała: stworzenie kategorii produktów, implementacja metod wysyłki, wdrożenie płatności online, pomoc przy stworzeniu regulaminu i polityki prywatności, konfiguracja wiadomości do klientów, stworzenie wariantów produktów jak rozmiar, stworzenie szablonów produktów, utworzenie kopii zapasowej sklepu, konfiguracja DNS.',
    },
    {
      icon: TestIcon,
      header: '06 Testowanie',
      description:
        'Zakup kilku produktów na różnych przeglądarkach i urządzeniach w celu sprawdzenie ścieżki zakupu klienta, działania systemu powiadomień w panelu administratora i u klienta, płatności online, sposobów dostaw oraz działania kuponów.',
    },
    {
      icon: ToolIcon,
      header: '07 Szkolenie',
      description:
        'Sklep nie został jeszcze opublikowany dla klientów więc spotkaliśmy się online gdzie przedstawiłem właścicielce jak zarządzać sklepem, dodawać produkty, sprawdzać płatności, zarządzać stanem magazynowym, optymalizować zdjęcia itp. Na podstawie pytań, które zadała rozszerzyłem swój poradnik o odpowiedzi na nie. ',
    },
    {
      icon: GoogleIcon,
      header: '08 Implementacja pozostałych usług',
      description:
        'Po fazie testów sklep został wdrożony do wersji produkcyjnej dostępnej dla klientów. Kolejnym krokiem było dodanie strony do wyszukiwarki google, Analytics oraz produktów do Merchant Center.',
    },
    {
      icon: AnalyzeIcon,
      header: '09 Analiza i opieka',
      description:
        'Po wdrożeniu sklepu pomagałem pomagałem Ani w drobnych poprawkach na stronie oraz dodatkowo stworzyłem dwie rolki promocyjne sklepu na instagrama.',
    },
    {
      icon: PaletteIcon,
      header: '10 Rebranding',
      description:
        'Po około roku Ania poinformowała mnie, że wprowadza nowe produkty do oferty w postaci torebek i chce zmienić branding marki pod tą kategorię produktów. Dostałem zestaw zdjęć zrobionych w studiu fotograficznym z nowym produktem oraz wytyczne do nowej szaty kolorystycznej. Na tej podstawie przystąpiłem do zmiany stylu marki na stronie sklepu.',
    },
    {
      icon: ImgIcon,
      header: '11 Projekt graficzny',
      description:
        'Projekt graficzny stworzony przeze mnie w Figmie został zaakceptowany z drobnymi poprawkami, które naniosłem.',
    },
    {
      icon: StoreIcon,
      header: '12 Wdrożenie i testowanie',
      description:
        'Strona została przetestowana i wdrożona z nową szatą graficzną i produktami marki. W związku z pojawieniem się możliwości zaimplementowania nowego systemu płatności za zgodą właścicielki zrobiliśmy to (Problemem u poprzedniego operatora były błędy w statusach płatności po stronie panelu do zarządzania zamówieniami, w związku z czym administratorka musiała sprawdzać na platformie status płatności i odznaczać go w panelu sklepu. Po zmianie dostawcy problem został rozwiązany i proces jeszcze bardziej zautomatyzowany).',
    },
  ],
  summary:
    'Stworzyliśmy sklep, którego głównym celem była prezentacja marki ATZM Design. Zastosowany rebranding marki dodał jej nowego stylu przez co prezentuje się teraz w stylu zbliżonym do glamour. Ważnym zabiegiem było połączenie styli z innymi produktami, których szata graficzna różniła się od tej nowej. Ostatnim etapem, który zwiększył automatyzację zakupów było wprowadzenie nowego operatora płatności, dzięki czemu realizacja zamówień jest wydajniejsza.',
};

export default function PortfolioPerlia() {
  return (
    <>
      <Hero {...CONTENT.hero} />
      <About {...CONTENT.about} />
      <Targets targets={CONTENT.targets} />
      <Results results={CONTENT.results} />
      <Gallery
        galleryLandscapes={CONTENT.galleryLandscapes}
        galleryPortraits={CONTENT.galleryPortraits}
        alt="ATZM Design sklep internetowy"
      />
      <Stages stages={CONTENT.stages} />

      <Summary
        text={CONTENT.summary}
        logo={CONTENT.about.logo}
        alt="ATZM Design"
      />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
