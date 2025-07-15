import ContactForm from '@/components/ContactForm/ContactForm';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import GlobalOffer from '@/components/Globals/Sections/GlobalOffer/GlobalOffer';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Strony i sklepy internetowe, projekty graficzne | WebSquirrel',
  description:
    'Zajmuję się projektowaniem i tworzeniem stron www oraz sklepów online. Napisz i dowiedz się jak ważną rolę pełni strona internetowa w budowaniu marki.',
  metadataBase: new URL('https://websquirrel.pl/oferta'),
  alternates: {
    canonical: 'https://websquirrel.pl/oferta',
    languages: {
      'pl-PL': 'pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};
export default function Offert() {
  return (
    <>
      <Hero subheader='WebSquirrel' title='OFERTA USŁUG' description='Podczas tworzenia stron internetowycch i prowadzenia swojej marki ' videoTitle='Creative-page.mp4'/>
      <GlobalOffer/>
      <Reviews/>
      <CooperationBenefits/>
     
      <ContactForm contactFormType="All" />
    </>
  );
}
