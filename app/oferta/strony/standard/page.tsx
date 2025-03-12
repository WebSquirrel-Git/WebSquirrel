import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {STANDARD_PAGE_CONTENT} from '@/utils/offer/standardPage';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Stworzymy dla Ciebie nowoczesną stronę internetową',
  description:
    'Standardowa strona z kilkoma podstronami. Idealna dla firm, które świadczą więcej niż jedną usługę. Nie wahaj się i dzwoń zawsze chętnie pogadamy.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony/standard'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony/standard',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function StandardPage() {
  return (
    <>
      <Hero {...STANDARD_PAGE_CONTENT.hero} />
      <IconListRow
        title={STANDARD_PAGE_CONTENT.assumptions.title}
        icon={STANDARD_PAGE_CONTENT.assumptions.icon}
        list={STANDARD_PAGE_CONTENT.assumptions.list}
      />
      <IconListRow
        title={STANDARD_PAGE_CONTENT.priceIncludes.title}
        icon={STANDARD_PAGE_CONTENT.priceIncludes.icon}
        list={STANDARD_PAGE_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={STANDARD_PAGE_CONTENT.priceNotIncludes.title}
        icon={STANDARD_PAGE_CONTENT.priceNotIncludes.icon}
        list={STANDARD_PAGE_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={STANDARD_PAGE_CONTENT.technologies.title}
        icon={STANDARD_PAGE_CONTENT.technologies.icon}
        list={STANDARD_PAGE_CONTENT.technologies.list}
      />
      <ProcessSteps />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
