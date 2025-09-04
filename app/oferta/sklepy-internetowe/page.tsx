import ContactForm from '@/components/ContactForm/ContactForm';
import styles from '../../styles.module.scss';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import WebsiteIncludes from '@/components/Globals/Sections/WebsiteIncludes/WebsiteIncludes';
import ProcessSteps from '@/components/Globals/Sections/ProcessSteps/ProcessSteps';
import StoresOffer from '@/components/OfferPage/StoresOffer/StoresOffer';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/stores-hero-mobile.webp';
import { WOOCOMMERCE_SHOP_CONTENT } from '@/utils/offer/woocommerceShop';
import StoreIncludes from '@/components/Globals/Sections/StoreIncludes/StoreIncludes';

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
        title="Profesjonalne sklepy internetowe"
        description="Projektuje nowoczesne sklepy internetowe, które są proste w obsłudze i realizują cele sprzedażowe Twojej marki. Każdy projekt posiada niezbędne funkcje i integracje jak płatności online, kurierzy czy elementy CTA, które upraszczają proces zakupu przez klienta. "
        videoTitle="Woocommerce_shop.mp4"
      />
      <div className={styles.containerAlignCenter}>
        <H2About
          h2="Jakie sklepy tworzę?"
          about="Głównym narzędziem, z którego korzystam jest Wordpress z WooCommerce. Stosuje to połączenie ze względu na skalowalność systemu - dostęp do wielu usług, które można w łatwy sposób wdrożyć na stronę (płatności online, kurierzy, powiadomienia o stanie zakupu, fakturyzacja). Każdy projekt powstaje na podstawie opracowanego na początku współpracy planu - analiza grupy klientów, ustalenie ścieżki zakupu, połączenia produktów z innymi platformami, dostosowanie do brandingu marki itp. Sklep wykonywany jest na podstawie dopasowanego projektu graficznego w podejściu pixel-perfect, przy zachowaniu wysokiej wydajności, optymalizacji SEO, responsywności oraz integracji z platformami zwiększającymi potencjał sprzedaży."
        />
      </div>
      <CooperationBenefits />
      <ProcessSteps {...WOOCOMMERCE_SHOP_CONTENT.stages} />
      <StoreIncludes h2="Co zawiera każdy sklep www?"/>
      <StoresOffer />
      <Reviews />
      
      

      <ContactForm contactFormType="All" />
    </>
  );
}
