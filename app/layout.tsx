import Footer from '@/components/Footer/Footer';
import '../styles/globals.scss';
import Navigation from '@/components/Navigation/Navigation';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Strony i sklepy internetowe | Grafiki SVG - WebSquirrel',
    template: '%s - WebSquirrel',
  },
  description:
    'Zajmujemy się tworzeniem stron internetowych, sklepów internetowych oraz grafik/animacji SVG. Dzień bez pogawędki z klientem to dzień stracony więc nie wahaj się i dzwoń.',
  metadataBase: new URL('https://websquirrel.pl'),
  authors: [{name: 'Bartosz Bednarski'}],
  publisher: 'Bartosz Bednarski',
  alternates: {
    canonical: '/',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
