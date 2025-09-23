import {About} from '@/components/Portfolio/Realization/About/About';
import {Hero} from '@/components/Portfolio/Realization/Hero/Hero';
import {Results} from '@/components/Portfolio/Realization/Results/Results';
import {Summary} from '@/components/Portfolio/Realization/Summary/Summary';
import {Targets} from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';
import HeroImg from '@/public/portfolio/interiordesigner/pc.webp';
import Logo from '@/public/portfolio/interiordesigner/interiordesigner-logo.svg';
import GalleryLandscape6 from '@/public/portfolio/interiordesigner/interiordesigner-6.webp';
import GalleryLandscape7 from '@/public/portfolio/interiordesigner/interiordesigner-7.webp';
import GalleryLandscape8 from '@/public/portfolio/interiordesigner/interiordesigner-8.webp';
import GalleryLandscape9 from '@/public/portfolio/interiordesigner/interiordesigner-9.webp';
import GalleryLandscape10 from '@/public/portfolio/interiordesigner/interiordesigner-10.webp';
import GalleryLandscape11 from '@/public/portfolio/interiordesigner/interiordesigner-11.webp';
import GalleryLandscape12 from '@/public/portfolio/interiordesigner/interiordesigner-12.webp';
import GalleryLandscape13 from '@/public/portfolio/interiordesigner/interiordesigner-13.webp';
import GalleryLandscape14 from '@/public/portfolio/interiordesigner/interiordesigner-14.webp';
import GalleryLandscape15 from '@/public/portfolio/interiordesigner/interiordesigner-15.webp';
import GalleryLandscape16 from '@/public/portfolio/interiordesigner/interiordesigner-16.webp';
import {Gallery} from '@/components/Portfolio/Realization/Gallery/Gallery';
import ContactForm from '@/components/ContactForm/ContactForm';
import {ReachResults} from '@/components/Portfolio/Realization/ReachResults/ReachResults';
export const metadata: Metadata = {
  title: 'Strona dla projektanta wnętrz zrobiona w PayloadCMS',
  description:
    'Sprawdź jak wygląda strona internetowa szyta na miarę z personalizowanym panelem administratora utworzonym w PayloadCMD | Wariant Projektant Wnętrz',
  metadataBase: new URL(
    'https://websquirrel.pl/portfolio/strona-dla-projektanta-wnetrz'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio/strona-dla-projektanta-wnetrz',
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
    subheader: 'STRONA INTERNETOWA',
    header: 'Dla Projektanta Wnętrz',
    technology: 'PayloadCMS',
    industry: 'Projektowanie wnętrz',
    time: '7 tygodni',
    target:
      'Prezentacja oferty, stworzenie dostosowanego panelu administratora, wysoka wydajność strony',
    image: HeroImg,
    link: {
      label: 'https://interior-designer-template-omega.vercel.app/',
      url: 'https://interior-designer-template-omega.vercel.app/',
    },
  },
  about: {
    text1:
      'Ten projekt powstał jako wersja pokazowa strony internetowej dla projektantów wnętrz pod nazwą fikcyjnej marki Interior Designer. Celem projektu było stworzenie strony, która będzie działać szybko z dużą ilością zdjęć w dużej rozdzielczości. Kolejnym powodem było wdrożenie nowej technologii na polski rynek, która budzi duże zainteresowanie na zachodzie i USA. PayloadCMS, na którym zbudowana jest strona to projekt open source, który umożliwia tworzenie nowoczesnych i wydajnych stron internetowych z konfigurowalnymi panelami administratorów dla klientów. Technologia ta jest o tyle innowacyjna, że pozwala na bezpośrednie modyfikacje kodu źródłowego i jego pełne dostosowanie do potrzeb projektu. Przekłada się to na mniejszą ilość kodu oraz wyższą wydajność.',
    text2:
      'Kodując w Payloadzie mam możliwość zaprojektowania panelu administratora, z którego będziecie korzystać do wprowadzania zmian na stronie od 0. Daje to ogromne możliwości ułatwienia automatyzacji oraz dostosowania do potrzeb klienta. Możliwość bezpośredniej edycji kodu nie ogranicza mnie także w tworzeniu układów stron oraz implementacji autorskich funkcjonalności jak np. kalkulatory do kosztorysowania czy skomplikowane formularze. Strony dla projektantów wnętrz opierają się na przedstawieniu efektów ich pracy czyli zdjęć lub wizualizacji, które szczególnie interesują ich potencjalnych klientów. Właśnie dlatego wybrałem PayloadCMS, żeby zachować wysoką wydajność ładowania strony i mieć swobodę w projektowaniu wyglądu graficznego.',
    logo: Logo,
    alt: 'Strona dla projektanta wnętrz',
  },
  targets: [
    'Wysoka wydajność strony',
    'Szybkie ładowanie stron z dużą ilością zdjęć',
    'Stworzenie panelu administratora, który będzie łatwy i intuicyjny w obsłudze',
    'Nieograniczone możliwości projektowania z wykorzystaniem szybkich styli (TailwindCSS)',
    'Zabezpieczenia strony oraz niezawodności oprogramowania',
  ],
  results: [
    'Szybkie ładowanie strony pomimo dużej ilości obrazów w wysokiej rozdzielczości oraz wolnego serwera',
    'Skalowalność aplikacji, która umożliwia tworzenie nowych sekcji oraz narzędzi do ich edycji w panelu administratora',
    'Edytor obrazów, który pozwala dostosować i wykadrować wgrane obrazy do odpowiednio wyświetlanej rozdzielczości',
    'Przejrzysty panel administratora z podziałem na oferty, realizacje, opinie i inne',
    'Edycja strony poprzez przeciąganie i edycje bloczków',
  ],
  reachResults: {
    results: [
      'Sekcja Pages, gdzie możemy umieścić bloki sekcji jak realizacje czy oferta oraz sprawdzić podgląd strony na żywo. Oczywiście podstawową funkcjonalnością jest tworzenie nowych stron z ich edycją',
      'Kolekcja oferty - jest to zbiór ofert dla klientów, które składają się z krótkiego opisu, pełnego, nagłówka oraz przykładowych zdjęć realizacji',
      'Kolekcja realizacje - portfolio projektanta wnętrz, gdzie z łatwością zamieścimy opis, dane techniczne oraz zdjęcia realizacji',
      'Kolekcja opinie - zbiór opinii o marce, które uzupełniamy o wystawiającego opinie, treść oraz projekt, którego opinia dotyczy',
      'Wszystkie utworzone kolekcje dają możliwość łatwego wykorzystania danych w nich poprzez użycie bloków, które wstawiamy na stronę. Podział na kolekcje porządkuje dane, daje łatwy dostęp do nich oraz pozwala na aktualizacje danych we wszystkich miejscach na stronie gdzie zostały wykorzystane. Przykładowo edytujemy opis realizacji 01 - zmieniają się wszystkie krótkie opisy przykładowych realizacji oraz pełne opisy i zdjęcia na stronie poświęconej danej realizacji.',
      'Zakładka informacje - zakładka, w której uzupełniamy dane o firmie jak SM, informacje kontaktowe, NIP itp. Te informacje trafią do wszystkich elementów na stronie, które je wykorzystują. Kolejna automatyzacja zmieniamy treść w jednym miejscu, która aktualizuje się w wielu miejscach na stronie.',
    ],
    alt: 'Wykres wyników wyszukiwania',
  },

  galleryLandscapes: [
    GalleryLandscape6,
    GalleryLandscape7,
    GalleryLandscape8,
    GalleryLandscape9,
    GalleryLandscape10,
    GalleryLandscape11,
    GalleryLandscape12,
    GalleryLandscape13,
    GalleryLandscape14,
    GalleryLandscape15,
    GalleryLandscape16,
  ],
  galleryPortraits: [],

  summary:
    'Strony tworzone w PayloadCMS to projekty szyte na miarę dla klientów, którym zależy na wysokiej wydajności, automatyzacji procesów oraz niezawodności. Dla mnie jako programisty jest to idealne środowisko do pracy ze względu na nieograniczone możliwości tworzenia czystego i wydajnego kodu, który zadowoli zarówno klientów jak i systemy oceniające strony www.',
};

export default function PortfolioPerlia() {
  return (
    <>
      <Hero {...CONTENT.hero} />
      <About header="O projekcie" {...CONTENT.about} />
      <Targets targets={CONTENT.targets} />
      <Results results={CONTENT.results} />
      <ReachResults header="Panel administratora" {...CONTENT.reachResults} />
      <Gallery
        galleryLandscapes={CONTENT.galleryLandscapes}
        galleryPortraits={CONTENT.galleryPortraits}
        alt="Strona dla projektanta wnętrz"
      />

      <Summary
        text={CONTENT.summary}
        logo={CONTENT.about.logo}
        alt="Strona dla projektanta wnętrz"
      />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
