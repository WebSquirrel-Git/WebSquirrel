'use client';
import styles from './cooperationBenefits.module.scss';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import BulbIcon from '@/public/assets/icons/bulb-orange-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';

import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import H2About from '@/components/Ui/Headers/H2About/H2About';
const ADVANTAGES_DATA = [
  {
    header: 'Bezpośredniość',
    icon: VisibilityIcon,
    description:
      'Możesz do mnie napisać, zadzwonić lub umówić się na spotkanie online f2f.',
  },
  {
    header: 'Szczerość',
    icon: PersonIcon,
    description: 'Moja współpraca opiera się na transparentności. Zawsze Cie poinformuję czy jestem w stanie wykonać zleconą przez Ciebie usługę i jak wyceniłem projekt.',
  },
  {
    header: 'Dostępność',
    icon: ClockIcon,
    description: 'Jestem zawsze dostępny dla moich klientów. Jeżeli powstaną jakieś problemy podczas edycji strony możesz liczyć na moją szybką pomoc.',
  },
  {
    header: 'Ciągły rozwój',
    icon: AnalyzeIcon,
    description:
      'Branża w której świadczę usługi jest bardzo dynamiczna co wymaga ciągłej nauki i podnoszenia umiejętności. Stawiam na rozwój dlatego zawsze będziesz na czasie z nowymi rozwiązaniami i trendami.',
  },
  {
    header: 'Nauka',
    icon: BulbIcon,
    description:
      'Współpraca ze mną opiera się także na edukowaniu Ciebie w kwestiach obsługi strony czy podsuwaniu pomysłów na rzeczy, które pomogą rozwinąć Twoją firmę. Prowadzę także sekcje artykułów gdzie dzielę się swoją wiedzą.',
  },
  {
    header: 'Kompleksowość',
    icon: ToolIcon,
    description:
      'Działam na kilku płaszczyznach, które znacznie przyspieszają tempo prac i nie wymuszają na Tobie konieczności zatrudnienia montażysty, grafika, webdevelopera i specjalisty SEO. Zajmę się tym wszystkim we współpracy z Tobą.',
  }
];

const CooperationBenefits = () => {
  return (
    <section id="cooperation" className={styles.container}>
      <H2About h2='Zastanawiasz się nad współpracą ze mną?' about='Podam Ci kilka rzeczy, które doceniają moi klienci we współpracy ze mną.'/>
      <div className={styles.rowBox}>
        {ADVANTAGES_DATA.map((advantage, index) => (
          <div className={styles.advantageBox} key={index}>
            <div className={styles.advantageHeader}>
              <img
                src={advantage.icon.src}
                alt={`${advantage.header.toLowerCase()}Icon`}
                title={`${advantage.header.toLowerCase()}Icon`}
                width={101}
                height={101}
                loading="eager"
              />
              <h3>{advantage.header}</h3>
            </div>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CooperationBenefits;
