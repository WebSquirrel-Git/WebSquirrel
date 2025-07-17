import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {CREATIVE_PAGE_CONTENT} from '@/utils/offer/creativePage';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/creative-hero-mobile.webp';

export const metadata: Metadata = {
  title: 'Profesjonalna Strona Internetowa, Oferta Creative',
  description:
    'Projekt strony www tworzony od podstaw i realizowany w frameworku NextJs. Możliwość łatwej implementacji autorskich skryptów. Wysoka wydajność.',
  metadataBase: new URL(
    'https://websquirrel.pl/oferta/strony-internetowe/creative'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony-internetowe/creative',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default async function CreativePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  const data = {
    imageMobile: ImageMobile,
    isMobile: isMobile,
    ...CREATIVE_PAGE_CONTENT.hero,
  };

  return (
    <>
      <Hero {...data} />
      <Advantages {...CREATIVE_PAGE_CONTENT.advantages} />
      <Incosts {...CREATIVE_PAGE_CONTENT.incosts} />
      <Technologies {...CREATIVE_PAGE_CONTENT.technologies} />
      <Stages {...CREATIVE_PAGE_CONTENT.stages} />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
