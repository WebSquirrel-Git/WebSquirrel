import ContactForm from '@/components/ContactForm/ContactForm';
import Articles from '@/components/Globals/Sections/Articles/Articles';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import GlobalOffer from '@/components/Globals/Sections/GlobalOffer/GlobalOffer';
import PortfolioShort from '@/components/Globals/Sections/PortfolioShort/PortfolioShort';
import ProcessSteps from '@/components/Globals/Sections/ProcessSteps/ProcessSteps';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Advantages from '@/components/HomePage/Advantages/Advantages';
import Graphics from '@/components/HomePage/Graphics/Graphics';
import Hero from '@/components/HomePage/Hero/Hero';
import Pages from '@/components/HomePage/Pages/Pages';
import { STANDARD_PAGE_CONTENT } from '@/utils/offer/standardPage';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Strony i sklepy internetowe, projekty graficzne | WebSquirrel',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Napisz i dowiedz się jak ważną rolę pełni strona internetowa w budowaniu marki.',
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
export default function Home() {
  return (
    <>
      <Hero />
      <GlobalOffer/>
      <Reviews/>
      <PortfolioShort/>
      <CooperationBenefits/>
      <Articles/>
     <ProcessSteps {...STANDARD_PAGE_CONTENT.stages}/>
      <ContactForm contactFormType="All" />
    </>
  );
}
