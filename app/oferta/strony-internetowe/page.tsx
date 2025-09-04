import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '../../styles.module.scss';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import WebsiteIncludes from '@/components/Globals/Sections/WebsiteIncludes/WebsiteIncludes';
import WebsitesOffer from '@/components/OfferPage/WebsitesOffer/WebsitesOffer';
import ProcessSteps from '@/components/Globals/Sections/ProcessSteps/ProcessSteps';
import {STANDARD_PAGE_CONTENT} from '@/utils/offer/standardPage';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/websites-hero-mobile.webp';
import PortfolioShort from '@/components/Globals/Sections/PortfolioShort/PortfolioShort';
import TechnologiesWebsite from '@/components/OfferPage/TechnologiesWebsite/TechnologiesWebsite';
import HtmlIcon from '@/public/assets/icons/html-icon.svg';
import WordpressIcon from '@/public/assets/icons/wordpress-icon.svg';
import PayloadcmsIcon from '@/public/assets/icons/payloadcms-orange-icon.svg';
import NextJsIcon from '@/public/assets/icons/next-js-icon.svg';

export const metadata: Metadata = {
  title: 'Tworzenie stron internetowych, Projekt strony www',
  description:
    'W mojej ofercie usług projektowania i tworzenia stron internetowych znajdziesz coś dla siebie od one page w CMS Wordpress po profesjonalne strony internetowe w NextJs.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony-internetowe'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony-internetowe',
    languages: {
      'pl-PL': 'pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

const TECHNOLOGIES_DATA = [
  
  {
    id:'wordpress',
    header: 'Wordpress',
    icon: WordpressIcon,
    description1:'Klasyczny CMS na którym zbudowana jest większość stron w internecie. Opiera się na rozwiązaniach powszechnie używanych za przestarzałe lecz ciągle podtrzymywanych ze względu na zaangażowanie użytkowników i udział w ogólnym rynku. Wordpress polega na budowaniu strony internetowej na podstawie bloczków, co znacząco ułatwia prostą edycję strony dla osób niedoświadczonych. Dużym atutem jest kompatybilność z wieloma usługami i rozwiązaniami. Minusem jest to, że często są to rozwiązania płatne oraz fakt, że budowanie strony na bloczkach spowalnia jej wydajność ze względu na przestarzały kod. ',
    description2:'Wordpress jest bardzo dobrym rozwiązaniem do budowy nieskomplikowanych stron internetowych ze względu na swoją popularność i ogólnodostępne informacje i poradniki jak się nim posługiwać.'
  },
  {
     id:'payloadcms',
    header: 'PayloadCMS',
    icon: PayloadcmsIcon,
    description1:'Nowoczesny framework typu CMS oparty na NextJs, który daje możliwość pełnej konfiguracji projektowanej aplikacji, zapewniając przy tym wysoką wydajność. Strona jest tworzona poprzez pisanie kodu czyli od najbardziej podstawowego poziomu, który został zmodernizowany poprzez zastosowanie różnego rodzaju modułów od zaangażowanej społeczności i organizacji Payload. Zastosowanie powyższych metodyk pozwala na tworzenie aplikacji internetowych typu CMS w stosunkowo krótkim czasie z możliwością dopasowania ich do własnych potrzeb. Te schematy pozwalają na modyfikacje paneli administratorskich do edycji danych na stronie, co znacznie ułatwia obsługę strony.',
    description2:'Finalnym efektem jest aplikacja składająca się z warstwy wyświetlanej u klientów oraz panelu administratora do którego masz dostęp.W panelu administratora masz możliwość aktualizacji aktualnych treści na stronie oraz wstawiania nowych z użyciem przygotowanych przeze mnie bloków, które znacznie uproszczą ten proces. Aplikacje możemy podzielić na 3 elementy: warstwa klienta, warstwa administratora oraz baza danych. Wszystko jest przechowywane na Twoim hostingu i jest w pełni zabezpieczone przed dostępem osób niepowołanych.'
       },
  {
     id:'nextjs',
    header: 'NextJs',
    icon: NextJsIcon,
    description1:'Nowoczesny framework oparty na React, który został stworzony do budowy szybkich i wydajnych stron internetowych. Treść stron pisana jest w kodzie od 0 z zastosowaniem dostępnych schematów i modułów aplikacji, które wpływają na zwiększenie wydajności i optymalizacji aplikacji. Dużą zaletą jest skalowalność - mamy możliwość rozwoju strony w dowolnym kierunku i pełną kontrolę nad edycją treści. Minusem jest brak panelu administracyjnego i konieczność wprowadzania zmian przez programistę.',
    description2:'Istnieje możliwość podpięcia zewnętrznego panelu do zarządzania stroną lecz trzeba się wtedy liczyć z dodatkowymi kosztami oraz możliwą utratą wydajności. '
      },
  {
     id:'html',
    header: 'HTML + CSS + JS',
    icon: HtmlIcon,
    description1:'Ta propozycja to stworzenie strony całkowicie od 0, pisząc tylko surowy kod bez zbędnego kodu. W takiej modyfikacji mam pełną kontrolę nad każdą linijką kodu, który umieszczę. Jest to dobre rozwiązanie do nieskomplikowanych stron, które mają być szybkie i nie posiadają skomplikowanej logiki. Dlaczego? Ponieważ do budowy interfejsów lub innych użytecznych modułów lepiej jest zastosować sprawdzone metody jakie oferują frameworki np. NextJs, Vue czy Angular.',
    description2:'Podsumowując strona będzie szybka i nie przeciążona zbędnym kodem. Minusem jest brak panelu admina i potrzeba wprowadzania zmian ręcznie w kodzie. Istnieje możliwość podpięcia zewnętrznego panelu administracyjnego umożliwiającego edycję danych lecz trzeba się liczyć z tym czy się to opłaca w danej sytuacji, ponieważ będzie to proces czasochłonny i lepszym i tańszym rozwiązaniem może być Wordpress lub PayloadCMS.'
  },
];

export default async function Offert() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  return (
    <>
      <Hero
        imageMobile={ImageMobile}
        isMobile={isMobile}
        subheader="WebSquirrel"
        title="Profesjonalne strony internetowe"
        description="Projektuje nowoczesne strony internetowe, które są dostosowane do Twojego profilu firmy i realizują konkretne cele. Każdy projekt powstaje na podstawie ustalonej strategii i dopasowanego projektu graficznego, który współgra z wizerunkiem Twojej firmy."
        videoTitle="Interior_designer.mp4"
      />
      <div className={styles.containerAlignCenter}>
        <H2About
          h2="Jakie rodzaje stron tworzę?"
          about="Pomysły na stronę powstają na podstawie uzgodnienia strategii na początku współpracy, gdzie ustalimy jaki jest cel zrobienia strony internetowej dla Ciebie. W zależności od potrzeb wykonam dla Ciebie projekt graficzny strony w wersji OnePage lub bardziej rozbudowanej. Wszystkie strony są tworzone w podejściu pixel-perfect, przy zachowaniu wysokiej wydajności, optymalizacji SEO, responsywności oraz stworzenia ścieżki dla Twoich klientów, która będzie prowadziła ich do konkretnego celu."
        />
      </div>
      <CooperationBenefits />
      <ProcessSteps {...STANDARD_PAGE_CONTENT.stages} />
      <WebsiteIncludes h2="Obowiązkowe elementy projektu strony internetowej" />
      <WebsitesOffer />
      <PortfolioShort />
      <Reviews />
      <TechnologiesWebsite TECHNOLOGIES_DATA={TECHNOLOGIES_DATA}/>
      

      <ContactForm contactFormType="All" />
    </>
  );
}
