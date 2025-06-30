import ArticleCardLink from '@/components/Articles/ArticleCardLink/ArticleCardLink';
import {Metadata} from 'next';
import styles from '../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
export const metadata: Metadata = {
  title: 'ARTYKUŁY | Obsługa i zarządzanie stronami www',
  description:
    'Porady i rozwiązania do zarządzania stronami www i sklepami online | Korzyści z posiadania e sklepu | Budowanie marki w internecie | Grafiki | SEO | Google',
  metadataBase: new URL('https://websquirrel.pl/artykuly'),
  alternates: {
    canonical: 'https://websquirrel.pl/artykuly',
    languages: {
      'pl-PL': '/pl-PL',
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
        description="Porady i rozwiązania do zarządzania stronami www i sklepami online"
      />
      <div className={styles.articlesContainer}>
        <ArticleCardLink
          url="/artykuly/dlaczego-warto-miec-strone-www"
          tags={['stronyInternetowe']}
          title="DLACZEGO WARTO MIEĆ STRONĘ WWW?"
          about="Strona internetowa jest wizytówką Twojej marki w internecie, która pozwala zwiększać jej zasięgi oraz analizować potrzeby Twoich klientów. Dowiedz się więcej co możesz zyskać."
          author="BARTOSZ"
          date="30.06.2025"
        />
        <ArticleCardLink
          url="/artykuly/rola-naglowkow-na-stronie-internetowej"
          tags={['typografia', 'stronyInternetowe', 'sklepyInternetowe']}
          title="ROLA NAGŁÓWKÓW NA STRONIE INTERNETOWEJ"
          about="Dowiesz się jak poprawnie ustawić nagłówki na stronie internetowej. Jakie jest ich znaczenie, jak ważna jest hierarchia, estetyka i ich funkcje związane z SEO."
          author="BARTOSZ"
          date="12.06.2025"
        />
        <ArticleCardLink
          url="/artykuly/korzysci-plynace-z-posiadania-sklepu-internetowego"
          tags={['sklepyInternetowe']}
          title="KORZYŚCI PŁYNĄCE Z POSIADANIA SKLEPU INTERNETOWEGO"
          about="W tym artykule dowiesz się jakie korzyści dla sprzedawcy i kupującego może przynieść sklep internetowy oraz jaką pełni on rolę w budowaniu marki."
          author="BARTOSZ"
          date="06.06.2025"
        />
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
