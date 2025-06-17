import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {WOOCOMMERCE_SHOP_CONTENT} from '@/utils/offer/woocommerceShop';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Sklep internetowy WOOCOMMERCE',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. "E sklep" - rozwiązanie dla firm, które chcą zautomatyzować sprzedaż internetową i formy płatności.',
  metadataBase: new URL('https://websquirrel.pl/oferta/sklepy/woocommerce'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/sklepy/woocommerce',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function WoocommercePage() {
  return (
    <>
      <Hero {...WOOCOMMERCE_SHOP_CONTENT.hero} />
      <Advantages {...WOOCOMMERCE_SHOP_CONTENT.advantages} />
      <Incosts {...WOOCOMMERCE_SHOP_CONTENT.incosts} />
      <Technologies {...WOOCOMMERCE_SHOP_CONTENT.technologies} />
      <Stages {...WOOCOMMERCE_SHOP_CONTENT.stages} />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
