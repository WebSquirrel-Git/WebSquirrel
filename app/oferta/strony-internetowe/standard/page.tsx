import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {STANDARD_PAGE_CONTENT} from '@/utils/offer/standardPage';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/standard-hero-mobile.webp';

export const metadata: Metadata = {
  title: 'Projektowanie stron internetowych, Oferta Standard',
  description:
    'Strona internetowa zawierająca do 5 podstron stworzona w CMS Wordpress. Projekt graficzny każdej zakładki jest robiony indywidualnie.',
  metadataBase: new URL(
    'https://websquirrel.pl/oferta/strony-internetowe/standard'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony-internetowe/standard',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default async function StandardPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  const data = {
    imageMobile: ImageMobile,
    isMobile: isMobile,
    ...STANDARD_PAGE_CONTENT.hero,
  };
  return (
    <>
      <Hero {...data} />
      <Advantages {...STANDARD_PAGE_CONTENT.advantages} />
      <Incosts {...STANDARD_PAGE_CONTENT.incosts} />
      <Technologies {...STANDARD_PAGE_CONTENT.technologies} />
      <Stages {...STANDARD_PAGE_CONTENT.stages} />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
