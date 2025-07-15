import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/OfferPage/Advantages/Advantages';
import Hero from '@/components/OfferPage/Hero/Hero';
import Incosts from '@/components/OfferPage/Incosts/Incosts';
import Stages from '@/components/OfferPage/Stages/Stages';
import Technologies from '@/components/OfferPage/Technologies/Technologies';
import {SINGLE_PAGE_CONTENT} from '@/utils/offer/singlePage';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona internetowa WIZYTÓWKA / ONE PAGE',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Napisz i dowiedz się jak ważną rolę pełni strona internetowa w budowaniu marki.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony-internetowe/singlepage'),
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

export default function SinglePage() {
  return (
    <>
      <Hero {...SINGLE_PAGE_CONTENT.hero} />
      <Advantages {...SINGLE_PAGE_CONTENT.advantages} />
      <Incosts {...SINGLE_PAGE_CONTENT.incosts} />
      <Technologies {...SINGLE_PAGE_CONTENT.technologies} />
      <Stages {...SINGLE_PAGE_CONTENT.stages} />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
