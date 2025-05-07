'use client';
import styles from './hero.module.scss';
import ShieldLogo from '@/public/assets/logo/WebSquirrel-shield-article.svg';

export interface ArticleHeroPropsType {
  subheader: string;
  title: string;
  description: string;
}

const Hero = ({subheader, title, description}: ArticleHeroPropsType) => {
  return (
    <div className={styles.container}>
      <span className={styles.subHeader}>{subheader}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <img
        className={styles.logoShield}
        src={ShieldLogo.src}
        alt="logoShield"
        title="logoShield"
        width={144}
        height={171}
        loading="eager"
      />
    </div>
  );
};

export default Hero;
