import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '../../styles.module.scss'
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import WebsiteIncludes from '@/components/Globals/Sections/WebsiteIncludes/WebsiteIncludes';
import WebsitesOffer from '@/components/OfferPage/WebsitesOffer/WebsitesOffer';
import ProcessSteps from '@/components/Globals/Sections/ProcessSteps/ProcessSteps';
import { STANDARD_PAGE_CONTENT } from '@/utils/offer/standardPage';
export const metadata: Metadata = {
  title: 'Strony i sklepy internetowe, projekty graficzne | WebSquirrel',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Napisz i dowiedz się jak ważną rolę pełni strona internetowa w budowaniu marki.',
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
      <Hero subheader='WebSquirrel' title='Tworzenie stron internetowych' description='W mojej ofercie znajdziesz różne pakiety usług projektowania i tworzenia stron internetowych. Jeżeli uważasz, że żaden z pakietów nie odpowiada Twoim oczekiwaniom skontaktuj się ze mną. Wycenie Twój projekt indywidualnie oraz dam Ci znać czy mam wystarczające kompetencje do podjęcia się zadania.' videoTitle='Creative-page.mp4'/>
      <div className={styles.containerAlignCenter}>
      <H2About h2='Nowoczesne i personalizowane strony internetowe' about='Tworzę nowoczesne sklepy internetowe, które zautomatyzują Twoją sprzedaż produktów. Wszystkie usługi zawierają personalizowany projekt graficzny, który będzie spełniał Twoje oczekiwania, prezentował styl i przesłanie marki oraz realizował założenia biznesowe. Podczas tworzenia stron przykładam uwagę do najmniejszych detali jak alty, loading, rozmiar czy format zdjęć. Nie obieram drogi na skróty i nie pracuję na 90% tylko 100%, ponieważ każdy detal ma znaczenie.'/>
      </div>
      <WebsiteIncludes/>
      <WebsitesOffer/>
      <Reviews/>
      <ProcessSteps {...STANDARD_PAGE_CONTENT.stages}/>
      <CooperationBenefits/>
     
      <ContactForm contactFormType="All" />
    </>
  );
}
