import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {SINGLE_PAGE_CONTENT} from '@/utils/offer/singlePage';
import {Metadata} from 'next';
import {headers} from 'next/headers';
import ImageMobile from '@/public/assets/hero/one_page-hero-mobile.webp';

export const metadata: Metadata = {
  title: 'Strony internetowe Wordpress, Oferta One Page',
  description:
    'Profesjonalna strona internetowa typu one page wykonana w systemie CMS Wordpress z panelem do edycji treści. Oferta z indywidualnym projektem strony www.',
  metadataBase: new URL(
    'https://websquirrel.pl/oferta/strony-internetowe/singlepage'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony-internetowe/singlepage',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default async function SinglePage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  const data = {
    imageMobile: ImageMobile,
    isMobile: isMobile,
    ...SINGLE_PAGE_CONTENT.hero,
  };
  return (
    <>
      <Hero {...data} />
      <Advantages {...SINGLE_PAGE_CONTENT.advantages} />
      <Incosts {...SINGLE_PAGE_CONTENT.incosts} />
      <Technologies {...SINGLE_PAGE_CONTENT.technologies} />
      <Stages {...SINGLE_PAGE_CONTENT.stages} />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
