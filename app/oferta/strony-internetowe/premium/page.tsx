import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {PREMIUM_PAGE_CONTENT} from '@/utils/offer/premiumPage';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/premium-hero-mobile.webp';

export const metadata: Metadata = {
  title: 'Strona internetowa dla firm, Oferta Premium',
  description:
    'Strona internetowa dla firm zawierająca do 10 zakładek, dzięki którym profesjonalnie zaprezentujesz swoją ofertę. Personalizowany projekt strony.',
  metadataBase: new URL(
    'https://websquirrel.pl/oferta/strony-internetowe/premium'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony-internetowe/premium',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default async function PremiumPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  const data = {
    imageMobile: ImageMobile,
    isMobile: isMobile,
    ...PREMIUM_PAGE_CONTENT.hero,
  };
  return (
    <>
      <Hero {...data} />
      <Advantages {...PREMIUM_PAGE_CONTENT.advantages} />
      <Incosts {...PREMIUM_PAGE_CONTENT.incosts} />
      <Technologies {...PREMIUM_PAGE_CONTENT.technologies} />
      <Stages {...PREMIUM_PAGE_CONTENT.stages} />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
