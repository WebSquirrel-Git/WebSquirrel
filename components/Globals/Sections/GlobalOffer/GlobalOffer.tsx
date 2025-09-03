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
      'Tworzę strony internetowe dopasowane do potrzeb Twojej firmy, które mają konkretne cele i je realizują. Strony są tworzone na podstawie ustalonych celów z dostosowanym projektem graficznym i implementacją funkcji oraz narzędzi potrzebnych do ich zrealizowania.',
    url: '/oferta/strony-internetowe',
    link: true,
    color: 'orange',
    list: [
      'Wysoka wydajność',
      'Spójny i dopasowany projekt graficzny',
      'Łatwa edycja',
      'Optymalizacja pod wyszukiwarki',
      'Konfiguracja hostingu, SSL i e-mail',
      'Różnorodność wykonania',
      'Opieka po zakończonej realizacji',
    ],
  },
  {
    type: 'sklep_internetowy',
    header: 'Sklepy internetowe',
    description:
      'Wszystkie sklepy, które tworzę powstają na podstawie analizy Twojej marki, konkurencji oraz zachowań klientów. Sklepy są proste w obsłudze i pomagają zautomatyzować proces sprzedaży oraz obsługi klienta, co zwiększy efektywność pracy Twojej marki.',
    url: '/oferta/sklepy-internetowe',
    link: true,
    color: 'orange',
    list: [
      'Integracja z systemami płatności',
      'Integracja z kurierami',
      'Spójny i dopasowany projekt graficzny',
      'Łatwa edycja treści i produktów',
      'Optymalizacja pod wyszukiwarki',
      'Konfiguracja hostingu, SSL i e-mail',
      'Opieka po zakończonej realizacji',
    ],
  },
  {
    type: 'projekt_graficzny',
    header: 'Projekty graficzne',
    description:
      'Zajmuję się tworzeniem projektów graficznych związanych z prezentacją wizualną firmy, które zapewniają spójność stylu Twojej marki i zwiększają jej atrakcyjność z rozpoznawalnością.',
    url: '/oferta/strony/singlepage',
    link: false,
    color: 'blue',
    list: [
      'Brandbooki',
      'Modyfikacje logo',
      'Animacje internetowe',
      'Ulotki, banery, wizytówki',
      'Szablony postów na Instagram, Facebook, Linkedin',
    ],
  },
  {
    type: 'montaz_rolek',
    header: 'Montaż rolek',
    description:
      'Zmontuje dla Ciebie filmy instruktażowe, pokazowe na stronę lub proste rolki na Social Media, które będą nawiązywać do brandingu marki.',
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
        h2="Co mogę dla Ciebie zrobić?"
        about='Każdy projekt zaczyna się od opracowania strategii działania i ustalenia celów jakie strona lub sklep mają spełniać. Na tej podstawie stworzę dla Ciebie stronę lub sklep z funkcjonalnościami oraz projektem graficznym, który będzie współgrał z profilem Twojej marki oraz realizował cele projektowe ustalone na początku współpracy. W celu zapewnienia spójności wizualnej strony/sklepu z innymi formami prezentacji wizualnej firmy oferuję także tworzenie szablonów do postów na Social Media, ulotek, wizytówek, montażu rolek i innych usług wideo-graficznych.'
//         "W mojej ofercie znajdziesz usługi projektowania oraz tworzenia stron i sklepów internetowych, projektowania elementów graficznych oraz montażu rolek wideo.
// Współpraca ze mną opiera się na bezpośredniej komunikacji i szczerości. Tworzę treści, które są praktyczne i efektywne oraz odpowiadają Twoim oczekiwaniom. Moja praca nie opiera się wyłącznie na wykonywaniu projektów. Moi klienci zawsze mogą liczyć na pomoc i edukację w zakresach, w których mogę się nią podzielić. Fundamentem mojej marki jest szczerość, dlatego jeżeli nie będę czuć się kompetentny do wykonania Twojego zlecenia na pewno Cię o tym poinformuję."
      
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
