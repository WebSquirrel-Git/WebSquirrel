'use client';
import ArticleCardLink from '@/components/Articles/ArticleCardLink/ArticleCardLink';
import styles from './articles.module.scss';
import H2About from '@/components/Ui/Headers/H2About/H2About';

const Articles = () => {
  return (
    <section id="processSteps" className={styles.container}>
      <H2About
        h2="Sprawdź czego możesz się dowiedzieć"
        about="Prowadzę sekcję artykułów gdzie dziele się swoją wiedzą i pomagam moim klientom."
      />
      <div className={styles.box}>
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
      </div>
    </section>
  );
};
export default Articles;
