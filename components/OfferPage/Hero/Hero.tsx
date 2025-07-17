'use client';
import styles from './hero.module.scss';
import DefaultLink from '@/components/Ui/Links/DefaultLink/DefaultLink';
import {StaticImageData} from 'next/image';
import dynamic from 'next/dynamic';

export interface OffertHeroPropsType {
  subheader: string;
  title: string;
  price: string;
  description: string;
  videoTitle: string;
  isMobile: boolean;
  imageMobile: StaticImageData;
}

const VideoContainer = dynamic(
  () => import('./VideoContainer/VideoContainer'),
  {
    ssr: true,
  }
);

const Hero = ({
  subheader,
  title,
  videoTitle,
  description,
  isMobile,
  imageMobile,
}: OffertHeroPropsType) => {
  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <span className={styles.subHeader}>{subheader}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <p className={styles.textOrange}>Konsultacje są darmowe więc ...</p>
          <DefaultLink name="Skontaktuj się" url="#contact" />
        </div>
        <img
          className={styles.logo}
          src={imageMobile.src}
          alt={title}
          title={title}
          width={837}
          height={845}
          loading="eager"
        />
        {!isMobile && <VideoContainer videoTitle={videoTitle} />}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.textBox}>
          <span className={styles.subHeader}>{subheader}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <p className={styles.textOrange}>Konsultacje są darmowe więc ...</p>
          <DefaultLink name="Skontaktuj się" url="#contact" />
        </div>
        <img
          className={styles.logo}
          src={imageMobile.src}
          alt={title}
          title={title}
          width={837}
          height={845}
          loading="eager"
        />
        <VideoContainer videoTitle={videoTitle} />
      </div>
    );
  }
};

export default Hero;
