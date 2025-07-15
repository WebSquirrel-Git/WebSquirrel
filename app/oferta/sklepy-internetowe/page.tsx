import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '../../styles.module.scss';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import WebsiteIncludes from '@/components/Globals/Sections/WebsiteIncludes/WebsiteIncludes';
import ProcessSteps from '@/components/Globals/Sections/ProcessSteps/ProcessSteps';
import {STANDARD_PAGE_CONTENT} from '@/utils/offer/standardPage';
import StoresOffer from '@/components/OfferPage/StoresOffer/StoresOffer';
export const metadata: Metadata = {
  title: 'Tworzenie sklepów internetowych, Oferta E-sklepy',
  description:
    'Zajmuję się projektowaniem sklepów internetowych, które ułatwią Twoją sprzedaż produktów i profesjonalnie zaprezentują profil firmy. Integracje sklepu www z usługami.',
  metadataBase: new URL('https://websquirrel.pl/oferta/sklepy-internetowe'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/sklepy-internetowe',
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
        title="Tworzenie sklepów internetowych"
        description="Tworzę sklepy internetowe, które ułatwią Twoją sprzedaż produktów i profesjonalnie zaprezentują profil firmy. W mojej ofercie znajdziesz szereg usług, które ułatwią integracje Twojego e-sklepu z innymi usługami oraz zapewnią wysoki standard realizacji."
        videoTitle="Woocommerce_shop.mp4"
      />
      <div className={styles.containerAlignCenter}>
        <H2About
          h2="Nowoczesne i profesjonalne strony internetowe"
          about="Tworzę nowoczesne sklepy internetowe, które zautomatyzują Twoją sprzedaż produktów. Wszystkie usługi zawierają personalizowany projekt graficzny, który będzie spełniał Twoje oczekiwania, prezentował styl i przesłanie marki oraz realizował założenia biznesowe. Podczas tworzenia stron przykładam uwagę do najmniejszych detali jak alty, loading, rozmiar czy format zdjęć. Nie obieram drogi na skróty i pracuję na 100%, ponieważ każdy detal ma znaczenie."
        />
      </div>
      <WebsiteIncludes h2="Co zawiera każdy sklep www?" />
      <StoresOffer />
      <Reviews />
      <ProcessSteps {...STANDARD_PAGE_CONTENT.stages} />
      <CooperationBenefits />

      <ContactForm contactFormType="All" />
    </>
  );
}
