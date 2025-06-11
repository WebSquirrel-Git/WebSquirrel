import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {PREMIUM_PAGE_CONTENT} from '@/utils/offer/premiumPage';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona internetowa PREMIUM',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Premium - strona internetowa dla firmy, która posiada rozbudowane usługi.',
  metadataBase: new URL('https://websquirrel.pl/oferta/strony/premium'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta/strony/premium',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function PremiumPage() {
  return (
    <>
      <Hero {...PREMIUM_PAGE_CONTENT.hero} />
      <IconListRow
        title={PREMIUM_PAGE_CONTENT.assumptions.title}
        icon={PREMIUM_PAGE_CONTENT.assumptions.icon}
        list={PREMIUM_PAGE_CONTENT.assumptions.list}
      />
      <IconListRow
        title={PREMIUM_PAGE_CONTENT.priceIncludes.title}
        icon={PREMIUM_PAGE_CONTENT.priceIncludes.icon}
        list={PREMIUM_PAGE_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={PREMIUM_PAGE_CONTENT.priceNotIncludes.title}
        icon={PREMIUM_PAGE_CONTENT.priceNotIncludes.icon}
        list={PREMIUM_PAGE_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={PREMIUM_PAGE_CONTENT.technologies.title}
        icon={PREMIUM_PAGE_CONTENT.technologies.icon}
        list={PREMIUM_PAGE_CONTENT.technologies.list}
      />
      <ProcessSteps />
      <ContactForm contactFormType="Strona internetowa" />
    </>
  );
}
