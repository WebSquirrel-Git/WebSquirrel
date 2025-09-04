
import { About } from '@/components/Portfolio/Realization/About/About';
import { Hero } from '@/components/Portfolio/Realization/Hero/Hero';
import { Results } from '@/components/Portfolio/Realization/Results/Results';
import { Stages } from '@/components/Portfolio/Realization/Stages/Stages';
import { Summary } from '@/components/Portfolio/Realization/Summary/Summary';
import { Targets } from '@/components/Portfolio/Realization/Targets/Targets';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Realizacja sklepu internetowego dla marki tworzącej biżuterię',
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

export default function PortfolioPerlia() {
  return <>
  <Hero/>
  <About/>
  <Targets/>
  <Results/>
  <Stages/>
  <Summary/>
  </>;
}
