import {About} from '@/components/Portfolio/Realization/About/About';
import {Hero} from '@/components/Portfolio/Realization/Hero/Hero';
import {Results} from '@/components/Portfolio/Realization/Results/Results';
import {Stages} from '@/components/Portfolio/Realization/Stages/Stages';
import {Summary} from '@/components/Portfolio/Realization/Summary/Summary';
import {Targets} from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';
import HeroImg from '@/public/portfolio/perlia/laptop.webp';
import Logo from '@/public/portfolio/perlia/logo-gray.svg';
import GalleryLandscape1 from '@/public/portfolio/perlia/perlia-1.webp';
import GalleryLandscape2 from '@/public/portfolio/perlia/perlia-2.webp';
import GalleryPortrait1 from '@/public/portfolio/perlia/perlia-3.webp';
import GalleryPortrait2 from '@/public/portfolio/perlia/perlia-4.webp';
import GalleryPortrait3 from '@/public/portfolio/perlia/perlia-5.webp';
import ChatIcon from '@/public/assets/icons/chat-icon.svg';
import ImgIcon from '@/public/assets/icons/image-orange-icon.svg';
import StoreIcon from '@/public/assets/icons/shop-orange-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import GoogleIcon from '@/public/assets/icons/google-icon.svg';
import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import TestIcon from '@/public/assets/icons/test-orange-icon.svg';
import {Gallery} from '@/components/Portfolio/Realization/Gallery/Gallery';
import ContactForm from '@/components/ContactForm/ContactForm';
export const metadata: Metadata = {
  title: 'Realizacja sklepu internetowego dla marki Perlia',
  description:
    'Sprawdź jak stworzyliśmy sklep internetowy dla marki tworzącej biżuterię z kamieni naturalnych.',
  metadataBase: new URL('https://websquirrel.pl/portfolio/perlia'),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio/perlia',
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
    header: 'Perlia',
    technology: 'WooCommerce',
    industry: 'Rękodzieło',
    time: '4 tygodnie',
    target: 'Prezentacja oferty sprzedażowej',
    image: HeroImg,
    link: {
      label: 'www.perlia.pl',
      url: 'https://perlia.pl/',
    },
  },
  about: {
    text1:
      'Perlia to marka zajmująca się tworzeniem ręcznie robionej biżuterii z kamieni naturalnych. Założycielką jest Weronika, której głównym kanałem sprzedaży jest jej konto prowadzone na Instagramie.',
    text2:
      'Ze względu na nowe pomysły założycielki oraz zainteresowanie jej rękodziełem oferta biżuterii ulegała stałemu powiększaniu. Instagram zapewnia bardzo dobre możliwości promocji nowych produktów lecz wraz z rozwojem oferty zaczął pojawiać się problem z przedstawieniem wszystkich dostępnych produktów dla klientów. Kolejnym istotnym problemem była specyfika platformy, która ograniczała szczegółowe opisy produktów i zwiększała ilość pytań o produkty.',
    logo: Logo,
    alt: 'Perlia',
  },
  targets: [
    'Stworzenie strony, która będzie odpowiednio prezentować markę',
    'Stworzenie sklepu, który będzie pełnił rolę katalogu produktów z widocznym podziałem na kategorie i łatwością przeglądania przez klienta',
    'Wybranie platformy, która będzie łatwa w obsłudze i umożliwiała zarządzanie produktami oraz informacjami o marce',
    'Umożliwienie zakupu produktu z dostawą przez sklep',
  ],
  results: [
    'Umożliwienie zakupu produktu z dostawą przez sklep',
    'Klienci regularnie odwiedzają stronę w celu sprawdzenia nowości',
    'Mniejsza ilość zapytań o szczegóły produktów',
    'Właścicielka po przeszkoleniu sama edytuje treści, zarządza stanami magazynowymi, kuponami oraz edycją i dodawaniem nowych produktów',
  ],
  galleryLandscapes: [GalleryLandscape1, GalleryLandscape2],
  galleryPortraits: [GalleryPortrait1, GalleryPortrait2, GalleryPortrait3],
  stages: [
    {
      icon: ChatIcon,
      header: 'Spotkanie online',
      description:
        'Naszą współpracę rozpoczęliśmy od spotkania na Google Meet, gdzie ustaliliśmy cele jakie ma realizować sklep, sprawdziliśmy konkurencyjne firmy z branży oraz ustalili jaki styl sklepu będzie odpowiadał marce Perlia. Na podstawie wstępnie określonych wytycznych dobraliśmy odpowiedni hosting i domenę.',
    },
    {
      icon: ChatIcon,
      header: 'Ustalenie sposobu komunikacji',
      description:
        'W tym przypadku wybraliśmy e-mail oraz google drive do przesyłania informacji związanych z ofertą, zdjęć i innych plików. Do komunikacji o postępach wybraliśmy messanger, ponieważ była to dla nas obojga platforma, z której regularnie korzystamy.',
    },
    {
      icon: ImgIcon,
      header: 'Projekt graficzny',
      description:
        'Po przesłaniu zdjęć produktów przez Weronikę, rozpocząłem pracę nad projektem graficznym w Figmie. Dużym plusem jest to, że Figma umożliwia dostęp do makiety dzięki czemu można na bieżąco monitorować postępy mojej pracy. Po kilku konsultacjach i poprawkach projekt był gotowy.',
    },
    {
      icon: StoreIcon,
      header: 'Wdrożenie sklepu',
      description:
        'Na podstawie projektu graficznego stworzyłem sklep internetowy spójny z brandingiem marki oraz przetestowałem jego działanie na różnych przeglądarkach.',
    },
    {
      icon: ToolIcon,
      header: 'Konfiguracja sklepu',
      description:
        'Kolejnym etapem była konfiguracja sklepu, która obejmowała: stworzenie kategorii produktów, implementacja metod wysyłki, wdrożenie płatności online, pomoc przy stworzeniu regulaminu i polityki prywatności, konfiguracja wiadomości do klientów, stworzenie wariantów produktów jak rozmiar, stworzenie szablonów produktów, utworzenie kopii zapasowej sklepu, konfiguracja DNS.',
    },
    {
      icon: TestIcon,
      header: 'Testowanie',
      description:
        'Zakup kilku produktów na różnych przeglądarkach i urządzeniach w celu sprawdzenie ścieżki zakupu klienta, działania systemu powiadomień w panelu administratora i u klienta, płatności online, sposobów dostaw oraz działania kuponów.',
    },
    {
      icon: ToolIcon,
      header: 'Szkolenie',
      description:
        'Sklep nie został jeszcze opublikowany dla klientów więc spotkaliśmy się online gdzie przedstawiłem właścicielce jak zarządzać sklepem, dodawać produkty, sprawdzać płatności, zarządzać stanem magazynowym, optymalizować zdjęcia itp. Na podstawie pytań, które zadała rozszerzyłem swój poradnik o odpowiedzi na nie. Kolejnym zadaniem tym razem po stronie Weroniki było samodzielne dodanie pozostałych produktów, przy czym trochę jej pomogłem.',
    },
    {
      icon: GoogleIcon,
      header: 'Implementacja pozostałych usług',
      description:
        'Po fazie testów sklep został wdrożony do wersji produkcyjnej dostępnej dla klientów. Kolejnym krokiem było dodanie strony do wyszukiwarki google, Analytics oraz produktów do Merchant Center.',
    },
    {
      icon: AnalyzeIcon,
      header: 'Analiza i opieka',
      description:
        'Po wdrożeniu sklepu pomagałem Weronice w edycji treści na stronie i z rzeczami, z którymi miała problem. Monitorowałem także aktywność użytkowników na stronie i przedstawiałem jej zestawienia w postaci krótkich raportów. Właścicielka radzi sobie sama z edycją treści i dodawaniem produktów, ale pozostajemy w stałym kontakcie z nowymi pomysłami na rozwój sklepu i marki Perlia.',
    },
  ],
  summary:
    'Udało nam się stworzyć sklep, który profesjonalnie prezentuje markę Perlia w sieci oraz w sposób szczegółowy przedstawia ofertę ręcznie robionej biżuterii przez Weronikę. Prostota obsługi sklepu pozwoliła właścicielce na samodzielne zarządzanie sklepem - strona jest aktualizowana średnio raz na tydzień. Sklep jest regularnie odwiedzany przez klientów, którzy nie zgłaszali problemów z realizacją zamówień i płatności online. Pozostajemy w stałym kontakcie z Weroniką i dążymy do dalszego rozwoju marki Perlia w sieci.',
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
        alt="Perlia strona internetowa"
      />
      <Stages stages={CONTENT.stages} />

      <Summary text={CONTENT.summary} logo={CONTENT.about.logo} alt="Perlia" />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
