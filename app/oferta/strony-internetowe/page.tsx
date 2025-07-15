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
export default function Offert() {
  return (
    <>
      <Hero
        subheader="WebSquirrel"
        title="Tworzenie stron internetowych"
        description="W mojej ofercie znajdziesz różne pakiety usług projektowania i tworzenia stron internetowych. Jest coś dla każdego od one page w CMS Wordpress po profesjonalne strony internetowe dla firm w NextJs. Jeżeli uważasz, że żaden z nich nie odpowiada Twoim oczekiwaniom skontaktuj się ze mną. Wycenie Twój projekt indywidualnie."
        videoTitle="Creative-page.mp4"
      />
      <div className={styles.containerAlignCenter}>
        <H2About
          h2="Profesjonalne i responsywne strony internetowe"
          about="Tworzę nowoczesne strony internetowe, które są szybkie, responsywne i skuteczne. Wszystkie usługi uwzględniają projektowanie strony www na podstawie personalizowanego projektu graficznego, który będzie spełniał Twoje oczekiwania, prezentował styl i przesłanie marki oraz realizował założenia biznesowe. Podczas tworzenia stron internetowych przykładam uwagę do najmniejszych detali jak alty, loading, rozmiar czy format zdjęć. Nie obieram drogi na skróty i pracuję na 100%, ponieważ każdy detal ma znaczenie."
        />
      </div>
      <WebsiteIncludes h2="Co zawiera każda strona internetowa?" />
      <WebsitesOffer />
      <Reviews />
      <ProcessSteps {...STANDARD_PAGE_CONTENT.stages} />
      <CooperationBenefits />

      <ContactForm contactFormType="All" />
    </>
  );
}
