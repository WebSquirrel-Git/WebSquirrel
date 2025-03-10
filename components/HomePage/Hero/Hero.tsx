'use client';
import styles from './hero.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-lg.svg';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <span className={styles.subHeader}>Hej! Fajnie Cię widzieć.</span>
        <h1>WebSquirrel</h1>
        <p>
          Jesteśmy firmą zajmującą się tworzeniem aplikacji internetowych, od
          prostych stron i sklepów do wymagających projektów dostosowanych do
          Waszych potrzeb.
        </p>
        <p>
          Dzień bez pogawędki z klientem to dzień stracony więc nie wahaj się i
          dzwoń.
        </p>
        <p className={styles.textOrange}>
          PS nie zapomnij sprawdzić naszej oferty poniżej.
        </p>
        <DefaultLink name="Sprawdź naszą ofertę" url="/#offerWebsites" />
      </div>
      <img className={styles.logo} src={Logo.src} />
    </div>
  );
};

export default Hero;
