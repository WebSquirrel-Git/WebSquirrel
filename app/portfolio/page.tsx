import Hero from '@/components/Portfolio/Hero/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'PORTFOLIO - strony, sklepy internetowe, grafiki',
  description:
    'Strony internetowe | Sklepy online | Animacje | Projekty graficzne | Brandbooki | NextJs | Wordpress | Woocommerce | Figma',
  metadataBase: new URL('https://websquirrel.pl/portfolio'),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function Portfolio() {
  return <Hero />;
}
