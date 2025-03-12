import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/HomePage/Advantages/Advantages';
import Graphics from '@/components/HomePage/Graphics/Graphics';
import Hero from '@/components/HomePage/Hero/Hero';
import Pages from '@/components/HomePage/Pages/Pages';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Strony i sklepy internetowe | Grafiki SVG - WebSquirrel',
  description:
    'Zajmujemy się tworzeniem stron internetowych, sklepów internetowych oraz grafik/animacji SVG. Dzień bez pogawędki z klientem to dzień stracony więc nie wahaj się i dzwoń.',
  metadataBase: new URL('https://websquirrel.pl'),
  alternates: {
    canonical: 'https://websquirrel.pl',
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
export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Pages />
      <Graphics />
      <ContactForm contactFormType="All" />
    </>
  );
}
