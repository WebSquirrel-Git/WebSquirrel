import ContactForm from '@/components/ContactForm/ContactForm';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import GlobalOffer from '@/components/Globals/Sections/GlobalOffer/GlobalOffer';
import PortfolioShort from '@/components/Globals/Sections/PortfolioShort/PortfolioShort';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/HomePage/Hero/Hero';
import {Metadata} from 'next';
import {headers} from 'next/headers';
export const metadata: Metadata = {
  title: 'Projektowanie stron www oraz sklepów online | WebSquirrel',
  description:
    'Tworzę profesjonalne strony internetowe i sklepy online, które zwiększą Twoją widoczność w internecie oraz polepszą wizerunek firmy.',
  metadataBase: new URL('https://websquirrel.pl'),
  alternates: {
    canonical: 'https://websquirrel.pl',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};
export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobile = /Mobile|Tablet|Mobile Safari|Mobile|Windows Phone/i.test(
    userAgent
  );
  return (
    <>
      <Hero isMobile={isMobile} />
      <GlobalOffer />
      <CooperationBenefits />
      <PortfolioShort />
      {/* <ProcessSteps {...STANDARD_PAGE_CONTENT.stages} /> */}
      <Reviews />

      {/* <Articles /> */}

      <ContactForm contactFormType="All" />
    </>
  );
}
