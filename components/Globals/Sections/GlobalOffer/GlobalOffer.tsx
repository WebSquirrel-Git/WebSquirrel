'use client'
import H2About from '@/components/Ui/Headers/H2About/H2About'
import styles from './globalOffer.module.scss'
import OfferCardGlobal, { OfferCardPropsType } from '@/components/Ui/Cards/OfferGlobal/OfferCardGlobal';

const GLOBAL_OFFERT:OfferCardPropsType[] = [
  {
    type: 'strona_internetowa',
    header: 'Strony internetowe',
    description:
      'Wszystkie strony internetowe są tworzone na podstawie indywidualnie dopasowanego projektu graficznego. Strony są szybkie, estetyczne, responsywne i spełniają wymagania SEO. Standardowo zapewniam wdrożenie integracji z systemami Google jak Search Console czy Analytics.',
    url: '/oferta/strony/singlepage',
    link: true,
    color:'orange',
    list:['Strony wizytówki','Rozbudowane strony internetowe','Strony dla firm','Strony oparte na systemach CMS','Strony zrobione w NextJs']
  },
  {
     type: 'sklep_internetowy',
    header: 'Sklepy internetowe',
    description:
      'Wszystkie sklepy internetowe są tworzone na podstawie indywidualnie dopasowanego projektu graficznego. Sklepy są szybkie, estetyczne, responsywne, posiadają integracje płatności online i dostaw, obsługę powiadomień e-mail i wiele więcej. W celu szczegółowego zapoznania się z ofertą kliknij przycisk poniżej.',
    url: '/oferta/strony/singlepage',
    link: true,
    color:'orange',
    list:['Sklepy internetowe dla firm','Sklepy internetowe dla działalności nierejestrowanych','Integracja płatności online i dostaw','Strony oparte na systemach CMS']
  },
  {
        type: 'projekt_graficzny',
    header: 'Projekty graficzne',
    description:
      'Moim głównym narzędziem używanym do projektowania graficznego jest figma. Wykonam dla Ciebie zarówno Brandbooka marki jak i zmodyfikuję logo do formatu SVG z uwzględnieniem poprawek. Zajmuję się także tworzeniem animacji, które są lżejszą alternatywą dla typowych gifów na stronach.',
    url: '/oferta/strony/singlepage',
    link: true,
    color:'blue',
    list:['Brandbooki','Modyfikacje logo','Animacje HTML + CSS','Ulotki, banery, wizytówki itp.']
  },
  {
        type: 'montaz_rolek',
    header: 'Montaż rolek',
    description:
      'Montażem zajmuję się od niedawna, lecz jest to czynność, która sprawia mi przyjemność i chciałbym się trochę w niej rozwinąć. Narzędzie którego używam to DaVinci Resolve. Ze względu na moje małe doświadczenie chętnie wykonam dla Ciebie montaż pierwszej rolki za darmo jako demo moich umiejętności.',
    url: '/oferta/strony/singlepage',
    link: true,
    color:'blue',
    list:['Montaż rolek na instagrama','Montaż wideo na strony internetowe']
  },
];

const GlobalOffer =()=>{

    return <div className={styles.container}>
        <H2About h2='Czym się zajmuję i jak mogę Ci pomóc?' about='Współpraca ze mną opiera się na bezpośredniej komunikacji i szczerości. Tworzę treści, które są praktyczne i efektywne oraz odpowiadają Twoim oczekiwaniom. Moja praca nie opiera się wyłącznie na wykonywaniu projektów. Moi klienci zawsze mogą liczyć na pomoc i edukację w zakresach, w których mogę się nią podzielić. Fundamentem mojej marki jest szczerość, dlatego jeżeli nie będę czuć się kompetentny do wykonania Twojego zlecenia na pewno Cię o tym poinformuję.'/>
    <div className={styles.rowBox}>
{GLOBAL_OFFERT.map((offer,index)=><OfferCardGlobal {...offer} key={index}/>)}
    </div>
    </div>
}

export default GlobalOffer