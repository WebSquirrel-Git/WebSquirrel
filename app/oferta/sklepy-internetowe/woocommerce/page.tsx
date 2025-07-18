import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {WOOCOMMERCE_SHOP_CONTENT} from '@/utils/offer/woocommerceShop';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/stores-hero-mobile.webp';

export const metadata: Metadata = {
  title: 'Budowanie sklepów internetowych, Oferta WooCommerce',
  description:
    'Profesjonalny sklep internetowy z personalizowanym projektem graficznym i prostym w obsłudze systemie CMS Wordpress z WooCommerce. Integracje dostaw i płatności online.',
  metadataBase: new URL(
    'https://websquirrel.pl/oferta/sklepy-internetowe/woocommerce'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/sklepy-internetowe/woocommerce',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default async function WoocommercePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  const data = {
    imageMobile: ImageMobile,
    isMobile: isMobile,
    ...WOOCOMMERCE_SHOP_CONTENT.hero,
  };
  return (
    <>
      <Hero {...data} />
      <Advantages {...WOOCOMMERCE_SHOP_CONTENT.advantages} />
      <Incosts {...WOOCOMMERCE_SHOP_CONTENT.incosts} />
      <Technologies {...WOOCOMMERCE_SHOP_CONTENT.technologies} />
      <Stages {...WOOCOMMERCE_SHOP_CONTENT.stages} />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
