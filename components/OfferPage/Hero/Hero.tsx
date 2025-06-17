'use client';
import styles from './hero.module.scss';
import Logo from '@/public/assets/logo/WebSquirrel-logo-lg.svg';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import VideoContainer from './VideoContainer/VideoContainer';
import {useEffect, useState} from 'react';

export interface OffertHeroPropsType {
  subheader: string;
  title: string;
  price: string;
  description: string;
  videoTitle: string;
}
const Hero = ({
  subheader,
  title,
  videoTitle,
  description,
}: OffertHeroPropsType) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mobile = window.innerWidth <= 1250;
    setIsMobile(mobile);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <span className={styles.subHeader}>{subheader}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <p className={styles.textOrange}>Konsultacje są darmowe więc ...</p>
        <DefaultLink name="Skontaktuj się" url="/#contact" />
      </div>
      {isMobile && (
        <img
          className={styles.logo}
          src={Logo.src}
          alt="websquirrelLogo"
          title="websquirrelLogo"
          width={837}
          height={845}
          loading="eager"
        />
      )}
      {!isMobile && <VideoContainer videoTitle={videoTitle} />}
    </div>
  );
};

export default Hero;
