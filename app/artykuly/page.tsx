import ArticleCardLink from '@/components/Articles/ArticleCardLink/ArticleCardLink';
import {Metadata} from 'next';
import styles from '../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
export const metadata: Metadata = {
  title: 'Artykuly',
  description:
    'Porady i rozwiązania dla osób aktualizujących treści na swoich stronach internetowych.',
  metadataBase: new URL('https://websquirrel.pl/artykuly'),
  alternates: {
    canonical: 'https://websquirrel.pl/artykuly',
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

export default function CreativePage() {
  return (
    <>
      <Hero
        subheader=""
        title="Artykuły"
        description="Tipy i rozwiązania dla osób aktualizujących treści na swoich stronach internetowych."
      />
      <div className={styles.articlesContainer}>
        <ArticleCardLink
          url="/artykuly/optymalizacjaobrazow"
          tags={['grafiki', 'seo']}
          title="OPTYMALIZACJA OBRAZÓW NA STRONIE INTERNETOWEJ"
          about="W tym artykule dowiesz się jakiego formatu obrazów używać, poznasz narzędzia do ich edycji oraz najważniejsze - po co to wszystko?"
          author="BARTOSZ"
          date="07.05.2025"
        />
      </div>
    </>
  );
}
