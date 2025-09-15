import Footer from '@/components/Footer/Footer';
import '../styles/globals.scss';
import Navigation from '@/components/Navigation/Navigation';
import {Metadata} from 'next';
import {GoogleAnalytics} from '@next/third-parties/google';
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: {
    default: 'Strony i sklepy internetowe | WebSquirrel',
    template: '%s | WebSquirrel',
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
  const CookiesPopup = dynamic(
    () => import('@/components/Ui/Popups/CookiesPopup/CookiesPopup')
  );
  return (
    <html lang="en">
      <body>
        <CookiesPopup />
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-QPJ4FYG6VE" />
      </body>
    </html>
  );
}
