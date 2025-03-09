'use client';
import styles from './hero.module.scss';
import ShieldLogo from '@/public/assets/logo/WebSquirrel-shield.svg';

export interface OffertHeroPropsType {
  subheader: string;
  title: string;
  price: string;
  description: string;
}

const Hero = ({subheader, title, price, description}: OffertHeroPropsType) => {
  return (
    <div className={styles.container}>
      <span className={styles.subHeader}>{subheader}</span>
      <h1>{title}</h1>
      <span className={styles.subHeader}>Cena:</span>
      <span className={`${styles.subHeader} ${styles.orange}`}>{price}</span>
      <p>{description}</p>
      <img className={styles.logoShield} src={ShieldLogo.src} />
    </div>
  );
};

export default Hero;
