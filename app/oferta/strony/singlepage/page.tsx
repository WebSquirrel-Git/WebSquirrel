import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {SINGLE_PAGE_CONTENT} from '@/utils/offer/singlePage';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona internetowa WIZYTÓWKA / ONE PAGE',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Napisz i dowiedz się jak ważną rolę pełni strona internetowa w budowaniu marki.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony/singlepage'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony/singlepage',
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
      <IconListRow
        title={SINGLE_PAGE_CONTENT.assumptions.title}
        icon={SINGLE_PAGE_CONTENT.assumptions.icon}
        list={SINGLE_PAGE_CONTENT.assumptions.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.priceIncludes.title}
        icon={SINGLE_PAGE_CONTENT.priceIncludes.icon}
        list={SINGLE_PAGE_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.priceNotIncludes.title}
        icon={SINGLE_PAGE_CONTENT.priceNotIncludes.icon}
        list={SINGLE_PAGE_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.technologies.title}
        icon={SINGLE_PAGE_CONTENT.technologies.icon}
        list={SINGLE_PAGE_CONTENT.technologies.list}
      />
      <ProcessSteps />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
