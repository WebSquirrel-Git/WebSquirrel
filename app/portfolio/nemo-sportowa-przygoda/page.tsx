import {About} from '@/components/Portfolio/Realization/About/About';
import {Hero} from '@/components/Portfolio/Realization/Hero/Hero';
import {Results} from '@/components/Portfolio/Realization/Results/Results';
import {Summary} from '@/components/Portfolio/Realization/Summary/Summary';
import {Targets} from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';
import HeroImg from '@/public/portfolio/nemosportowaprzygoda/pc.webp';
import Logo from '@/public/portfolio/nemosportowaprzygoda/nemo-logo.svg';
import NemoSearchConsole from '@/public/portfolio/nemosportowaprzygoda/nemo_search_console.webp';
import NemoClientsSource from '@/public/portfolio/nemosportowaprzygoda/nemo_users_from.webp';
import NemoSpeedLandscape from '@/public/portfolio/nemosportowaprzygoda/nemo_speed_users.webp';
import NemoSpeedPhone from '@/public/portfolio/nemosportowaprzygoda/nemo_speed_phone.webp';
import NemoSpeedPc from '@/public/portfolio/nemosportowaprzygoda/nemo_speed_pc.webp';
import GalleryLandscape1 from '@/public/portfolio/nemosportowaprzygoda/nemo-1.webp';
import GalleryLandscape2 from '@/public/portfolio/nemosportowaprzygoda/nemo-2.webp';
import GalleryPortrait1 from '@/public/portfolio/nemosportowaprzygoda/nemo-3.webp';
import GalleryPortrait2 from '@/public/portfolio/nemosportowaprzygoda/nemo-4.webp';
import GalleryPortrait3 from '@/public/portfolio/nemosportowaprzygoda/nemo-5.webp';
import {Gallery} from '@/components/Portfolio/Realization/Gallery/Gallery';
import ContactForm from '@/components/ContactForm/ContactForm';
import { ReachResults } from '@/components/Portfolio/Realization/ReachResults/ReachResults';
import { NewClientsResults } from '@/components/Portfolio/Realization/NewClientsResults/NewClientsResults';
import { PerformanceResults } from '@/components/Portfolio/Realization/PerformanceResults/PerformanceResults';
export const metadata: Metadata = {
  title: 'Realizacja strony internetowej dla firmy Nemo Sportowa Przygoda',
  description:
    'Sprawdź jak stworzyliśmy stronę internetową, która uzyskała 38 000 wyświetleń w wyszukiwarce Google z CTR 6,6%.',
  metadataBase: new URL('https://websquirrel.pl/portfolio/nemo-sportowa-przygoda'),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio/nemo-sportowa-przygoda',
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
    header: 'NEMO Sportowa Przygoda',
    technology: 'NextJs',
    industry: 'Nauka pływania | Organizacja obozów',
    time: '7 tygodni',
    target: 'Prezentacja oferty, zwiększenie lokalnego zasięgu firmy w google',
    image: HeroImg,
    link: {
      label: 'www.nemosportowaprzygoda.pl',
      url: 'https://nemosportowaprzygoda.pl/',
    },
  },
  about: {
    text1:
      'Nemo Sportowa Przygoda to firma z okolic Krakowa, która specjalizuje się w nauce pływania, aqua aerobiku oraz organizacji obozów i półkolonii w sezonach lato/zima. Moja współpraca z założycielką Wiktorią zaczęła się od stworzenia strony opisującej naukę pływania. Ze względu na to, że Wiktoria jest osobą, która bardzo dużo pracuje angażując się w rozwój firmy i jeszcze studiuje zdecydowaliśmy się na współpracę długoterminową, gdzie ja będę odpowiedzialny za wprowadzanie zmian na jej stronie. Ze względu na planowany rozwój firmy w innych dziedzinach doradziłem Wiktorii stworzenie aplikacji w NextJs. Dzięki temu zachowaliśmy wysoką wydajność przy dalszej rozbudowie oraz kluczową skalowalność strony www.',
    text2:
      'Od tego momentu minął już prawie rok. W tym czasie rozwinęliśmy ofertę o półkolonie i obozy lato/zima, aquaerobik oraz opisy nowych basenów. Zwiększyliśmy także liczbę wyświetleń strony z wyszukiwarek do obecnie prawie 40 000 z średnim CTR wynoszącym aż 6,6%. Wszystko bez reklam sponsorowanych na wyłącznym podstawowym pozycjonowaniu SEO.',
    logo: Logo,
    alt: 'Nemo Sportowa Przygoda',
  },
  targets: [
    'Prezentacja oferty pływania',
    'Prezentacja oferty zimowej',
    'Prezentacja oferty letniej',
'Stworzenie poradników dla klientów',
'Przedstawienie treści na stronie w sposób nieszablonowy, który będzie odróżniał firmę od lokalnej konkurencji',
'Zwiększenie lokalnego zasięgu firmy w Google',
  ],
  results: [
    'Strona odróżniająca się na tle konkurencji',
    'Stworzenie 3 stylów motywów ofert: Pływania/obozów letnich/obozów zimowych',
    'Wysoka wydajność strony na urządzeniach klientów na podstawie próbek pobranych przez Google',
    '38 800 wyświetleń strony w wyszukiwarce google z CTR 6,6%',
    'Stała współpraca, która ciągle trwa'
  ],
  reachResults:{
 results: [
    'Na podstawie analizy wyszukiwania strony w google strona przez 9 miesięcy została w niej wyświetlona 38 800 razy',
    '2 570 osób weszło na stronę z wyszukiwarki Google',
    'To daje wynik 6,6% średniego CTR w przeciągu 9 miesięcy',
  ],
  image:NemoSearchConsole,
  alt:'Wykres wyników wyszukiwania'
  },
  newClientsResults:{
   results: [
    'Na podstawie analizy poniższego wykresu w przeciągu ostatnich 9 miesięcy stronę odwiedziły 5982 osoby',
    '3 048 użytkowników trafiło na stronę po wyszukaniu jednej z fraz kluczowych według Google Analytics',
    'Stanowi to nieco ponad 50% źródła użytkowników trafiających na stronę co jest bardzo dobrym wynikiem pokazującym jak pozycjonowanie pod lokalne frazy kluczowe może napędzić ruch na stronie',
    'W odniesieniu do poprzedniego wykresu można wysnuć pytanie dlaczego ilość kliknięć jest mniejsza od liczby użytkowników przedstawionych na poniższym wykresie? Wynika to z różnych sposobów zbierania danych. Dane na powyższym wykresie zbiera Google Search Console na etapie wyświetlenia i kliknięcia strony w wynikach wyszukiwania. Dane na poniższym wykresie zbiera Google Analytics po wejściu użytkownika na stronę, określając źródło, z którego wszedł.'
  ],
  image:NemoClientsSource,
  alt:'Wykres źródła pochodzenia klientów' 
  },
  performanceResults:{
   results: [
    'Na podstawie próbek pobranych przez Google od użytkowników strona zaliczyła testy wydajnościowe',
    'W klasycznym badaniu strona na komórce uzyskała wynik 67 - jest to spowodowane kompromisem na który poszliśmy, a są nim klipy wideo z zajęć na pierwszych ekranach strony. Nie mniej jednak próbki wspomniane w poprzednim punkcie weryfikują rzeczywiste doświadczenia użytkowników i są one na plus',
    'Wydajność w klasycznym badaniu na komputery wyniosła 91 czyli bardzo dobrze jak na klip wideo i popup na starcie ładowania strony',
  ],
  imageLandscape:NemoSpeedLandscape,
  alt:'Wykres źródła pochodzenia klientów',
  imagesRow:[NemoSpeedPhone,NemoSpeedPc]
  },
  galleryLandscapes: [
    GalleryLandscape1,
    GalleryLandscape2,
  ],
  galleryPortraits: [
    GalleryPortrait1,
    GalleryPortrait2,
    GalleryPortrait3,
  ],
  
  summary:
    'W przeciągu 9 miesięcy rozbudowaliśmy stronę i dopasowaliśmy jej wygląd do poszerzonej oferty firmy. W tym czasie udało się pozyskać nowe wyższe pozycje słów kluczowych w wyszukiwarkach i znacząco zwiększyć ilość nowych klientów. Obecnie trend jest rosnący, a strona pnie się do góry w rankingach słów kluczowych. W planach jest polepszenie SEO oraz dalszy rozwój oferty Nemo. Współpraca z Wiktorią trwa cały czas, jesteśmy w stałym kontakcie i rozbudowujemy stronę zwiększając zasięgi firmy oraz dodając jej nowych funkcjonalności ułatwiających nawigację i interakcje klientów.',
};

export default function PortfolioPerlia() {
  return (
    <>
      <Hero {...CONTENT.hero} />
      <About {...CONTENT.about} />
      <Targets targets={CONTENT.targets} />
      <Results results={CONTENT.results} />
      <ReachResults {...CONTENT.reachResults}/>
      <NewClientsResults {...CONTENT.newClientsResults}/>
      <PerformanceResults {...CONTENT.performanceResults}/>
      <Gallery
        galleryLandscapes={CONTENT.galleryLandscapes}
        galleryPortraits={CONTENT.galleryPortraits}
        alt="ATZM Design sklep internetowy"
      />

      <Summary
        text={CONTENT.summary}
        logo={CONTENT.about.logo}
        alt="ATZM Design"
      />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
