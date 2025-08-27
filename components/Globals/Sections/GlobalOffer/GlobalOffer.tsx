'use client';
import H2About from '@/components/Ui/Headers/H2About/H2About';
import styles from './globalOffer.module.scss';
import OfferCardGlobal, {
  OfferCardPropsType,
} from '@/components/Ui/Cards/OfferGlobal/OfferCardGlobal';

const GLOBAL_OFFERT: OfferCardPropsType[] = [
  {
    type: 'strona_internetowa',
    header: 'Strony internetowe',
    description:
      'Wszystkie strony internetowe są tworzone na podstawie indywidualnie dopasowanego projektu graficznego. Strony są szybkie, estetyczne, responsywne i spełniają wymagania SEO. Standardowo zapewniam wdrożenie integracji z systemami Google jak Search Console czy Analytics.',
    url: '/oferta/strony-internetowe',
    link: true,
    color: 'orange',
    list: [
      'Strona one page',
      'Rozbudowana strona internetowa',
      'Strona dla firmy',
      'Strona w CMS Wordpress',
      'Strona w NextJs',
      'Strona w PayloadCMS',
    ],
  },
  {
    type: 'sklep_internetowy',
    header: 'Sklepy internetowe',
    description:
      'Wszystkie sklepy internetowe są tworzone na podstawie indywidualnie dopasowanego projektu graficznego. Sklepy są szybkie, estetyczne, responsywne, posiadają integracje płatności online i dostaw, obsługę powiadomień e-mail i wiele więcej. W celu szczegółowego zapoznania się z ofertą kliknij przycisk poniżej.',
    url: '/oferta/sklepy-internetowe',
    link: true,
    color: 'orange',
    list: [
      'Profesjonalne sklepy internetowe',
      'Sklepy internetowe dla firm',
      'Sklepy internetowe dla działalności nierejestrowanych',
      'E-sklepy zbudowane na systemach CMS',
      'Integracja e-sklepu z płatnościami online i dostawami',
    ],
  },
  {
    type: 'projekt_graficzny',
    header: 'Projekty graficzne',
    description:
      'Moim głównym narzędziem używanym do projektowania graficznego jest figma. Wykonam dla Ciebie zarówno Brandbooka marki jak i zmodyfikuję logo do formatu SVG z uwzględnieniem poprawek. Zajmuję się także tworzeniem animacji, które są lżejszą alternatywą dla typowych gifów na stronach.',
    url: '/oferta/strony/singlepage',
    link: false,
    color: 'blue',
    list: [
      'Brandbooki',
      'Modyfikacje logo',
      'Animacje HTML + CSS',
      'Ulotki, banery, wizytówki itp.',
    ],
  },
  {
    type: 'montaz_rolek',
    header: 'Montaż rolek',
    description:
      'Montażem zajmuję się od niedawna, lecz jest to czynność, która sprawia mi przyjemność i chciałbym się trochę w niej rozwinąć. Narzędzie którego używam to DaVinci Resolve. Ze względu na moje małe doświadczenie chętnie wykonam dla Ciebie montaż pierwszej rolki za darmo jako demo moich umiejętności.',
    url: '/oferta/strony/singlepage',
    link: false,
    color: 'blue',
    list: ['Montaż rolek na instagrama', 'Montaż wideo na strony internetowe'],
  },
];

const GlobalOffer = () => {
  return (
    <div className={styles.container} id="offert">
      <H2About
        h2="Czym się zajmuję i jak mogę Ci pomóc?"
        about="W mojej ofercie znajdziesz usługi projektowania oraz tworzenia stron i sklepów internetowych, projektowania elementów graficznych oraz montażu rolek wideo.
Współpraca ze mną opiera się na bezpośredniej komunikacji i szczerości. Tworzę treści, które są praktyczne i efektywne oraz odpowiadają Twoim oczekiwaniom. Moja praca nie opiera się wyłącznie na wykonywaniu projektów. Moi klienci zawsze mogą liczyć na pomoc i edukację w zakresach, w których mogę się nią podzielić. Fundamentem mojej marki jest szczerość, dlatego jeżeli nie będę czuć się kompetentny do wykonania Twojego zlecenia na pewno Cię o tym poinformuję."
      />
      <div className={styles.rowBox}>
        {GLOBAL_OFFERT.map((offer, index) => (
          <OfferCardGlobal {...offer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GlobalOffer;
