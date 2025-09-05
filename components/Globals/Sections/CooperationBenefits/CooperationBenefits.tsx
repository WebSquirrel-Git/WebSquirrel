'use client';
import styles from './cooperationBenefits.module.scss';
import PhoneIcon from '@/public/assets/icons/phone-icon.svg';
import ToolIcon from '@/public/assets/icons/tool-icon.svg';
import BulbIcon from '@/public/assets/icons/bulb-orange-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';

import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import H2About from '@/components/Ui/Headers/H2About/H2About';
const ADVANTAGES_DATA = [
  {
    header: 'Bezpośredniość',
    icon: PhoneIcon,
    description:
      'Prowadzę jednoosobową firmę dlatego zawsze będziesz się kontaktować i rozmawiać ze mną.',
  },
  {
    header: 'Dopasowanie do klienta',
    icon: PersonIcon,
    description:
      'Jestem elastyczny i dopasuje się do Twojego czasu, oraz wysłucham i wdroże zaproponowane przez Ciebie pomysły.',
  },
  {
    header: 'Opieka nad projektem',
    icon: ClockIcon,
    description:
      'Po zakończonej realizacji możesz liczyć na moją pomoc, gwarancję i opiekę nad stroną.',
  },
  {
    header: 'Proste interfejsy',
    icon: AnalyzeIcon,
    description:
      'Narzędzia, które wykorzystuje bazują na prostych interfejsach do zarządzania treścią, z których Cię przeszkolę i będziesz mógł samodzielnie działać ze swoją stroną, sklepem czy szablonem graficznym.',
  },
  {
    header: 'Nowoczesne rozwiązania',
    icon: BulbIcon,
    description:
      'Pomogę Ci dobrać technologię, która będzie skalowalna i posiadała wsparcie w najbliższych latach.',
  },
  {
    header: 'Kompleksowość',
    icon: ToolIcon,
    description:
      'Przeprowadzam wdrożenia stron/sklepów od A do Z, wykonuje branding marki oraz w razie potrzeby montuje video na stronę. ',
  },
];

const CooperationBenefits = () => {
  return (
    <section id="cooperation" className={styles.container}>
      <H2About
        h2="Dlaczego WebSquirrel?"
        about="Współpraca z klientami pokazała mi jak wiele czasu zajmuje znalezienie specjalistów z różnych branż, którzy stworzą dla nich treści spójne z marką, rzetelnie i na czas. W celu zapewnienia jak najbardziej kompleksowej pomocy i rozwiązania tego problemu rozwijam swoje umiejętności i mogę Ci pomóc z stworzeniem brandingu marki, strony internetowej i szablonów do postów na SM w jednym spójnym stylu, dzięki czemu rozpoznawalność i postrzegalność Twojej marki będzie rosła, a Ty oszczędzisz czas na szukanie wykonawców."
      />
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
