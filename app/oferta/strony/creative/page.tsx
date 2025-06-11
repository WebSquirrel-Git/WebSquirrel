import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {CREATIVE_PAGE_CONTENT} from '@/utils/offer/creativePage';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona internetowa CREATIVE',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Creative - to profesjonalna strona internetowa dla firmy zbudowana w oparciu o framework NextJs.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony/creative'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony/creative',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function CreativePage() {
  return (
    <>
      <Hero {...CREATIVE_PAGE_CONTENT.hero} />
      <IconListRow
        title={CREATIVE_PAGE_CONTENT.assumptions.title}
        icon={CREATIVE_PAGE_CONTENT.assumptions.icon}
        list={CREATIVE_PAGE_CONTENT.assumptions.list}
      />
      <IconListRow
        title={CREATIVE_PAGE_CONTENT.priceIncludes.title}
        icon={CREATIVE_PAGE_CONTENT.priceIncludes.icon}
        list={CREATIVE_PAGE_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={CREATIVE_PAGE_CONTENT.priceNotIncludes.title}
        icon={CREATIVE_PAGE_CONTENT.priceNotIncludes.icon}
        list={CREATIVE_PAGE_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={CREATIVE_PAGE_CONTENT.technologies.title}
        icon={CREATIVE_PAGE_CONTENT.technologies.icon}
        list={CREATIVE_PAGE_CONTENT.technologies.list}
      />
      <ProcessSteps />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
