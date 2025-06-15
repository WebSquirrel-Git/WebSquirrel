'use client';
import styles from './advantages.module.scss';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';

import AnalyzeIcon from '@/public/assets/icons/analyze-icon.svg';
import PersonIcon from '@/public/assets/icons/person-icon.svg';
import LoopIcon from '@/public/assets/icons/loop-icon.svg';
import PeopleIcon from '@/public/assets/icons/people-icon.svg';
const ADVANTAGES_DATA = [
  {
    header: 'DOSTĘPNOŚĆ 24/7',
    icon: VisibilityIcon,
    description:
      'Opis Twoich usług jest dostępny cały czas - nie tracisz klientów.',
  },
  {
    header: 'ROZPOZNAWALNOŚĆ',
    icon: MegaphoneIcon,
    description: 'Zwiększenie zasięgu i rozpoznawalności firmy.',
  },
  {
    header: 'NOWI KLIENCI',
    icon: PersonIcon,
    description: 'Większy zasięg to nowi klienci.',
  },
  {
    header: 'WIARYGODNOŚĆ',
    icon: TrustIcon,
    description:
      'Firmy ze stroną są częściej postrzegane jako bardziej wiarygodne.',
  },
  {
    header: 'CZAS',
    icon: ClockIcon,
    description:
      'Dobrze opisana oferta oszczędzi Ci czas na odbieranie telefonów i odpisywanie na wiadomości.',
  },
  {
    header: 'INWESTYCJA',
    icon: AnalyzeIcon,
    description:
      'Budowanie rozpoznawalności strony to długi proces - lepiej zacząć wcześniej.',
  },
  {
    header: 'ANALIZA',
    icon: LoopIcon,
    description:
      'Zyskujesz dostęp do analizy zachowań klientów, które mogą pomoc Ci w rozwoju.',
  },
  {
    header: 'INTEGRACJA',
    icon: PeopleIcon,
    description: 'Miejsce gdzie możesz przekierować ruch z różnych portali.',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className={styles.container}>
      <h2>Dlaczego potrzebujesz strony internetowej?</h2>
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

export default Advantages;
