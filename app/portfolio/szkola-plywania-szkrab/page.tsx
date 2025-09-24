import {About} from '@/components/Portfolio/Realization/About/About';
import {Hero} from '@/components/Portfolio/Realization/Hero/Hero';
import {Results} from '@/components/Portfolio/Realization/Results/Results';
import {Summary} from '@/components/Portfolio/Realization/Summary/Summary';
import {Targets} from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';
import HeroImg from '@/public/portfolio/szkrab/pc.webp';
import Logo from '@/public/portfolio/szkrab/logo.svg';
import SzkrabSearchConsole from '@/public/portfolio/szkrab/szkrab_search_console.webp';
import SzkrabSpeedPhone from '@/public/portfolio/szkrab/szkrab_speed_phone.webp';
import SzkrabSpeedPc from '@/public/portfolio/szkrab/szkrab_speed_pc.webp';
import GalleryLandscape1 from '@/public/portfolio/szkrab/szkrab-1.webp';
import GalleryLandscape2 from '@/public/portfolio/szkrab/szkrab-2.webp';
import GalleryLandscape3 from '@/public/portfolio/szkrab/szkrab-3.webp';
import GalleryLandscape4 from '@/public/portfolio/szkrab/szkrab-4.webp';
import GalleryLandscape5 from '@/public/portfolio/szkrab/szkrab-5.webp';
import GalleryPortrait1 from '@/public/portfolio/szkrab/szkrab-6.webp';
import GalleryPortrait2 from '@/public/portfolio/szkrab/szkrab-7.webp';
import GalleryPortrait3 from '@/public/portfolio/szkrab/szkrab-8.webp';
import {Gallery} from '@/components/Portfolio/Realization/Gallery/Gallery';
import ContactForm from '@/components/ContactForm/ContactForm';
import {ReachResults} from '@/components/Portfolio/Realization/ReachResults/ReachResults';
import {PerformanceResults} from '@/components/Portfolio/Realization/PerformanceResults/PerformanceResults';
export const metadata: Metadata = {
  title: 'Strona internetowa dla Szkoły Pływania Szkrab',
  description:
    'Strona internetowa dla szkoły pływania stworzona w 7 dni z brandingiem, logo, ikonami i stopką e-mail.',
  metadataBase: new URL(
    'https://websquirrel.pl/portfolio/szkola-plywania-szkrab'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio/szkola-plywania-szkrab',
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
    header: 'Szkoła Pływania Szkrab',
    technology: 'NextJs',
    industry: 'Nauka pływania',
    time: '1 tydzień',
    target:
      'Prezentacja oferty, podniesienie wiarygodności nowej firmy, umożliwienie zapisów na zajęcia przez stronę',
    image: HeroImg,
    link: {
      label: 'www.szkolaplywaniaszkrab.pl',
      url: 'https://szkolaplywaniaszkrab.pl/',
    },
  },
  about: {
    text1:
      'Szkoła pływania Szkrab to nowo powstała firma, która świadczy swoje usługi nauki pływania w Wolbromiu. Czas na stworzenie strony był ograniczony i wynosił tydzień. Wszystko dlatego, że chcieliśmy przeprowadzić start firmy oraz zapisy na profesjonalnym poziomie i zwiększyć wiarygodność marki u nowych potencjalnych klientów. Do stworzenia strony wybraliśmy Next.js ze względu na skalowalność, wysoką wydajność, możliwość dalszej nieograniczonej rozbudowy strony oraz implementacje funkcjonalności jak ręcznie robiony harmonogram z możliwością edycji przez właścicielkę Justynę.',
    text2:
      'Dodatkowe usługi obejmowały stworzenie logo, makiety na tło strony, zestawu ikon prezentującego poziomy grup pływackich oraz pomoc przy tworzeniu identyfikacji wizualnej na Social Media.',
    logo: Logo,
    alt: 'Szkoła Pływania Szkrab',
  },
  targets: [
    'Wysoka wydajność strony',
    'Profesjonalna prezentacja firmy i podniesienie jej wiarygodności na obecnym rynku konkurencji',
    'Prezentacja oferty z przedstawieniem procesu zapisów w celu zwiększenia komfortu klientów',
    'Stworzenie formularza do zapisów online',
    'Stworzenie harmonogramu z możliwością prostej edycji przez właścicielkę',
    'Prosty i czytelny design',
  ],
  results: [
    'Wyniki wydajności wydajności PSI - 100 i 100',
    'Oferta została przedstawiona w sposób przejrzysty co zaczęło się już przekładać na opinie klientów',
    'Formularz do zapisów znacząco ułatwił proces rejestracji klientów',
    'Stworzony harmonogram jest prosty w edycji i zwiększa organizację zapisów',
    'Strona została napisana od 0 i podpięta do Google w 7 dni',
  ],
  reachResults: {
    results: [
      'Od publikacji strony minął dopiero tydzień, ale start jest na tyle dobry, że postanowiłem wrzucić trochę danych jako przykład',
      'Obecnie z 102 wyświetleń w Google na stronę weszło 38 osób ',
      'Jak na pierwszy tydzień jest to super wynik, ale dlaczego tak się dzieje? Jest to spowodowane małą konkurencją w branży na danym obszarze działania co spowodowało pojawienie się strony Szkraba na pierwszej stronie Google pod ustawionymi frazami kluczowymi',
    ],
    image: SzkrabSearchConsole,
    alt: 'Wykres wyników wyszukiwania',
  },

  performanceResults: {
    results: [
      'Strona uzyskała maksymalne wyniki wydajności w badaniu PSI od Google - zarówno na urządzeniach mobilnych jak i komputerach',
      'SEO zostało ustawione poprawnie, strona zawiera wszystkie meta nagłówki oraz inne klasyfikowane przez Google elementy',
    ],
    alt: 'Wykres źródła pochodzenia klientów',
    imagesRow: [SzkrabSpeedPhone, SzkrabSpeedPc],
  },
  galleryLandscapes: [
    GalleryLandscape1,
    GalleryLandscape2,
    GalleryLandscape3,
    GalleryLandscape4,
    GalleryLandscape5,
  ],
  galleryPortraits: [GalleryPortrait1, GalleryPortrait2, GalleryPortrait3],

  summary:
    'Strona została stworzona w 7 dni z zachowaniem wszystkich wymagań oraz utworzeniem interaktywnego harmonogramu zajęć. Wyniki wydajności strony są bardzo dobre: 100 na telefon, oraz 100 na Komputery w PSI od Google. Dodatkowe usługi obejmowały stworzenie loga, ikon, pomoc w brandingu na Social Media oraz utworzenie stopki na e-mail. Zainteresowanie klientów jak na start jest ogromne. W ciągu 2 tygodni zapisało się 50 osób. Jest to dopiero początek współpracy, której efekty były powyżej naszych wspólnych oczekiwań. W najbliższych miesiącach będziemy wspólnie rozwijać zarówno stronę jak i markę Szkoły Pływania Szkrab. Więcej aktualizacji możecie sprawdzić na Instagramie.',
};

export default function PortfolioPerlia() {
  return (
    <>
      <Hero {...CONTENT.hero} />
      <About {...CONTENT.about} />
      <Targets targets={CONTENT.targets} />
      <Results results={CONTENT.results} />
      <ReachResults header="Zasięgi firmy" {...CONTENT.reachResults} />
      <PerformanceResults {...CONTENT.performanceResults} />
      <Gallery
        galleryLandscapes={CONTENT.galleryLandscapes}
        galleryPortraits={CONTENT.galleryPortraits}
        alt="Szkoła Pływania Szkrab"
      />

      <Summary
        text={CONTENT.summary}
        logo={CONTENT.about.logo}
        alt="Szkoła Pływania Szkrab"
      />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
