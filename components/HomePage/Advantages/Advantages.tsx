'use client';
import styles from './advantages.module.scss';
import VisibilityIcon from '@/public/assets/icons/eye-icon.svg';
import MegaphoneIcon from '@/public/assets/icons/megaphone-icon.svg';
import TrustIcon from '@/public/assets/icons/accessibility-icon.svg';
import ClockIcon from '@/public/assets/icons/stopwatch-icon.svg';

const ADVANTAGES_DATA = [
  {
    header: 'WIDOCZNOŚĆ',
    icon: VisibilityIcon,
    description:
      'Strona internetowa zapewnia Twojej marce stałą obecność online. Klienci mogą znaleźć Cię w dowolnym momencie. W dobie internetu, posiadanie strony jest podstawą do budowania obecności w sieci.',
  },
  {
    header: 'MARKETING',
    icon: MegaphoneIcon,
    description:
      'Strona internetowa stanowi potężne narzędzie marketingowe, które umożliwia dotarcie do szerszego grona odbiorców. SEO i treści online mogą przyciągnąć klientów szukających produktów lub usług, które oferujesz.',
  },
  {
    header: 'WIARYGODNOŚĆ',
    icon: TrustIcon,
    description:
      'Profesjonalnie zaprojektowana strona internetowa może znacząco podnieść postrzeganie Twojej marki oraz jej wiarygodność.',
  },
  {
    header: 'CZAS',
    icon: ClockIcon,
    description:
      'Dobrze napisana podstrona przedstawiająca opis czynności jaką będzie miał do wykonania klient może oszczędzić Twój czas, który będziesz musiał poświęcić na rozwiązanie jego problemu. ',
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className={styles.container}>
      <h2>Plusy strony internetowej</h2>
      <div className={styles.rowBox}>
        {ADVANTAGES_DATA.map((advantage, index) => (
          <div className={styles.advantageBox} key={index}>
            <div className={styles.advantageHeader}>
              <img src={advantage.icon.src} />
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
