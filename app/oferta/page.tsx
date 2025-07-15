import ContactForm from '@/components/ContactForm/ContactForm';
import CooperationBenefits from '@/components/Globals/Sections/CooperationBenefits/CooperationBenefits';
import GlobalOffer from '@/components/Globals/Sections/GlobalOffer/GlobalOffer';
import Reviews from '@/components/Globals/Sections/Reviews/Reviews';
import Hero from '@/components/Globals/Sections/Hero/Hero';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Tworzenie stron internetowych, E-sklepy, Grafiki',
  description:
    'W mojej ofercie znajdziesz usługi projektowania oraz tworzenia stron i sklepów internetowych, projektowania elementów graficznych oraz montażu rolek wideo.',
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
      <Hero
        subheader="WebSquirrel"
        title="OFERTA USŁUG"
        description="W mojej ofercie znajdziesz usługi projektowania oraz tworzenia stron i sklepów internetowych, projektowania elementów graficznych oraz montażu rolek wideo. Wszystkie sklepy i strony są projektowane indywidualnie w celu lepszego przedstawienia Twojej marki."
        videoTitle="Creative-page.mp4"
      />
      <GlobalOffer />
      <Reviews />
      <CooperationBenefits />

      <ContactForm contactFormType="All" />
    </>
  );
}
