import Hero from '@/components/Portfolio/Hero/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Nasze realizacje',
  description:
    'Sprawdź co ciekawego udało nam się stworzyć. Może coś przykuje Twoją uwagę i zrobimy coś podobnego, a może Cię zainspirujemy i stworzymy coś nowego.',
  metadataBase: new URL('https://websquirrel.pl/portfolio'),
  alternates: {
    canonical: 'https://websquirrel.pl/portfolio',
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

export default function Portfolio() {
  return <Hero />;
}
